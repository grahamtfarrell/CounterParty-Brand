/* eslint-disable @next/next/no-img-element */

export function ColorSection() {
  return (
    <section className="color-section w-full">
      <p className="intro-copy color-section__copy">
        Navy blue 80%, Dark blue 10%, Pearl 5%, and Silver 5% to be used in
        regards to Counterparty design. These colors chosen as a way to signal a
        regality which is now often underrepresented in the finance world.
      </p>
      <img
        src="/brand/counter_color.png"
        alt="Counterparty color palette"
        className="color-section__image"
        loading="lazy"
      />
    </section>
  );
}
