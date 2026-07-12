const BASE = "/cotidie-web";

export function ScreenshotFrame({ src, label }: { src: string; label: string }) {
  return (
    <div className="phone-shell" aria-label={label}>
      <div className="phone-speaker" />
      <img className="app-screenshot" src={`${BASE}/screenshots/${src}`} alt={`Captura de Cotidie: ${label}`} />
    </div>
  );
}
