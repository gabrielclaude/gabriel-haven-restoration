"use client";

import { useEffect, useState } from "react";

type DeerType = "gallop" | "bound" | "banking";

interface Deer {
  id: number;
  top: number;
  duration: number;
  size: number;
  direction: "left" | "right";
  type: DeerType;
}

// No. 1 GALLOP - Fast running deer with full leg extension
function GallopingDeer() {
  return (
    <svg viewBox="0 0 120 80" className="deer-svg">
      {/* Frame A - Front legs forward, back legs back */}
      <g className="frame frame-1">
        {/* Body - slender fawn shape */}
        <ellipse cx="55" cy="35" rx="25" ry="14" fill="#C9A86C" />
        {/* Lighter underbelly */}
        <ellipse cx="55" cy="40" rx="20" ry="8" fill="#E8D5B5" />
        {/* Neck - curved elegantly */}
        <path d="M75,30 Q85,20 88,12" stroke="#C9A86C" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* Head - delicate deer head */}
        <ellipse cx="92" cy="10" rx="8" ry="6" fill="#C9A86C" />
        {/* Snout */}
        <ellipse cx="100" cy="12" rx="4" ry="2.5" fill="#8B7355" />
        {/* Nose */}
        <circle cx="103" cy="12" r="1.5" fill="#333" />
        {/* Ear - alert, forward */}
        <ellipse cx="88" cy="3" rx="3" ry="7" fill="#C9A86C" transform="rotate(-15 88 3)" />
        <ellipse cx="88" cy="3" rx="1.5" ry="5" fill="#E8D5B5" transform="rotate(-15 88 3)" />
        {/* Eye */}
        <circle cx="94" cy="8" r="2" fill="#222" />
        <circle cx="94.5" cy="7.5" r="0.5" fill="#fff" />
        {/* Small tail - up */}
        <ellipse cx="28" cy="32" rx="4" ry="5" fill="#C9A86C" transform="rotate(-20 28 32)" />
        {/* Front legs - stretched forward */}
        <path d="M70,44 Q82,52 90,65 L92,72" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M65,46 Q75,55 82,68 L84,75" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Back legs - stretched back */}
        <path d="M42,44 Q32,55 25,68 L22,75" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M38,46 Q28,58 20,70 L17,77" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Hooves */}
        <ellipse cx="92" cy="74" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="84" cy="77" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="22" cy="77" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="17" cy="79" rx="2" ry="1.5" fill="#4A3728" />
      </g>

      {/* Frame B - Suspended in air, legs tucking */}
      <g className="frame frame-2">
        <ellipse cx="55" cy="32" rx="25" ry="14" fill="#C9A86C" />
        <ellipse cx="55" cy="37" rx="20" ry="8" fill="#E8D5B5" />
        <path d="M75,27 Q85,17 90,10" stroke="#C9A86C" strokeWidth="10" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="8" rx="8" ry="6" fill="#C9A86C" />
        <ellipse cx="102" cy="10" rx="4" ry="2.5" fill="#8B7355" />
        <circle cx="105" cy="10" r="1.5" fill="#333" />
        <ellipse cx="90" cy="1" rx="3" ry="7" fill="#C9A86C" transform="rotate(-10 90 1)" />
        <ellipse cx="90" cy="1" rx="1.5" ry="5" fill="#E8D5B5" transform="rotate(-10 90 1)" />
        <circle cx="96" cy="6" r="2" fill="#222" />
        <circle cx="96.5" cy="5.5" r="0.5" fill="#fff" />
        <ellipse cx="28" cy="29" rx="4" ry="5" fill="#C9A86C" transform="rotate(-25 28 29)" />
        {/* Legs tucking under body */}
        <path d="M68,42 Q72,50 74,60 L74,68" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M62,44 Q65,52 66,62 L66,70" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M45,42 Q42,52 40,62 L38,70" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M40,44 Q36,54 34,64 L32,72" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="74" cy="70" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="66" cy="72" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="38" cy="72" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="32" cy="74" rx="2" ry="1.5" fill="#4A3728" />
      </g>

      {/* Frame C - Legs gathered under, body compressed */}
      <g className="frame frame-3">
        <ellipse cx="55" cy="34" rx="24" ry="15" fill="#C9A86C" />
        <ellipse cx="55" cy="40" rx="19" ry="9" fill="#E8D5B5" />
        <path d="M74,28 Q82,18 86,12" stroke="#C9A86C" strokeWidth="10" fill="none" strokeLinecap="round" />
        <ellipse cx="90" cy="10" rx="8" ry="6" fill="#C9A86C" />
        <ellipse cx="98" cy="12" rx="4" ry="2.5" fill="#8B7355" />
        <circle cx="101" cy="12" r="1.5" fill="#333" />
        <ellipse cx="86" cy="3" rx="3" ry="7" fill="#C9A86C" transform="rotate(-5 86 3)" />
        <ellipse cx="86" cy="3" rx="1.5" ry="5" fill="#E8D5B5" transform="rotate(-5 86 3)" />
        <circle cx="92" cy="8" r="2" fill="#222" />
        <circle cx="92.5" cy="7.5" r="0.5" fill="#fff" />
        <ellipse cx="30" cy="32" rx="4" ry="5" fill="#C9A86C" transform="rotate(-15 30 32)" />
        {/* All legs bunched under */}
        <path d="M60,46 Q58,58 55,70" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M55,48 Q52,60 50,72" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M50,46 Q48,58 46,70" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M45,48 Q43,60 42,72" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="55" cy="72" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="50" cy="74" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="46" cy="72" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="42" cy="74" rx="2" ry="1.5" fill="#4A3728" />
      </g>

      {/* Frame D - Pushing off, back legs extending */}
      <g className="frame frame-4">
        <ellipse cx="55" cy="35" rx="25" ry="14" fill="#C9A86C" />
        <ellipse cx="55" cy="40" rx="20" ry="8" fill="#E8D5B5" />
        <path d="M75,30 Q85,20 88,12" stroke="#C9A86C" strokeWidth="10" fill="none" strokeLinecap="round" />
        <ellipse cx="92" cy="10" rx="8" ry="6" fill="#C9A86C" />
        <ellipse cx="100" cy="12" rx="4" ry="2.5" fill="#8B7355" />
        <circle cx="103" cy="12" r="1.5" fill="#333" />
        <ellipse cx="88" cy="3" rx="3" ry="7" fill="#C9A86C" transform="rotate(-15 88 3)" />
        <ellipse cx="88" cy="3" rx="1.5" ry="5" fill="#E8D5B5" transform="rotate(-15 88 3)" />
        <circle cx="94" cy="8" r="2" fill="#222" />
        <circle cx="94.5" cy="7.5" r="0.5" fill="#fff" />
        <ellipse cx="28" cy="32" rx="4" ry="5" fill="#C9A86C" transform="rotate(-20 28 32)" />
        {/* Front legs reaching, back legs pushing */}
        <path d="M72,44 Q80,50 86,60 L88,68" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M66,45 Q74,52 80,64 L82,72" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M40,44 Q30,58 22,72 L18,78" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M36,46 Q26,60 18,74 L14,80" stroke="#B8956A" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="88" cy="70" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="82" cy="74" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="18" cy="80" rx="2" ry="1.5" fill="#4A3728" />
        <ellipse cx="14" cy="82" rx="2" ry="1.5" fill="#4A3728" />
      </g>
    </svg>
  );
}

