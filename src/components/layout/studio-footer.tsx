import Link from "next/link";
import Image from "next/image";
export function StudioFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="LEBOSS TECH"
            width={148}
            height={48}
          />
        </Link>
        <p>
          Ingénierie numérique.
          <br />
          Ancrage ivoirien. Ambitions ouvertes.
        </p>
        <a href="mailto:contact@lebosstech.ci">contact@lebosstech.ci ↗</a>
        <a href="tel:+2250566821609">+225 05 66 82 16 09</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LEBOSS TECH</span>
        <span>CONÇU À ABIDJAN · CI</span>
        <Link href="/politique-confidentialite">Confidentialité</Link>
        <Link href="/cgu">Conditions d’utilisation</Link>
        <a href="#main-content">Retour en haut ↑</a>
      </div>
    </footer>
  );
}
