import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Command, CornerDownLeft } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMeta, setIsMeta] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => setIsMeta(e.metaKey || e.ctrlKey);
    const onUp = (e) => setIsMeta(e.metaKey || e.ctrlKey);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  const charCount = idea.length;
  const isValid = idea.trim().length >= 10;

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    // Simulate build action
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    // Scroll to features after mock action
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <header className="relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/30 dark:bg-white/10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Flames.blue
          </a>
          <div className="hidden md:flex items-center gap-8 text-slate-800 dark:text-slate-200">
            <a href="#pricing" className="hover:text-white/90 transition">Pricing</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white/90 transition">Discord</a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition">
              Get Started <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Spline background and overlays */}
      <div className="relative">
        <div className="absolute inset-0 opacity-40">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlay for depth - pointer events none so Spline stays interactive */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.35),rgba(15,23,42,0.9))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              What will you build today?
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Build, deploy & monetize your app by chatting with Flames AI.
            </p>
          </div>

          <div className="mx-auto mt-10 sm:mt-12 max-w-3xl">
            <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/15 shadow-xl overflow-hidden">
              <label htmlFor="idea" className="sr-only">Type your app idea</label>
              <textarea
                id="idea"
                ref={textareaRef}
                value={idea}
                onChange={(e) => setIdea(e.target.value.slice(0, 800))}
                onKeyDown={onKeyDown}
                rows={6}
                placeholder="Type your app idea..."
                className="w-full resize-none bg-transparent text-white placeholder:text-slate-400 p-5 sm:p-6 focus:outline-none"
                aria-describedby="idea-hint"
                aria-invalid={!isValid && charCount > 0}
              />
              <div className="flex items-center justify-between border-t border-white/10 px-5 sm:px-6 py-3">
                <p id="idea-hint" className={classNames('text-sm', isValid || charCount === 0 ? 'text-slate-300' : 'text-red-300')}>
                  {isValid || charCount === 0 ? 'Describe what you want to build. Be specific for the best results.' : 'Please enter at least 10 characters.'}
                </p>
                <span className="text-sm text-slate-300" aria-live="polite">{charCount} chars</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <button
                onClick={handleSubmit}
                disabled={!isValid || loading}
                className={classNames(
                  'group inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-medium shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-slate-900',
                  'bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-300 hover:to-purple-400',
                  (!isValid || loading) && 'opacity-60 cursor-not-allowed'
                )}
                aria-busy={loading}
                aria-label="Build with AI"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Building...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Build with AI
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
                  </span>
                )}
              </button>
              <p className="text-xs text-slate-400 inline-flex items-center gap-1" aria-live="polite">
                Press <span className="inline-flex items-center gap-0.5 rounded-md border border-white/10 px-1.5 py-0.5 bg-white/5"><Command size={12} /> ⏎</span> /
                <span className="inline-flex items-center gap-0.5 rounded-md border border-white/10 px-1.5 py-0.5 bg-white/5">Ctrl <CornerDownLeft size={12} /></span> to build
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
