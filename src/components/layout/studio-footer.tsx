import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export function StudioFooter() {
  return (
    <footer className="site-footer gravity-footer">
      <div className="gravity-marquee" aria-hidden="true">
        <div>
          {[0, 1].map((i) => (
            <span key={i}>
              Logiciel <i /> Automatisation <i /> Infrastructure <i /> LEBOSS
              TECH <i />
            </span>
          ))}
        </div>
      </div>
      <div className="gravity-footer-body">
        <div className="gravity-footer-cta">
          <span className="mono">[ CONSTRUISONS LA SUITE ]</span>
          <h2>
            Le prochain projet
            <br />
            commence ici.
          </h2>
          <a href="mailto:contact@lebosstech.ci" className="gravity-email">
            contact@lebosstech.ci{" "}
            <span>
              <ArrowUpRight size={19} />
            </span>
          </a>
        </div>
        <div className="gravity-footer-columns">
          <div>
            <h3>Explorer</h3>
            <Link href="/expertises">Expertises ↗</Link>
            <Link href="/realisations">Réalisations ↗</Link>
            <Link href="/ecosysteme">Écosystème ↗</Link>
          </div>
          <div>
            <h3>Le studio</h3>
            <Link href="/a-propos">À propos ↗</Link>
            <Link href="/contact">Contact ↗</Link>
            <a href="tel:+2250566821609">+225 05 66 82 16 09</a>
          </div>
          <div>
            <h3>Abidjan · CI</h3>
            <p>
              Marcory Anoumabo
              <br />
              Abidjan, Côte d’Ivoire
            </p>
            <p>
              Ingénierie numérique.
              <br />
              Ancrage ivoirien.
              <br />
              Ambitions ouvertes.
            </p>
          </div>
        </div>
        <div className="gravity-footer-bottom">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="LEBOSS TECH"
              width={100}
              height={71}
            />
          </Link>
          <span>
            © {new Date().getFullYear()} LEBOSS TECH · CONÇU À ABIDJAN
          </span>
          <Link href="/politique-confidentialite">Confidentialité</Link>
          <Link href="/cgu">Conditions d’utilisation</Link>
          <a href="#main-content">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  );
}
