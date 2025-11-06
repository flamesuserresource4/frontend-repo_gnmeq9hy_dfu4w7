import { Database, CreditCard, MessageSquare, BarChart3, DownloadCloud, PlayCircle, CheckCircle2, Cpu } from 'lucide-react';

function Card({ children, className = '' }) {
  return (
    <div className={`group relative rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24" style={{ backgroundColor: '#0f172a' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Everything You Need, Already Built In</h2>
          <p className="mt-3 text-slate-300">Build fast with Production-ready blocks that work instantly - no setup required</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Forms */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                <MessageSquare size={18} /> Forms
              </div>
              <div className="text-[10px] text-purple-300 bg-purple-500/10 border border-purple-400/20 rounded-full px-2 py-0.5">Export CSV</div>
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <div className="grid grid-cols-4 text-xs text-slate-300 bg-white/5 px-3 py-2">
                <div>Name</div><div>Email</div><div>Message</div><div>Time</div>
              </div>
              <div className="divide-y divide-white/10 text-xs">
                {[
                  ['Ava Patel','ava@studio.dev','Interested in beta access','2m'],
                  ['Lucas Wang','lucas@launch.io','Question about pricing','6m'],
                  ['Mina Farah','mina@creative.co','Can I import data?','12m'],
                  ['Diego R.','diego@build.run','Love the UX!','18m'],
                ].map((r, i) => (
                  <div key={i} className="grid grid-cols-4 px-3 py-2 text-slate-200">
                    {r.map((c, j) => (<div key={j} className="truncate">{c}</div>))}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">Create form in your app that collects data from your users and lets you see data live, all from a single prompt!</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-[10px] rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-2 py-0.5">New: auto-tag</span>
              <span className="text-[10px] rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20 px-2 py-0.5">assign</span>
              <span className="text-[10px] rounded-full bg-pink-400/10 text-pink-300 border border-pink-400/20 px-2 py-0.5">reply</span>
            </div>
          </Card>

          {/* AI Integrations */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                <Cpu size={18} /> AI Integrations
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-slate-300">OpenAI</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-slate-300">Anthropic</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-slate-300">Local</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <div className="bg-white/5 px-3 py-2 flex items-center justify-between">
                <div className="text-xs text-slate-300">Model</div>
                <div className="text-xs text-white font-medium">gpt-4o-mini</div>
              </div>
              <div className="p-3 space-y-2 text-xs">
                <div className="rounded-lg bg-white/5 px-3 py-2 text-slate-200">User: Can you add payments to my app?</div>
                <div className="rounded-lg bg-indigo-500/20 px-3 py-2 text-indigo-100">AI: Sure — I will connect Stripe, create a checkout and return the success URL.</div>
              </div>
              <div className="flex items-center gap-2 p-3 border-t border-white/10">
                <button className="inline-flex items-center gap-1 text-xs rounded-md bg-white/10 border border-white/10 px-2.5 py-1.5 text-white hover:bg-white/15 transition">
                  <PlayCircle size={14} /> Preview
                </button>
                <button className="inline-flex items-center gap-1 text-xs rounded-md bg-gradient-to-r from-indigo-400 to-purple-500 px-2.5 py-1.5 text-white shadow">
                  <CheckCircle2 size={14} /> Apply change
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">Attach AI to any flow — summarize feedback, classify leads, generate replies — no code. Pick a model, add an action, press run.</p>
          </Card>

          {/* Payments */}
          <Card>
            <div className="inline-flex items-center gap-2 text-white font-semibold mb-3">
              <CreditCard size={18} /> Payments
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold">Pro</div>
                <div className="text-white text-lg">$19<span className="text-slate-300 text-sm">/mo</span></div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-center">Card</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-center">UPI</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-center">Apple Pay</span>
              </div>
              <div className="mt-3 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm text-slate-200 tracking-wider">•••• 4242</div>
              <div className="mt-2 text-[10px] text-slate-400">Test card: 4242 4242 4242 4242</div>
              <div className="mt-3 inline-flex items-center gap-2 text-[10px] text-slate-300">
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5">Powered by Stripe</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5">Secure • PCI-DSS</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">Monetize your app by accepting payments in minutes with Stripe or Razorpay built in securely!</p>
          </Card>

          {/* Analytics */}
          <Card>
            <div className="inline-flex items-center gap-2 text-white font-semibold mb-3">
              <BarChart3 size={18} /> Analytics
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-300">Daily conversions</div>
              <div className="mt-2 h-24 w-full bg-gradient-to-b from-indigo-400/30 to-purple-500/20 rounded-md relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/30 to-transparent" />
                <div className="absolute inset-2 grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="self-end rounded-sm bg-white/30" style={{ height: `${30 + Math.random()*60}%` }} />
                  ))}
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  Top pages: <span className="text-white">Web</span> / <span className="text-white">Mobile</span>
                </div>
                <div className="text-emerald-300 font-medium">+12% WoW</div>
              </div>
              <div className="mt-2 text-xs text-slate-300">Visitor split: <span className="text-white">Web 68%</span> • <span className="text-white">Mobile 32%</span></div>
            </div>
            <p className="mt-4 text-sm text-slate-300">Track visitors, conversions, and user behavior with beautiful dashboards.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