// No. 2 BOUND - Hopping/bounding motion
function BoundingDeer() {
  return (
    <svg viewBox="0 0 100 90" className="deer-svg">
      {/* Frame A - Gathered, about to spring */}
      <g className="frame frame-1">
        <ellipse cx="50" cy="42" rx="22" ry="16" fill="#C9A86C" />
        <ellipse cx="50" cy="50" rx="18" ry="10" fill="#E8D5B5" />
        <path d="M68,36 Q75,26 78,18" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="82" cy="15" rx="7" ry="5.5" fill="#C9A86C" />
        <ellipse cx="89" cy="17" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="91" cy="17" r="1.2" fill="#333" />
        <ellipse cx="78" cy="8" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-10 78 8)" />
        <ellipse cx="78" cy="8" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-10 78 8)" />
        <circle cx="84" cy="13" r="1.8" fill="#222" />
        <circle cx="84.5" cy="12.5" r="0.4" fill="#fff" />
        <ellipse cx="28" cy="40" rx="3" ry="4" fill="#C9A86C" />
        {/* Legs gathered under */}
        <path d="M58,55 Q56,68 54,78" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M52,56 Q50,70 48,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M44,55 Q42,68 40,78" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M38,54 Q36,66 34,76" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="54" cy="80" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="48" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="40" cy="80" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="34" cy="78" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame B - Launching up */}
      <g className="frame frame-2">
        <ellipse cx="50" cy="38" rx="22" ry="15" fill="#C9A86C" />
        <ellipse cx="50" cy="45" rx="18" ry="9" fill="#E8D5B5" />
        <path d="M68,32 Q76,22 80,14" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="84" cy="11" rx="7" ry="5.5" fill="#C9A86C" />
        <ellipse cx="91" cy="13" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="93" cy="13" r="1.2" fill="#333" />
        <ellipse cx="80" cy="4" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-15 80 4)" />
        <ellipse cx="80" cy="4" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-15 80 4)" />
        <circle cx="86" cy="9" r="1.8" fill="#222" />
        <circle cx="86.5" cy="8.5" r="0.4" fill="#fff" />
        <ellipse cx="28" cy="36" rx="3" ry="4" fill="#C9A86C" transform="rotate(-20 28 36)" />
        {/* Legs pushing off */}
        <path d="M60,50 Q65,60 68,72" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M54,52 Q58,64 60,76" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M42,52 Q38,66 34,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M36,54 Q30,68 26,82" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="68" cy="74" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="60" cy="78" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="34" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="26" cy="84" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame C - In the air */}
      <g className="frame frame-3">
        <ellipse cx="50" cy="32" rx="22" ry="14" fill="#C9A86C" />
        <ellipse cx="50" cy="38" rx="18" ry="8" fill="#E8D5B5" />
        <path d="M68,26 Q78,16 82,8" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="86" cy="5" rx="7" ry="5.5" fill="#C9A86C" />
        <ellipse cx="93" cy="7" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="95" cy="7" r="1.2" fill="#333" />
        <ellipse cx="82" cy="-2" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-20 82 -2)" />
        <ellipse cx="82" cy="-2" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-20 82 -2)" />
        <circle cx="88" cy="3" r="1.8" fill="#222" />
        <circle cx="88.5" cy="2.5" r="0.4" fill="#fff" />
        <ellipse cx="28" cy="30" rx="3" ry="4" fill="#C9A86C" transform="rotate(-25 28 30)" />
        {/* All legs tucked under */}
        <path d="M58,44 Q60,52 62,60" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M52,46 Q54,54 56,62" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M44,44 Q42,52 40,60" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M38,46 Q36,54 34,62" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="62" cy="62" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="56" cy="64" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="40" cy="62" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="34" cy="64" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame D - Coming down */}
      <g className="frame frame-4">
        <ellipse cx="50" cy="36" rx="22" ry="14" fill="#C9A86C" />
        <ellipse cx="50" cy="43" rx="18" ry="8" fill="#E8D5B5" />
        <path d="M68,30 Q76,20 80,12" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="84" cy="9" rx="7" ry="5.5" fill="#C9A86C" />
        <ellipse cx="91" cy="11" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="93" cy="11" r="1.2" fill="#333" />
        <ellipse cx="80" cy="2" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-12 80 2)" />
        <ellipse cx="80" cy="2" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-12 80 2)" />
        <circle cx="86" cy="7" r="1.8" fill="#222" />
        <circle cx="86.5" cy="6.5" r="0.4" fill="#fff" />
        <ellipse cx="28" cy="34" rx="3" ry="4" fill="#C9A86C" transform="rotate(-15 28 34)" />
        {/* Front legs reaching down, back legs trailing */}
        <path d="M60,48 Q64,60 66,74" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M54,50 Q56,64 58,78" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M42,48 Q38,58 36,68" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M36,50 Q32,60 30,70" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="66" cy="76" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="58" cy="80" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="36" cy="70" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="30" cy="72" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame E - Landing */}
      <g className="frame frame-5">
        <ellipse cx="50" cy="40" rx="22" ry="15" fill="#C9A86C" />
        <ellipse cx="50" cy="48" rx="18" ry="9" fill="#E8D5B5" />
        <path d="M68,34 Q75,24 78,16" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="82" cy="13" rx="7" ry="5.5" fill="#C9A86C" />
        <ellipse cx="89" cy="15" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="91" cy="15" r="1.2" fill="#333" />
        <ellipse cx="78" cy="6" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-8 78 6)" />
        <ellipse cx="78" cy="6" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-8 78 6)" />
        <circle cx="84" cy="11" r="1.8" fill="#222" />
        <circle cx="84.5" cy="10.5" r="0.4" fill="#fff" />
        <ellipse cx="28" cy="38" rx="3" ry="4" fill="#C9A86C" />
        {/* Front legs landed, back legs coming down */}
        <path d="M62,54 Q62,66 60,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M56,56 Q54,68 52,82" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M44,55 Q40,68 38,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M38,56 Q34,70 32,82" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="60" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="52" cy="84" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="38" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="32" cy="84" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>
    </svg>
  );
}

