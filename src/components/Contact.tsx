import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { ScrollWrite } from './ScrollWrite';

export function Contact() {
  const [state, handleSubmit] = useForm('xyegpwdb');

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-copy">
        <h2 className="forced-heading">
          <ScrollWrite from="rgba(255,255,255,.18)" to="rgba(255,255,255,1)">¿Creamos algo que</ScrollWrite>
          <br />
          <ScrollWrite from="rgba(255,255,255,.18)" to="rgba(255,255,255,1)">valga la pena</ScrollWrite>
          <br />
          <ScrollWrite from="rgba(255,255,255,.18)" to="rgba(255,255,255,1)">recordar?</ScrollWrite>
        </h2>
        <p>Contame qué necesitás y en qué etapa está el proyecto. Podemos construir una solución clara, estratégica y con <strong>identidad</strong>.</p>
        <div className="contact-links">
          <a href="mailto:fabri.graziano16@gmail.com"><Mail size={18} /> fabri.graziano16@gmail.com</a>
          <a href="https://www.linkedin.com/in/fabrizio-graziano-cardozo-1191a1245" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
          <a href="https://www.behance.net/fabrigraziano" target="_blank" rel="noopener noreferrer">Behance <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="contact-card-wrap">
        <div className="contact-card-heading"><MessageSquare size={22} /><div><span>Escribime</span></div></div>
        {state.succeeded ? (
          <div style={{ textAlign: 'center', padding: '40px 12px' }}>
            <p className="form-note" style={{ color: '#89a8ff', fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>
              ¡Gracias! Tu mensaje ha sido enviado con éxito.
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '8px', color: '#ffffff' }}>
              Me pondré en contacto contigo a la brevedad.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input name="name" placeholder="¿Cómo te llamás?" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: '#ff8989', fontSize: '0.75rem', marginTop: '4px', display: 'block' }} />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="tu@email.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#ff8989', fontSize: '0.75rem', marginTop: '4px', display: 'block' }} />
            </label>
            <label>
              Mensaje
              <textarea name="message" rows={6} placeholder="Contame sobre tu proyecto, idea o necesidad..." required />
              <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#ff8989', fontSize: '0.75rem', marginTop: '4px', display: 'block' }} />
            </label>
            <button 
              type="submit" 
              className="contact-submit" 
              disabled={state.submitting}
            >
              {state.submitting ? 'Enviando...' : 'Enviar mensaje'} <ArrowUpRight size={18} />
            </button>
            {state.errors && (
              <p className="form-note" style={{ color: '#ff8989', fontWeight: 600 }}>
                Hubo un error al enviar. Por favor, intentá de nuevo.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
