import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ScrollWrite } from './ScrollWrite';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyegpwdb', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre<input name="name" placeholder="¿Cómo te llamás?" required /></label>
          <label>Email<input type="email" name="email" placeholder="tu@email.com" required /></label>
          <label>Mensaje<textarea name="message" rows={6} placeholder="Contame sobre tu proyecto, idea o necesidad..." required /></label>
          <button 
            type="submit" 
            className="contact-submit" 
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'} <ArrowUpRight size={18} />
          </button>
          {status === 'success' && <p className="form-note" style={{ color: '#89a8ff', fontWeight: 600 }}>¡Gracias! Tu mensaje ha sido enviado con éxito.</p>}
          {status === 'error' && <p className="form-note" style={{ color: '#ff8989', fontWeight: 600 }}>Hubo un error al enviar. Por favor, intentá de nuevo.</p>}
        </form>
      </div>
    </section>
  );
}
