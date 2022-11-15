import React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface TestimonialsProps {
  data: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  if (!data) return null;

  const testimonials = data.map((testimonial, index) => (
    <div key={'user_' + index}>
      <blockquote>
        <p>{testimonial.description}</p>
        <cite>
          {testimonial.name} - {testimonial.position}
        </cite>
      </blockquote>
    </div>
  ));

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <Carousel autoPlay>{testimonials}</Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
