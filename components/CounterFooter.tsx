import { ResponsiveMedia } from "./ResponsiveMedia";

export function CounterFooter() {
  return (
    <footer className="counter-footer">
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
    </footer>
  );
}
