import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // For now, we'll just show a success message
      // The actual Airtable integration will need API credentials
      console.log('Form data to send:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="relative max-w-md mx-auto">
      {/* Orange header with darker drop shadow, positioned to overlap 75% */}
      <div className="bg-[#F48487] text-white text-center py-3 sm:py-4 px-4 sm:px-6 rounded-sm shadow-[0_4px_8px_rgba(0,0,0,0.4)] relative z-10 mx-3 sm:mx-6 mb-2">
        <h3 className="font-sybarite text-lg sm:text-xl font-bold">Contact Us</h3>
      </div>
      
      {/* White form card with larger border radius */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 pt-12 sm:pt-14 lg:pt-16 -mt-12 sm:-mt-14">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input name="name" type="text" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-gray-500 focus:ring-0 placeholder:text-gray-400" />
            </div>
            <div className="space-y-2">
              <Input name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-gray-500 focus:ring-0 placeholder:text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Input name="subject" type="text" placeholder="Subject" required value={formData.subject} onChange={handleInputChange} className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-gray-500 focus:ring-0 placeholder:text-gray-400" />
          </div>

          <div className="space-y-2">
            <Textarea name="message" placeholder="Your Message" required rows={6} value={formData.message} onChange={handleInputChange} className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 pb-2 focus:border-gray-500 focus:ring-0 placeholder:text-gray-400 resize-none" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-[#F48487] hover:bg-[#f37579] text-white font-bold py-3 px-8 rounded-full transition-colors mt-8">
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </Button>
        </form>
      </div>
    </div>;
};
export default ContactForm;
