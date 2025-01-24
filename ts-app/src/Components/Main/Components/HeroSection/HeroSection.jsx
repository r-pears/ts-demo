function HeroSection({ title, subtitle, className, ctaText, onCtaClick }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button onClick={onCtaClick}>{ctaText}</button>
    </section>
  );
}

export default HeroSection;
