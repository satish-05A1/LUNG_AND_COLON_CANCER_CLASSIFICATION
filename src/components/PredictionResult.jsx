import ProbabilityChart from './ProbabilityChart.jsx';

function PredictionResult({ prediction, confidence, probabilities }) {
  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Prediction</p>
          <p className="mt-3 text-4xl font-semibold text-white">{prediction}</p>
          <p className="mt-4 text-sm text-slate-400">Confidence score based on model output.</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Confidence</p>
          <p className="mt-3 text-3xl font-semibold text-white">{confidence.toFixed(2)}%</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Class Probabilities</p>
        <ProbabilityChart probabilities={probabilities} />
      </div>
    </div>
  );
}

export default PredictionResult;
