import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Cotidie" };

const faqs = [
  ["¿Qué opción conviene en Android?", "El APK ofrece la experiencia más completa. La versión web es la alternativa si prefieres no instalar archivos."],
  ["¿Cómo se usa Cotidie en mi iPhone?", "Desde Safari. Puedes añadirla a la pantalla de inicio desde el menú Compartir para abrirla como una aplicación."],
  ["¿El APK es el archivo oficial?", "Sí. El botón de descarga de esta web utilizará siempre la compilación oficial más reciente de Cotidie."],
  ["¿Cotidie tiene publicidad?", "Al ser una aplicación de rezo, no sería apropiado incluir publicidad. Cotidie no tiene anuncios ni rastreadores de terceros. Funciona completamente sin conexión a Internet, salvo para descargar actualizaciones de contenido."],
  ["¿Puedo usarla sin conexión?", "La aplicación Android conserva sin conexión las funciones y contenidos incluidos localmente. La versión web requiere conexión a Internet para acceder a los contenidos."],
];

export default function PreguntasPage() {
  return (
    <main>
      <SiteHeader active="preguntas" />
      <section className="page-hero compact-page-hero">
        <p className="section-kicker">Antes de comenzar</p>
        <h1>Preguntas frecuentes</h1>
        <p>Lo principal sobre instalación, dispositivos y uso cotidiano.</p>
      </section>
      <section className="faq-list standalone-faq">
        {faqs.map(([question, answer]) => (
          <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
        ))}
      </section>
      <section className="question-cta">
        <h2>¿Listo para comenzar?</h2><p>Consulta los métodos disponibles para tu dispositivo.</p>
        <a className="button button-primary" href="/cotidie-web/instalar/">Ver instalación</a>
      </section>
      <SiteFooter />
    </main>
  );
}
