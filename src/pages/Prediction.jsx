import { useMemo, useState } from 'react';
import ImageUploader from '../components/ImageUploader.jsx';
import PredictionResult from '../components/PredictionResult.jsx';
import { postPrediction } from '../services/api.js';

const classKeyOrder = ['colon_aca', 'colon_n', 'lung_aca', 'lung_n', 'lung_scc'];
const classLabelMap = {
  colon_aca: 'Colon Adenocarcinoma',
  colon_n: 'Colon Normal',
  lung_aca: 'Lung Adenocarcinoma',
  lung_n: 'Lung Normal',
  lung_scc: 'Lung Squamous Cell Carcinoma',
};

const normalizePercentage = (value) => {
  const numeric = Number(value ?? 0);
  if (Number.isNaN(numeric)) return 0;
  return numeric <= 1 ? numeric * 100 : numeric;
};

function Prediction() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const probabilities = useMemo(() => {
    if (!result?.probabilities) return [];
    return classKeyOrder.map((key) => ({
      label: classLabelMap[key] || key,
      value: normalizePercentage(result.probabilities[key]),
    }));
  }, [result]);

  const handleFileChange = (selectedFile) => {
    setResult(null);
    setError('');
    setFile(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setResult(null);
    setError('');
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError('');

    try {
      const data = await postPrediction(file);
      setResult({
        prediction: classLabelMap[data.predicted_class] || data.predicted_class,
        confidence: normalizePercentage(data.confidence),
        probabilities: data.probabilities,
      });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
          ? err
          : JSON.stringify(err, Object.getOwnPropertyNames(err)) || 'Unknown error';
      setError(`Prediction failed: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">AI Prediction</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Upload an image to generate a prediction.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Submit a histopathological image and receive model output that includes a predicted class, confidence percentage, and probability distribution for all five categories.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Model input</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Input image size: 224 × 224</p>
              <p>Model identifier: swin_base_patch4_window7_224</p>
              <p>Number of classes: 5</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ImageUploader
            file={file}
            onFileChange={handleFileChange}
            onRemove={handleRemove}
            onSubmit={handleSubmit}
            loading={loading}
          />
          <div className="space-y-6">
            {error && (
              <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-5 text-sm text-rose-200">
                {error}
              </div>
            )}

            {result ? (
              <PredictionResult
                prediction={result.prediction}
                confidence={result.confidence}
                probabilities={probabilities}
              />
            ) : (
              <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Prediction status</p>
                <p className="mt-4 text-lg leading-7 text-slate-300">
                  Choose an image, click Predict, and wait for the FastAPI model to classify it. The frontend sends a multipart/form-data POST request to /predict with field name <span className="font-semibold text-white">file</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prediction;
