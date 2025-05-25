'use client';

import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
//import { Mesh } from 'three';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

const BlackHoleShaderMaterial = shaderMaterial(
  { time: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec2 center = vec2(0.5);
      float dist = distance(vUv, center);
      float ring = smoothstep(0.3 + 0.05*sin(time*2.0), 0.31 + 0.05*sin(time*2.0), dist);
      vec3 glow = vec3(0.0, 0.2, 0.6) * (1.0 - ring);
      float lensEffect = 0.01 / (dist * dist + 0.001);
      vec3 color = mix(glow, vec3(0.0, 0.0, 0.0), clamp(lensEffect, 0.0, 1.0));
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ BlackHoleShaderMaterial });


export default function BlackHole() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.003;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} scale={1.3}>
      <torusGeometry args={[1, 0.4, 32, 150]} />
       <meshStandardMaterial color="black" emissive="#111111" roughness={0.5} metalness={1} />
    </mesh>
  );
}