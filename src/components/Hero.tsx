import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/20 via-blue-500/15 to-purple-500/20 blur-3xl animate-pulse-glow" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 left-[15%] w-3 h-3 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-1/2 right-[20%] w-2 h-2 rounded-full bg-accent/40 animate-float animation-delay-200" />
        <div className="absolute bottom-1/3 left-[25%] w-4 h-4 rounded-full bg-blue-500/30 animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Campaign Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up animation-delay-200">
            Your AI Partner for{" "}
            <span className="gradient-text">Smarter Marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-400">
            Campnai automates influencer discovery, outreach, negotiations, and campaign tracking. 
            Focus on strategy while AI handles the execution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-600">
            <Button variant="hero" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up animation-delay-600">
            {[
              { value: "5M+", label: "Creators" },
              { value: "140+", label: "Countries" },
              { value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative animate-fade-up animation-delay-600">
          <div className="glass-card p-2 md:p-3 rounded-2xl md:rounded-3xl max-w-5xl mx-auto glow-effect">
            <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden aspect-video relative">
              {/* Dashboard Preview Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-card p-6">
                <div className="h-full flex flex-col gap-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="h-6 w-48 rounded-lg bg-secondary/50" />
                    <div className="w-8 h-8 rounded-lg bg-primary/20" />
                  </div>
                  
                  {/* Content Grid */}
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-secondary/30 rounded-xl p-4 space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-8 rounded-lg ${i === 0 ? 'bg-primary/30' : 'bg-secondary/50'}`} />
                      ))}
                    </div>
                    
                    {/* Main Content */}
                    <div className="col-span-3 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="bg-secondary/30 rounded-xl p-4 h-24">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 mb-2" />
                            <div className="h-3 w-16 bg-muted rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="bg-secondary/30 rounded-xl p-4 flex-1 h-40">
                        <div className="flex items-end gap-2 h-full">
                          {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <div 
                              key={i} 
                              className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-lg"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
