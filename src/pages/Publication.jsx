function Publication() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Publication</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Automated Lung and Colon Cancer Classification from Histopathological Images Using Deep Learning</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            This component is prepared for the final conference paper reference and will link to the PDF once the publication file is added.
          </p>
          <div className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/85 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Authors</p>
              <p className="mt-3 text-lg text-white">[Author names will be added here]</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Type</p>
              <p className="mt-3 text-lg text-white">Conference Paper</p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              View Research Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publication;
