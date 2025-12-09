const TrustedBy = () => {
  const brands = [
    "TechCorp", "AIFlow", "DataSync", "CloudNine", "NeuralHub", "QuantumLab"
  ];

  return (
    <section className="py-20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
