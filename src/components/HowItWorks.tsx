import { Check, ArrowDown } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set Up Your Campaign",
      description: "Define your goals, target audience, and budget. Our AI understands your brand voice from day one.",
      tasks: ["Upload brand assets", "Set campaign objectives", "Define target demographics"],
    },
    {
      number: "02",
      title: "AI Matches Creators",
      description: "Our LLM analyzes millions of creators to find authentic matches based on content, not just follower counts.",
      tasks: ["Deep content analysis", "Audience alignment scoring", "Brand safety verification"],
    },
    {
      number: "03",
      title: "Review & Approve",
      description: "You're always in control. Review creator matches, approve outreach, and finalize collaborations.",
      tasks: ["Curated creator lists", "One-click approvals", "Custom contract terms"],
    },
    {
      number: "04",
      title: "Track & Optimize",
      description: "Watch your campaign perform in real-time. AI continuously optimizes for better results.",
      tasks: ["Live performance dashboards", "Automated reporting", "ROI tracking"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            How <span className="gradient-text">Campnai</span> works
          </h2>
          <p className="text-muted-foreground text-lg">
            From setup to results in four simple steps. You focus on strategy, we handle execution.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="glass-card p-8 md:p-10 hover-lift">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <span className="font-display font-bold text-5xl md:text-6xl gradient-text opacity-60">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-2xl mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Task List */}
                    <div className="flex flex-wrap gap-3">
                      {step.tasks.map((task) => (
                        <div
                          key={task}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="w-6 h-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
