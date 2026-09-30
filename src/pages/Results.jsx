function Results() {
  const metrics = [
    { label: 'Overall Accuracy', value: '99.76%' },
    { label: 'Precision', value: '99.76%' },
    { label: 'Recall', value: '99.76%' },
    { label: 'F1-Score', value: '99.76%' },
  ];

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Results</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Research performance summary.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The reported metrics are taken directly from the conference paper. Visualization placeholders demonstrate where future experimental results will be connected.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Paper metrics</p>
            <div className="mt-8 grid gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-slate-700/80 bg-slate-900/85 p-6">
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Training plots</p>
            <p className="mt-4 text-slate-300">
              Training Accuracy vs Validation Accuracy visualization will be connected to the experimental results once the data is available.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Loss curves</p>
            <p className="mt-4 text-slate-300">
              Training Loss vs Validation Loss visualization will be connected to the experimental results once the data is available.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Confusion matrix</p>
            <p className="mt-4 text-slate-300">
              Confusion matrix placeholder to illustrate the model's class-level performance once integrated with actual evaluation output.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Method comparison</p>
            <p className="mt-4 text-slate-300">
              Comparison with previous methods will be displayed here after the experimental summary is added to the final report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
