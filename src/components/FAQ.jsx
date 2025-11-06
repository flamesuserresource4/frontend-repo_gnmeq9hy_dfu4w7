import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';

const categories = [
  { name: 'Getting Started', count: 4 },
  { name: 'Technical', count: 4 },
  { name: 'Pricing & Plans', count: 3 },
  { name: 'Support', count: 3 },
];

const faqs = [
  {
    q: 'How do I start building my first app?',
    a: 'Simply describe your app idea in the prompt box above. Our AI will generate a complete, production-ready application with all the features you specify. You can then customize and deploy it instantly to share with the world.'
  },
  {
    q: 'Can I only build & share prototypes with Flames?',
    a: 'No! You can build, deploy and even monetize your app without coding! You can export your code, publish your app instantly with SSL, SEO, custom domains handled automatically.'
  },
  {
    q: 'Do I need coding experience?',
    a: 'No coding experience required! Our AI handles the technical details. However, developers can dive deep into the code for full customization and control or export the code.'
  },
  {
    q: 'How long does generation take?',
    a: 'Most apps are generated in under 2 minutes. Complex applications with multiple integrations may take up to 5 minutes. You can watch the progress in real-time while playing a game as you wait!'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-24" style={{ backgroundColor: '#0f172a' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Questions? We've got answers</h2>
          <p className="mt-3 text-slate-300">Everything you need to know about building with Flames</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => (
            <span key={c.name} className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1 text-slate-200">
              {c.name} <span className="text-slate-400">({c.count})</span>
            </span>
          ))}
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium">{f.q}</span>
                  <ChevronDown className={`text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-slate-300">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-200 text-lg font-semibold">Still have questions?</p>
          <p className="text-slate-400">Get help from our team or community</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white hover:bg-white/15 transition">
              <MessageCircle size={16} /> Discord
            </a>
            <a href="mailto:hello@flames.blue" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 px-4 py-2 text-white shadow">
              <Mail size={16} /> Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
