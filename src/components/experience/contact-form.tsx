"use client";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
export function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const start = useRef(Date.now());
  return (
    <form
      className="project-form"
      onSubmit={async (e) => {
        e.preventDefault();
        if (busy) return;
        const form = e.currentTarget;
        const values = Object.fromEntries(new FormData(form));
        setBusy(true);
        setStatus("");
        try {
          const response = await fetch("/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...values, startedAt: start.current }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || "Envoi impossible.");
          setStatus(
            "Votre message a bien été transmis. Merci, nous reviendrons vers vous.",
          );
          form.reset();
          start.current = Date.now();
        } catch (err) {
          setStatus(
            err instanceof Error
              ? err.message
              : "Envoi impossible. Écrivez à contact@lebosstech.ci.",
          );
        } finally {
          setBusy(false);
        }
      }}
    >
      <div className="form-row">
        <label>
          Votre nom *
          <input
            name="fullName"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Prénom et nom"
          />
        </label>
        <label>
          Votre email *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="vous@entreprise.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Entreprise
          <input
            name="company"
            autoComplete="organization"
            maxLength={160}
            placeholder="Votre organisation"
          />
        </label>
        <label>
          Votre projet *
          <select name="category" required defaultValue="">
            <option value="" disabled>
              Choisir un domaine
            </option>
            <option>Automatisation</option>
            <option>Développement</option>
            <option>Cloud & infrastructure</option>
            <option>Réseaux & maintenance</option>
            <option>Autre projet</option>
          </select>
        </label>
      </div>
      <label>
        Parlez-nous de votre ambition *
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={4}
          placeholder="Votre besoin, votre contexte, ce que vous souhaitez construire…"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Ne pas remplir
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-submit">
        <p>
          Vos informations servent uniquement à traiter votre demande.{" "}
          <a href="/politique-confidentialite">Confidentialité</a>
        </p>
        <button className="primary-link" type="submit" disabled={busy}>
          {busy ? "Envoi en cours…" : "Envoyer mon projet"}
          <ArrowUpRight size={18} />
        </button>
      </div>
      <p role="status" aria-live="polite" className="form-status">
        {status}
      </p>
    </form>
  );
}
export function ContactBlock() {
  return (
    <section className="contact-block section-wrap" id="contact" data-chapter>
      <div className="section-label">
        <span>08 / ET SI ON CONSTRUISAIT LA SUITE ?</span>
        <span>LEBOSS TECH · ABIDJAN</span>
      </div>
      <div className="contact-grid">
        <div>
          <h2 data-reveal>
            Le prochain projet
            <br />
            commence <em>ici.</em>
          </h2>
          <p>
            Une application à développer, des processus à automatiser ou une
            infrastructure à faire évoluer ? Parlons de vos ambitions.
          </p>
          <a className="contact-email" href="mailto:contact@lebosstech.ci">
            contact@lebosstech.ci ↗
          </a>
          <div className="contact-details">
            <span>
              Marcory Anoumabo
              <br />
              Abidjan, Côte d’Ivoire
            </span>
            <a href="tel:+2250566821609">+225 05 66 82 16 09</a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
