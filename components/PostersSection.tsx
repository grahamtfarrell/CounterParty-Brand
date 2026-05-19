/* eslint-disable @next/next/no-img-element */

export function PostersSection() {
  return (
    <section className="posters-section w-full">
      <img
        src="/brand/posters.png"
        alt="Counterparty posters"
        className="posters-section__image"
        loading="lazy"
      />
    </section>
  );
}
