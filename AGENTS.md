# Registro de Actividad de Agentes (AGENTS.md)

Historial de intervenciones del asistente en el sitio web oficial de Cotidie.

## Instrucciones permanentes para agentes

- Toda IA o agente que modifique archivos de este proyecto debe agregar un reporte en este archivo.
- Cada reporte debe incluir `Planificacion`, `Ejecucion`, `Validacion` y `Archivos Modificados`.
- Este proyecto es independiente del repositorio de la aplicacion Cotidie.

### [2026-07-12 20:06] 15. Publicacion de la captura Biblioteca

**Planificacion:**

- Publicar exclusivamente la captura actualizada de Biblioteca.
- Preservar sin incluir la edicion local independiente existente en la pagina Instalar.

**Ejecucion:**

- Se incorporo la imagen actualizada `biblioteca.png` en la publicacion estatica.
- No se modifico ni se preparo para publicar `app/instalar/page.tsx`.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La ruta Funciones de la exportacion referencia `screenshots/biblioteca.png` y el archivo exportado coincide en tamano con la imagen actualizada.
- `git status` confirma que `app/instalar/page.tsx` sigue como cambio local separado y no sera incluido en el commit.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `public/screenshots/biblioteca.png`
- `AGENTS.md`

### [2026-07-12 19:55] 14. Compatibilidad con el antiguo enlace Guía

**Planificacion:**

- Mantener eliminada la pagina y el enlace visible `Guía`.
- Evitar un error 404 si un navegador conserva temporalmente el menu publicado antes de la consolidacion.

**Ejecucion:**

- Se confirmo que la navegacion publica actual solo muestra Instalar y no contiene enlace visible a Guía.
- Se agrego una redireccion tecnica, sin contenido ni interfaz, desde la antigua ruta `/guia/` hacia `/instalar/`.
- La redireccion permite que enlaces guardados o menus en caché lleguen a la unica pagina vigente de instalacion.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La exportacion principal no genera una pagina de Guía y la pagina Instalar no contiene enlace visible a ella.
- El archivo tecnico de la antigua ruta redirige a `/instalar/` sin contenido de la pagina retirada.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `public/guia/index.html`
- `AGENTS.md`

### [2026-07-12 19:45] 13. Una sola pagina de instalacion

**Planificacion:**

- Eliminar la duplicidad entre la pagina breve de instalacion y la guia detallada.
- Conservar la guia como la unica experiencia de instalacion bajo la ruta y el nombre `Instalar`.

**Ejecucion:**

- `Instalar` adopta el contenido completo de la guia: APK, acceso web Android, Safari en iOS y versionado.
- Se retiro la ruta `Guía` y su enlace desde la navegacion y el pie.
- Se actualizaron los estados de navegacion y los nombres visibles para conservar solo Inicio, Funciones, Instalar y Preguntas.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La exportacion contiene `/instalar/` y ya no genera la ruta `/guia/`.
- La pagina Instalar conserva APK, PWA Android, Safari en iOS y el detalle Major/Minor/Patch.
- No existen referencias a `/guia/` en el codigo ni en la exportacion estatica.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `app/instalar/page.tsx`
- `app/guia/page.tsx` (eliminado)
- `app/components/SiteChrome.tsx`
- `AGENTS.md`

### [2026-07-12 19:40] 12. Guia de instalacion y actualizaciones

**Planificacion:**

- Incorporar el contenido de los documentos de instalacion y versionado sin reproducirlos literalmente ni romper la navegacion compacta del sitio.
- Mantener las instrucciones completas en una pagina independiente para evitar alargar la pagina de descarga.

**Ejecucion:**

- Se creo la ruta `Guía`, enlazada desde la navegacion, el pie y la pagina de instalacion.
- La guia explica el flujo APK de Android, la instalacion desde navegador en Android y la opcion oficial desde Safari en iPhone y iPad.
- Se adapto la explicacion de versionado `vX.Y.Z` para distinguir cambios Major, Minor y Patch.
- Se agrego una indicacion prudente para respaldar, desinstalar y volver a instalar el APK oficial cuando Android rechace una actualizacion por conflicto entre versiones o por una advertencia de origen.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La exportacion contiene `/guia/`, los iconos de ambas plataformas, el acceso al APK y las tres partes del versionado.
- Inicio, Funciones, Instalar, Guía y Preguntas incluyen el nuevo enlace de navegacion.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `app/guia/page.tsx`
- `app/components/SiteChrome.tsx`
- `app/instalar/page.tsx`
- `app/globals.css`
- `AGENTS.md`

### [2026-07-12 19:30] 10. Guias visuales para los tres accesos de Cotidie

**Planificacion:**

- Incorporar una guia visual concreta dentro de cada metodo de acceso, sin reemplazar las instrucciones escritas existentes.
- Mantener el lenguaje visual calido, azul marino y dorado de Cotidie, y la navegacion movil horizontal ya implementada.

**Ejecucion:**

- Se crearon tres ilustraciones originales: descarga e instalacion APK en Android, acceso web en Android y anadir Cotidie desde Safari en iOS.
- La pagina `instalar` ahora muestra la ilustracion correspondiente debajo del icono de cada plataforma, con texto alternativo descriptivo para accesibilidad.
- Se incorporo un marco visual uniforme y un recorte centrado para que las guias conserven proporciones profesionales tanto en escritorio como en movil.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La pagina estatica de instalacion referencia las tres guias y la exportacion genero los tres PNG en `out/guides`.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `app/instalar/page.tsx`
- `app/globals.css`
- `public/guides/android-apk-install.png`
- `public/guides/android-web.png`
- `public/guides/ios-safari.png`
- `AGENTS.md`

