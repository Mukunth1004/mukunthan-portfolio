import './styles/globals.css';
import Header from './components/Header';
import { Metadata } from 'next';

export const metadata = {
  title: 'Mukunthan S - Full Stack Engineer | DevOps & Cloud',
  description: 'Luxury portfolio of Mukunthan S, Full Stack Engineer specializing in DevOps, Cloud Infrastructure, and modern web technologies.',
  keywords: 'Full Stack Engineer, DevOps, Cloud, Kubernetes, Docker, React, Node.js',
  openGraph: {
    title: 'Mukunthan S - Full Stack Engineer',
    description: 'Portfolio showcasing expertise in full stack development and DevOps',
    url: 'https://mukunthan-portfolio.vercel.app',
    siteName: 'Mukunthan Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark text-white overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
