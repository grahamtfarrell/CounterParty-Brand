import { FixedLogo } from "@/components/FixedLogo";
import { HeroMovie } from "@/components/HeroMovie";
import { CounterLogoSection } from "@/components/CounterLogoSection";
import { ColorSection } from "@/components/ColorSection";
import { CounterMarkSection } from "@/components/CounterMarkSection";
import { LogoUpdateSection } from "@/components/LogoUpdateSection";
import { MotifSection } from "@/components/MotifSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CounterFooter } from "@/components/CounterFooter";
import { TickerSection } from "@/components/TickerSection";

export default function Home() {
  return (
    <>
      <FixedLogo />
      <main>
        <HeroMovie />
        <div className="page-content bg-[#F3F0E7]">
          <section className="w-full">
            <p className="intro-copy">
              Counterparty is a live stream hosted by ThreadGuy Monday through
              Friday at 3pm EST. The stream is designed to be a home for those
              who are searching for a meaning in life liberated from financial
              setbacks. ThreadGuy brings on guests who are experts in their
              fields in order to answer the age-old questions - &ldquo;How do I
              get rich before i turn 30 years old?&rdquo;
            </p>
          </section>
          <ProductShowcase />
          <CounterLogoSection />
          <LogoUpdateSection />
          <CounterMarkSection />
          <ColorSection />
          <MotifSection />
          <TickerSection />
        </div>
        <div className="footer-gap" aria-hidden />
        <CounterFooter />
      </main>
    </>
  );
}
