function DatasetSection({ classNames }) {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Dataset</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white">LC25000 Histopathological Dataset</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              The LC25000 dataset includes 25,000 histopathological images from lung and colon tissue. The model is designed for high-fidelity classification across five tissue categories that reflect the actual class mapping used in the trained Swin Transformer model.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft">
                <p className="text-sm text-slate-400">Dataset</p>
                <p className="mt-2 text-3xl font-semibold text-white">LC25000</p>
              </div>
              <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft">
                <p className="text-sm text-slate-400">Images</p>
                <p className="mt-2 text-3xl font-semibold text-white">25,000</p>
              </div>
              <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft">
                <p className="text-sm text-slate-400">Categories</p>
                <p className="mt-2 text-3xl font-semibold text-white">5</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Class categories</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {classNames.map((name) => (
                <div key={name} className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                  <p className="text-slate-400">Class</p>
                  <p className="mt-3 text-lg font-semibold text-white">{name}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-400">
              The UI is structured so that these class labels can be populated dynamically once the backend provides the actual model mapping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DatasetSection;
