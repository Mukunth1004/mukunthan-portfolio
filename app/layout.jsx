import './styles/globals.css';
import Header from './components/Header';
import { Metadata } from 'next';

export const metadata = {
  title: 'Mukunthan Karuppaiah S — Full Stack Engineer | DevOps & Cloud',
  description: 'Portfolio of Mukunthan Karuppaiah S, Full Stack Engineer at Spizen Technologies. Expert in Kubernetes, React, Node.js, PostgreSQL, and cloud infrastructure.',
  keywords: 'Full Stack Engineer, DevOps, Cloud, Kubernetes, Docker, React, Node.js, Hetzner, GitLab CI/CD, PostgreSQL',
  openGraph: {
    title: 'Mukunthan Karuppaiah S — Full Stack Engineer',
    description: 'Building production-grade systems at Spizen Technologies — Kubernetes clusters, React frontends, and cloud infrastructure.',
    url: 'https://mukunthan-portfolio-z7if.vercel.app',
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
