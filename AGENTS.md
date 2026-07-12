# Registro de Actividad de Agentes (AGENTS.md)

Historial de intervenciones del asistente en el sitio web oficial de Cotidie.

## Instrucciones permanentes para agentes

- Toda IA o agente que modifique archivos de este proyecto debe agregar un reporte en este archivo.
- Cada reporte debe incluir `Planificacion`, `Ejecucion`, `Validacion` y `Archivos Modificados`.
- Este proyecto es independiente del repositorio de la aplicacion Cotidie.

### [2026-07-12 18:15] 6. Descarga APK migrada a GitHub Releases

**Planificacion:**

- Eliminar la pantalla de advertencia obligatoria de Google Drive.
- Mantener una URL permanente que apunte a la release mas reciente.
- Coordinar la web con la nueva publicacion automatica de `android:apk`.

**Ejecucion:**

- `APK_DOWNLOAD_URL` ahora usa `CotidieApp/cotidie-web/releases/latest/download/cotidie-latest.apk`.
- La release inicial `v6.4.0` contiene el APK oficial bajo el nombre estable `cotidie-latest.apk`.
- Los botones de la cabecera y de la pagina Instalar conservan el mismo comportamiento de descarga directa.

**Validacion:**

- El enlace permanente respondio HTTP 200 despues de sus redirecciones.
- GitHub entrego `Content-Disposition: attachment; filename=cotidie-latest.apk`.
- El asset publicado midio 135569856 bytes y conservo el SHA-256 del APK 6.4.0.
- `npm.cmd run build:pages` OK.
- GitHub Pages publico correctamente la actualizacion.

**Archivos Modificados:**

- `app/lib/links.ts`
- `AGENTS.md`

### [2026-07-12 17:36] 5. Etiqueta limpia de descarga APK

**Planificacion:**

- Simplificar el texto del boton principal de descarga.
- Mantener intacto el enlace directo al archivo estable de Drive.

**Ejecucion:**

- La accion `Descargar APK actual` se renombro a `Descargar APK`.
- No se modificaron la URL, el archivo entregado ni la automatizacion de `cotidie-latest.apk`.

**Validacion:**

- `npm.cmd run build:pages` OK.
- GitHub Pages publico correctamente la actualizacion.

**Archivos Modificados:**

- `app/instalar/page.tsx`
- `AGENTS.md`

### [2026-07-12 17:27] 4. Descarga directa del APK estable desde Drive

**Planificacion:**

- Conectar la instalacion Android de la web con el archivo estable `cotidie-latest.apk`.
- Evitar abrir la vista previa o la pagina compartida de Google Drive.
- Mantener un unico enlace reutilizable en todos los accesos de descarga.

**Ejecucion:**

- **Enlace directo**: `links.ts` centraliza la URL `drive.usercontent.google.com` del archivo compartido.
- **Descarga**: la respuesta de Drive entrega `application/octet-stream` con `Content-Disposition: attachment` y el nombre `cotidie-latest.apk`.
- **Interfaz**: el boton principal de la pagina Instalar y la accion de la cabecera descargan el APK sin abrir la vista previa de Drive.

**Validacion:**

- La URL directa respondio HTTP 200.
- Drive informo `Content-Length: 135569856` y `Content-Disposition: attachment; filename="cotidie-latest.apk"`.
- `npm.cmd run build:pages` OK.
- GitHub Pages publico correctamente la actualizacion.

**Archivos Modificados:**

- `app/lib/links.ts`
- `app/components/SiteChrome.tsx`
- `app/instalar/page.tsx`
- `AGENTS.md`

### [2026-07-12 17:12] 3. Navegacion por paginas y capturas reemplazables

**Planificacion:**

- Dividir la landing extensa en paginas breves con navegacion persistente.
- Conservar la identidad visual ya aprobada y los mismos metodos de instalacion.
- Permitir que el usuario cambie las capturas sin editar codigo.

**Ejecucion:**

- **Paginas**: la web se separo en Inicio, Funciones, Instalar y Preguntas frecuentes.
- **Navegacion**: una cabecera y pie compartidos conectan las cuatro rutas y marcan la pagina activa.
- **Capturas**: Inicio usa `inicio.png`; Funciones usa `oraciones.png`, `plan-de-vida.png` y `biblioteca.png`.
- **Reemplazo simple**: los cuatro PNG viven en `public/screenshots` y pueden sustituirse conservando sus nombres.
- **Guia**: `CAPTURAS.md` explica la carpeta exacta, el contenido sugerido y el formato recomendado para cada imagen.
- **Publicacion**: GitHub Pages mantiene todas las rutas y publica automaticamente al actualizar `main`.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La exportacion estatica genero las cuatro rutas con sus recursos bajo `/cotidie-web`.
- GitHub Actions publico correctamente la actualizacion en GitHub Pages.

**Archivos Modificados:**

- `app/page.tsx`
- `app/components/SiteChrome.tsx`
- `app/components/ScreenshotFrame.tsx`
- `app/funciones/page.tsx`
- `app/instalar/page.tsx`
- `app/preguntas/page.tsx`
- `app/globals.css`
- `public/screenshots/inicio.png`
- `public/screenshots/oraciones.png`
- `public/screenshots/plan-de-vida.png`
- `public/screenshots/biblioteca.png`
- `public/screenshots/README.md`
- `CAPTURAS.md`
- `AGENTS.md`

### [2026-07-12 16:58] 2. Repositorio independiente y publicacion con GitHub Pages

**Planificacion:**

- Separar tambien en GitHub el sitio web del repositorio de la aplicacion.
- Reemplazar la direccion interna inaccesible de Sites por una URL publica real.
- Publicar automaticamente la web tras cada cambio de la rama principal.

**Ejecucion:**

- **Exportacion estatica**: `next.config.ts` genera el sitio para la ruta publica `/cotidie-web`.
- **Recursos**: icono, fuentes y tarjeta social usan el prefijo del repositorio para cargar correctamente en GitHub Pages.
- **Automatizacion**: el workflow `pages.yml` construye y publica el sitio despues de cada push a `main`.
- **Repositorio**: el proyecto se prepara para `CotidieApp/cotidie-web`, separado del codigo de la aplicacion Cotidie.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La exportacion estatica genero `out/index.html` con recursos preparados para la ruta publica `/cotidie-web`.
- La publicacion quedo configurada para GitHub Pages desde GitHub Actions.

**Archivos Modificados:**

- `next.config.ts`
- `package.json`
- `package-lock.json`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `.github/workflows/pages.yml`
- `tsconfig.json`
- `AGENTS.md`

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
