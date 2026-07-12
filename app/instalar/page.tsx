import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Instalar — Cotidie" };

export default function InstalarPage() {
  return (
    <main>
      <SiteHeader active="instalar" />
      <section className="page-hero compact-page-hero">
        <p className="section-kicker">Elige cómo entrar</p>
        <h1>Cotidie, en el dispositivo que ya tienes.</h1>
        <p>La experiencia principal está en Android mediante APK. También puedes usar Cotidie sin instalación local.</p>
      </section>
      <section className="install-grid standalone-install">
        <article className="install-card recommended" id="descarga-apk">
          <div className="recommendation">Experiencia recomendada</div>
          <div className="platform-icon android" aria-hidden="true">A</div>
          <p className="platform">Android</p><h2>Instalar mediante APK</h2>
          <p>La aplicación completa, con acceso directo y mejor integración con tu teléfono.</p>
          <ul><li>Archivo oficial</li><li>Uso sin conexión</li><li>Funciones nativas</li></ul>
          <span className="button button-primary full pending-download">Enlace de descarga por conectar</span>
          <small className="file-note">Android puede pedir permiso para instalar desde tu navegador.</small>
        </article>
        <article className="install-card">
          <div className="platform-icon web" aria-hidden="true">◎</div>
          <p className="platform">Android · alternativa</p><h2>Usar la versión web</h2>
          <p>Accede a Cotidie sin descargar el APK ni instalar archivos en el teléfono.</p>
          <ul><li>Sin instalación local</li><li>Se abre en el navegador</li><li>Acceso rápido</li></ul>
          <span className="button button-secondary full pending-download">Enlace web por conectar</span>
        </article>
        <article className="install-card ios-card">
          <div className="platform-icon apple" aria-hidden="true">●</div>
          <p className="platform">iPhone y iPad · opción oficial</p><h2>Usar desde Safari</h2>
          <p>En iOS, Cotidie funciona desde la web y puede añadirse a tu pantalla de inicio.</p>
          <ol><li>Abre Cotidie en Safari</li><li>Toca Compartir</li><li>Elige “Añadir a inicio”</li></ol>
          <span className="button button-secondary full pending-download">Enlace web por conectar</span>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
