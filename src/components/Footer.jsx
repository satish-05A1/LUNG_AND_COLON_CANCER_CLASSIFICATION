function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-lg font-semibold text-slate-100">Automated Lung & Colon Cancer Classification</p>
          <p className="text-sm leading-6">
            Research project with Swin Transformer and LC25000 dataset for academic and educational use.
          </p>
        </div>

        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div>
            <p className="font-semibold text-slate-100">Project details</p>
            <p className="mt-2">LC25000 dataset</p>
            <p>Swin Transformer Base</p>
            <p>Conference publication</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Disclaimer</p>
            <p className="mt-2 leading-6">
              This system is intended for research and educational purposes and should not be used as a substitute for professional medical diagnosis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
