// src/components/Uploader.tsx
import { useState } from "react";

type Probs = Record<string, number>;

interface PredictResponse {
  pred_class: string;
  probs: Probs;
}

const API = import.meta.env.VITE_API_URL as string;

export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [err, setErr] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setErr("");
    setResult(null);

    try {
      // warm backend (helps with Render free-plan cold start)
      await fetch(`${API}/health`).catch(() => {});

      const fd = new FormData();
      fd.append("image", file); // field name must be exactly 'image'

      const res = await fetch(`${API}/predict`, { method: "POST", body: fd });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = (await res.json()) as PredictResponse;
      setResult(data);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : String(e));
    }
  };

  return (
    <div style={{ maxWidth: 560, margin: "32px auto", padding: 16 }}>
      <h1>Neuro Scan Assist</h1>

      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          onChange={(ev) => setFile(ev.target.files?.[0] ?? null)}
        />
        <button type="submit" disabled={!file} style={{ marginLeft: 8 }}>
          Upload & Predict
        </button>
      </form>

      {err && <p style={{ color: "crimson" }}>Error: {err}</p>}

      {result && (
        <div style={{ marginTop: 16 }}>
          <h3>Prediction: {result.pred_class}</h3>
          <pre>{JSON.stringify(result.probs, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
