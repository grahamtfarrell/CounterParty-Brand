import { ResponsiveMedia } from "./ResponsiveMedia";

export function LogoVideoSection() {
  return (
    <section className="logo-video-section" aria-label="Counterparty logo film">
      <ResponsiveMedia
        kind="video"
        src="/brand/c_logo.mp4"
        viewportHeight
        objectFit="cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </section>
  );
}
