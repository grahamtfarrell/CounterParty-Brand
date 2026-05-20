/* eslint-disable @next/next/no-img-element */

export function MotifSection() {
  return (
    <>
      <section className="candle-section w-full">
        <img
          src="/brand/counter_candle.png"
          alt="Counterparty candle motif"
          className="candle-section__image"
          loading="lazy"
        />
        <p className="brand-caption candle-section__caption">
          <span className="candle-section__caption-line">
            Candles are a motif throughout. This candle here can be used in the
            CounterParty wordmark, but is also used in our Livestream overlays,
          </span>
          <span className="candle-section__caption-line">
            creating a nice gradient while also subtely signaling the streams
            financial purposes.
          </span>
        </p>
      </section>

      <section className="gradient-section w-full">
        <video
          src="/brand/overlay.mp4"
          className="gradient-section__image"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Counterparty overlay"
        />
      </section>

      <section className="site-final-section w-full">
        <video
          src="/brand/for_site_final.mp4"
          className="site-final-section__image"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Counterparty site final"
        />
      </section>

      <section className="clean-timer-section w-full">
        <video
          src="/brand/clean_timer.mp4"
          className="clean-timer-section__image"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Counterparty clean timer"
        />
      </section>
    </>
  );
}
