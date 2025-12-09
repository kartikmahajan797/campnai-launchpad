import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Campnai reduced our influencer campaign setup time from weeks to hours. The AI matching is incredibly accurate.",
      author: "Sarah Chen",
      role: "Head of Marketing",
      company: "TechVentures",
      rating: 5,
    },
    {
      quote: "We've seen a 3x improvement in campaign ROI since switching to Campnai. The automated negotiations alone saved us thousands.",
      author: "Marcus Johnson",
      role: "Growth Lead",
      company: "ScaleUp Inc",
      rating: 5,
    },
    {
      quote: "Finally, an influencer platform that actually understands our brand. The creator matches are spot-on every time.",
      author: "Emily Rodriguez",
      role: "Brand Director",
      company: "NovaBrand",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Loved by <span className="gradient-text">marketing teams</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See why leading brands choose Campnai for their influencer campaigns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 hover-lift flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 flex items-center justify-center">
                  <span className="font-display font-semibold text-foreground">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
