import { useEffect, useState } from "react";

const words = [
  "EMOTION",
  "MEMORY",
  "SILENCE",
  "NATURE",
  "DREAM",
  "ART",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-15%] w-[600px] h-[600px] bg-purple-700/30 rounded-full blur-[140px] animate-blob" />

        <div className="absolute bottom-[-20%] right-[-15%] w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[140px] animate-blob animation-delay-2000" />

        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-blob animation-delay-4000" />
      </div>

      {/* Texture */}
      <div
        className="
        absolute inset-0
        opacity-[0.03]
        bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
        bg-[length:40px_40px]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <p className="hero-brand">
          NF GALLERY
        </p>

        <div className="hero-word-wrapper">
          <h1 key={index} className="hero-word">
            {words[index]}
          </h1>
        </div>

        <p className="hero-description">
          Some stories are not told.
          <br />
          They are painted.
        </p>

        <div className="mt-12">
          <a
            href="#gallery"
            className="hero-button"
          >
            ENTER THE GALLERY →
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <span className="text-white/40 tracking-[0.4em] text-xs">
            EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  );
}