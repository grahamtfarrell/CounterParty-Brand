import { ResponsiveMedia } from "./ResponsiveMedia";

export function HeroMovie() {
  return (
    <ResponsiveMedia
      kind="video"
      src="/brand/movie.mp4"
      poster="/brand/movie-poster.jpg"
      viewportHeight
      objectFit="cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  );
}
