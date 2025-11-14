import React from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: 'Portal Rosa me ayudó a conseguir mi primer empleo en STEM. La anonimización inicial me dio confianza.',
      author: 'Ingeniera de Software',
      company: 'TechWomen'
    },
    {
      id: 2,
      text: 'Las reseñas anónimas son muy útiles. Pude identificar empresas que realmente respetan a sus empleadas.',
      author: 'Analista de Datos',
      company: 'DataCorp'
    },
    {
      id: 3,
      text: 'Como reclutadora, encontrar talento femenino validado es increíblemente eficiente y confiable.',
      author: 'Jefa de Recursos Humanos',
      company: 'Consultora Avanza'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Lo que dicen sobre nosotros</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-role">{testimonial.author}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
