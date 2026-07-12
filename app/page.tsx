import { ScreenshotFrame } from "./components/ScreenshotFrame";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const BASE = "/cotidie-web";

export default function Home() {
  return (
    <main>
      <SiteHeader active="inicio" />
      <section className="hero home-hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Tu guía diaria de oración y vida espiritual</div>
          <h1>Tus oraciones <em>cotidianas</em>, en un solo lugar.</h1>
          <p className="hero-lead">
            Cotidie reúne oración, formación y seguimiento del Plan de Vida en una experiencia serena, privada y hecha para acompañarte todos los días.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`${BASE}/instalar/`}>
              <span className="button-icon" aria-hidden="true">↓</span>
              <span><strong>Instalar Cotidie</strong><small>APK para Android y acceso web</small></span>
            </a>
            <a className="button button-secondary" href={`${BASE}/funciones/`}>Conocer la aplicación</a>
          </div>
          <p className="trust-line"><span aria-hidden="true">✓</span> Sin publicidad · Tus datos permanecen contigo</p>
        </div>
        <div className="hero-visual compact-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <ScreenshotFrame src="inicio.png" label="Pantalla principal" />
          <div className="floating-note note-today"><span>Hoy</span><strong>Tu camino de oración</strong><small>Todo en un mismo lugar</small></div>
          <div className="floating-note note-language"><span>ES</span><span>LA</span><strong>Español y latín</strong></div>
        </div>
      </section>
      <section className="home-links" aria-label="Explorar Cotidie">
        <a href={`${BASE}/funciones/`}><span>01</span><strong>Funciones</strong><small>Oraciones, Plan de Vida, lecturas y audios</small></a>
        <a href={`${BASE}/instalar/`}><span>02</span><strong>Instalación</strong><small>Android, iPhone, iPad y versión web</small></a>
        <a href={`${BASE}/preguntas/`}><span>03</span><strong>Preguntas</strong><small>Respuestas antes de comenzar</small></a>
      </section>
      <SiteFooter />
    </main>
  );
}
