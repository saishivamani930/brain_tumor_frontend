// src/api.ts
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000"; 
// fallback for local dev

export async function predictImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Prediction failed");
  return res.json();
}
