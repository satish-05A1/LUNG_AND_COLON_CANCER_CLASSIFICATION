import { useMemo } from 'react';
import { UploadCloud, Trash2, ImagePlus } from 'lucide-react';

function ImageUploader({ file, onFileChange, onRemove, onSubmit, loading }) {
  const previewUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
      <div className="flex flex-col gap-6">
        <div className="rounded-3xl border border-dashed border-slate-700/80 bg-slate-900/80 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-800 text-sky-300">
            <UploadCloud size={32} />
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-lg font-semibold text-white">Drag and drop your histopathological image</p>
            <p className="text-sm leading-6 text-slate-400">
              Supported formats: PNG, JPG, JPEG. Image size should match the 224 × 224 input requirement.
            </p>
          </div>
          <label className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-slate-100/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-100/15">
            <ImagePlus className="mr-2 h-4 w-4" />
            Browse image
            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            />
          </label>
        </div>

        {file && (
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/85 p-6 lg:grid-cols-[0.9fr_0.6fr]">
            <div className="flex items-start gap-5">
              <div className="h-28 w-28 overflow-hidden rounded-3xl bg-slate-800">
                {previewUrl && <img src={previewUrl} alt="Upload preview" className="h-full w-full object-cover" />}
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Selected file</p>
                <p className="mt-3 text-lg font-semibold text-white">{file.name}</p>
                <p className="mt-1 text-sm text-slate-400">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <button
                className="rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                type="button"
                onClick={onRemove}
              >
                <Trash2 className="inline-block h-4 w-4 mr-2" />
                Clear input
              </button>
              <button
                className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                type="button"
                onClick={onSubmit}
                disabled={!file || loading}
              >
                {loading ? 'Predicting...' : 'Predict'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
