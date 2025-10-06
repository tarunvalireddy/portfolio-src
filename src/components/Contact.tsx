import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tarunvalireddyy@gmail.com",
      href: "mailto:tarunvalireddyy@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9441375906",
      href: "tel:+919441375906",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vizianagaram, Andhra Pradesh",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tarunvalireddy",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/tarunvalireddy",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="gradient-card p-8 md:p-12 rounded-xl border border-border card-shadow">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or DevOps projects. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-secondary/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center group"
                  >
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-6">
              <h4 className="text-lg font-semibold">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      onClick={() => window.open(social.href, "_blank")}
                      variant="outline"
                      size="lg"
                      className={`border-primary/50 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {social.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Tarun Valireddy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
