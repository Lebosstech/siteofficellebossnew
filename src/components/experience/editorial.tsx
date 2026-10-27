import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, brands, technologies, partnerships } from "@/data/studio";
export function ProjectGallery() {
  return (
    <div className="project-gallery">
      {projects.map((p, i) => (
        <Link
          href={`/realisations/${p.slug}`}
          className="project-feature"
          key={p.slug}
        >
          <div className={`project-art project-art-${i}`}>
            <div className="project-watermark">{p.mark}</div>
            <div className="project-outline">
              <span />
              <span />
              <span />
            </div>
            <span className="project-media-note mono">
              VISUEL ÉDITORIAL · CAPTURES PRODUIT À VENIR
            </span>
            <span className="project-index mono">LT—0{i + 1}</span>
            <span className="project-open">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <div className="project-description">
            <h3>{p.name}</h3>
            <span>{p.domain}</span>
            <p>{p.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Ecosystem() {
  return (
    <div className="ecosystem-content">
      <div className="ecosystem-tech">
        <span className="mono">01 / TECHNOLOGIES UTILISÉES SUR CE SITE</span>
        <div>
          {technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="brand-list">
        <span className="mono">02 / MARQUES ET ENVIRONNEMENTS MAÎTRISÉS</span>
        {brands.map((group) => (
          <div className="brand-row" key={group.category}>
            <span>{group.category}</span>
            <p>
              {group.names.map((n) => (
                <span key={n} tabIndex={0} title={group.category}>
                  {n}
                </span>
              ))}
            </p>
          </div>
        ))}
        <p className="content-note">
          Marques installées, configurées ou maintenues, selon les informations
          de l’entreprise. Ces références ne constituent pas des partenariats
          officiels. Noms présentés en texte, sans altération des logos.
        </p>
      </div>
      {partnerships.some((p) => p.status === "validated") && (
        <div>
          <h3>Partenaires</h3>
          {partnerships
            .filter((p) => p.status === "validated")
            .map((p) => (
              <a key={p.brand} href={p.url}>
                {p.brand} — {p.relationship}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}
export function AboutStatement() {
  return (
    <div className="about-statement">
      <div className="location-visual">
        <span className="location-cross">+</span>
        <svg viewBox="0 0 400 300" aria-hidden="true">
          <g fill="none" stroke="#44484f">
            {Array.from({ length: 10 }, (_, i) => (
              <path
                key={i}
                d={`M${i * 45 - 50} 0L${i * 45 + 60} 300M0 ${i * 35}L400 ${i * 35 - 40}`}
              />
            ))}
          </g>
          <circle cx="220" cy="160" r="5" fill="#ff6a00" />
          <circle
            cx="220"
            cy="160"
            r="35"
            fill="none"
            stroke="#ff6a00"
            strokeOpacity=".3"
          />
        </svg>
        <span className="mono">
          ABIDJAN, CÔTE D’IVOIRE
          <br />
          05°18′ N · 04°00′ W
        </span>
      </div>
      <div>
        <p className="large-copy">
          La technologie prend tout son sens lorsqu’elle répond à un besoin
          réel.
        </p>
        <p>
          Basée à Marcory Anoumabo, LEBOSS TECH accompagne les entreprises dans
          leurs projets numériques et leurs infrastructures informatiques. Nous
          relions la conception logicielle, les outils métier et les réalités du
          terrain.
        </p>
        <Link className="text-link" href="/a-propos">
          Rencontrer notre approche <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
