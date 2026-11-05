import { Space_Grotesk, Inter, DM_Mono } from 'next/font/google';
import '@/styles/globals.scss';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata = {
  metadataBase: new URL('https://sukhsagar-portfolio.vercel.app'),
  title: 'Sukhsagar Jangde | Software Developer & Full-Stack Engineer',
  description: 'Portfolio of Sukhsagar Jangde — Software Developer with 2+ years of professional experience in the NIC / MeitY government ecosystem. Specialized in React.js, Next.js, Node.js, Express, MSSQL, MySQL, and secure RBAC architectures.',
  keywords: [
    'Sukhsagar Jangde',
    'Software Developer',
    'Full-Stack Engineer',
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'National Informatics Centre',
    'NIC Developer',
    'MeitY',
    'High Court of Chhattisgarh',
    'Chhattisgarh Samvad',
    'Department of Public Relations',
    'Raipur Developer',
    'MSSQL Database Engineer'
  ],
  authors: [{ name: 'Sukhsagar Jangde', url: 'https://github.com/SUKHSAGAR86' }],
  creator: 'Sukhsagar Jangde',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sukhsagar-portfolio.vercel.app',
    title: 'Sukhsagar Jangde | Software Developer & Full-Stack Engineer',
    description: '2+ years building secure, high-concurrency government web applications, e-Courts judicial modules, and database-driven solutions.',
    siteName: 'Sukhsagar Jangde Portfolio',
    images: [
      {
        url: '/images/sukhsagar-courthouse.jpg',
        width: 1200,
        height: 630,
        alt: 'Sukhsagar Jangde — Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukhsagar Jangde | Software Developer',
    description: 'Software Developer & Full-Stack Engineer with NIC / MeitY experience.',
    images: ['/images/sukhsagar-courthouse.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#111315',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${dmMono.variable}`}>
      <body>
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Atmospheric Background */}
        <div className="atmospheric-bg" aria-hidden="true">
          <div className="atmospheric-bg__glow-1" />
          <div className="atmospheric-bg__glow-2" />
          <div className="atmospheric-bg__glow-3" />
          <div className="atmospheric-bg__grid" />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