// No. 3 BANKING AT BOUND - Dramatic leaping with banking motion
function BankingDeer() {
  return (
    <svg viewBox="0 0 110 85" className="deer-svg">
      {/* Frame 1 - Crouched, about to leap */}
      <g className="frame frame-1">
        <ellipse cx="55" cy="45" rx="24" ry="16" fill="#C9A86C" transform="rotate(-15 55 45)" />
        <ellipse cx="55" cy="52" rx="19" ry="10" fill="#E8D5B5" transform="rotate(-15 55 52)" />
        <path d="M72,38 Q80,28 85,20" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="88" cy="17" rx="7" ry="5" fill="#C9A86C" />
        <ellipse cx="95" cy="19" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="97" cy="19" r="1.2" fill="#333" />
        <ellipse cx="84" cy="10" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-20 84 10)" />
        <ellipse cx="84" cy="10" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-20 84 10)" />
        <circle cx="90" cy="15" r="1.8" fill="#222" />
        <circle cx="90.5" cy="14.5" r="0.4" fill="#fff" />
        <ellipse cx="32" cy="42" rx="3" ry="4" fill="#C9A86C" />
        {/* Legs coiled for launch */}
        <path d="M48,58 Q42,68 38,78" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M54,60 Q50,70 46,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M62,56 Q58,66 55,76" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M68,54 Q65,64 62,74" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="38" cy="80" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="46" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="55" cy="78" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="62" cy="76" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame 2 - Launching, body tilting */}
      <g className="frame frame-2">
        <ellipse cx="55" cy="38" rx="24" ry="15" fill="#C9A86C" transform="rotate(-25 55 38)" />
        <ellipse cx="55" cy="44" rx="19" ry="9" fill="#E8D5B5" transform="rotate(-25 55 44)" />
        <path d="M72,30 Q82,18 88,10" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="92" cy="7" rx="7" ry="5" fill="#C9A86C" />
        <ellipse cx="99" cy="9" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="101" cy="9" r="1.2" fill="#333" />
        <ellipse cx="88" cy="0" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-30 88 0)" />
        <ellipse cx="88" cy="0" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-30 88 0)" />
        <circle cx="94" cy="5" r="1.8" fill="#222" />
        <circle cx="94.5" cy="4.5" r="0.4" fill="#fff" />
        <ellipse cx="32" cy="35" rx="3" ry="4" fill="#C9A86C" transform="rotate(-30 32 35)" />
        {/* Back legs pushing hard, front tucking */}
        <path d="M40,52 Q32,68 25,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M46,54 Q40,70 34,82" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M66,48 Q70,56 72,64" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M72,46 Q78,52 82,60" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="25" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="34" cy="84" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="72" cy="66" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="82" cy="62" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame 3 - Peak of leap, body arched */}
      <g className="frame frame-3">
        <ellipse cx="55" cy="30" rx="25" ry="14" fill="#C9A86C" transform="rotate(-10 55 30)" />
        <ellipse cx="55" cy="36" rx="20" ry="8" fill="#E8D5B5" transform="rotate(-10 55 36)" />
        <path d="M75,24 Q85,12 92,5" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="96" cy="3" rx="7" ry="5" fill="#C9A86C" />
        <ellipse cx="103" cy="5" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="105" cy="5" r="1.2" fill="#333" />
        <ellipse cx="92" cy="-4" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-25 92 -4)" />
        <ellipse cx="92" cy="-4" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-25 92 -4)" />
        <circle cx="98" cy="1" r="1.8" fill="#222" />
        <circle cx="98.5" cy="0.5" r="0.4" fill="#fff" />
        <ellipse cx="30" cy="28" rx="3" ry="4" fill="#C9A86C" transform="rotate(-15 30 28)" />
        {/* All legs stretched and trailing */}
        <path d="M38,44 Q30,52 22,60" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M44,46 Q38,54 32,62" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M68,42 Q76,48 84,54" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M74,40 Q84,44 94,50" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="62" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="32" cy="64" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="84" cy="56" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="94" cy="52" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame 4 - Descending, front legs reaching */}
      <g className="frame frame-4">
        <ellipse cx="55" cy="36" rx="24" ry="14" fill="#C9A86C" transform="rotate(5 55 36)" />
        <ellipse cx="55" cy="42" rx="19" ry="9" fill="#E8D5B5" transform="rotate(5 55 42)" />
        <path d="M74,30 Q82,20 88,14" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="92" cy="11" rx="7" ry="5" fill="#C9A86C" />
        <ellipse cx="99" cy="13" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="101" cy="13" r="1.2" fill="#333" />
        <ellipse cx="88" cy="4" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-15 88 4)" />
        <ellipse cx="88" cy="4" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-15 88 4)" />
        <circle cx="94" cy="9" r="1.8" fill="#222" />
        <circle cx="94.5" cy="8.5" r="0.4" fill="#fff" />
        <ellipse cx="32" cy="34" rx="3" ry="4" fill="#C9A86C" transform="rotate(5 32 34)" />
        {/* Front legs reaching down, back legs up */}
        <path d="M42,50 Q38,62 35,76" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M48,52 Q46,66 44,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M64,48 Q72,54 80,62" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M70,46 Q80,50 90,56" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="35" cy="78" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="44" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="80" cy="64" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="90" cy="58" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>

      {/* Frame 5 - Landing, absorbing impact */}
      <g className="frame frame-5">
        <ellipse cx="55" cy="42" rx="24" ry="15" fill="#C9A86C" transform="rotate(10 55 42)" />
        <ellipse cx="55" cy="50" rx="19" ry="10" fill="#E8D5B5" transform="rotate(10 55 50)" />
        <path d="M72,36 Q78,26 82,20" stroke="#C9A86C" strokeWidth="9" fill="none" strokeLinecap="round" />
        <ellipse cx="86" cy="17" rx="7" ry="5" fill="#C9A86C" />
        <ellipse cx="93" cy="19" rx="3.5" ry="2" fill="#8B7355" />
        <circle cx="95" cy="19" r="1.2" fill="#333" />
        <ellipse cx="82" cy="10" rx="2.5" ry="6" fill="#C9A86C" transform="rotate(-10 82 10)" />
        <ellipse cx="82" cy="10" rx="1.2" ry="4" fill="#E8D5B5" transform="rotate(-10 82 10)" />
        <circle cx="88" cy="15" r="1.8" fill="#222" />
        <circle cx="88.5" cy="14.5" r="0.4" fill="#fff" />
        <ellipse cx="32" cy="40" rx="3" ry="4" fill="#C9A86C" transform="rotate(10 32 40)" />
        {/* Front legs bent absorbing, back legs coming down */}
        <path d="M44,56 Q40,68 38,80" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M50,58 Q48,70 46,82" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M62,54 Q68,64 74,74" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M68,52 Q76,62 84,72" stroke="#B8956A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <ellipse cx="38" cy="82" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="46" cy="84" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="74" cy="76" rx="1.8" ry="1.2" fill="#4A3728" />
        <ellipse cx="84" cy="74" rx="1.8" ry="1.2" fill="#4A3728" />
      </g>
    </svg>
  );
}

