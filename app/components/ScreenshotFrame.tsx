const BASE = "/cotidie-web";
const SCREENSHOT_VERSION = process.env.NEXT_PUBLIC_DEPLOY_VERSION ?? "local";

export function ScreenshotFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="phone-shell" aria-label={label}>
      <div className="phone-speaker" />
      <img className="app-screenshot" src={`${BASE}/screenshots/${src}?v=${SCREENSHOT_VERSION}`} alt={`Captura de Cotidie: ${label}`} />
    </div>
  );
}
