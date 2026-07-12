# Registro de Actividad de Agentes (AGENTS.md)

Historial de intervenciones del asistente en el sitio web oficial de Cotidie.

## Instrucciones permanentes para agentes

- Toda IA o agente que modifique archivos de este proyecto debe agregar un reporte en este archivo.
- Cada reporte debe incluir `Planificacion`, `Ejecucion`, `Validacion` y `Archivos Modificados`.
- Este proyecto es independiente del repositorio de la aplicacion Cotidie.

### [2026-07-12 16:21] 1. Sitio oficial de descarga y acceso a Cotidie

**Planificacion:**

- Crear una landing independiente del repositorio de la aplicacion y visualmente fiel a Cotidie.
- Priorizar la descarga oficial mediante APK y explicar las alternativas web para Android e iOS.
- Reservar espacios profesionales para capturas reales que puedan agregarse posteriormente.

**Ejecucion:**

- **Identidad visual**: se reutilizaron el icono, Literata, Comfortaa, el azul profundo, el fondo claro y el acento dorado de la aplicacion.
- **Pagina principal**: se construyo una landing responsive con hero, funciones, recorridos visuales, preguntas frecuentes y llamados a la accion.
- **Instalacion**: el APK oficial 6.4.0 queda como opcion recomendada para Android; la alternativa web de Android y el acceso oficial mediante Safari en iPhone/iPad se presentan por separado.
- **Capturas**: se dejaron tres marcos de telefono rotulados para Pantalla principal, Tus oraciones, Plan de Vida y Lecturas y audios.
- **Distribucion**: se incorporaron el icono oficial y las fuentes locales; el APK queda preparado para enlazarse desde almacenamiento externo porque supera el limite practico del repositorio de publicacion.
- **Compartir**: se agrego una tarjeta social propia y metadata para vistas previas en mensajeria y redes.

**Validacion:**

- `npm.cmd run build` con Git Bash como shell de scripts: OK.
- La compilacion de Vinext completo las cinco etapas y genero la ruta principal `/`.
- Se retiro el esqueleto temporal y su dependencia `react-loading-skeleton`.
- Se preservo sin cambios el repositorio independiente de la aplicacion Cotidie.

**Archivos Modificados:**

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `app/_sites-preview/SkeletonPreview.tsx`
- `app/_sites-preview/preview.css`
- `public/brand/icon.png`
- `public/fonts/Literata-Variable.ttf`
- `public/fonts/Comfortaa-Variable.ttf`
- `public/og.png`
- `public/favicon.svg`
- `public/file.svg`
- `public/globe.svg`
- `public/window.svg`
- `package.json`
- `package-lock.json`
- `.gitignore`
- `.openai/hosting.json`
- `AGENTS.md`
