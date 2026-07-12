import type { Metadata } from "next";
import { ScreenshotFrame } from "../components/ScreenshotFrame";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Funciones — Cotidie" };

const features = [
  ["01", "Oraciones en español y latín", "Reza en el idioma que prefieras o contempla ambas versiones en paralelo."],
  ["02", "Tu Plan de Vida", "Organiza tus prácticas de piedad y acompaña tu constancia sin convertirla en una lista fría."],
  ["03", "Lecturas, EPUB y audios", "Lleva el Nuevo Testamento, lecturas espirituales, audios y tus propios archivos."],
  ["04", "Una experiencia a tu medida", "Recordatorios, temporizador, modo oscuro, fondos y ajustes de lectura."],
];

export default function FuncionesPage() {
  return (
    <main>
      <SiteHeader active="funciones" />
      <section className="page-hero compact-page-hero">
        <p className="section-kicker">Una vida interior, mejor acompañada</p>
        <h1>Todo lo necesario para volver a Dios durante el día.</h1>
        <p>Cotidie ordena tus recursos espirituales para que puedas concentrarte en lo esencial.</p>
      </section>
      <section className="feature-grid short-grid">
        {features.map(([mark, title, text]) => (
          <article className="feature-card short-card" key={title}>
            <span className="feature-mark">{mark}</span><h2>{title}</h2><p>{text}</p>
          </article>
        ))}
      </section>
      <section className="screenshot-gallery" aria-label="Capturas de las funciones de Cotidie">
        <article><ScreenshotFrame src="oraciones.png" label="Oraciones" /><div><strong>Oraciones</strong><span>Lectura cómoda en español, latín o ambos.</span></div></article>
        <article><ScreenshotFrame src="plan-de-vida.png" label="Plan de Vida" /><div><strong>Plan de Vida</strong><span>Seguimiento diario y progreso personal.</span></div></article>
        <article><ScreenshotFrame src="biblioteca.png" label="Lecturas y audios" /><div><strong>Biblioteca</strong><span>Libros, EPUB, Nuevo Testamento y audios.</span></div></article>
      </section>
      <SiteFooter />
    </main>
  );
}
