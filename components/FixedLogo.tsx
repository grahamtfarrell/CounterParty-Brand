import Image from "next/image";

export function FixedLogo() {
  return (
    <div className="pointer-events-none fixed top-5 left-1/2 z-50 -translate-x-1/2">
      <Image
        src="/brand/logo.png"
        alt="CounterParty"
        width={120}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </div>
  );
}
