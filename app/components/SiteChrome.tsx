import { APK_DOWNLOAD_URL } from "../lib/links";

const BASE = "/cotidie-web";

type ActivePage = "inicio" | "funciones" | "instalar" | "guia" | "preguntas";

export function SiteHeader({ active }: { active: ActivePage }) {
  const links: Array<{ key: ActivePage; href: string; label: string }> = [
    { key: "inicio", href: `${BASE}/`, label: "Inicio" },
    { key: "funciones", href: `${BASE}/funciones/`, label: "Funciones" },
    { key: "instalar", href: `${BASE}/instalar/`, label: "Instalar" },
    { key: "guia", href: `${BASE}/guia/`, label: "Guía" },
    { key: "preguntas", href: `${BASE}/preguntas/`, label: "Preguntas" },
  ];

  return (
    <header className="site-header">
      <a className="brand" href={`${BASE}/`} aria-label="Cotidie, inicio">
        <img src={`${BASE}/brand/icon.png`} alt="" width="46" height="46" />
        <span>Cotidie</span>
      </a>
      <nav aria-label="Navegación principal">
        {links.map((link) => (
          <a className={active === link.key ? "active" : ""} href={link.href} key={link.key}>{link.label}</a>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Abrir menú de navegación">
          <span className="menu-label">Menú</span>
          <span className="menu-bars" aria-hidden="true"><i /><i /><i /></span>
        </summary>
        <div className="mobile-menu-panel">
          {links.map((link) => (
            <a className={active === link.key ? "active" : ""} href={link.href} key={link.key}>{link.label}</a>
          ))}
        </div>
      </details>
      <a className="header-action" href={APK_DOWNLOAD_URL}>Descargar para Android</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href={`${BASE}/`}>
        <img src={`${BASE}/brand/icon.png`} alt="" width="38" height="38" />
        <span>Cotidie</span>
      </a>
      <p>Oración y vida espiritual, todos los días.</p>
      <div><a href={`${BASE}/funciones/`}>Funciones</a><a href={`${BASE}/instalar/`}>Instalación</a><a href={`${BASE}/guia/`}>Guía</a><a href={`${BASE}/preguntas/`}>Preguntas</a></div>
    </footer>
  );
}
