import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 text-white">🌿</div>
              </div>
              <h1 className="text-3xl font-bold text-primary">AyurTrace</h1>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Blockchain-Powered
                <span className="block text-primary">Herb Traceability</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Ensure transparency and trust in every herb's journey from farm to consumer. 
                Track authentic Ayurvedic herbs with complete supply chain visibility.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">1000+ Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Real-time Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-up">
            <Card className="shadow-strong bg-gradient-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Organic medicinal herb garden with various Ayurvedic plants"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Floating Status Cards */}
                  <div className="absolute top-6 left-6 animate-scale-in">
                    <Card className="bg-background/95 backdrop-blur-sm shadow-medium">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-verified rounded-full animate-pulse" />
                          <div>
                            <p className="text-sm font-medium">Ashwagandha Batch A</p>
                            <p className="text-xs text-muted-foreground">Verified & Tracked</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute bottom-6 right-6 animate-scale-in delay-200">
                    <Card className="bg-background/95 backdrop-blur-sm shadow-medium">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-pending rounded-full animate-pulse" />
                          <div>
                            <p className="text-sm font-medium">Turmeric Roots</p>
                            <p className="text-xs text-muted-foreground">Processing</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;