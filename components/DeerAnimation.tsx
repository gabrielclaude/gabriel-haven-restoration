"use client";

import { useEffect, useState } from "react";

interface Deer {
  id: number;
  top: number;
  duration: number;
  size: number;
  direction: "left" | "right";
}

export default function DeerAnimation() {
  const [deers, setDeers] = useState<Deer[]>([]);

  useEffect(() => {
    const spawnDeer = () => {
      const newDeer: Deer = {
        id: Date.now(),
        top: Math.random() * 50 + 25,
        duration: Math.random() * 3 + 5,
        size: Math.random() * 0.3 + 0.8,
        direction: Math.random() > 0.5 ? "left" : "right",
      };

      setDeers((prev) => [...prev, newDeer]);

      setTimeout(() => {
        setDeers((prev) => prev.filter((d) => d.id !== newDeer.id));
      }, newDeer.duration * 1000 + 500);
    };

    const initialTimeout = setTimeout(spawnDeer, 3000);
    const interval = setInterval(spawnDeer, Math.random() * 7000 + 10000);

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
          }}
        >
          <svg
            viewBox="0 0 120 100"
            fill="currentColor"
            className="deer-svg"
            style={{ transform: `scale(${deer.size})` }}
          >
            {/* Realistic running deer silhouette */}
            <g className="deer-body">
              {/* Main body - sleek and athletic */}
              <path d="M25,55 Q30,48 45,46 Q60,44 75,48 Q85,50 88,55 Q90,60 85,62 Q70,65 50,64 Q35,63 25,60 Q22,58 25,55" />

              {/* Neck - long and graceful */}
              <path d="M85,50 Q92,42 95,35 Q97,30 100,28 Q102,26 100,30 Q98,35 96,42 Q94,48 88,52" />

              {/* Head - elegant deer head */}
              <ellipse cx="102" cy="26" rx="8" ry="6" />

              {/* Snout */}
              <path d="M108,28 Q114,28 116,30 Q114,32 108,31 Q106,30 108,28" />

              {/* Ear */}
              <path d="M98,20 Q96,14 98,12 Q100,14 100,20" />
              <path d="M103,19 Q104,13 106,12 Q107,14 105,20" />

              {/* Antlers - majestic */}
              <path
                d="M97,18 L94,10 L91,13 M94,10 L92,4 L89,7 M94,10 L96,5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M102,17 L105,8 L108,11 M105,8 L107,2 L110,5 M105,8 L103,3"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Eye */}
              <circle cx="105" cy="25" r="1" fill="white" />

              {/* Tail - small white tail */}
              <ellipse cx="23" cy="56" rx="4" ry="3" fill="currentColor" opacity="0.8" />
            </g>

            {/* Running legs - frame 1 */}
            <g className="legs-frame-1">
              {/* Back left leg - extended back */}
              <path d="M32,62 Q28,70 22,78 Q20,82 18,85" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Back right leg - tucked */}
              <path d="M38,63 Q42,72 45,80 Q46,84 48,86" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Front left leg - tucked back */}
              <path d="M70,62 Q68,72 65,80 Q64,84 62,87" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Front right leg - extended forward */}
              <path d="M78,60 Q85,65 92,72 Q96,76 100,78" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>

            {/* Running legs - frame 2 */}
            <g className="legs-frame-2">
              {/* Back left leg - tucked */}
              <path d="M32,62 Q36,72 40,80 Q42,84 44,86" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Back right leg - extended back */}
              <path d="M38,63 Q34,70 28,78 Q25,82 22,85" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Front left leg - extended forward */}
              <path d="M70,62 Q78,66 86,72 Q90,76 94,78" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Front right leg - tucked */}
              <path d="M78,60 Q76,70 73,78 Q72,82 70,85" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
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
          width: 100px;
          height: 83px;
          color: var(--color-primary-dark);
          opacity: 0.5;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-right {
          left: -120px;
          animation-name: runRight;
        }

        .deer-left {
          right: -120px;
          animation-name: runLeft;
        }

        .deer-left .deer-svg {
          transform: scaleX(-1);
        }

        .deer-svg {
          width: 100%;
          height: 100%;
        }

        .deer-body {
          animation: gallop 0.25s ease-in-out infinite;
        }

        .legs-frame-1 {
          animation: legSwitch1 0.25s step-end infinite;
        }

        .legs-frame-2 {
          animation: legSwitch2 0.25s step-end infinite;
        }

        @keyframes runRight {
          from { left: -120px; }
          to { left: calc(100% + 120px); }
        }

        @keyframes runLeft {
          from { right: -120px; }
          to { right: calc(100% + 120px); }
        }

        @keyframes gallop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes legSwitch1 {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }

        @keyframes legSwitch2 {
          0%, 50% { opacity: 0; }
          50.01%, 100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
