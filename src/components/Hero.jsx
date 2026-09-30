import { ArrowRight, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Images', value: '25,000' },
  { label: 'Classes', value: '5' },
  { label: 'Model', value: 'Swin Transformer' },
  { label: 'Accuracy', value: '99.76%' },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-slate-950 to-transparent opacity-90" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center rounded-full border border-slate-500/40 bg-slate-900/70 px-4 py-2 text-sm text-sky-200 shadow-soft">
            Conference research presentation • LC25000 dataset
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Automated Lung & Colon Cancer Classification
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Histopathological Image Analysis Using Swin Transformer. A deep learning pipeline for automated classification of lung and colon histology images into five clinical tissue categories.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/prediction"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Try AI Prediction
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/research"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/40 bg-slate-900/80 px-6 py-3 text-sm text-slate-100 transition hover:bg-slate-800"
            >
              Explore Research
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="glass-card rounded-3xl border border-white/10 p-5 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-soft">
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-sky-500/30 to-transparent" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-7">
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">AI Medical Insight</p>
                  <h2 className="mt-3 text-xl font-semibold text-white">Histopathology meets transformer-based vision.</h2>
                </div>
                <ShieldCheck className="h-10 w-10 text-sky-400" />
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-300">Input</p>
                  <p className="mt-2 text-lg font-semibold text-white">224 × 224 RGB image</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-300">Model</p>
                  <p className="mt-2 text-lg font-semibold text-white">swin_base_patch4_window7_224</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
                  <p className="text-sm text-slate-300">Prediction</p>
                  <p className="mt-2 text-lg font-semibold text-white">Five-class histopathological classification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
