import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  onOpenContact: () => void;
}

const Contact = ({ onOpenContact }: ContactProps) => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-mono text-sm">// Let's Connect</span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Have a project in
                <span className="text-gradient"> mind?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
            </div>

            <Button variant="glow" size="lg" className="group" onClick={onOpenContact}>
              <Mail className="w-5 h-5" />
              Send me a message
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Right column - Info cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:justinmarkdaniel@gmail.com"
                    className="font-mono hover:text-primary transition-colors"
                  >
                    justinmarkdaniel@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-mono">Central Coast, NSW, Australia</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="font-mono">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
