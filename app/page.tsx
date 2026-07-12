const APK_URL = "#descarga-apk";

const features = [
  {
    mark: "01",
    title: "Tu Plan de Vida",
    text: "Organiza tus prácticas de piedad, acompaña tu constancia y vuelve cada día a lo esencial.",
  },
  {
    mark: "02",
    title: "Oraciones en español y latín",
    text: "Reza en el idioma que prefieras o contempla ambas versiones en paralelo, oración por oración.",
  },
  {
    mark: "03",
    title: "Lecturas, audios y biblioteca",
    text: "Lleva contigo el Nuevo Testamento, lecturas espirituales, audios y tus propios archivos.",
  },
  {
    mark: "04",
    title: "Pensada para acompañarte",
    text: "Recordatorios, temporizador, modo oscuro, fondos y ajustes de lectura sin distraerte de la oración.",
  },
];

const faqs = [
  {
    question: "¿Qué opción conviene en Android?",
    answer:
      "El APK ofrece la experiencia más completa: instalación local, acceso directo y funcionamiento sin conexión en las funciones compatibles. La versión web es una alternativa si prefieres no instalar archivos.",
  },
  {
    question: "¿Cómo se usa Cotidie en iPhone o iPad?",
    answer:
      "En iOS, Cotidie se utiliza oficialmente desde el navegador. Puedes añadirla a la pantalla de inicio desde el menú Compartir de Safari para abrirla como una aplicación.",
  },
  {
    question: "¿El APK es el archivo oficial?",
    answer:
      "Sí. El botón de esta página entrega la compilación oficial de Cotidie para Android. Android puede pedirte autorizar la instalación desde el navegador la primera vez.",
  },
];

function ScreenshotPlaceholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="phone-shell" aria-label={`Espacio reservado para ${label}`}>
      <div className="phone-speaker" />
      <div className="screen-placeholder">
        <span>Tu captura aquí</span>
        <strong>{label}</strong>
        <small>{note}</small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cotidie, inicio">
          <img src="/brand/icon.png" alt="" width="46" height="46" />
          <span>Cotidie</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#funciones">Funciones</a>
          <a href="#como-se-ve">Conoce Cotidie</a>
          <a href="#instalar">Instalar</a>
        </nav>
        <a className="header-action" href={APK_URL}>
          Descargar para Android
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Tu guía diaria de oración y vida espiritual</div>
          <h1>
            Tus oraciones <em>cotidianas</em>, en un solo lugar.
          </h1>
          <p className="hero-lead">
            Cotidie reúne oración, formación y seguimiento del Plan de Vida en una experiencia serena, privada y hecha para acompañarte todos los días.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={APK_URL}>
              <span className="button-icon" aria-hidden="true">↓</span>
              <span><strong>Descargar APK</strong><small>Android · versión 6.4.0</small></span>
            </a>
            <a className="button button-secondary" href="#version-web">
              Usar sin instalar
            </a>
          </div>
          <p className="trust-line"><span aria-hidden="true">✓</span> Descarga oficial · Sin publicidad · Tus datos permanecen contigo</p>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <ScreenshotPlaceholder label="Pantalla principal" note="Reemplaza este espacio con tu imagen" />
          <div className="floating-note note-today"><span>Hoy</span><strong>Tu camino de oración</strong><small>Todo en un mismo lugar</small></div>
          <div className="floating-note note-language"><span>ES</span><span>LA</span><strong>Español y latín</strong></div>
        </div>
      </section>

      <section className="quiet-strip" aria-label="Principales cualidades">
        <span>Oración diaria</span><i />
        <span>Plan de Vida</span><i />
        <span>Lectura espiritual</span><i />
        <span>Experiencia sin anuncios</span>
      </section>

      <section className="section features" id="funciones">
        <div className="section-intro">
          <p className="section-kicker">Una vida interior, mejor acompañada</p>
          <h2>Todo lo necesario para volver a Dios durante el día.</h2>
          <p>Cotidie ordena tus recursos espirituales sin convertir la oración en una lista fría de tareas.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-mark">{feature.mark}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcases" id="como-se-ve">
        <article className="showcase">
          <div className="showcase-shot shot-blue">
            <ScreenshotPlaceholder label="Tus oraciones" note="Captura sugerida: detalle de una oración" />
          </div>
          <div className="showcase-copy">
            <p className="section-kicker">Oraciones siempre a mano</p>
            <h2>Reza con calma, sin perderte entre menús.</h2>
            <p>Encuentra las oraciones del Plan de Vida, devociones y textos para ocasiones concretas. Ajusta el tamaño, la tipografía y el idioma para que la lectura se sienta tuya.</p>
            <ul>
              <li>Español, latín o ambos en paralelo</li>
              <li>Temporizador integrado para tus tiempos de oración</li>
              <li>Modo claro, oscuro y fondos personalizables</li>
            </ul>
          </div>
        </article>

        <article className="showcase showcase-reverse">
          <div className="showcase-shot shot-gold">
            <ScreenshotPlaceholder label="Plan de Vida" note="Captura sugerida: progreso o calendario" />
          </div>
          <div className="showcase-copy">
            <p className="section-kicker">Constancia sin ruido</p>
            <h2>Una ayuda discreta para cuidar tu Plan de Vida.</h2>
            <p>Registra lo realizado, contempla tu avance y recibe recordatorios que tú controlas. Cotidie acompaña; no invade.</p>
            <ul>
              <li>Seguimiento diario y estadísticas personales</li>
              <li>Recordatorios configurables</li>
              <li>Respaldo y restauración de tus preferencias</li>
            </ul>
          </div>
        </article>

        <article className="showcase">
          <div className="showcase-shot shot-paper">
            <ScreenshotPlaceholder label="Lecturas y audios" note="Captura sugerida: biblioteca o lector" />
          </div>
          <div className="showcase-copy">
            <p className="section-kicker">También para escuchar y leer</p>
            <h2>Tu pequeña biblioteca espiritual, contigo.</h2>
            <p>Lee el Nuevo Testamento, abre tus EPUB y escucha audios sin salir de la experiencia de Cotidie.</p>
            <ul>
              <li>Lector EPUB con búsqueda e índice</li>
              <li>Biblioteca personal de libros y audios</li>
              <li>Contenido esencial disponible sin conexión</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="install-section" id="instalar">
        <div className="install-heading">
          <p className="section-kicker">Elige cómo entrar</p>
          <h2>Cotidie, en el dispositivo que ya tienes.</h2>
          <p>La experiencia principal está en Android mediante APK. Si prefieres no instalar, también puedes usarla desde el navegador.</p>
        </div>

        <div className="install-grid">
          <article className="install-card recommended" id="descarga-apk">
            <div className="recommendation">Experiencia recomendada</div>
            <div className="platform-icon android" aria-hidden="true">A</div>
            <p className="platform">Android</p>
            <h3>Instalar mediante APK</h3>
            <p>Obtén la aplicación completa, con acceso directo y mejor integración con tu teléfono.</p>
            <ul><li>Archivo oficial</li><li>Uso sin conexión</li><li>Funciones nativas</li></ul>
            <span className="button button-primary full pending-download">Enlace de descarga por conectar</span>
            <small className="file-note">Android puede solicitar permiso para instalar desde tu navegador.</small>
          </article>

          <article className="install-card" id="version-web">
            <div className="platform-icon web" aria-hidden="true">◎</div>
            <p className="platform">Android · alternativa</p>
            <h3>Usar la versión web</h3>
            <p>Accede a Cotidie sin descargar el APK. Ideal si prefieres no hacer una instalación local.</p>
            <ul><li>Sin archivo APK</li><li>Se abre en el navegador</li><li>Acceso rápido</li></ul>
            <a className="button button-secondary full" href="#acceso-web">Ver instrucciones</a>
          </article>

          <article className="install-card ios-card">
            <div className="platform-icon apple" aria-hidden="true">●</div>
            <p className="platform">iPhone y iPad · opción oficial</p>
            <h3>Usar desde Safari</h3>
            <p>En iOS, Cotidie funciona desde la web y puede añadirse a tu pantalla de inicio.</p>
            <ol><li>Abre Cotidie en Safari</li><li>Toca Compartir</li><li>Elige “Añadir a inicio”</li></ol>
            <a className="button button-secondary full" href="#acceso-web">Conocer el acceso web</a>
          </article>
        </div>

        <div className="web-access-note" id="acceso-web">
          <div><span className="status-dot" /> <strong>Acceso web</strong></div>
          <p>El botón para abrir la aplicación web quedará conectado aquí cuando definas su dirección pública. La página ya distingue claramente esta alternativa de la descarga APK.</p>
        </div>
      </section>

      <section className="faq section">
        <div className="section-intro compact">
          <p className="section-kicker">Antes de comenzar</p>
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <img src="/brand/icon.png" alt="" width="72" height="72" />
        <p className="section-kicker">Cotidie</p>
        <h2>Haz un lugar para lo esencial.</h2>
        <p>Tu guía diaria de oración y vida espiritual, creada para acompañarte con sencillez.</p>
        <a className="button button-primary" href={APK_URL}>Descargar para Android</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><img src="/brand/icon.png" alt="" width="38" height="38" /><span>Cotidie</span></a>
        <p>Oración y vida espiritual, todos los días.</p>
        <div><a href="#funciones">Funciones</a><a href="#instalar">Instalación</a><a href="#inicio">Volver arriba</a></div>
      </footer>
    </main>
  );
}
