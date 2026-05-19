/* eslint-disable @next/next/no-img-element */

export function TickerSection() {
  return (
    <section className="ticker-section w-full">
      <img
        src="/brand/counter_ticker.png"
        alt="Counterparty ticker logo"
        className="ticker-section__image"
        loading="lazy"
      />
      <p className="brand-caption">
        Secondary logo to be used when icon logo is not used. Note the candle in
        the &ldquo;t&rdquo;.
      </p>
    </section>
  );
}
