import LiquidEther from "./LiquidEther";

export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-bg__base" />
      <LiquidEther
        colors={["#B88B7A", "#E8C4B8", "#D9C7E8", "#F2D6DC"]}
        mouseForce={22}
        cursorSize={130}
        resolution={0.55}
        autoDemo={true}
        autoSpeed={0.55}
        autoIntensity={2.4}
        BFECC={true}
      />
      <div className="hero-bg__overlay" />
    </div>
  );
}
