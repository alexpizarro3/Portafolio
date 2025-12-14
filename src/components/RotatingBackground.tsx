'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import GalaxyNebulaShader from './GalaxyNebulaShader';
import Nebula from './Nebula';
import * as THREE from 'three';

export default function RotatingBackground() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={40} count={4000} factor={6} saturation={0.25} fade speed={1.1} />
      <GalaxyNebulaShader />
      <Nebula />
      <Nebula position={[-3, -2, -10]} color={new THREE.Color('#84d4fc')} />
    </group>
  );
}

