import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Mukunthan Karuppaiah S — Full Stack Engineer | DevOps & Cloud',
  description: 'Portfolio of Mukunthan Karuppaiah S — Full Stack Engineer specialising in Kubernetes, FastAPI, React, PostgreSQL and cloud infrastructure.',
  keywords: 'Full Stack Engineer, DevOps, Cloud, Kubernetes, Docker, React, Node.js, GitLab CI/CD, PostgreSQL, FastAPI',
  openGraph: {
    title: 'Mukunthan Karuppaiah S — Full Stack Engineer',
    description: 'Building production-grade systems — Kubernetes clusters, FastAPI backends, React frontends, and ML inference platforms.',
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
