import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { ScrollWrite } from './ScrollWrite';

export function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Consulta desde portfolio — ${String(form.get('nombre') || 'Nuevo contacto')}`);
    const body = encodeURIComponent(`Nombre: ${String(form.get('nombre') || '')}\nEmail: ${String(form.get('email') || '')}\n\nMensaje:\n${String(form.get('mensaje') || '')}`);
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`;
    setSent(true);
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
        <div className="contact-links"><a href="mailto:tuemail@ejemplo.com"><Mail size={18} /> tuemail@ejemplo.com</a><a href="#">LinkedIn <ArrowUpRight size={17} /></a><a href="#">Behance <ArrowUpRight size={17} /></a></div>
      </div>
      <div className="contact-card-wrap">
        <div className="contact-card-heading"><MessageSquare size={22} /><div><span>Escribime</span></div></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre<input name="nombre" placeholder="¿Cómo te llamás?" required /></label>
          <label>Email<input type="email" name="email" placeholder="tu@email.com" required /></label>
          <label>Mensaje<textarea name="mensaje" rows={6} placeholder="Contame sobre tu proyecto, idea o necesidad..." required /></label>
          <button type="submit" className="contact-submit">Enviar mensaje <ArrowUpRight size={18} /></button>
          {sent && <p className="form-note">Se abrió tu aplicación de correo con el mensaje preparado.</p>}
        </form>
      </div>
    </section>
  );
}
