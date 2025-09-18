import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Users, Building, ShoppingCart, Shield } from "lucide-react";

const LoginPreview = () => {
  const [selectedRole, setSelectedRole] = useState("farmer");

  const roles = [
    {
      id: "farmer",
      label: "Farmer",
      icon: <Leaf className="w-5 h-5" />,
      description: "Track and manage your herb batches",
      features: ["Batch Registration", "Quality Documentation", "Harvest Tracking"]
    },
    {
      id: "manufacturer", 
      label: "Manufacturer",
      icon: <Building className="w-5 h-5" />,
      description: "Verify and process herb supplies",
      features: ["Supply Verification", "Processing Records", "Quality Control"]
    },
    {
      id: "consumer",
      label: "Consumer", 
      icon: <ShoppingCart className="w-5 h-5" />,
      description: "Verify herb authenticity and origin",
      features: ["Product Verification", "Origin Tracking", "Quality Reports"]
    }
  ];

  const getRoleData = (roleId: string) => {
    return roles.find(role => role.id === roleId) || roles[0];
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Platform Access</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Role-Based <span className="text-primary">Dashboard Access</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Each stakeholder gets a customized interface designed for their specific needs in the supply chain.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <Card className="shadow-strong animate-slide-up">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">HerbTrust</h3>
                </div>
                <CardTitle className="text-xl">Welcome Back</CardTitle>
                <p className="text-muted-foreground">
                  Sign in to access your dashboard and manage traceability.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">I am a</Label>
                  <Tabs value={selectedRole} onValueChange={setSelectedRole} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      {roles.map((role) => (
                        <TabsTrigger key={role.id} value={role.id} className="flex items-center gap-2">
                          {role.icon}
                          <span className="hidden sm:inline">{role.label}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {/* Role-specific content */}
                    {roles.map((role) => (
                      <TabsContent key={role.id} value={role.id} className="mt-4">
                        <Card className="border-primary/20 bg-primary/5">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                {role.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">{role.label} Dashboard</h4>
                                <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {role.features.map((feature, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@herbtrust.com"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <Button variant="hero" size="lg" className="w-full">
                  Log In as {getRoleData(selectedRole).label}
                </Button>

                {/* Register Link */}
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Button variant="link" className="p-0 h-auto font-medium">
                    Register
                  </Button>
                </p>

                {/* Trust Message */}
                <Card className="bg-muted/50 border-0">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="text-muted-foreground">
                          HerbTrust leverages blockchain to ensure{" "}
                          <span className="font-medium text-foreground">transparency</span> and{" "}
                          <span className="font-medium text-foreground">trust</span> in every herb's 
                          journey from farm to consumer.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Dashboard Preview */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {getRoleData(selectedRole).icon}
                    {getRoleData(selectedRole).label} Dashboard Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedRole === "farmer" && (
                    <>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">🌿</div>
                            <div>
                              <p className="font-medium text-sm">Ashwagandha Batch A</p>
                              <p className="text-xs text-muted-foreground">AYUR-ASH-001-2023</p>
                            </div>
                          </div>
                          <Badge className="status-verified text-xs">Verified</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">🧄</div>
                            <div>
                              <p className="font-medium text-sm">Turmeric Roots</p>
                              <p className="text-xs text-muted-foreground">AYUR-TUR-002-2023</p>
                            </div>
                          </div>
                          <Badge className="status-pending text-xs">Pending</Badge>
                        </div>
                      </div>
                      <Button variant="default" size="sm" className="w-full">
                        <Users className="w-4 h-4" />
                        Add New Batch
                      </Button>
                    </>
                  )}

                  {selectedRole === "manufacturer" && (
                    <>
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center">3</div>
                          <p className="text-sm font-medium">Batches pending verification</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">AYUR-BATCH-2024-001</p>
                            <p className="text-xs text-muted-foreground">Green Valley Farms</p>
                          </div>
                          <Button variant="verified" size="sm" className="text-xs">
                            Verify Batch
                          </Button>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedRole === "consumer" && (
                    <>
                      <div className="p-4 bg-muted/50 rounded-lg text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <ShoppingCart className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Scan Product QR Code</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Verify the authenticity and trace the complete journey of your herbs
                        </p>
                        <Button variant="outline" size="sm">
                          Start Scanning
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPreview;