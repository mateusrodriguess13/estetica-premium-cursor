import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Estética Automotiva Premium | Seu carro como novo',
  description: 'Estética automotiva premium com acabamento impecável e proteção profissional. Polimento técnico, vitrificação e lavagem de alto padrão.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-matte-black text-silver min-h-screen selection:bg-accent-blue/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
