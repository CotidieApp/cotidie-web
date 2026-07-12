import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { APK_DOWNLOAD_URL, PWA_URL } from "../lib/links";

export const metadata: Metadata = { title: "Cotidie" };

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
          <div className="recommendation">Recomendado</div>
          <div className="platform-icon android" aria-hidden="true">A</div>
          <img className="install-guide" src="/cotidie-web/guides/android-apk-install.png" alt="Guía visual para descargar e instalar Cotidie mediante APK en Android" />
          <p className="platform">Android</p><h2>Instalar mediante APK</h2>
          <p>La aplicación completa, con acceso directo y mejor integración con tu teléfono.</p>
          <ul><li>Archivo oficial</li><li>Uso sin conexión</li><li>Funciones nativas</li></ul>
          <a className="button button-primary full" href={APK_DOWNLOAD_URL}>Descargar APK</a>
          <small className="file-note">Android puede pedir permiso para instalar desde tu navegador.</small>
        </article>
        <article className="install-card">
          <div className="platform-icon web" aria-hidden="true">◎</div>
          <img className="install-guide" src="/cotidie-web/guides/android-web.png" alt="Guía visual para abrir la versión web de Cotidie en Android" />
          <p className="platform">Android · alternativa</p><h2>Usar la versión web</h2>
          <p>Accede a Cotidie sin descargar el APK ni instalar archivos en el teléfono.</p>
          <ul><li>Sin instalación local</li><li>Se abre en el navegador</li><li>Acceso rápido</li></ul>
          <a className="button button-secondary full" href={PWA_URL}>Abrir Cotidie</a>
        </article>
        <article className="install-card ios-card">
          <div className="platform-icon apple" aria-hidden="true">●</div>
          <img className="install-guide" src="/cotidie-web/guides/ios-safari.png" alt="Guía visual para añadir Cotidie a la pantalla de inicio desde Safari en iOS" />
          <p className="platform">iOS · Oficial</p><h2>Usar desde Safari</h2>
          <p>En iOS, Cotidie funciona desde la web y puede añadirse a tu pantalla de inicio.</p>
          <ol><li>Abre Cotidie en Safari</li><li>Toca Compartir</li><li>Elige “Añadir a inicio”</li></ol>
          <a className="button button-secondary full" href={PWA_URL}>Abrir Cotidie en Safari</a>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
