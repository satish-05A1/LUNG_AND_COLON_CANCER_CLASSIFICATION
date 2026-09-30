function Research() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">About the research</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Automating histopathological analysis with deep learning.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Manual histopathological analysis is time-consuming and subject to observer variability. This project demonstrates how deep learning can augment the analysis of lung and colon tissue images by providing reliable automated classification.
            </p>
            <div className="mt-10 space-y-6 text-slate-300">
              <p>
                The system uses a Swin Transformer Base model fine-tuned on LC25000 to extract localized and hierarchical features from 224 × 224 patches. This enables robust classification across five clinically relevant categories.
              </p>
              <p>
                By integrating transformer-based vision with structured preprocessing and data augmentation, the pipeline is designed to support accurate diagnostic research without making unsupported clinical claims.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Research highlights</p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/85 p-6">
                <p className="text-lg font-semibold text-white">Problem statement</p>
                <p className="mt-3 text-slate-400">
                  Automating lung and colon histopathology classification to reduce manual workload and increase result consistency.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/85 p-6">
                <p className="text-lg font-semibold text-white">Approach</p>
                <p className="mt-3 text-slate-400">
                  Use a pretrained Swin Transformer with transfer learning and image augmentation for high-performance classification.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/85 p-6">
                <p className="text-lg font-semibold text-white">Outcome</p>
                <p className="mt-3 text-slate-400">
                  A clean, academic frontend ready for integration with the actual backend prediction API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
