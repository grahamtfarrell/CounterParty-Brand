"use client";

import { useEffect, useRef } from "react";

export function LogoUpdateSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setRate = () => {
      video.playbackRate = 2;
    };

    setRate();
    video.addEventListener("loadedmetadata", setRate);
    return () => video.removeEventListener("loadedmetadata", setRate);
  }, []);

  return (
    <section className="logo-update-section w-full">
      <video
        ref={videoRef}
        className="logo-update-media"
        src="/brand/logo_update.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <p className="brand-caption">
        A mark that can be used for print, vectors, coins and anything else. An
        image of hope in the younger generation.
      </p>
    </section>
  );
}
