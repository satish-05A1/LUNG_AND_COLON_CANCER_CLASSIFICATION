const stages = [
  'Patch Partitioning',
  'Linear Embedding',
  'Window-based Multi-Head Self Attention',
  'Shifted Window Attention',
  'Hierarchical Feature Extraction',
  'Classification Head',
];

function ModelArchitecture() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Model Architecture</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Swin Transformer architecture overview.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The Swin Transformer processes images through local window attention and shifted windows to learn hierarchical features, making it well-suited for fine-grained histopathological classification.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <div key={stage} className="flex items-start gap-5 rounded-3xl border border-slate-700/60 bg-slate-900/85 p-5">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/20">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{stage}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {stage === 'Patch Partitioning' && 'Input images are split into non-overlapping patches that form the first stage of visual tokenization.'}
                      {stage === 'Linear Embedding' && 'Each patch is projected into a fixed-dimensional embedding space for transformer processing.'}
                      {stage === 'Window-based Multi-Head Self Attention' && 'Attention is computed within local windows to reduce complexity while preserving spatial context.'}
                      {stage === 'Shifted Window Attention' && 'Window grouping shifts across layers to allow cross-window connections and richer representation.'}
                      {stage === 'Hierarchical Feature Extraction' && 'Features are progressively merged across stages to build global image understanding.'}
                      {stage === 'Classification Head' && 'A final linear layer maps extracted features to the five histopathology classes.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModelArchitecture;
