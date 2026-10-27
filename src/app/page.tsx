import Link from "next/link";
import { SystemTransition } from "@/components/experience/system-transition";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { DigitalEngine } from "@/components/experience/digital-engine";
import { MotionController } from "@/components/experience/motion-controller";
import {
  AutomationDemo,
  DevelopmentDemo,
  InfrastructureDemo,
  NetworkDemo,
} from "@/components/demos/system-demos";
import {
  ProjectGallery,
  Ecosystem,
  AboutStatement,
} from "@/components/experience/editorial";
import { ContactBlock } from "@/components/experience/contact-form";
export default function HomePage() {
  return (
    <div className="intelligent-system">
      <MotionController />
      <section className="hero section-wrap">
        <div className="hero-topline mono">
          <span>
            <i /> INDEPENDENT TECHNOLOGY & ENGINEERING STUDIO
          </span>
          <span>ABIDJAN, CI — DEPUIS LE TERRAIN.</span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1>
              Nous donnons vie
              <br />à vos ambitions
              <br />
              <em>technologiques.</em>
            </h1>
            <p>
              Nous concevons des applications, automatisons les processus métier
              et faisons évoluer vos infrastructures informatiques.
            </p>
            <div className="hero-actions">
              <Link className="primary-link" href="/expertises">
                Explorer nos expertises <ArrowUpRight size={18} />
              </Link>
              <Link className="text-link" href="/realisations">
                Nos réalisations <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <DigitalEngine />
        </div>
        <div className="hero-bottom mono">
          <a href="#automatisation">
            <ArrowDown size={15} /> EXPLORER LE SYSTÈME
          </a>
          <span>LOGICIEL · AUTOMATISATION · INFRASTRUCTURE</span>
          <span>01 — 08</span>
        </div>
      </section>
      <div className="manifesto-strip section-wrap">
        <span className="mono">
          UNE MÊME EXIGENCE.
          <br />
          DU CODE AU TERRAIN.
        </span>
        <p>
          Des idées ambitieuses.
          <br />
          <span>Des systèmes qui les rendent possibles.</span>
        </p>
      </div>
      <Chapter
        id="automatisation"
        number="01"
        label="AUTOMATISATION"
        title={
          <>
            Les systèmes travaillent.
            <br />
            <em>Les équipes avancent.</em>
          </>
        }
        description="Nous relions les outils et simplifions les processus pour que vos équipes se concentrent sur ce qui compte."
        href="/expertises/automatisation"
      >
        <AutomationDemo />
      </Chapter>
      <Chapter
        id="developpement"
        number="02"
        label="SOFTWARE ENGINEERING"
        title={
          <>
            De l’idée au logiciel.
            <br />
            <em>Chaque détail compte.</em>
          </>
        }
        description="Applications web, interfaces mobiles et logiciels métier. Explorez comment une structure devient une expérience."
        href="/expertises/developpement"
      >
        <DevelopmentDemo />
      </Chapter>
      <Chapter
        id="infrastructure"
        number="03"
        label="CLOUD & INFRASTRUCTURE"
        title={
          <>
            Une infrastructure invisible.
            <br />
            <em>Une fiabilité essentielle.</em>
          </>
        }
        description="Derrière chaque interface, une architecture. Nous déployons et maintenons les environnements qui font fonctionner votre activité."
        href="/expertises/cloud-infrastructure"
      >
        <InfrastructureDemo />
      </Chapter>
      <Chapter
        id="ingenierie"
        number="04"
        label="IT ENGINEERING"
        title={
          <>
            Concevoir.
            <br />
            <em>Connecter. Maintenir.</em>
          </>
        }
        description="Réseaux professionnels, équipements, serveurs et support. Une vision de bout en bout de votre environnement informatique."
        href="/expertises/maintenance"
      >
        <NetworkDemo />
      </Chapter>
      <section
        className="section-wrap editorial-section"
        id="realisations"
        data-chapter
      >
        <div className="section-label">
          <span>05 / SELECTED WORK</span>
          <Link href="/realisations">TOUTES LES RÉALISATIONS ↗</Link>
        </div>
        <h2 data-reveal>
          Notre travail
          <br />
          <em>parle pour nous.</em>
        </h2>
        <ProjectGallery />
      </section>
      <section
        className="section-wrap editorial-section ecosystem-section"
        data-chapter
      >
        <div className="section-label">
          <span>06 / NOTRE ÉCOSYSTÈME</span>
          <span>OUTILS. ENVIRONNEMENTS. CONNEXIONS.</span>
        </div>
        <h2 data-reveal>
          Un écosystème de technologies.
          <br />
          <em>Une exigence commune.</em>
        </h2>
        <Ecosystem />
      </section>
      <section className="section-wrap editorial-section" data-chapter>
        <div className="section-label">
          <span>07 / LE STUDIO</span>
          <span>ANCRAGE LOCAL. VISION OUVERTE.</span>
        </div>
        <h2 data-reveal>
          Pensé à Abidjan.
          <br />
          <em>Construit pour aller plus loin.</em>
        </h2>
        <AboutStatement />
      </section>
      <ContactBlock />
    </div>
  );
}
function Chapter({
  id,
  number,
  label,
  title,
  description,
  href,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: React.ReactNode;
  description: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="chapter section-wrap" data-chapter>
      <div className="section-label">
        <span>
          {number} / {label}
        </span>
        <span>THE INTELLIGENT SYSTEM</span>
      </div>
      <div className="chapter-content">
        <div className="chapter-copy">
          <span className="chapter-number" aria-hidden="true">
            {number}
          </span>
          <h2 data-reveal>{title}</h2>
          <p data-reveal>{description}</p>
          <Link className="text-link" href={href}>
            Explorer cette expertise <ArrowUpRight size={16} />
          </Link>
          <div className="chapter-line" />
        </div>
        <div className="chapter-visual">{children}</div>
      </div>
      <div className="chapter-transition mono">
        <span>CONNEXION ÉTABLIE</span>
        <SystemTransition stage={Number(number) - 1} />
        <span>LA SUITE DU SYSTÈME</span>
      </div>
    </section>
  );
}
