const API_URL = process.env.API_URL;
export async function getStudyFields() {
  const res = await fetch(`${API_URL}/study_fields
  `);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
