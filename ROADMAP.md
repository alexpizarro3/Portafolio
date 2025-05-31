
# 🧠 Portafolio V9 - Roadmap de Mejoras

## 🚀 Mejoras de Rendimiento

- [x] Usar `next/image` con dimensiones fijas y formato `.webp` para evitar layout shift.
- [ ] Carga diferida (`next/dynamic`) de componentes pesados (`Hero3D`, `PortfolioGalleryTablet`, `RadarChart`).
- [ ] Memoización con `React.memo`, `useMemo`, `useCallback` en proyectos, skills y techIcons.
- [ ] Revisión de geometría en `GalaxyNebulaShader` y `Nebula` (Three.js) para menor carga GPU.
- [ ] Usar `whileInView` en lugar de `initial/animate` en secciones largas.

---

## 🧩 Refactor: Separación de Componentes

- [ ] `PortfolioGalleryTablet` ➤ Extraer `ProjectCard.tsx` (hover + expansión).
- [ ] `Hero3D` ➤ Separar `GalaxyNebulaShader.tsx`, `Nebula.tsx`, `FogLayer.tsx`, `RotatingBackground.tsx`.
- [ ] `CertificationsSkillsSection` ➤ Dividir en `CertCard.tsx`, `SkillBar.tsx`, `RadarChart.tsx`.
- [ ] `ContactForm` ➤ Extraer `FormInput.tsx` con íconos.
- [ ] Crear hook `useDarkMode.ts` para `DarkModeToggle`.

---

## 🎨 Mejoras Visuales y de UX

- [ ] Efecto hover animado en ícono "AP" (rebote, pulsación o resplandor).
- [ ] Switch visual entre grid y carrusel en proyectos (mobile vs desktop).
- [ ] Fondo de espacio más profundo con estrellas fijas (`Hero3D` y fondo general).
- [ ] Scroll suave con `react-scroll` para la navegación.
- [ ] Accesibilidad: usar `aria-label`, `alt` y soporte para tab navigation.

---

## 📈 Extras Sugeridos (Opcional)

- [ ] Sección `Tech Stack` 3D animada con logos orbitando.
- [ ] Contador de visitas básico (GA4 o Supabase).
- [ ] Soporte multilenguaje (ES / EN) con `next-i18next`.

---

> ✨ Este roadmap guía la evolución del portafolio V9 con enfoque en performance, escalabilidad y experiencia visual profesional.
