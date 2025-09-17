import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  Zap, 
  Users, 
  Database, 
  CheckCircle,
  Globe,
  Leaf,
  QrCode
} from "lucide-react";
import blockchainImage from "@/assets/blockchain-network.jpg";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Immutable records ensure data integrity and prevent tampering throughout the supply chain.",
      color: "verified"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Complete Transparency",
      description: "Track every step from seed to shelf with detailed documentation and verification.",
      color: "processed"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Get instant updates on batch status, location, and quality assessments.",
      color: "pending"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-stakeholder Platform", 
      description: "Connect farmers, manufacturers, and consumers in one unified ecosystem.",
      color: "verified"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Digital certificates and lab reports ensure herb authenticity and purity.",
      color: "processed"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Verification System",
      description: "Multi-level verification process with automated and manual quality checks.",
      color: "pending"
    }
  ];

  const stats = [
    { number: "1000+", label: "Verified Farmers", icon: <Users className="w-5 h-5" /> },
    { number: "50+", label: "Herb Varieties", icon: <Leaf className="w-5 h-5" /> },
    { number: "10,000+", label: "Batches Tracked", icon: <QrCode className="w-5 h-5" /> },
    { number: "25+", label: "Countries", icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionizing Herb <span className="text-primary">Traceability</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our blockchain-powered platform provides unprecedented transparency 
            and trust in the Ayurvedic herb supply chain.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="herb-card shadow-soft hover:shadow-medium"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center text-${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual Content */}
          <div className="relative animate-fade-in">
            <Card className="shadow-strong bg-gradient-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={blockchainImage}
                    alt="Blockchain network visualization showing connected nodes for herb traceability"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Card className="bg-background/95 backdrop-blur-sm shadow-strong max-w-sm">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">100% Secure</h3>
                        <p className="text-sm text-muted-foreground">
                          Every transaction is cryptographically secured and distributed across the blockchain network.
                        </p>
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

export default Features;