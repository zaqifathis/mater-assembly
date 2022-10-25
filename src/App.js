import "./styles.css";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

import Model from "./Model";
import Picker from "./Picker";

const items = {};
for (let i = 0; i < 58; i++) {
  if (i < 1) {
    items[`strip${i}`] = "#FF0000";
  } else {
    items[`strip${i}`] = "#ffffff";
  }
}

const state = proxy({
  current: null,
  items,
});

export default function App() {
  const snap = useSnapshot(state);

  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered]);

  const handleClick = (event, name) => {
    event.stopPropagation();
    state.current = event.object.name;
  };

  const handlePointerOver = (event) => {
    event.stopPropagation();
    setHovered(event.object.name);
  };

  const handlePointerOut = (event) => {
    event.intersections.length === 0 && setHovered(null);
  };

  const handlePointerMissed = () => {
    state.current = null;
  };

  const handleColorChange = (event) => {
    state.items[snap.current] = event;
  };

  return (
    <div className="App">
      <h1 className="heading">Mater</h1>
      <h1 className="heading2">blob assembly</h1>
      <Canvas camera={{ position: [0, 200, 800], fov: 45 }}>
        <ambientLight castShadow intensity={0.1} />
        <spotLight
          castShadow
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[300, 1500, 800]}
        />
        <Suspense fallback={null}>
          <Model
            handleClick={handleClick}
            handlePointerOver={handlePointerOver}
            handlePointerOut={handlePointerOut}
            handlePointerMissed={handlePointerMissed}
            color={snap}
          />
          <OrbitControls target={[0, 150, 0]} />
          <Environment preset="sunset" />
          <ContactShadows
            opacity={0.5}
            position={(0, 0, 0)}
            scale={[5000, 5000]}
            blur={1}
            far={100}
            resolution={256}
            color="#000000"
          />
        </Suspense>
      </Canvas>
      <Picker
        current={snap.current}
        colour={snap.items[snap.current]}
        handleColorChange={handleColorChange}
      />
    </div>
  );
}