export default function DeerAnimation() {
  const [deers, setDeers] = useState<Deer[]>([]);

  useEffect(() => {
    const spawnDeer = () => {
      const types: DeerType[] = ["gallop", "bound", "banking"];
      const type = types[Math.floor(Math.random() * types.length)];

      const newDeer: Deer = {
        id: Date.now(),
        top: Math.random() * 35 + 35,
        duration: type === "gallop" ? Math.random() * 2 + 4 : Math.random() * 3 + 5,
        size: Math.random() * 0.4 + 0.6,
        direction: Math.random() > 0.5 ? "left" : "right",
        type,
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

  const renderDeer = (type: DeerType) => {
    switch (type) {
      case "gallop":
        return <GallopingDeer />;
      case "bound":
        return <BoundingDeer />;
      case "banking":
        return <BankingDeer />;
    }
  };

  return (
    <div className="deer-container" aria-hidden="true">
      {deers.map((deer) => (
        <div
          key={deer.id}
          className={`deer deer-${deer.type} ${deer.direction === "left" ? "deer-left" : "deer-right"}`}
          style={{
            top: `${deer.top}%`,
            animationDuration: `${deer.duration}s`,
            transform: `scale(${deer.size})`,
          }}
        >
          {renderDeer(deer.type)}
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
          opacity: 0.8;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-gallop {
          width: 100px;
          height: 67px;
        }

        .deer-bound {
          width: 85px;
          height: 77px;
        }

        .deer-banking {
          width: 95px;
          height: 73px;
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

        /* Frame animation - show one frame at a time */
        .frame {
          opacity: 0;
        }

        /* Gallop - 4 frames, fast */
        .deer-gallop .frame-1 { animation: frame4 0.32s step-end infinite; animation-delay: 0s; }
        .deer-gallop .frame-2 { animation: frame4 0.32s step-end infinite; animation-delay: -0.24s; }
        .deer-gallop .frame-3 { animation: frame4 0.32s step-end infinite; animation-delay: -0.16s; }
        .deer-gallop .frame-4 { animation: frame4 0.32s step-end infinite; animation-delay: -0.08s; }

        /* Bound - 5 frames, moderate */
        .deer-bound .frame-1 { animation: frame5 0.5s step-end infinite; animation-delay: 0s; }
        .deer-bound .frame-2 { animation: frame5 0.5s step-end infinite; animation-delay: -0.4s; }
        .deer-bound .frame-3 { animation: frame5 0.5s step-end infinite; animation-delay: -0.3s; }
        .deer-bound .frame-4 { animation: frame5 0.5s step-end infinite; animation-delay: -0.2s; }
        .deer-bound .frame-5 { animation: frame5 0.5s step-end infinite; animation-delay: -0.1s; }

        /* Banking - 5 frames, dramatic */
        .deer-banking .frame-1 { animation: frame5 0.55s step-end infinite; animation-delay: 0s; }
        .deer-banking .frame-2 { animation: frame5 0.55s step-end infinite; animation-delay: -0.44s; }
        .deer-banking .frame-3 { animation: frame5 0.55s step-end infinite; animation-delay: -0.33s; }
        .deer-banking .frame-4 { animation: frame5 0.55s step-end infinite; animation-delay: -0.22s; }
        .deer-banking .frame-5 { animation: frame5 0.55s step-end infinite; animation-delay: -0.11s; }

        @keyframes frame4 {
          0%, 25% { opacity: 1; }
          25.01%, 100% { opacity: 0; }
        }

        @keyframes frame5 {
          0%, 20% { opacity: 1; }
          20.01%, 100% { opacity: 0; }
        }

        @keyframes runRight {
          from { left: -120px; }
          to { left: calc(100% + 120px); }
        }

        @keyframes runLeft {
          from { right: -120px; }
          to { right: calc(100% + 120px); }
        }
      `}</style>
    </div>
  );
}
