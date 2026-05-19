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
        <img
          src="/brand/counter_gradient.png"
          alt="Counterparty gradient"
          className="gradient-section__image"
          loading="lazy"
        />
      </section>
    </>
  );
}
