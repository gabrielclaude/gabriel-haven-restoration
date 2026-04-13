"use client";

import { useEffect, useState } from "react";

interface Deer {
  id: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
  direction: "left" | "right";
}

export default function DeerAnimation() {
  const [deers, setDeers] = useState<Deer[]>([]);

  useEffect(() => {
    // Spawn a deer every 8-15 seconds
    const spawnDeer = () => {
      const newDeer: Deer = {
        id: Date.now(),
        top: Math.random() * 60 + 20, // 20-80% from top
        delay: 0,
        duration: Math.random() * 4 + 6, // 6-10 seconds to cross
        size: Math.random() * 0.3 + 0.7, // 0.7-1.0 scale
        direction: Math.random() > 0.5 ? "left" : "right",
      };

      setDeers((prev) => [...prev, newDeer]);

      // Remove deer after animation completes
      setTimeout(() => {
        setDeers((prev) => prev.filter((d) => d.id !== newDeer.id));
      }, newDeer.duration * 1000 + 1000);
    };

    // Initial deer after 3 seconds
    const initialTimeout = setTimeout(spawnDeer, 3000);

    // Spawn more deer periodically
    const interval = setInterval(() => {
      spawnDeer();
    }, Math.random() * 7000 + 8000); // 8-15 seconds

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
          <svg
            viewBox="0 0 100 80"
            fill="currentColor"
            className="deer-svg"
          >
            {/* Deer body */}
            <ellipse cx="50" cy="50" rx="25" ry="15" />
            {/* Deer head */}
            <circle cx="78" cy="38" r="10" />
            {/* Deer snout */}
            <ellipse cx="88" cy="42" rx="5" ry="3" />
            {/* Deer ear */}
            <ellipse cx="75" cy="28" rx="3" ry="6" transform="rotate(-20 75 28)" />
            <ellipse cx="82" cy="30" rx="3" ry="5" transform="rotate(10 82 30)" />
            {/* Antlers */}
            <path
              d="M72 25 L68 15 L65 18 M68 15 L70 8 M72 25 L72 12 L75 8 M72 12 L69 5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80 24 L84 14 L87 17 M84 14 L82 7 M80 24 L80 11 L77 7 M80 11 L83 4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            {/* Deer eye */}
            <circle cx="82" cy="36" r="1.5" fill="white" />
            {/* Deer legs - running pose */}
            <path
              d="M35 62 L30 78 M32 78 L28 78"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="leg leg-back-1"
            />
            <path
              d="M40 62 L50 75 M48 75 L52 78"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="leg leg-back-2"
            />
            <path
              d="M60 62 L55 78 M57 78 L53 78"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="leg leg-front-1"
            />
            <path
              d="M65 62 L75 72 M73 72 L78 75"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="leg leg-front-2"
            />
            {/* Deer tail */}
            <ellipse cx="25" cy="48" rx="4" ry="3" fill="white" />
          </svg>
        </div>
      ))}

      <style jsx>{`
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
          width: 80px;
          height: 64px;
          color: var(--color-primary);
          opacity: 0.6;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-right {
          left: -100px;
          animation-name: runRight;
        }

        .deer-left {
          right: -100px;
          animation-name: runLeft;
        }

        .deer-left .deer-svg {
          transform: scaleX(-1);
        }

        .deer-svg {
          width: 100%;
          height: 100%;
          animation: bounce 0.3s ease-in-out infinite;
        }

        .leg {
          animation: legs 0.15s ease-in-out infinite alternate;
        }

        .leg-back-1, .leg-front-1 {
          animation-delay: 0s;
        }

        .leg-back-2, .leg-front-2 {
          animation-delay: 0.15s;
        }

        @keyframes runRight {
          from {
            left: -100px;
          }
          to {
            left: calc(100% + 100px);
          }
        }

        @keyframes runLeft {
          from {
            right: -100px;
          }
          to {
            right: calc(100% + 100px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes legs {
          0% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}
