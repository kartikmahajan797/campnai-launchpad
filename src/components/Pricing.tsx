import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams just getting started with influencer marketing.",
      features: [
        "Up to 50 creator matches/month",
        "Basic AI outreach",
        "Email support",
        "Campaign analytics",
        "1 team member",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "149",
      description: "For growing teams that need more power and automation.",
      features: [
        "Up to 500 creator matches/month",
        "Advanced AI negotiations",
        "Priority support",
        "Real-time analytics",
        "5 team members",
        "Custom workflows",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs.",
      features: [
        "Unlimited creator matches",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Unlimited team members",
        "White-label options",
        "SLA guarantee",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card p-8 hover-lift flex flex-col ${
                plan.popular ? "border-primary/50 ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500 text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  {plan.price === "Custom" ? (
                    <span className="font-display font-bold text-4xl text-foreground">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="text-muted-foreground text-lg">$</span>
                      <span className="font-display font-bold text-4xl text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
