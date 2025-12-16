import { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

export default function GargantuaTextureHybrid() {
  const texture = useLoader(TextureLoader, '/textures/gargantua.png');
  const diskRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (diskRef.current) {
      diskRef.current.rotation.z += 0.00075;

      // Escala sutil al hacer hover
      const targetScale = hovered ? 1.5 : 1.0;
      diskRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.05);
    }

    if (glowRef.current) {
      glowRef.current.rotation.z -= 0.0005;

      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      const baseOpacity = hovered ? 0.55 : 0.25;
      material.opacity = baseOpacity + Math.sin(Date.now() * 0.002) * 0.15;
    }
  });

  return (
    <>
      {/* Disco de acreción */}
      <mesh
        ref={diskRef}
        position={[0, 0, -2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial
          map={texture}
          transparent
          toneMapped={false}
        />
      </mesh>

      {/* Glow alrededor con efecto dinámico */}
      <mesh
        ref={glowRef}
        position={[0, 0, -1.99]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <ringGeometry args={[10.5, 11.5, 128]} />
        <meshBasicMaterial
          color={new THREE.Color('#262847')}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Simulación de lente gravitacional (distorsión sutil) */}
      <mesh position={[0, 0, -2.01]}>
        <circleGeometry args={[10, 32]} />
        <meshBasicMaterial
          color={'#000'}
          transparent
          opacity={hovered ? 0.15 : 0.25}
        />
      </mesh>
    </>
  );
}
