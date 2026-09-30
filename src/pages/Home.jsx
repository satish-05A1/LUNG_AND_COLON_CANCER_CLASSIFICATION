import Hero from '../components/Hero.jsx';

function Home() {
  return (
    <div className="relative">
      <Hero />
      <section className="px-6 pb-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Overview</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A polished interface for presenting AI research on medical histology.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                This frontend is designed for your conference presentation and academic demonstration, with a structured layout that highlights dataset details, methodology, architecture, and prediction capabilities.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-8 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Research focus</p>
              <ul className="mt-6 space-y-4 text-sm leading-7">
                <li>Automated classification of lung and colon histopathological images.</li>
                <li>Swin Transformer based feature extraction and multilabel classification.</li>
                <li>Academic presentation-ready UI for research demonstration.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
