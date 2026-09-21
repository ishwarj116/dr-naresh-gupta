export const dynamic = 'force-static';

const BASE = 'https://nareshhomeo.com';

export default function sitemap() {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/doctor/`, priority: 0.9 },
    { url: `${BASE}/homeopathy/`, priority: 0.8 },
    { url: `${BASE}/articles/`, priority: 0.7 },
    { url: `${BASE}/medicines/`, priority: 0.8 },
    { url: `${BASE}/privacy/`, priority: 0.3 },
  ];
}
