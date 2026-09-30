const pipeline = [
  'Histopathological Image',
  'Image Preprocessing',
  '224 × 224',
  'Data Augmentation',
  'Swin Transformer',
  'Hierarchical Feature Extraction',
  'Classification Head',
  '5-Class Prediction',
];

const steps = [
  {
    title: 'Image Acquisition',
    description: 'Collect lung and colon histopathological images from LC25000 for automated analysis.',
  },
  {
    title: 'Image Preprocessing',
    description: 'Standardize image size and normalize pixel values to prepare input for the transformer.',
  },
  {
    title: 'Data Augmentation',
    description: 'Apply realistic transformations to increase model robustness without altering tissue semantics.',
  },
  {
    title: 'Swin Transformer Feature Extraction',
    description: 'Use window-based attention to extract hierarchical visual features from histology images.',
  },
  {
    title: 'Classification',
    description: 'Pass extracted features through a classification head for five-category prediction.',
  },
  {
    title: 'Prediction',
    description: 'Output the final tissue class with confidence scores for model interpretation.',
  },
];

function Methodology() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Methodology</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Research pipeline for automated histopathology classification.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The project integrates preprocessing, augmentation, and transformer-based feature learning in a structured workflow to deliver reliable image classification for lung and colon tissue samples.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <div className="grid gap-3">
              {pipeline.map((item, idx) => (
                <div key={item} className="flex items-center gap-4 rounded-3xl border border-slate-700/60 bg-slate-900/80 px-5 py-4 text-sm text-slate-200">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sky-300">{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft">
              <p className="text-xl font-semibold text-white">{step.title}</p>
              <p className="mt-3 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Methodology;
