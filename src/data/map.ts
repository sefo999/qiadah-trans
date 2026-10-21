import type { L } from '../i18n/utils';

// lon/lat → x/y (viewBox 0 0 780 640)
export const project = (lon: number, lat: number) => [(lon - 34) * 30, (33 - lat) * 30] as const;

export const ksa: [number, number][] = [
  [34.95, 29.3], [35.6, 27.2], [36.5, 26.0], [37.3, 25.0], [38.1, 24.1], [39.0, 22.6], [39.2, 21.5], [40.4, 20.4], [41.1, 19.1], [42.0, 17.6], [42.6, 16.6],
  [43.2, 17.3], [44.5, 17.4], [46.3, 17.2], [47.4, 17.1], [48.3, 18.2], [49.1, 18.6], [52.0, 19.0], [55.6, 22.0], [55.2, 22.7], [52.6, 22.9], [51.6, 24.2],
  [50.8, 24.8], [50.1, 26.4], [49.6, 27.1], [48.8, 27.7], [48.4, 28.5], [46.5, 29.1], [44.7, 29.2], [42.1, 31.1], [39.2, 32.1], [37.0, 31.5], [36.5, 30.5],
];
export const gcc: Record<string, [number, number][]> = {
  kuwait: [[46.5, 29.1], [48.4, 28.5], [48.1, 29.4], [47.9, 30.0], [46.9, 29.6]],
  qatar: [[50.8, 24.8], [51.6, 24.2], [51.6, 25.9], [51.0, 26.1]],
  uae: [[51.6, 24.2], [52.6, 22.9], [55.2, 22.7], [56.0, 24.9], [55.5, 25.6], [54.0, 24.3], [52.5, 24.1]],
  oman: [[55.2, 22.7], [55.6, 22.0], [52.0, 19.0], [53.0, 16.6], [54.0, 17.0], [57.0, 18.9], [58.8, 20.5], [59.8, 22.5], [58.3, 23.6], [56.4, 24.9], [56.0, 24.9]],
};
export const bahrain: [number, number] = [50.55, 26.1];

export type Anchor = 'start' | 'middle' | 'end';
export type Pin = {
  lon: number;
  lat: number;
  name: L;
  kind: 'port' | 'city' | 'dry';
  // label placement relative to the pin, in SVG units. In RTL "start" is the right side.
  dx: number;
  dy: number;
  anchor: Anchor;
};

// Labels are placed by hand so none of them collide at the clusters
// around Jeddah/Makkah and Dammam/Jubail/Bahrain.
export const pins: Pin[] = [
  { lon: 39.17, lat: 21.5, name: { ar: 'ميناء جدة', en: 'Jeddah Port' }, kind: 'port', dx: -12, dy: 12, anchor: 'end' },
  { lon: 39.1, lat: 22.5, name: { ar: 'ميناء الملك عبدالله', en: 'King Abdullah Port' }, kind: 'port', dx: -12, dy: -6, anchor: 'end' },
  { lon: 38.05, lat: 24.1, name: { ar: 'ميناء ينبع', en: 'Yanbu Port' }, kind: 'port', dx: -12, dy: 4, anchor: 'end' },
  { lon: 42.55, lat: 16.9, name: { ar: 'ميناء جازان', en: 'Jazan Port' }, kind: 'port', dx: 12, dy: 10, anchor: 'start' },
  { lon: 50.1, lat: 26.4, name: { ar: 'ميناء الدمام', en: 'Dammam Port' }, kind: 'port', dx: -11, dy: 4, anchor: 'end' },
  { lon: 49.65, lat: 27.0, name: { ar: 'ميناء الجبيل', en: 'Jubail Port' }, kind: 'port', dx: 10, dy: -12, anchor: 'start' },
  { lon: 46.7, lat: 24.7, name: { ar: 'الرياض · الميناء الجاف', en: 'Riyadh · Dry Port' }, kind: 'dry', dx: 0, dy: 22, anchor: 'middle' },
  { lon: 43.9, lat: 26.3, name: { ar: 'القصيم', en: 'Qassim' }, kind: 'city', dx:  0, dy:  0, anchor: 'middle' },
  { lon: 41.7, lat: 27.5, name: { ar: 'حائل', en: 'Hail' }, kind: 'city', dx:  0, dy:  0, anchor: 'middle' },
  { lon: 36.6, lat: 28.4, name: { ar: 'تبوك', en: 'Tabuk' }, kind: 'city', dx:  0, dy:  0, anchor: 'middle' },
  { lon: 39.6, lat: 24.5, name: { ar: 'المدينة المنورة', en: 'Madinah' }, kind: 'city', dx:  0, dy:  0, anchor: 'start' },
  { lon: 39.8, lat: 21.4, name: { ar: 'مكة المكرمة', en: 'Makkah' }, kind: 'city', dx:  0, dy:  0, anchor: 'start' },
  { lon: 42.5, lat: 18.2, name: { ar: 'أبها', en: 'Abha' }, kind: 'city', dx:  0, dy:  0, anchor: 'start' },
  { lon: 49.6, lat: 25.4, name: { ar: 'الأحساء', en: 'Al-Ahsa' }, kind: 'city', dx:  0, dy:  0, anchor: 'end' },
];
export const gccLabels: { lon: number; lat: number; name: L }[] = [
  { lon: 47.3, lat: 29.35, name: { ar: 'الكويت', en: 'Kuwait' } },
  { lon: 52.5, lat: 26.15, name: { ar: 'البحرين', en: 'Bahrain' } },
  { lon: 52.05, lat: 25.3, name: { ar: 'قطر', en: 'Qatar' } },
  { lon: 54.3, lat: 23.8, name: { ar: 'الإمارات', en: 'UAE' } },
  { lon: 56.6, lat: 21.0, name: { ar: 'عُمان', en: 'Oman' } },
];
