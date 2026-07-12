import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { APK_DOWNLOAD_URL, PWA_URL } from "../lib/links";

export const metadata: Metadata = { title: "Cotidie" };

export default function InstalarPage() {
  return (
    <main>
      <SiteHeader active="instalar" />
      <section className="page-hero compact-page-hero">
        <p className="section-kicker">Instalación</p>
        <h1>Instala y actualiza Cotidie con tranquilidad.</h1>
        <p>Elige el acceso adecuado para tu dispositivo y conoce qué cambia cuando llega una nueva versión.</p>
      </section>

      <section className="guide-section" aria-labelledby="installation-title">
        <div className="guide-section-heading">
          <p className="section-kicker">Elige tu acceso</p>
          <h2 id="installation-title">Tres formas de tener Cotidie cerca.</h2>
          <p>El APK es la experiencia principal en Android. La versión web permite usar Cotidie sin instalar un archivo y es la opción oficial en iPhone y iPad.</p>
        </div>
        <div className="guide-methods">
          <article className="guide-method recommended">
            <div className="recommendation">Recomendado</div>
            <div className="platform-icon android" aria-hidden="true"><img src="/cotidie-web/brand/android.svg" alt="" /></div>
            <p className="platform">Android · APK</p>
            <h2>La aplicación completa</h2>
            <ol>
              <li>Descarga el APK oficial desde esta web.</li>
              <li>Ábrelo al terminar la descarga.</li>
              <li>Si Android lo solicita, permite la instalación desde tu navegador.</li>
              <li>Confirma y abre Cotidie.</li>
            </ol>
            <a className="button button-primary full" href={APK_DOWNLOAD_URL}>Descargar APK</a>
          </article>
          <article className="guide-method">
            <div className="platform-icon web" aria-hidden="true"><img src="/cotidie-web/brand/android.svg" alt="" /></div>
            <p className="platform">Android · navegador</p>
            <h2>Cotidie sin APK</h2>
            <ol>
              <li>Abre Cotidie desde el navegador.</li>
              <li>Toca el menú de tres puntos.</li>
              <li>Elige “Añadir a pantalla principal” o “Instalar aplicación”.</li>
              <li>Confirma para crear el acceso directo.</li>
            </ol>
            <a className="button button-secondary full" href={PWA_URL}>Abrir Cotidie</a>
          </article>
          <article className="guide-method">
            <div className="platform-icon apple" aria-hidden="true"><img src="/cotidie-web/brand/apple.svg" alt="" /></div>
            <p className="platform">iPhone y iPad · Safari</p>
            <h2>La opción oficial en iOS</h2>
            <ol>
              <li>Abre Cotidie con Safari.</li>
              <li>Toca el botón Compartir.</li>
              <li>Selecciona “Añadir a inicio”.</li>
              <li>Confirma para dejar Cotidie en tu pantalla de inicio.</li>
            </ol>
            <a className="button button-secondary full" href={PWA_URL}>Abrir en Safari</a>
          </article>
        </div>
      </section>

      <section className="version-section" aria-labelledby="versions-title">
        <div className="guide-section-heading centered">
          <p className="section-kicker">Actualizaciones</p>
          <h2 id="versions-title">Cómo leer una versión de Cotidie.</h2>
          <p>Usamos el formato <strong>vX.Y.Z</strong>. Cada parte comunica el alcance de la actualización.</p>
        </div>
        <div className="version-grid">
          <article><span className="version-number">X</span><h3>Major</h3><p>Indica un cambio estructural. Versiones con distinto número mayor pueden no ser compatibles entre sí.</p></article>
          <article><span className="version-number">Y</span><h3>Minor</h3><p>Señala funciones, oraciones, textos u otros contenidos incorporados o ajustados. En algunos casos puede requerir actualizar desde una versión anterior.</p></article>
          <article><span className="version-number">Z</span><h3>Patch</h3><p>Corresponde a correcciones, mejoras de redacción o seguridad. Normalmente es compatible con la misma versión mayor y menor.</p></article>
        </div>
        <aside className="update-notice">
          <span aria-hidden="true">!</span>
          <div><h2>Si Android rechaza una instalación o actualización</h2><p>Puede tratarse de una diferencia entre versiones o de una advertencia por instalar fuera de una tienda. Haz un respaldo de tu información, desinstala la versión anterior y vuelve a instalar el APK oficial si el problema persiste.</p></div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
