/* eslint-disable @next/next/no-img-element */

export function ProductShowcase() {
  return (
    <section className="product-showcase bg-[#F3F0E7]">
      <div className="product-showcase__pair">
        <div className="relative flex h-full min-h-0 items-end overflow-hidden rounded-2xl md:rounded-3xl">
          <img
            src="/brand/book.gif"
            alt="Counterparty book"
            className="h-full w-full object-contain object-bottom"
            loading="lazy"
          />
        </div>
        <div className="aspect-[1184/1328] w-full min-w-0 overflow-hidden rounded-2xl md:rounded-3xl">
          <img
            src="/brand/matches.png"
            alt="Counterparty matches"
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="product-showcase__collage">
        <img
          src="/brand/collage.png"
          alt="Counterparty collage"
          className="block h-auto w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
