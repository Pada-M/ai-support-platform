export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5050';

export async function api(path, { method = 'GET', token, body } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  });

  let data = {};
  try { data = await res.json(); } catch {}

  if (!res.ok) throw new Error(data?.message || `Request failed (${res.status})`);
  return data;
}
