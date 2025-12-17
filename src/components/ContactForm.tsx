import { useState, useRef } from "react";
import { X, Send, Paperclip, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    // Check honeypot
    if (formData.get("website")) {
      // Bot detected, silently fail
      setIsSubmitting(false);
      return;
    }

    try {
      // Using FormSubmit.co for email handling (free service)
      const response = await fetch("https://formsubmit.co/ajax/justinmarkdaniel@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onOpenChange(false);
          setIsSuccess(false);
          setFileName(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-medium">Message sent successfully!</p>
            <p className="text-muted-foreground">I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="hidden" name="_template" value="table" />

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={4}
                className="bg-secondary/50 border-border focus:border-primary resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachment">Attachment (optional)</Label>
              <div
                className="border border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors bg-secondary/30"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                />
                <Paperclip className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                {fileName ? (
                  <p className="text-sm text-primary">{fileName}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Click to upload a file
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="glow"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>

            {/* Direct contact info */}
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Or reach out directly:
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:justinmarkdaniel@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  justinmarkdaniel@gmail.com
                </a>
                <a
                  href="https://wa.me/61439512550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +61 439 512 550
                </a>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Brisbane, QLD, Australia
                </p>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
