'use client';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function GalaxyNebulaShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#91a7ff') },
    uColor2: { value: new THREE.Color('#c084fc') },
  };

  return (
    <mesh ref={meshRef} scale={6} position={[1, 0, 0]}>
      <icosahedronGeometry args={[1.8, 6]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            float wave = 0.5 + 0.5 * sin(uTime * 1.5 + length(vNormal.xy) * 10.0);
            vec3 color = mix(uColor1, uColor2, wave);
            gl_FragColor = vec4(color * intensity, 0.85);
          }
        `}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}