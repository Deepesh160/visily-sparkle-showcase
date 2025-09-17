import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Menu, 
  X,
  User,
  ChevronDown
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const userRoles = [
    { name: "Farmer", desc: "Track your herb batches" },
    { name: "Manufacturer", desc: "Verify supply chain" },
    { name: "Consumer", desc: "Check herb authenticity" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-medium border-b" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("#")}>
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">AyurTrace</h1>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* User Role Dropdown */}
            <div className="relative group">
              <Button variant="outline" size="sm" className="group-hover:bg-accent">
                <User className="w-4 h-4" />
                Sign In
                <ChevronDown className="w-4 h-4" />
              </Button>
              
              {/* Dropdown Content */}
              <Card className="absolute top-full right-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-strong z-50">
                <CardContent className="p-0">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-sm mb-1">Choose Your Role</h3>
                    <p className="text-xs text-muted-foreground">Access role-specific features</p>
                  </div>
                  <div className="p-2">
                    {userRoles.map((role) => (
                      <button
                        key={role.name}
                        className="w-full text-left p-3 rounded-md hover:bg-accent transition-colors"
                      >
                        <div className="font-medium text-sm">{role.name}</div>
                        <div className="text-xs text-muted-foreground">{role.desc}</div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-primary">AyurTrace</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-6">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left p-3 rounded-lg transition-colors ${
                        link.active 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                {/* Mobile User Roles */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm px-3">Sign In As</h3>
                  {userRoles.map((role) => (
                    <Card key={role.name} className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="font-medium text-sm mb-1">{role.name}</div>
                        <div className="text-xs text-muted-foreground">{role.desc}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="pt-6 border-t">
                  <Button variant="hero" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;