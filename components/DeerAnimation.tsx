"use client";

import { useEffect, useState } from "react";

type DeerType = "whitetail" | "mule" | "hybrid";

interface Deer {
  id: number;
  top: number;
  duration: number;
  size: number;
  direction: "left" | "right";
  type: DeerType;
}

// White-tailed Deer - fast galloping
function WhitetailDeer() {
  return (
    <svg viewBox="0 0 140 90" className="deer-svg">
      {/* Frame 1 - Extended gallop */}
      <g className="frame frame-1">
        {/* Body */}
        <ellipse cx="70" cy="40" rx="32" ry="18" fill="#C4875A" />
        {/* White underbelly */}
        <ellipse cx="70" cy="48" rx="28" ry="10" fill="#F5F5DC" />
        {/* Neck */}
        <path d="M95,32 Q105,22 108,18" stroke="#C4875A" strokeWidth="12" fill="none" strokeLinecap="round" />
        {/* Head */}
        <ellipse cx="112" cy="16" rx="10" ry="7" fill="#C4875A" />
        {/* Snout */}
        <ellipse cx="122" cy="18" rx="5" ry="3" fill="#A06840" />
        {/* Ear */}
        <ellipse cx="108" cy="8" rx="3" ry="6" fill="#C4875A" />
        {/* Antlers */}
        <path d="M106,6 L102,-2 L98,2 M102,-2 L100,-8 M106,6 L108,-1 L112,3 M108,-1 L110,-7" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Eye */}
        <circle cx="115" cy="14" r="1.5" fill="#222" />
        {/* White tail - raised */}
        <ellipse cx="36" cy="35" rx="6" ry="8" fill="white" />
        {/* Legs - extended gallop */}
        <path d="M48,54 L30,75 L28,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M58,55 L70,72 L72,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M82,54 L75,75 L73,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M92,52 L110,68 L118,75" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Hooves */}
        <circle cx="28" cy="83" r="2" fill="#222" />
        <circle cx="72" cy="83" r="2" fill="#222" />
        <circle cx="73" cy="83" r="2" fill="#222" />
        <circle cx="118" cy="76" r="2" fill="#222" />
      </g>

      {/* Frame 2 - Legs coming together */}
      <g className="frame frame-2">
        <ellipse cx="70" cy="38" rx="32" ry="18" fill="#C4875A" />
        <ellipse cx="70" cy="46" rx="28" ry="10" fill="#F5F5DC" />
        <path d="M95,30 Q105,20 108,16" stroke="#C4875A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="112" cy="14" rx="10" ry="7" fill="#C4875A" />
        <ellipse cx="122" cy="16" rx="5" ry="3" fill="#A06840" />
        <ellipse cx="108" cy="6" rx="3" ry="6" fill="#C4875A" />
        <path d="M106,4 L102,-4 L98,0 M102,-4 L100,-10 M106,4 L108,-3 L112,1 M108,-3 L110,-9" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="115" cy="12" r="1.5" fill="#222" />
        <ellipse cx="36" cy="33" rx="6" ry="8" fill="white" />
        {/* Legs - tucking under */}
        <path d="M50,52 L45,70 L42,80" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M60,53 L62,72 L64,80" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M80,52 L82,72 L84,80" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M90,50 L95,68 L98,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="42" cy="81" r="2" fill="#222" />
        <circle cx="64" cy="81" r="2" fill="#222" />
        <circle cx="84" cy="81" r="2" fill="#222" />
        <circle cx="98" cy="79" r="2" fill="#222" />
      </g>

      {/* Frame 3 - Legs crossed under */}
      <g className="frame frame-3">
        <ellipse cx="70" cy="35" rx="32" ry="18" fill="#C4875A" />
        <ellipse cx="70" cy="43" rx="28" ry="10" fill="#F5F5DC" />
        <path d="M95,27 Q105,17 108,13" stroke="#C4875A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="112" cy="11" rx="10" ry="7" fill="#C4875A" />
        <ellipse cx="122" cy="13" rx="5" ry="3" fill="#A06840" />
        <ellipse cx="108" cy="3" rx="3" ry="6" fill="#C4875A" />
        <path d="M106,1 L102,-7 L98,-3 M102,-7 L100,-13 M106,1 L108,-6 L112,-2 M108,-6 L110,-12" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="115" cy="9" r="1.5" fill="#222" />
        <ellipse cx="36" cy="30" rx="6" ry="8" fill="white" />
        {/* Legs - bunched under body */}
        <path d="M55,50 L52,68 L50,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M62,50 L65,68 L68,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M78,50 L75,68 L72,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M85,48 L88,66 L90,76" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="50" cy="79" r="2" fill="#222" />
        <circle cx="68" cy="79" r="2" fill="#222" />
        <circle cx="72" cy="79" r="2" fill="#222" />
        <circle cx="90" cy="77" r="2" fill="#222" />
      </g>

      {/* Frame 4 - Pushing off */}
      <g className="frame frame-4">
        <ellipse cx="70" cy="38" rx="32" ry="18" fill="#C4875A" />
        <ellipse cx="70" cy="46" rx="28" ry="10" fill="#F5F5DC" />
        <path d="M95,30 Q105,20 108,16" stroke="#C4875A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="112" cy="14" rx="10" ry="7" fill="#C4875A" />
        <ellipse cx="122" cy="16" rx="5" ry="3" fill="#A06840" />
        <ellipse cx="108" cy="6" rx="3" ry="6" fill="#C4875A" />
        <path d="M106,4 L102,-4 L98,0 M102,-4 L100,-10 M106,4 L108,-3 L112,1 M108,-3 L110,-9" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="115" cy="12" r="1.5" fill="#222" />
        <ellipse cx="36" cy="33" rx="6" ry="8" fill="white" />
        {/* Legs - pushing back */}
        <path d="M48,52 L35,72 L30,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M58,53 L50,75 L45,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M82,52 L90,70 L95,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M92,50 L105,65 L112,72" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="83" r="2" fill="#222" />
        <circle cx="45" cy="83" r="2" fill="#222" />
        <circle cx="95" cy="79" r="2" fill="#222" />
        <circle cx="112" cy="73" r="2" fill="#222" />
      </g>

      {/* Frame 5 - Full extension again */}
      <g className="frame frame-5">
        <ellipse cx="70" cy="40" rx="32" ry="18" fill="#C4875A" />
        <ellipse cx="70" cy="48" rx="28" ry="10" fill="#F5F5DC" />
        <path d="M95,32 Q105,22 108,18" stroke="#C4875A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="112" cy="16" rx="10" ry="7" fill="#C4875A" />
        <ellipse cx="122" cy="18" rx="5" ry="3" fill="#A06840" />
        <ellipse cx="108" cy="8" rx="3" ry="6" fill="#C4875A" />
        <path d="M106,6 L102,-2 L98,2 M102,-2 L100,-8 M106,6 L108,-1 L112,3 M108,-1 L110,-7" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="115" cy="14" r="1.5" fill="#222" />
        <ellipse cx="36" cy="35" rx="6" ry="8" fill="white" />
        <path d="M45,54 L25,78 L20,85" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M55,55 L40,78 L35,85" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M85,52 L100,70 L108,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M95,50 L115,62 L125,68" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="86" r="2" fill="#222" />
        <circle cx="35" cy="86" r="2" fill="#222" />
        <circle cx="108" cy="79" r="2" fill="#222" />
        <circle cx="125" cy="69" r="2" fill="#222" />
      </g>
    </svg>
  );
}

