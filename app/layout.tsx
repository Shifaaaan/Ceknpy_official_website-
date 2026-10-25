import type { Metadata } from 'next';
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'College of Engineering Karunagappally (CEK) | IHRD, Govt. of Kerala',
  description:
    'Official digital platform for College of Engineering Karunagappally (IHRD), affiliated to APJ Abdul Kalam Technological University (KTU), approved by AICTE.',
  openGraph: {
    title: 'College of Engineering Karunagappally (CEK) | IHRD, Govt. of Kerala',
    description:
      'Official digital platform for College of Engineering Karunagappally (IHRD), affiliated to KTU, NBA Accredited.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'College of Engineering Karunagappally (CEK)',
    description:
      'Official institutional platform for College of Engineering Karunagappally (IHRD), Kerala.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSerif.variable} ${plusJakarta.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#080A09] text-slate-100 antialiased font-sans selection:bg-[#387DDD] selection:text-white"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

