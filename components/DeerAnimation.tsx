"use client";

import { useEffect, useState } from "react";

interface Deer {
  id: number;
  top: number;
  duration: number;
  size: number;
  direction: "left" | "right";
}

// Doe animation based on 3 keyframes: push-off, leap, landing
// Size: 1.5" tall x 3" wide (144px x 288px at 96dpi) - using 2:1 aspect ratio
function RunningDoe() {
  return (
    <svg viewBox="0 0 200 100" className="deer-svg">
      {/* Frame 1 - Push off: back legs bunched under, front reaching forward */}
      <g className="frame frame-1">
        {/* Body - brown top */}
        <ellipse cx="100" cy="42" rx="45" ry="22" fill="#8B6914" />
        {/* Cream underbelly */}
        <ellipse cx="100" cy="52" rx="38" ry="14" fill="#FFF8DC" />
        {/* Haunch muscle */}
        <ellipse cx="65" cy="45" rx="20" ry="18" fill="#8B6914" />
        {/* Shoulder */}
        <ellipse cx="130" cy="40" rx="15" ry="16" fill="#8B6914" />

        {/* Neck - elegant curve upward */}
        <path d="M140,35 Q155,20 160,10" stroke="#8B6914" strokeWidth="14" fill="none" strokeLinecap="round" />

        {/* Head */}
        <ellipse cx="168" cy="8" rx="14" ry="10" fill="#8B6914" />
        {/* Cream face accent */}
        <ellipse cx="175" cy="10" rx="6" ry="5" fill="#FFF8DC" opacity="0.5" />
        {/* Snout */}
        <ellipse cx="182" cy="12" rx="6" ry="4" fill="#6B4423" />
        {/* Nose */}
        <ellipse cx="187" cy="12" rx="2" ry="1.5" fill="#222" />

        {/* Big eye */}
        <ellipse cx="172" cy="6" rx="4" ry="5" fill="#1a1a1a" />
        <circle cx="173" cy="4" r="1.5" fill="#fff" />

        {/* Large ear */}
        <ellipse cx="158" cy="-2" rx="6" ry="14" fill="#8B6914" transform="rotate(20 158 -2)" />
        <ellipse cx="158" cy="-2" rx="3" ry="10" fill="#FFDAB9" transform="rotate(20 158 -2)" />

        {/* Small tail - up */}
        <ellipse cx="48" cy="38" rx="5" ry="6" fill="#8B6914" transform="rotate(-30 48 38)" />
        <ellipse cx="46" cy="36" rx="3" ry="4" fill="#FFF8DC" transform="rotate(-30 46 36)" />

        {/* Back legs - bunched under, pushing */}
        <path d="M55,58 Q45,72 40,85" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M65,60 Q58,75 55,88" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Front legs - reaching forward */}
        <path d="M130,55 Q150,65 165,78" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M125,58 Q140,70 152,85" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Hooves */}
        <ellipse cx="40" cy="87" rx="3" ry="2" fill="#222" />
        <ellipse cx="55" cy="90" rx="3" ry="2" fill="#222" />
        <ellipse cx="165" cy="80" rx="3" ry="2" fill="#222" />
        <ellipse cx="152" cy="87" rx="3" ry="2" fill="#222" />
      </g>

      {/* Frame 2 - Full leap: all legs extended, suspended in air */}
      <g className="frame frame-2">
        {/* Body - stretched horizontal */}
        <ellipse cx="100" cy="38" rx="48" ry="18" fill="#8B6914" />
        {/* Cream underbelly */}
        <ellipse cx="100" cy="46" rx="42" ry="12" fill="#FFF8DC" />
        {/* Haunch */}
        <ellipse cx="58" cy="40" rx="18" ry="14" fill="#8B6914" />
        {/* Shoulder */}
        <ellipse cx="138" cy="36" rx="14" ry="14" fill="#8B6914" />

        {/* Neck - extended forward */}
        <path d="M148,32 Q165,18 175,8" stroke="#8B6914" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Head - stretched forward */}
        <ellipse cx="182" cy="6" rx="13" ry="9" fill="#8B6914" />
        <ellipse cx="188" cy="8" rx="5" ry="4" fill="#FFF8DC" opacity="0.5" />
        <ellipse cx="195" cy="10" rx="5" ry="3.5" fill="#6B4423" />
        <ellipse cx="199" cy="10" rx="1.8" ry="1.3" fill="#222" />

        {/* Big eye */}
        <ellipse cx="186" cy="4" rx="4" ry="5" fill="#1a1a1a" />
        <circle cx="187" cy="2" r="1.5" fill="#fff" />

        {/* Ear - back */}
        <ellipse cx="172" cy="-4" rx="5" ry="12" fill="#8B6914" transform="rotate(35 172 -4)" />
        <ellipse cx="172" cy="-4" rx="2.5" ry="8" fill="#FFDAB9" transform="rotate(35 172 -4)" />

        {/* Tail - streaming behind */}
        <path d="M40,38 Q30,32 22,28" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="28" rx="4" ry="3" fill="#FFF8DC" />

        {/* Back legs - fully extended behind */}
        <path d="M48,50 Q30,60 15,72" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M55,52 Q40,65 28,78" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Front legs - fully extended forward */}
        <path d="M145,48 Q168,55 185,65" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M140,50 Q158,62 172,75" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Hooves */}
        <ellipse cx="15" cy="74" rx="3" ry="2" fill="#222" />
        <ellipse cx="28" cy="80" rx="3" ry="2" fill="#222" />
        <ellipse cx="185" cy="67" rx="3" ry="2" fill="#222" />
        <ellipse cx="172" cy="77" rx="3" ry="2" fill="#222" />
      </g>

      {/* Frame 3 - Landing: front legs down, back legs trailing up */}
      <g className="frame frame-3">
        {/* Body - tilted for landing */}
        <ellipse cx="100" cy="44" rx="46" ry="20" fill="#8B6914" transform="rotate(8 100 44)" />
        {/* Cream underbelly */}
        <ellipse cx="100" cy="52" rx="40" ry="13" fill="#FFF8DC" transform="rotate(8 100 52)" />
        {/* Haunch - raised */}
        <ellipse cx="60" cy="42" rx="18" ry="16" fill="#8B6914" />
        {/* Shoulder - lower */}
        <ellipse cx="135" cy="45" rx="14" ry="15" fill="#8B6914" />

        {/* Neck - angled down */}
        <path d="M145,42 Q158,30 165,22" stroke="#8B6914" strokeWidth="13" fill="none" strokeLinecap="round" />

        {/* Head */}
        <ellipse cx="172" cy="18" rx="13" ry="10" fill="#8B6914" />
        <ellipse cx="178" cy="20" rx="5" ry="4" fill="#FFF8DC" opacity="0.5" />
        <ellipse cx="185" cy="22" rx="5" ry="3.5" fill="#6B4423" />
        <ellipse cx="189" cy="22" rx="1.8" ry="1.3" fill="#222" />

        {/* Big eye */}
        <ellipse cx="176" cy="15" rx="4" ry="5" fill="#1a1a1a" />
        <circle cx="177" cy="13" r="1.5" fill="#fff" />

        {/* Ear */}
        <ellipse cx="162" cy="8" rx="5" ry="13" fill="#8B6914" transform="rotate(15 162 8)" />
        <ellipse cx="162" cy="8" rx="2.5" ry="9" fill="#FFDAB9" transform="rotate(15 162 8)" />

        {/* Tail - up high */}
        <path d="M45,36 Q38,25 35,18" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="35" cy="18" rx="4" ry="5" fill="#FFF8DC" />

        {/* Back legs - trailing up behind */}
        <path d="M52,55 Q38,50 28,42" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M58,58 Q48,55 40,50" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Front legs - landing, bent */}
        <path d="M138,58 Q145,75 142,90" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M130,60 Q135,78 130,92" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Hooves */}
        <ellipse cx="28" cy="42" rx="3" ry="2" fill="#222" />
        <ellipse cx="40" cy="50" rx="3" ry="2" fill="#222" />
        <ellipse cx="142" cy="92" rx="3" ry="2" fill="#222" />
        <ellipse cx="130" cy="94" rx="3" ry="2" fill="#222" />
      </g>
    </svg>
  );
}