// Mule Deer - walking/trotting
function MuleDeer() {
  return (
    <svg viewBox="0 0 120 100" className="deer-svg">
      {/* Frame 1 */}
      <g className="frame frame-1">
        <ellipse cx="60" cy="45" rx="28" ry="20" fill="#A0785A" />
        <ellipse cx="60" cy="55" rx="24" ry="12" fill="#F5F5DC" />
        <path d="M82,38 Q88,28 90,22" stroke="#A0785A" strokeWidth="14" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="18" rx="10" ry="8" fill="#A0785A" />
        <ellipse cx="104" cy="20" rx="5" ry="3" fill="#806050" />
        <ellipse cx="88" cy="8" rx="4" ry="8" fill="#A0785A" />
        <ellipse cx="96" cy="10" rx="4" ry="7" fill="#A0785A" />
        {/* Larger mule deer antlers */}
        <path d="M86,4 L80,-8 L76,-2 M80,-8 L78,-16 L74,-10 M80,-8 L84,-14" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M94,5 L100,-7 L104,-1 M100,-7 L102,-15 L106,-9 M100,-7 L96,-13" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="16" r="2" fill="#222" />
        <ellipse cx="32" cy="50" rx="4" ry="3" fill="#333" />
        {/* Walking legs */}
        <path d="M42,62 L38,80 L36,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,64 L58,82 L60,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68,63 L64,82 L62,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M78,60 L82,78 L85,88" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="36" cy="92" r="3" fill="#222" />
        <ellipse cx="60" cy="94" r="3" fill="#222" />
        <ellipse cx="62" cy="94" r="3" fill="#222" />
        <ellipse cx="85" cy="90" r="3" fill="#222" />
      </g>

      {/* Frame 2 */}
      <g className="frame frame-2">
        <ellipse cx="60" cy="45" rx="28" ry="20" fill="#A0785A" />
        <ellipse cx="60" cy="55" rx="24" ry="12" fill="#F5F5DC" />
        <path d="M82,38 Q88,28 90,22" stroke="#A0785A" strokeWidth="14" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="18" rx="10" ry="8" fill="#A0785A" />
        <ellipse cx="104" cy="20" rx="5" ry="3" fill="#806050" />
        <ellipse cx="88" cy="8" rx="4" ry="8" fill="#A0785A" />
        <ellipse cx="96" cy="10" rx="4" ry="7" fill="#A0785A" />
        <path d="M86,4 L80,-8 L76,-2 M80,-8 L78,-16 L74,-10 M80,-8 L84,-14" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M94,5 L100,-7 L104,-1 M100,-7 L102,-15 L106,-9 M100,-7 L96,-13" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="16" r="2" fill="#222" />
        <ellipse cx="32" cy="50" rx="4" ry="3" fill="#333" />
        <path d="M42,62 L44,82 L45,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,64 L48,82 L46,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68,63 L72,82 L74,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M78,60 L76,80 L75,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="45" cy="94" r="3" fill="#222" />
        <ellipse cx="46" cy="94" r="3" fill="#222" />
        <ellipse cx="74" cy="94" r="3" fill="#222" />
        <ellipse cx="75" cy="92" r="3" fill="#222" />
      </g>

      {/* Frame 3 */}
      <g className="frame frame-3">
        <ellipse cx="60" cy="45" rx="28" ry="20" fill="#A0785A" />
        <ellipse cx="60" cy="55" rx="24" ry="12" fill="#F5F5DC" />
        <path d="M82,38 Q88,28 90,22" stroke="#A0785A" strokeWidth="14" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="18" rx="10" ry="8" fill="#A0785A" />
        <ellipse cx="104" cy="20" rx="5" ry="3" fill="#806050" />
        <ellipse cx="88" cy="8" rx="4" ry="8" fill="#A0785A" />
        <ellipse cx="96" cy="10" rx="4" ry="7" fill="#A0785A" />
        <path d="M86,4 L80,-8 L76,-2 M80,-8 L78,-16 L74,-10 M80,-8 L84,-14" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M94,5 L100,-7 L104,-1 M100,-7 L102,-15 L106,-9 M100,-7 L96,-13" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="16" r="2" fill="#222" />
        <ellipse cx="32" cy="50" rx="4" ry="3" fill="#333" />
        <path d="M42,62 L48,80 L52,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,64 L50,82 L50,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68,63 L68,82 L68,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M78,60 L72,80 L70,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="52" cy="92" r="3" fill="#222" />
        <ellipse cx="50" cy="94" r="3" fill="#222" />
        <ellipse cx="68" cy="94" r="3" fill="#222" />
        <ellipse cx="70" cy="92" r="3" fill="#222" />
      </g>

      {/* Frame 4 */}
      <g className="frame frame-4">
        <ellipse cx="60" cy="45" rx="28" ry="20" fill="#A0785A" />
        <ellipse cx="60" cy="55" rx="24" ry="12" fill="#F5F5DC" />
        <path d="M82,38 Q88,28 90,22" stroke="#A0785A" strokeWidth="14" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="18" rx="10" ry="8" fill="#A0785A" />
        <ellipse cx="104" cy="20" rx="5" ry="3" fill="#806050" />
        <ellipse cx="88" cy="8" rx="4" ry="8" fill="#A0785A" />
        <ellipse cx="96" cy="10" rx="4" ry="7" fill="#A0785A" />
        <path d="M86,4 L80,-8 L76,-2 M80,-8 L78,-16 L74,-10 M80,-8 L84,-14" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M94,5 L100,-7 L104,-1 M100,-7 L102,-15 L106,-9 M100,-7 L96,-13" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="16" r="2" fill="#222" />
        <ellipse cx="32" cy="50" rx="4" ry="3" fill="#333" />
        <path d="M42,62 L40,82 L38,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,64 L56,82 L58,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68,63 L66,82 L65,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M78,60 L80,80 L82,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="38" cy="94" r="3" fill="#222" />
        <ellipse cx="58" cy="94" r="3" fill="#222" />
        <ellipse cx="65" cy="94" r="3" fill="#222" />
        <ellipse cx="82" cy="92" r="3" fill="#222" />
      </g>

      {/* Frame 5 */}
      <g className="frame frame-5">
        <ellipse cx="60" cy="45" rx="28" ry="20" fill="#A0785A" />
        <ellipse cx="60" cy="55" rx="24" ry="12" fill="#F5F5DC" />
        <path d="M82,38 Q88,28 90,22" stroke="#A0785A" strokeWidth="14" fill="none" strokeLinecap="round" />
        <ellipse cx="94" cy="18" rx="10" ry="8" fill="#A0785A" />
        <ellipse cx="104" cy="20" rx="5" ry="3" fill="#806050" />
        <ellipse cx="88" cy="8" rx="4" ry="8" fill="#A0785A" />
        <ellipse cx="96" cy="10" rx="4" ry="7" fill="#A0785A" />
        <path d="M86,4 L80,-8 L76,-2 M80,-8 L78,-16 L74,-10 M80,-8 L84,-14" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M94,5 L100,-7 L104,-1 M100,-7 L102,-15 L106,-9 M100,-7 L96,-13" stroke="#5D4E37" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="16" r="2" fill="#222" />
        <ellipse cx="32" cy="50" rx="4" ry="3" fill="#333" />
        <path d="M42,62 L36,80 L34,90" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M52,64 L54,82 L55,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M68,63 L70,82 L72,92" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M78,60 L84,78 L88,88" stroke="#6B5344" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="34" cy="92" r="3" fill="#222" />
        <ellipse cx="55" cy="94" r="3" fill="#222" />
        <ellipse cx="72" cy="94" r="3" fill="#222" />
        <ellipse cx="88" cy="90" r="3" fill="#222" />
      </g>
    </svg>
  );
}

