function ProbabilityChart({ probabilities }) {
  return (
    <div className="space-y-4">
      {probabilities.map((item) => (
        <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>{item.label}</span>
            <span>{item.value.toFixed(2)}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProbabilityChart;
