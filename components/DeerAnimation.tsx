"use client";

import { useEffect, useState } from "react";

interface Deer {
  id: number;
  top: number;
  duration: number;
  size: number;
  direction: "left" | "right";
}

// 5-keyframe leaping deer animation
// Frame 1: Push-off (compressed, angled up 40°)
// Frame 2: Ascending (stretching, rising at 40°)
// Frame 3: Peak glide (fully stretched, horizontal)
// Frame 4: Descending (arching, falling at 40°)
// Frame 5: Landing prep (compressed, angled down 40°)
function LeapingDeer() {
  return (
    <svg viewBox="0 -60 230 180" className="deer-svg">
      {/* Frame 1 - Push-off: compressed body, back legs pushing, angled up 40° */}
      <g className="frame frame-1">
        <g transform="rotate(-40 100 50)">
          {/* Body - compressed */}
          <ellipse cx="100" cy="45" rx="38" ry="24" fill="#8B6914" />
          {/* Underbelly */}
          <ellipse cx="100" cy="50" rx="32" ry="4" fill="#F3CF7A" />
          {/* Haunch - bunched */}
          <ellipse cx="70" cy="48" rx="22" ry="20" fill="#8B6914" />
          {/* Shoulder */}
          <ellipse cx="125" cy="42" rx="16" ry="18" fill="#8B6914" />

          {/* Neck - curved up */}
          <path d="M135,38 Q148,25 155,15" stroke="#8B6914" strokeWidth="14" fill="none" strokeLinecap="round" />

          {/* Head - 30% larger */}
          <g transform="translate(162, 12) scale(1.3) translate(-162, -12)">
            <ellipse cx="162" cy="12" rx="14" ry="10" fill="#8B6914" />
            <ellipse cx="168" cy="14" rx="5" ry="4" fill="#F3CF7A" opacity="0.5" />
            <ellipse cx="175" cy="16" rx="5" ry="3.5" fill="#6B4423" />
            <ellipse cx="179" cy="16" rx="2" ry="1.5" fill="#222" />
            {/* Eye */}
            <ellipse cx="165" cy="9" rx="3.5" ry="4.5" fill="#1a1a1a" />
            <circle cx="166" cy="7" r="1.5" fill="#fff" />
            {/* Ear */}
            <ellipse cx="152" cy="2" rx="5" ry="13" fill="#8B6914" transform="rotate(15 152 2)" />
            <ellipse cx="152" cy="2" rx="2.5" ry="9" fill="#FFDAB9" transform="rotate(15 152 2)" />
          </g>

          {/* Tail - down */}
          <ellipse cx="55" cy="42" rx="5" ry="7" fill="#8B6914" transform="rotate(-20 55 42)" />
          <ellipse cx="53" cy="40" rx="3" ry="5" fill="#F3CF7A" transform="rotate(-20 53 40)" />

          {/* Back legs - bunched, pushing off ground */}
          <path d="M60,65 Q50,80 48,95" stroke="#6B4423" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M75,68 Q68,85 70,100" stroke="#6B4423" strokeWidth="7" fill="none" strokeLinecap="round" />

          {/* Front legs - lifting off */}
          <path d="M125,60 Q135,75 140,88" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M118,62 Q125,78 128,92" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Hooves */}
          <ellipse cx="48" cy="97" rx="3" ry="2" fill="#222" />
          <ellipse cx="70" cy="102" rx="3" ry="2" fill="#222" />
          <ellipse cx="140" cy="90" rx="3" ry="2" fill="#222" />
          <ellipse cx="128" cy="94" rx="3" ry="2" fill="#222" />
        </g>
      </g>

      {/* Frame 2 - Ascending: body stretching, rising at 40° */}
      <g className="frame frame-2">
        <g transform="rotate(-40 100 50)">
          {/* Body - stretching */}
          <ellipse cx="100" cy="42" rx="45" ry="20" fill="#8B6914" />
          {/* Underbelly */}
          <ellipse cx="100" cy="46" rx="38" ry="4" fill="#F3CF7A" />
          {/* Haunch */}
          <ellipse cx="62" cy="44" rx="20" ry="16" fill="#8B6914" />
          {/* Shoulder */}
          <ellipse cx="135" cy="40" rx="15" ry="15" fill="#8B6914" />

          {/* Neck - extended */}
          <path d="M145,35 Q160,20 170,8" stroke="#8B6914" strokeWidth="13" fill="none" strokeLinecap="round" />

          {/* Head - 30% larger */}
          <g transform="translate(178, 5) scale(1.3) translate(-178, -5)">
            <ellipse cx="178" cy="5" rx="13" ry="9" fill="#8B6914" />
            <ellipse cx="184" cy="7" rx="5" ry="4" fill="#F3CF7A" opacity="0.5" />
            <ellipse cx="191" cy="9" rx="5" ry="3.5" fill="#6B4423" />
            <ellipse cx="195" cy="9" rx="2" ry="1.5" fill="#222" />
            {/* Eye */}
            <ellipse cx="181" cy="3" rx="3.5" ry="4.5" fill="#1a1a1a" />
            <circle cx="182" cy="1" r="1.5" fill="#fff" />
            {/* Ear - back */}
            <ellipse cx="168" cy="-5" rx="5" ry="12" fill="#8B6914" transform="rotate(30 168 -5)" />
            <ellipse cx="168" cy="-5" rx="2.5" ry="8" fill="#FFDAB9" transform="rotate(30 168 -5)" />
          </g>

          {/* Tail - streaming */}
          <path d="M45,42 Q35,38 28,35" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="28" cy="35" rx="4" ry="3" fill="#F3CF7A" />

          {/* Back legs - extending behind */}
          <path d="M52,55 Q35,65 22,78" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M60,58 Q48,72 38,88" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Front legs - folding under */}
          <path d="M138,52 Q150,58 158,68" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M132,55 Q142,65 148,78" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Hooves */}
          <ellipse cx="22" cy="80" rx="3" ry="2" fill="#222" />
          <ellipse cx="38" cy="90" rx="3" ry="2" fill="#222" />
          <ellipse cx="158" cy="70" rx="3" ry="2" fill="#222" />
          <ellipse cx="148" cy="80" rx="3" ry="2" fill="#222" />
        </g>
      </g>

      {/* Frame 3 - Peak glide: fully stretched, horizontal (0°) */}
      <g className="frame frame-3">
        {/* Body - fully stretched */}
        <ellipse cx="100" cy="40" rx="50" ry="17" fill="#8B6914" />
        {/* Underbelly */}
        <ellipse cx="100" cy="44" rx="44" ry="3" fill="#F3CF7A" />
        {/* Haunch */}
        <ellipse cx="55" cy="42" rx="18" ry="14" fill="#8B6914" />
        {/* Shoulder */}
        <ellipse cx="142" cy="38" rx="14" ry="14" fill="#8B6914" />

        {/* Neck - extended forward */}
        <path d="M152,34 Q170,22 180,12" stroke="#8B6914" strokeWidth="12" fill="none" strokeLinecap="round" />

        {/* Head - 30% larger */}
        <g transform="translate(188, 8) scale(1.3) translate(-188, -8)">
          <ellipse cx="188" cy="8" rx="13" ry="9" fill="#8B6914" />
          <ellipse cx="194" cy="10" rx="5" ry="4" fill="#F3CF7A" opacity="0.5" />
          <ellipse cx="200" cy="12" rx="5" ry="3.5" fill="#6B4423" />
          <ellipse cx="204" cy="12" rx="2" ry="1.5" fill="#222" />
          {/* Eye */}
          <ellipse cx="191" cy="6" rx="3.5" ry="4.5" fill="#1a1a1a" />
          <circle cx="192" cy="4" r="1.5" fill="#fff" />
          {/* Ear */}
          <ellipse cx="178" cy="-2" rx="5" ry="12" fill="#8B6914" transform="rotate(35 178 -2)" />
          <ellipse cx="178" cy="-2" rx="2.5" ry="8" fill="#FFDAB9" transform="rotate(35 178 -2)" />
        </g>

        {/* Tail - streaming horizontal */}
        <path d="M38,40 Q25,38 15,36" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="15" cy="36" rx="4" ry="3" fill="#F3CF7A" />

        {/* Back legs - fully extended behind */}
        <path d="M45,52 Q25,62 8,75" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,54 Q35,68 20,85" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Front legs - fully extended forward */}
        <path d="M148,50 Q172,58 190,70" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M142,52 Q162,65 178,82" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* Hooves */}
        <ellipse cx="8" cy="77" rx="3" ry="2" fill="#222" />
        <ellipse cx="20" cy="87" rx="3" ry="2" fill="#222" />
        <ellipse cx="190" cy="72" rx="3" ry="2" fill="#222" />
        <ellipse cx="178" cy="84" rx="3" ry="2" fill="#222" />
      </g>

      {/* Frame 4 - Descending: body arching, falling at 40° */}
      <g className="frame frame-4">
        <g transform="rotate(40 100 50)">
          {/* Body - arching */}
          <ellipse cx="100" cy="42" rx="45" ry="20" fill="#8B6914" />
          {/* Underbelly */}
          <ellipse cx="100" cy="46" rx="38" ry="4" fill="#F3CF7A" />
          {/* Haunch - raised */}
          <ellipse cx="62" cy="40" rx="18" ry="16" fill="#8B6914" />
          {/* Shoulder */}
          <ellipse cx="135" cy="44" rx="15" ry="15" fill="#8B6914" />

          {/* Neck - angled down */}
          <path d="M145,42 Q158,32 165,25" stroke="#8B6914" strokeWidth="13" fill="none" strokeLinecap="round" />

          {/* Head - 30% larger */}
          <g transform="translate(172, 22) scale(1.3) translate(-172, -22)">
            <ellipse cx="172" cy="22" rx="13" ry="9" fill="#8B6914" />
            <ellipse cx="178" cy="24" rx="5" ry="4" fill="#F3CF7A" opacity="0.5" />
            <ellipse cx="185" cy="26" rx="5" ry="3.5" fill="#6B4423" />
            <ellipse cx="189" cy="26" rx="2" ry="1.5" fill="#222" />
            {/* Eye */}
            <ellipse cx="175" cy="19" rx="3.5" ry="4.5" fill="#1a1a1a" />
            <circle cx="176" cy="17" r="1.5" fill="#fff" />
            {/* Ear */}
            <ellipse cx="162" cy="12" rx="5" ry="12" fill="#8B6914" transform="rotate(10 162 12)" />
            <ellipse cx="162" cy="12" rx="2.5" ry="8" fill="#FFDAB9" transform="rotate(10 162 12)" />
          </g>

          {/* Tail - up high */}
          <path d="M45,38 Q38,28 35,18" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="35" cy="18" rx="4" ry="5" fill="#F3CF7A" />

          {/* Back legs - trailing up */}
          <path d="M52,52 Q38,45 28,35" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M58,55 Q48,50 42,42" stroke="#6B4423" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Front legs - reaching down */}
          <path d="M140,55 Q155,72 160,90" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M132,58 Q145,78 148,98" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Hooves */}
          <ellipse cx="28" cy="35" rx="3" ry="2" fill="#222" />
          <ellipse cx="42" cy="42" rx="3" ry="2" fill="#222" />
          <ellipse cx="160" cy="92" rx="3" ry="2" fill="#222" />
          <ellipse cx="148" cy="100" rx="3" ry="2" fill="#222" />
        </g>
      </g>

      {/* Frame 5 - Landing prep: compressed, angled down 40° */}
      <g className="frame frame-5">
        <g transform="rotate(40 100 50)">
          {/* Body - compressed for impact */}
          <ellipse cx="100" cy="45" rx="40" ry="22" fill="#8B6914" />
          {/* Underbelly */}
          <ellipse cx="100" cy="49" rx="34" ry="4" fill="#F3CF7A" />
          {/* Haunch - high */}
          <ellipse cx="68" cy="42" rx="20" ry="18" fill="#8B6914" />
          {/* Shoulder - low */}
          <ellipse cx="128" cy="48" rx="16" ry="16" fill="#8B6914" />

          {/* Neck - curved down */}
          <path d="M138,48 Q150,40 158,35" stroke="#8B6914" strokeWidth="14" fill="none" strokeLinecap="round" />

          {/* Head - 30% larger */}
          <g transform="translate(165, 32) scale(1.3) translate(-165, -32)">
            <ellipse cx="165" cy="32" rx="13" ry="10" fill="#8B6914" />
            <ellipse cx="171" cy="34" rx="5" ry="4" fill="#F3CF7A" opacity="0.5" />
            <ellipse cx="178" cy="36" rx="5" ry="3.5" fill="#6B4423" />
            <ellipse cx="182" cy="36" rx="2" ry="1.5" fill="#222" />
            {/* Eye */}
            <ellipse cx="168" cy="29" rx="3.5" ry="4.5" fill="#1a1a1a" />
            <circle cx="169" cy="27" r="1.5" fill="#fff" />
            {/* Ear */}
            <ellipse cx="155" cy="22" rx="5" ry="12" fill="#8B6914" transform="rotate(5 155 22)" />
            <ellipse cx="155" cy="22" rx="2.5" ry="8" fill="#FFDAB9" transform="rotate(5 155 22)" />
          </g>

          {/* Tail - high up */}
          <path d="M52,38 Q42,25 38,15" stroke="#8B6914" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="38" cy="15" rx="4" ry="5" fill="#F3CF7A" />

          {/* Back legs - tucked up high */}
          <path d="M58,55 Q45,42 40,32" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M68,58 Q58,48 55,38" stroke="#6B4423" strokeWidth="6" fill="none" strokeLinecap="round" />

          {/* Front legs - reaching for ground */}
          <path d="M135,62 Q148,82 145,102" stroke="#6B4423" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M125,65 Q135,88 130,108" stroke="#6B4423" strokeWidth="7" fill="none" strokeLinecap="round" />

          {/* Hooves */}
          <ellipse cx="40" cy="32" rx="3" ry="2" fill="#222" />
          <ellipse cx="55" cy="38" rx="3" ry="2" fill="#222" />
          <ellipse cx="145" cy="104" rx="3" ry="2" fill="#222" />
          <ellipse cx="130" cy="110" rx="3" ry="2" fill="#222" />
        </g>
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
        top: Math.random() * 20 + 45,
        duration: Math.random() * 2 + 7,
        size: Math.random() * 0.3 + 0.7,
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
            // @ts-expect-error CSS custom properties
            "--deer-duration": `${deer.duration}s`,
            "--leap-duration": `${deer.duration * 0.4}s`,
          }}
        >
          <div style={{ transform: `scale(${deer.size})` }}>
            <LeapingDeer />
          </div>
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
          width: 320px;
          height: 280px;
          opacity: 0.9;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-right {
          left: -350px;
          animation-name: runRight;
        }

        .deer-left {
          right: -350px;
          animation-name: runLeft;
        }

        .deer-right .deer-svg {
          animation: leapBounceRight var(--deer-duration) linear forwards;
        }

        .deer-left .deer-svg {
          transform: scaleX(-1);
          animation: leapBounceLeft var(--deer-duration) linear forwards;
        }

        .deer-svg {
          width: 100%;
          height: 100%;
        }

        /* 5-frame animation cycle synced with leap phases */
        .frame {
          opacity: 0;
        }

        /* Frames synced with leap: each leap is 40% of total duration
           Frame 1: Push-off (0-20% of leap) - angled up
           Frame 2: Ascending (20-40% of leap) - angled up
           Frame 3: Peak glide (40-60% of leap) - level
           Frame 4: Descending (60-80% of leap) - angled down
           Frame 5: Landing (80-100% of leap) - angled down */
        .frame-1 { animation: frame5cycle var(--leap-duration) step-end infinite; }
        .frame-2 { animation: frame5cycle var(--leap-duration) step-end infinite; animation-delay: calc(var(--leap-duration) * -0.8); }
        .frame-3 { animation: frame5cycle var(--leap-duration) step-end infinite; animation-delay: calc(var(--leap-duration) * -0.6); }
        .frame-4 { animation: frame5cycle var(--leap-duration) step-end infinite; animation-delay: calc(var(--leap-duration) * -0.4); }
        .frame-5 { animation: frame5cycle var(--leap-duration) step-end infinite; animation-delay: calc(var(--leap-duration) * -0.2); }

        @keyframes frame5cycle {
          0%, 20% { opacity: 1; }
          20.01%, 100% { opacity: 0; }
        }

        @keyframes runRight {
          from { left: -350px; }
          to { left: calc(100% + 350px); }
        }

        @keyframes runLeft {
          from { right: -350px; }
          to { right: calc(100% + 350px); }
        }

        /* Vertical bounce synced with 5-frame leap cycle - 2 leaps across screen
           Each leap = 40% of duration, matching frame cycle:
           0-8%: push-off (frame 1, ground to start rising)
           8-16%: ascending (frame 2, rising)
           16-24%: peak (frame 3, at top)
           24-32%: descending (frame 4, falling)
           32-40%: landing (frame 5, back to ground) */
        @keyframes leapBounceRight {
          /* Leap 1 */
          0% { transform: translateY(0); }
          8% { transform: translateY(-60px); }
          16% { transform: translateY(-140px); }
          20% { transform: translateY(-160px); }
          24% { transform: translateY(-140px); }
          32% { transform: translateY(-60px); }
          40% { transform: translateY(0); }
          /* Pause */
          50% { transform: translateY(0); }
          /* Leap 2 */
          58% { transform: translateY(-60px); }
          66% { transform: translateY(-140px); }
          70% { transform: translateY(-160px); }
          74% { transform: translateY(-140px); }
          82% { transform: translateY(-60px); }
          90% { transform: translateY(0); }
          100% { transform: translateY(0); }
        }

        @keyframes leapBounceLeft {
          /* Leap 1 */
          0% { transform: scaleX(-1) translateY(0); }
          8% { transform: scaleX(-1) translateY(-60px); }
          16% { transform: scaleX(-1) translateY(-140px); }
          20% { transform: scaleX(-1) translateY(-160px); }
          24% { transform: scaleX(-1) translateY(-140px); }
          32% { transform: scaleX(-1) translateY(-60px); }
          40% { transform: scaleX(-1) translateY(0); }
          /* Pause */
          50% { transform: scaleX(-1) translateY(0); }
          /* Leap 2 */
          58% { transform: scaleX(-1) translateY(-60px); }
          66% { transform: scaleX(-1) translateY(-140px); }
          70% { transform: scaleX(-1) translateY(-160px); }
          74% { transform: scaleX(-1) translateY(-140px); }
          82% { transform: scaleX(-1) translateY(-60px); }
          90% { transform: scaleX(-1) translateY(0); }
          100% { transform: scaleX(-1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