// Hybrid Deer - leaping/bounding
function HybridDeer() {
  return (
    <svg viewBox="0 0 130 110" className="deer-svg">
      {/* Frame 1 - Launching */}
      <g className="frame frame-1">
        <ellipse cx="65" cy="50" rx="30" ry="18" fill="#CD8B5A" />
        <ellipse cx="65" cy="58" rx="26" ry="10" fill="#F5F5DC" />
        <path d="M90,42 Q100,30 103,24" stroke="#CD8B5A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="20" rx="9" ry="7" fill="#CD8B5A" />
        <ellipse cx="116" cy="22" rx="4" ry="3" fill="#A06840" />
        <ellipse cx="102" cy="12" rx="3" ry="6" fill="#CD8B5A" />
        <path d="M100,8 L96,0 L93,4 M96,0 L94,-6 M100,8 L103,1 L106,5 M103,1 L105,-5" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="18" r="1.5" fill="#222" />
        <ellipse cx="35" cy="48" rx="5" ry="4" fill="white" />
        {/* Legs pushing off ground */}
        <path d="M45,64 L35,82 L32,95" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M55,66 L50,85 L48,98" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M75,64 L78,82 L80,95" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M85,62 L92,78 L98,90" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="97" r="2.5" fill="#222" />
        <circle cx="48" cy="100" r="2.5" fill="#222" />
        <circle cx="80" cy="97" r="2.5" fill="#222" />
        <circle cx="98" cy="92" r="2.5" fill="#222" />
      </g>

      {/* Frame 2 - Rising */}
      <g className="frame frame-2">
        <ellipse cx="65" cy="42" rx="30" ry="18" fill="#CD8B5A" />
        <ellipse cx="65" cy="50" rx="26" ry="10" fill="#F5F5DC" />
        <path d="M90,34 Q100,22 103,16" stroke="#CD8B5A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="12" rx="9" ry="7" fill="#CD8B5A" />
        <ellipse cx="116" cy="14" rx="4" ry="3" fill="#A06840" />
        <ellipse cx="102" cy="4" rx="3" ry="6" fill="#CD8B5A" />
        <path d="M100,0 L96,-8 L93,-4 M96,-8 L94,-14 M100,0 L103,-7 L106,-3 M103,-7 L105,-13" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="10" r="1.5" fill="#222" />
        <ellipse cx="35" cy="40" rx="5" ry="4" fill="white" />
        {/* Legs tucking */}
        <path d="M48,58 L42,72 L40,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M58,60 L55,75 L54,85" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M72,58 L75,72 L78,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M82,56 L88,68 L92,78" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="40" cy="84" r="2.5" fill="#222" />
        <circle cx="54" cy="87" r="2.5" fill="#222" />
        <circle cx="78" cy="84" r="2.5" fill="#222" />
        <circle cx="92" cy="80" r="2.5" fill="#222" />
      </g>

      {/* Frame 3 - Peak of leap */}
      <g className="frame frame-3">
        <ellipse cx="65" cy="35" rx="30" ry="18" fill="#CD8B5A" />
        <ellipse cx="65" cy="43" rx="26" ry="10" fill="#F5F5DC" />
        <path d="M90,27 Q100,15 103,9" stroke="#CD8B5A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="5" rx="9" ry="7" fill="#CD8B5A" />
        <ellipse cx="116" cy="7" rx="4" ry="3" fill="#A06840" />
        <ellipse cx="102" cy="-3" rx="3" ry="6" fill="#CD8B5A" />
        <path d="M100,-7 L96,-15 L93,-11 M96,-15 L94,-21 M100,-7 L103,-14 L106,-10 M103,-14 L105,-20" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="3" r="1.5" fill="#222" />
        <ellipse cx="35" cy="33" rx="5" ry="4" fill="white" />
        {/* Legs fully tucked */}
        <path d="M50,50 L48,62 L46,70" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M58,52 L58,64 L58,72" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M72,50 L72,62 L72,70" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M80,48 L82,60 L84,68" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="46" cy="72" r="2.5" fill="#222" />
        <circle cx="58" cy="74" r="2.5" fill="#222" />
        <circle cx="72" cy="72" r="2.5" fill="#222" />
        <circle cx="84" cy="70" r="2.5" fill="#222" />
      </g>

      {/* Frame 4 - Descending */}
      <g className="frame frame-4">
        <ellipse cx="65" cy="40" rx="30" ry="18" fill="#CD8B5A" />
        <ellipse cx="65" cy="48" rx="26" ry="10" fill="#F5F5DC" />
        <path d="M90,32 Q100,20 103,14" stroke="#CD8B5A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="10" rx="9" ry="7" fill="#CD8B5A" />
        <ellipse cx="116" cy="12" rx="4" ry="3" fill="#A06840" />
        <ellipse cx="102" cy="2" rx="3" ry="6" fill="#CD8B5A" />
        <path d="M100,-2 L96,-10 L93,-6 M96,-10 L94,-16 M100,-2 L103,-9 L106,-5 M103,-9 L105,-15" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="8" r="1.5" fill="#222" />
        <ellipse cx="35" cy="38" rx="5" ry="4" fill="white" />
        {/* Legs extending for landing */}
        <path d="M48,56 L40,74 L36,88" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M58,58 L52,78 L48,92" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M72,56 L78,74 L82,88" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M82,54 L92,70 L100,82" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="36" cy="90" r="2.5" fill="#222" />
        <circle cx="48" cy="94" r="2.5" fill="#222" />
        <circle cx="82" cy="90" r="2.5" fill="#222" />
        <circle cx="100" cy="84" r="2.5" fill="#222" />
      </g>

      {/* Frame 5 - Landing */}
      <g className="frame frame-5">
        <ellipse cx="65" cy="48" rx="30" ry="18" fill="#CD8B5A" />
        <ellipse cx="65" cy="56" rx="26" ry="10" fill="#F5F5DC" />
        <path d="M90,40 Q100,28 103,22" stroke="#CD8B5A" strokeWidth="12" fill="none" strokeLinecap="round" />
        <ellipse cx="107" cy="18" rx="9" ry="7" fill="#CD8B5A" />
        <ellipse cx="116" cy="20" rx="4" ry="3" fill="#A06840" />
        <ellipse cx="102" cy="10" rx="3" ry="6" fill="#CD8B5A" />
        <path d="M100,6 L96,-2 L93,2 M96,-2 L94,-8 M100,6 L103,-1 L106,3 M103,-1 L105,-7" stroke="#5D4E37" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="110" cy="16" r="1.5" fill="#222" />
        <ellipse cx="35" cy="46" rx="5" ry="4" fill="white" />
        {/* Front legs landing, back legs following */}
        <path d="M45,64 L38,82 L35,95" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M55,66 L48,85 L45,98" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M75,62 L82,78 L88,88" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M85,60 L96,72 L105,80" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="97" r="2.5" fill="#222" />
        <circle cx="45" cy="100" r="2.5" fill="#222" />
        <circle cx="88" cy="90" r="2.5" fill="#222" />
        <circle cx="105" cy="82" r="2.5" fill="#222" />
      </g>
    </svg>
  );
}