### [2026-07-12 19:38] 11. Iconos de plataforma en los accesos

**Planificacion:**

- Retirar las ilustraciones de guia para conservar una pagina de instalacion mas sobria.
- Identificar cada metodo unicamente con el icono reconocible de su plataforma.

**Ejecucion:**

- Se eliminaron las tres ilustraciones de guia incorporadas en la intervencion anterior.
- Las dos alternativas de Android ahora usan el icono oficial del robot Android.
- El metodo de iOS ahora usa el icono oficial de Apple, dentro del mismo contenedor visual de los demas metodos.

**Validacion:**

- `npm.cmd run build:pages` OK.
- La pagina estatica de instalacion referencia los iconos Android y Apple, sin conservar referencias a la carpeta de guias retirada.
- `git diff --check` OK; solo se mostraron los avisos esperados de finales de linea CRLF de Windows.

**Archivos Modificados:**

- `app/instalar/page.tsx`
- `app/globals.css`
- `public/brand/android.svg`
- `public/brand/apple.svg`
- `public/guides/android-apk-install.png` (eliminado)
- `public/guides/android-web.png` (eliminado)
- `public/guides/ios-safari.png` (eliminado)
- `AGENTS.md`

### [2026-07-12 19:08] 9. Experiencia movil compacta con navegacion y carruseles

**Planificacion:**

- Corregir la ausencia de navegacion superior en telefonos.
- Reducir el desplazamiento vertical sin perder contenido ni accesibilidad tactil.
- Integrar y publicar sin alterar los cambios locales realizados por el usuario.

**Ejecucion:**

- **Menu movil**: la cabecera incorpora un menu desplegable tactil con Inicio, Funciones, Instalar y Preguntas.
- **Inicio**: se compacto el hero y las tres entradas principales forman un carrusel con vista parcial de la tarjeta siguiente.
- **Funciones**: beneficios y capturas se convierten en dos carruseles horizontales con ajuste por tarjeta.
- **Instalacion**: APK, web Android e iOS se muestran en un carrusel horizontal, manteniendo botones de 54 px.
- **Gestos**: los carruseles usan `scroll-snap`, contienen el desplazamiento y conservan una barra discreta como indicacion visual.
- **Cambios preservados**: se mantuvieron las ediciones locales del usuario en Inicio, metadata, Instalacion y Preguntas frecuentes.

**Validacion:**

- `npm.cmd run build:pages` OK.
- Prueba publicada a 390 x 844 px sin desborde horizontal.
- Inicio, Funciones e Instalar redujeron sustancialmente su altura movil y mantuvieron controles tactiles adecuados.
- El menu movil mostro las cuatro rutas y marco la pagina activa.
- GitHub Pages publico correctamente la actualizacion.

**Archivos Modificados:**

- `app/components/SiteChrome.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/layout.tsx`
- `app/instalar/page.tsx`
- `app/preguntas/page.tsx`
- `AGENTS.md`

### [2026-07-12 18:49] 8. Publicacion de capturas y renovacion automatica de cache

**Planificacion:**

- Publicar las capturas reemplazadas por el usuario.
- Evitar que el navegador siga mostrando versiones antiguas con el mismo nombre de archivo.
- Preservar otros cambios locales ajenos a esta publicacion.

**Ejecucion:**

- Se publicaron las nuevas capturas `inicio.png`, `oraciones.png` y `plan-de-vida.png`.
- Cada imagen incluye ahora la identificacion del despliegue en su URL, manteniendo el nombre simple del archivo en la carpeta.
- GitHub Actions inyecta el SHA de cada publicacion como version; el navegador solicita nuevamente las capturas despues de cada despliegue.
- `biblioteca.png` se mantuvo sin cambios porque conserva el placeholder anterior.

**Validacion:**

- Las tres capturas nuevas se reconocieron como PNG validos de 720 x 1612 px.
- `npm.cmd run build:pages` OK.
- La exportacion estatica incluyo el parametro de renovacion en las URLs de capturas.
- GitHub Pages publico correctamente la actualizacion y sirvio los nuevos archivos.

**Archivos Modificados:**

- `public/screenshots/inicio.png`
- `public/screenshots/oraciones.png`
- `public/screenshots/plan-de-vida.png`
- `app/components/ScreenshotFrame.tsx`
- `.github/workflows/pages.yml`
- `AGENTS.md`

### [2026-07-12 18:27] 7. PWA conectada y titulo unificado Cotidie

**Planificacion:**

- Conectar las alternativas web de Android e iOS con la PWA publica existente.
- Unificar el titulo del navegador para que todas las rutas se llamen simplemente Cotidie.

**Ejecucion:**

- `PWA_URL` centraliza `https://pwa-xi-jet.vercel.app` junto al enlace estable del APK.
- La alternativa web de Android abre Cotidie directamente desde el navegador.
- La opcion oficial de iPhone y iPad abre la misma PWA para continuar desde Safari.
- Inicio, Funciones, Instalar y Preguntas usan el titulo `Cotidie`; Open Graph y Twitter usan el mismo nombre simple.

**Validacion:**

- La PWA respondio HTTP 200.
- `npm.cmd run build:pages` OK.
- La exportacion estatica incluyo ambos enlaces a la PWA y el titulo `Cotidie` en todas las rutas.
- GitHub Pages publico correctamente la actualizacion.

**Archivos Modificados:**

- `app/lib/links.ts`
- `app/layout.tsx`
- `app/instalar/page.tsx`
- `app/funciones/page.tsx`
- `app/preguntas/page.tsx`
- `AGENTS.md`

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
