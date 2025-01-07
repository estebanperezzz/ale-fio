import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "@/components/ui/animated-button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmationModal({ isOpen, onClose }: ConfirmationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState<string | null>(null);
  const [specialDiet, setSpecialDiet] = useState('');
  const [reason, setReason] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message
    let message = `*Confirmación de asistencia casamiento Ale y Fio* ❤️\nNombre: ${name}\nCelular: ${phone}\n`;
    message += attendance === 'attending'
      ? `Confirma asistencia: Sí🥳\nComidas especiales: ${specialDiet || 'Ninguna'}`
      : `Confirma asistencia: No😔\nMotivo: ${reason}`;

    setConfirmationMessage(message);
    setShowConfirmation(true);
  };

  const sendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent(confirmationMessage);
    const whatsappNumber = '59897971266';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirmación de Asistencia</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nombre y Apellido</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="phone">Celular</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <RadioGroup value={attendance || ''} onValueChange={setAttendance}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="attending" id="attending" />
                <Label htmlFor="attending">Confirmo asistencia</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not-attending" id="not-attending" />
                <Label htmlFor="not-attending">No puedo participar</Label>
              </div>
            </RadioGroup>
            {attendance === 'attending' && (
              <div>
                <Label htmlFor="specialDiet">Comidas Especiales (opcional)</Label>
                <Textarea 
                  id="specialDiet" 
                  value={specialDiet} 
                  onChange={(e) => setSpecialDiet(e.target.value)}
                  placeholder="Ej: Vegetariano, diabético, hipertenso, etc."
                />
              </div>
            )}
            {attendance === 'not-attending' && (
              <div>
                <Label htmlFor="reason">Motivo (opcional)</Label>
                <Textarea 
                  id="reason" 
                  value={reason} 
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="¿Por qué no puedes asistir?"
                />
              </div>
            )}
            <DialogFooter>
              <AnimatedButton type="submit" className="w-full" disabled={!attendance}>
                Confirmar
              </AnimatedButton>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar envío</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de que quieres enviar la siguiente información?
              <pre className="mt-2 whitespace-pre-wrap">{confirmationMessage}</pre>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={sendWhatsAppMessage}>Enviar por WhatsApp</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