export default function DeerAnimation() {
  const [deers, setDeers] = useState<Deer[]>([]);

  useEffect(() => {
    const spawnDeer = () => {
      const types: DeerType[] = ["whitetail", "mule", "hybrid"];
      const type = types[Math.floor(Math.random() * types.length)];

      const newDeer: Deer = {
        id: Date.now(),
        top: Math.random() * 40 + 30,
        duration: type === "mule" ? Math.random() * 4 + 8 : Math.random() * 3 + 5,
        size: Math.random() * 0.3 + 0.7,
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
      case "whitetail":
        return <WhitetailDeer />;
      case "mule":
        return <MuleDeer />;
      case "hybrid":
        return <HybridDeer />;
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
          opacity: 0.75;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .deer-whitetail {
          width: 120px;
          height: 77px;
        }

        .deer-mule {
          width: 100px;
          height: 83px;
        }

        .deer-hybrid {
          width: 110px;
          height: 93px;
        }

        .deer-right {
          left: -150px;
          animation-name: runRight;
        }

        .deer-left {
          right: -150px;
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

        .deer-whitetail .frame-1 { animation: frame5 0.5s step-end infinite; animation-delay: 0s; }
        .deer-whitetail .frame-2 { animation: frame5 0.5s step-end infinite; animation-delay: -0.4s; }
        .deer-whitetail .frame-3 { animation: frame5 0.5s step-end infinite; animation-delay: -0.3s; }
        .deer-whitetail .frame-4 { animation: frame5 0.5s step-end infinite; animation-delay: -0.2s; }
        .deer-whitetail .frame-5 { animation: frame5 0.5s step-end infinite; animation-delay: -0.1s; }

        .deer-mule .frame-1 { animation: frame5 0.8s step-end infinite; animation-delay: 0s; }
        .deer-mule .frame-2 { animation: frame5 0.8s step-end infinite; animation-delay: -0.64s; }
        .deer-mule .frame-3 { animation: frame5 0.8s step-end infinite; animation-delay: -0.48s; }
        .deer-mule .frame-4 { animation: frame5 0.8s step-end infinite; animation-delay: -0.32s; }
        .deer-mule .frame-5 { animation: frame5 0.8s step-end infinite; animation-delay: -0.16s; }

        .deer-hybrid .frame-1 { animation: frame5 0.6s step-end infinite; animation-delay: 0s; }
        .deer-hybrid .frame-2 { animation: frame5 0.6s step-end infinite; animation-delay: -0.48s; }
        .deer-hybrid .frame-3 { animation: frame5 0.6s step-end infinite; animation-delay: -0.36s; }
        .deer-hybrid .frame-4 { animation: frame5 0.6s step-end infinite; animation-delay: -0.24s; }
        .deer-hybrid .frame-5 { animation: frame5 0.6s step-end infinite; animation-delay: -0.12s; }

        @keyframes frame5 {
          0%, 20% { opacity: 1; }
          20.01%, 100% { opacity: 0; }
        }

        @keyframes runRight {
          from { left: -150px; }
          to { left: calc(100% + 150px); }
        }

        @keyframes runLeft {
          from { right: -150px; }
          to { right: calc(100% + 150px); }
        }
      `}</style>
    </div>
  );
}
