import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Research', to: '/research' },
  { name: 'Dataset', to: '/dataset' },
  { name: 'Methodology', to: '/methodology' },
  { name: 'Model', to: '/model' },
  { name: 'Prediction', to: '/prediction' },
  { name: 'Results', to: '/results' },
  { name: 'Publication', to: '/publication' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.02em] text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-sm font-bold shadow-soft">
            LC
          </span>
          <span>LC-AI</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold underline decoration-sky-500/30 underline-offset-8'
                  : 'transition hover:text-white'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/prediction"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Try Prediction
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden">
          <div className="space-y-4 text-sm text-slate-200">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'block font-semibold text-white' : 'block transition hover:text-white'
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <Link
            to="/prediction"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            onClick={() => setOpen(false)}
          >
            Try Prediction
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
