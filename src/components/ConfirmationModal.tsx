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
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-r from-[#445F51] to-[#4E6E5D] border-none">
          <DialogHeader>
            <DialogTitle className='text-white text-2xl italic'>Confirmación de Asistencia</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className='text-white font-semibold'>Nombre y Apellido</Label>
              <Input id="name" className='bg-white text-[#4e6e5d]' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="phone" className='text-white font-semibold'>Celular</Label>
              <Input id="phone" className='bg-white text-[#4e6e5d]' value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <RadioGroup value={attendance || ''} onValueChange={setAttendance}>
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="attending" id="attending"/>
                <Label htmlFor="attending" className='text-sm font-semibold text-white'>Confirmo asistencia</Label>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <RadioGroupItem value="not-attending" id="not-attending" />
                <Label htmlFor="not-attending" className='text-sm font-semibold text-white'>No puedo participar</Label>
              </div>
            </RadioGroup>
            {attendance === 'attending' && (
              <div>
                <Label htmlFor="specialDiet" className='text-white font-semibold'>Comidas Especiales (opcional)</Label>
                <Textarea 
                  id="specialDiet" 
                  value={specialDiet} 
                  onChange={(e) => setSpecialDiet(e.target.value)}
                  placeholder="Ej: Vegetariano, diabético, hipertenso, etc."
                  className='placeholder:text-[#4e6e5d] bg-white'
                />
              </div>
            )}
            {attendance === 'not-attending' && (
              <div>
                <Label htmlFor="reason" className='text-white font-semibold'>Motivo (opcional)</Label>
                <Textarea 
                  id="reason" 
                  value={reason} 
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="¿Por qué no puedes asistir?"
                  className='placeholder:text-[#4e6e5d] bg-white'
                />
              </div>
            )}
            <DialogFooter>
              <AnimatedButton type="submit" className="w-full bg-[#EEEEEE] hover:bg-[#D9D9D9] text-[#4E6E5D] mt-10 rounded-full shadow-xl text-xl h-full font-semibold" disabled={!attendance}>
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

