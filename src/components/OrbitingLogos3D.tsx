'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const logos = [
  { name: 'Power BI', color: '#f9c200' },
  { name: 'Python', color: '#3475a7' },
  { name: 'SQL', color: '#b03060' },
  { name: 'Apps Script', color: '#34a853' },
  { name: 'Power Automate', color: '#0066cc' },
];

function OrbitingLogos() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {logos.map((logo, i) => {
        const angle = (i / logos.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Html
            key={logo.name}
            position={[x, 0, z]}
            center
            className="text-white text-sm font-bold bg-black/60 px-2 py-1 rounded-full shadow-lg border border-white/20"
          >
            {logo.name}
          </Html>
        );
      })}
    </group>
  );
}

export default function OrbitingLogos3D() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-black to-indigo-900 flex flex-col items-center justify-center text-white snap-start">
      <h2 className="text-3xl font-bold mb-6">Tech Stack 3D</h2>
      <div className="w-full h-2/3">
        <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate />
          <OrbitingLogos />
        </Canvas>
      </div>
    </section>
  );
}
