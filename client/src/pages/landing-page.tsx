import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Globe, ArrowRight, BarChart3 } from "lucide-react";
import { Navbar, Footer } from "@/components/layout";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_tech_hero_background_with_connecting_shapes.png";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10 animate-in slide-in-from-left-5 duration-700">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border-primary/20">
                New v2.0 is live →
              </Badge>
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight">
                Connect your ideas to <span className="text-primary">reality</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                The all-in-one platform to build, scale, and manage your next big project. 
                Designed for modern teams who move fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/auth">
                  <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  View Demo
                </Button>
              </div>
              <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ developers</p>
              </div>
            </div>
            
            <div className="relative z-0 animate-in fade-in zoom-in-95 duration-1000 delay-200">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-50" />
              <img 
                src={heroImage} 
                alt="Platform Preview" 
                className="relative rounded-2xl shadow-2xl border border-border/50 object-cover w-full aspect-[4/3] transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Everything you need to scale</h2>
            <p className="text-muted-foreground text-lg">
              Powerful features packaged in a beautiful interface. No configuration required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-yellow-500" />}
              title="Lightning Fast"
              description="Optimized for speed. Our edge network delivers content in milliseconds, globally."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-blue-500" />}
              title="Enterprise Security"
              description="Bank-grade encryption, SSO, and compliance features built right into the core."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6 text-green-500" />}
              title="Real-time Analytics"
              description="Track user behavior, revenue, and conversion metrics with our detailed dashboard."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-purple-500" />}
              title="Global Scale"
              description="Deploy to 35+ regions with a single click. Automatic scaling handled for you."
            />
            <FeatureCard 
              icon={<ArrowRight className="h-6 w-6 text-pink-500" />}
              title="Seamless Integration"
              description="Connect with your favorite tools. Slack, GitHub, Linear, and more supported out of the box."
            />
            <FeatureCard 
              icon={<Check className="h-6 w-6 text-teal-500" />}
              title="99.99% Uptime"
              description="Reliability you can count on. We guarantee your service stays up, no matter what."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground">Choose the plan that's right for you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Starter" 
              price="$0" 
              features={["1 User", "5 Projects", "Community Support", "Basic Analytics"]} 
            />
            <PricingCard 
              title="Pro" 
              price="$29" 
              isPopular 
              features={["Unlimited Users", "Unlimited Projects", "Priority Support", "Advanced Analytics", "Custom Domain"]} 
            />
            <PricingCard 
              title="Enterprise" 
              price="Custom" 
              features={["Dedicated Success Manager", "SLA", "SSO & Audit Logs", "On-premise Deployment"]} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to get started?</h2>
          <p className="text-primary-foreground/80 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of teams building the future with Connect. Start your free trial today.
          </p>
          <Link href="/auth">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-semibold shadow-xl">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function PricingCard({ title, price, features, isPopular }: { title: string, price: string, features: string[], isPopular?: boolean }) {
  return (
    <Card className={cn(
      "relative flex flex-col",
      isPopular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-muted-foreground">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          Choose {title}
        </Button>
      </CardFooter>
    </Card>
  );
}