export default function DeerAnimation() {
  const [deers, setDeers] = useState<Deer[]>([]);

  useEffect(() => {
    const spawnDeer = () => {
      const newDeer: Deer = {
        id: Date.now(),
        top: Math.random() * 30 + 40,
        duration: Math.random() * 2 + 4,
        size: Math.random() * 0.3 + 0.8,
        direction: Math.random() > 0.5 ? "left" : "right",
      };

      setDeers((prev) => [...prev, newDeer]);

      setTimeout(() => {
        setDeers((prev) => prev.filter((d) => d.id !== newDeer.id));
      }, newDeer.duration * 1000 + 500);
    };

    const initialTimeout = setTimeout(spawnDeer, 2000);
    const interval = setInterval(spawnDeer, Math.random() * 6000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="deer-container" aria-hidden="true">
      {deers.map((deer) => (
        <div
          key={deer.id}
          className={`deer ${deer.direction === "left" ? "deer-left" : "deer-right"}`}
          style={{
            top: `${deer.top}%`,
            animationDuration: `${deer.duration}s`,
            transform: `scale(${deer.size})`,
          }}
        >
          <RunningDoe />
        </div>
      ))}

      <style jsx global>{`
        .deer-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 50;
        }

        .deer {
          position: absolute;
          width: 288px;  /* 3 inches at 96dpi */
          height: 144px; /* 1.5 inches at 96dpi */
          opacity: 0.85;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-right {
          left: -300px;
          animation-name: runRight;
        }

        .deer-left {
          right: -300px;
          animation-name: runLeft;
        }

        .deer-left .deer-svg {
          transform: scaleX(-1);
        }

        .deer-svg {
          width: 100%;
          height: 100%;
        }

        /* Frame animation - 3 frames for smooth gallop */
        .frame {
          opacity: 0;
        }

        .frame-1 { animation: frame3 0.36s step-end infinite; animation-delay: 0s; }
        .frame-2 { animation: frame3 0.36s step-end infinite; animation-delay: -0.24s; }
        .frame-3 { animation: frame3 0.36s step-end infinite; animation-delay: -0.12s; }

        @keyframes frame3 {
          0%, 33.33% { opacity: 1; }
          33.34%, 100% { opacity: 0; }
        }

        @keyframes runRight {
          from { left: -300px; }
          to { left: calc(100% + 300px); }
        }

        @keyframes runLeft {
          from { right: -300px; }
          to { right: calc(100% + 300px); }
        }
      `}</style>
    </div>
  );
}
