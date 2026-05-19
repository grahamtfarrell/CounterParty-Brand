import { ResponsiveMedia } from "./ResponsiveMedia";

export function FooterVideoSection() {
  return (
    <section className="footer-video-section" aria-label="Counterparty brand film">
      <ResponsiveMedia
        kind="video"
        src="/brand/counter_footer.mp4"
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
