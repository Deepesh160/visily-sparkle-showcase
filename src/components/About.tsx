import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Target, Heart } from "lucide-react";
import herbsImage from "@/assets/herbs-collection.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Authenticity",
      description: "Ensuring genuine Ayurvedic herbs reach consumers through verified supply chains."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Transparency",
      description: "Complete visibility from farm to consumer with blockchain-verified documentation."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trust",
      description: "Building confidence through immutable records and quality assurance processes."
    }
  ];

  const milestones = [
    { year: "2023", title: "Platform Launch", desc: "Initial blockchain infrastructure" },
    { year: "2024", title: "Farmer Network", desc: "1000+ verified organic farmers" },
    { year: "2024", title: "Global Expansion", desc: "Operations in 25+ countries" },
    { year: "2025", title: "AI Integration", desc: "Smart quality prediction systems" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">About HerbTrust</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Bridging Ancient Wisdom with <span className="text-primary">Modern Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            HerbTrust combines the time-tested benefits of Ayurvedic herbs with cutting-edge blockchain 
            technology to create the world's most trusted herb traceability platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the power of authentic Ayurvedic herbs to heal and restore wellness. 
                Our mission is to ensure that every herb's journey from soil to shelf is transparent, 
                verified, and trustworthy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By leveraging blockchain technology, we create an immutable record of each herb's 
                origin, cultivation methods, processing, and quality testing, giving consumers 
                complete confidence in their wellness choices.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-6">Our Core Values</h4>
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{value.title}</h5>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Our Technology
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Visual Content */}
          <div className="relative animate-fade-in">
            <Card className="shadow-strong bg-gradient-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={herbsImage}
                    alt="Collection of authentic Ayurvedic herbs including turmeric, neem, ashwagandha, and tulsi"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  
                  {/* Floating Info Cards */}
                  <div className="absolute top-6 right-6 animate-scale-in">
                    <Card className="bg-background/95 backdrop-blur-sm shadow-medium">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">50+</div>
                          <div className="text-sm text-muted-foreground">Verified Herbs</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute bottom-6 left-6 animate-scale-in delay-200">
                    <Card className="bg-background/95 backdrop-blur-sm shadow-medium">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                          <div className="text-sm text-muted-foreground">Purity Guarantee</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h4 className="font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;