function StatCard({ label, value }) {
  return (
    <div className="glass-card rounded-3xl border border-white/10 p-6 shadow-soft">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default StatCard;
