import { MessageCircle } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="pt-16 pb-10" style={{ backgroundColor: '#0f172a' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <div className="text-white text-xl font-bold">Flames.Blue</div>
            <p className="mt-2 text-slate-300">Build, deploy and monetize your app with Flames AI in minutes.</p>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-slate-200 hover:text-white">
              <MessageCircle size={16} /> Discord
            </a>
          </div>

          <div>
            <div className="text-white font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">Landing generator</a></li>
              <li><a href="#" className="hover:text-white">Components</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>

          <div className="md:col-span-1" />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames Blue. All rights reserved.</p>
          <div className="inline-flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
