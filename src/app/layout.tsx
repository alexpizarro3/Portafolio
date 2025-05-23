import './globals.css';

export const metadata = {
  title: 'Portafolio Alex',
  description: 'Portafolio profesional de Alex Pizarro',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}