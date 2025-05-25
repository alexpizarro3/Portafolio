'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GalaxyNebulaShader() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#9d4edd') },
    uColor2: { value: new THREE.Color('#5f0f40') }
  };

  return (
    <mesh ref={meshRef} scale={5} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1.5, 5]} />
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
            gl_FragColor = vec4(color * intensity, 0.8);
          }
        `}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Nebula() {
  const points = new Float32Array(5000).map(() => THREE.MathUtils.randFloatSpread(100));
  const bufferRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#a64ac9') }
  };

  return (
    <points ref={bufferRef}>
      <bufferGeometry>
        <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec3 vColor;
          void main() {
            vec3 pos = position;
            pos.z += sin(pos.x * 0.3 + uTime) * 0.5;
            vColor = vec3(0.7, 0.3, 1.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = 2.0;
          }
        `}
        fragmentShader={`
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, 0.3);
          }
        `}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Texto a la izquierda */}
      <div className="absolute top-0 left-0 z-10 h-full w-full flex items-center justify-start px-10">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Alex Pizarro
          </h1>
          <p className="text-xl text-indigo-100">
            Business Intelligence Developer <br /> Power BI • Python • SQL • Automatización
          </p>
        </div>
      </div>

      {/* Canvas 3D con fondo tipo galaxia púrpura */}
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1} />
        <GalaxyNebulaShader />
        <Nebula />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </section>
  );
}
