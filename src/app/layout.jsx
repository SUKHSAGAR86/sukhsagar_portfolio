import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-light font-body antialiased selection:bg-accent selection:text-dark min-h-screen relative overflow-x-hidden">
        {/* Top Scroll Indicator */}
        <ScrollProgress />

        {/* Global Atmospheric Background */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-[150px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(166,184,255,0.08)_0%,transparent_70%)] blur-[80px] rounded-full" />
          <div className="absolute top-[40%] -left-[200px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(183,247,212,0.05)_0%,transparent_70%)] blur-[100px] rounded-full" />
          <div className="absolute -bottom-[100px] right-[15%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(166,184,255,0.06)_0%,transparent_70%)] blur-[90px] rounded-full" />
          <div 
            className="absolute inset-0 opacity-40" 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(242, 240, 233, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(242, 240, 233, 0.02) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)'
            }}
          />
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
