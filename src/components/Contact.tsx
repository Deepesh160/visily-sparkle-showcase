import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Building
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      role: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      detail: "hello@herbtrust.com",
      subdtail: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      subdtail: "Mon-Fri, 9:00 AM - 6:00 PM EST"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      detail: "123 Wellness Street",
      subdtail: "New York, NY 10001"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      detail: "Monday - Friday",
      subdtail: "9:00 AM - 6:00 PM EST"
    }
  ];

  const userTypes = [
    { icon: <Users className="w-4 h-4" />, value: "farmer", label: "Farmer" },
    { icon: <Building className="w-4 h-4" />, value: "manufacturer", label: "Manufacturer" },
    { icon: <MessageSquare className="w-4 h-4" />, value: "consumer", label: "Consumer" },
    { icon: <Building className="w-4 h-4" />, value: "enterprise", label: "Enterprise" }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-primary">Supply Chain?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team to learn how HerbTrust can bring transparency 
            and trust to your herb supply chain.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're a farmer, manufacturer, or consumer, we're here to help you 
                understand how blockchain technology can improve herb traceability.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-foreground mb-1">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">{info.subdtail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                    <Button key={social} variant="outline" size="sm">
                      {social}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">I am a *</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {userTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              {type.icon}
                              {type.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us more about your needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;