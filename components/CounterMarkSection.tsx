/* eslint-disable @next/next/no-img-element */

export function CounterMarkSection() {
  return (
    <section className="counter-mark-section w-full">
      <img
        src="/brand/counter_mark.png"
        alt="Counterparty secondary mark"
        className="counter-mark-media"
        loading="lazy"
      />
      <p className="brand-caption">
        The secondary mark. To be used in wax stamps, clothing and coins.
      </p>
    </section>
  );
}
