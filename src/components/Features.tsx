import { 
  Search, 
  MessageSquare, 
  FileCheck, 
  BarChart3, 
  Shield, 
  Zap 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Discovery",
      description: "Find the perfect creators using LLM-powered matching that understands your brand, not just keywords.",
    },
    {
      icon: MessageSquare,
      title: "Automated Outreach",
      description: "Send personalized collaboration invites at scale. AI crafts messages that convert.",
    },
    {
      icon: FileCheck,
      title: "Smart Negotiations",
      description: "Get fair pricing automatically. Our AI benchmarks rates and negotiates on your behalf.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track campaign performance with live dashboards. Know your ROI instantly.",
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "AI monitors content for brand alignment. Get alerts before issues arise.",
    },
    {
      icon: Zap,
      title: "Instant Scaling",
      description: "Launch campaigns across 140+ countries. No manual work required.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Everything you need,{" "}
            <span className="gradient-text">automated</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From discovery to reporting, Campnai handles the entire influencer marketing workflow so you can focus on what matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
