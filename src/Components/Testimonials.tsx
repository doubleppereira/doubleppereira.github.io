interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  if (!testimonials?.length) return null;

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header reveal">
        <span className="section-number">05 — Testimonials</span>
        <h2>Kind words</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`testimonial-card reveal reveal-delay-${i}`}
          >
            <div className="testimonial-quote">{t.description}</div>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-pos">{t.position}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
