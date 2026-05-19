/* eslint-disable @next/next/no-img-element */

export function CounterLogoSection() {
  return (
    <section className="counter-logo-section w-full bg-[#F3F0E7]">
      <img
        src="/brand/counter_logo.png"
        alt="Counterparty logo mark"
        className="block h-auto w-full"
        loading="lazy"
      />
      <p className="brand-caption">
        Inspired by ThreadGuy&rsquo;s large personality, we wanted to juxtapose
        this with a brand that was timeless and classic - a call back to an age
        where companies were not afraid to include all of their mission into
        the mark that would be printed on newspapers, billboards, business cards
        and 100-story buildings. On the left is an old man, representing the old
        financial system which lives on only in antiquity. On the right is a
        young man looking up in a hopeful manner, representing a newfound hope
        the younger generation has in the age of technology. In between them is
        a candle moving up - there is a billion dollars hidden in your computer,
        you just need to press the right buttons to find it.
      </p>
    </section>
  );
}
