'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';
import { Mail, Linkedin, Github } from 'lucide-react';

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
    uColor1: { value: new THREE.Color('#91a7ff') },
    uColor2: { value: new THREE.Color('#c084fc') }
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

function Nebula({ position = [0, 0, 0] as [number, number, number], color = new THREE.Color('#b99aff') }) {
  const points = new Float32Array(8000).map(() => THREE.MathUtils.randFloatSpread(80));
  const bufferRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: color }
  };

  return (
    <points ref={bufferRef} position={position}>
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

function FogLayer() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = {
    uTime: { value: 0 }
  };

  return (
    <mesh ref={meshRef} scale={[60, 60, 1]} position={[0, 0, -15]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
          }
          void main() {
            float n = noise(vUv * 12.0 + uTime * 0.02);
            float alpha = smoothstep(0.15, 0.75, n);
            gl_FragColor = vec4(0.4, 0.6, 1.0, alpha * 0.3);
          }
        `}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <a
        href="https://alexispizarroportafolio.vercel.app/"
        className="group absolute top-6 left-6 z-50 flex items-center gap-3"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl text-white flex items-center justify-center font-extrabold text-2xl group-hover:scale-110 transition-all duration-300">
          AP
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
          Alexis Pizarro
        </span>
      </a>

      <div className="absolute top-0 left-0 z-10 h-full w-full flex flex-col items-start justify-center px-10 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl bg-gradient-to-r from-indigo-900/70 to-purple-800/70 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-indigo-500/30"
        >
          <h1 className="text-4xl sm:text-xl font-extrabold text-white leading-snug mb-4">
            Alexis Pizarro
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed">
            Business Intelligence Developer <br /> Power BI • Python • SQL • Automatización
          </p>
        </motion.div>
      </div>

      <div className="fixed top-1/2 -translate-y-1/2 z-40 space-y-6 bg-black/50 p-4 rounded-full backdrop-blur-md shadow-xl
        right-4 sm:right-2 max-sm:right-1 max-sm:translate-x-0
      ">
        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
          <Mail className="w-11 h-17" />
        </a>
        <a href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
          <Linkedin className="w-11 h-17" />
        </a>
        <a href="https://github.com/alexpizarro3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <Github className="w-11 h-17" />
        </a>
      </div>

      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={100} depth={60} count={12000} factor={10} saturation={0.5} fade speed={1.2} />
        <GalaxyNebulaShader />
        <Nebula />
        <Nebula position={[-3, -2, -10]} color={new THREE.Color('#84d4fc')} />
        <FogLayer />
        <EffectComposer>
          <Bloom intensity={0.65} luminanceThreshold={0.1} luminanceSmoothing={0.85} />
          <Noise opacity={0.025} />
        </EffectComposer>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </section>
  );
}
