'use client';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Nebula({ position = [0, 0, 0], color = new THREE.Color('#b99aff') }) {
  const bufferRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const points = new Float32Array(8000);
  for (let i = 0; i < points.length; i++) {
    points[i] = THREE.MathUtils.randFloatSpread(80);
  }

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: color },
  };

  return (
    <points ref={bufferRef} position={position as [number, number, number]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec3 vColor;
          void main() {
            vec3 pos = position;
            pos.z += sin(pos.x * 0.1 + uTime * 0.3) * 0.8;
            vColor = vec3(0.6, 0.5, 1.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 2.2 + sin(uTime * 2.0 + pos.x * 0.5) * 0.6;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, 0.32);
          }
        `}
        transparent
        depthWrite={false}
      />
    </points>
  );
}