import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white/10 focus:text-white focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <Hero />
      <main id="main">
        <Features />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
