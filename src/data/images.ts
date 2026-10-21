import type { ImageMetadata } from 'astro';
import sitrak from '../assets/images/fleet-sitrak-tippers.jpg';
import hopperSide from '../assets/images/hopper-trailer-side.jpg';
import hopperRear from '../assets/images/hopper-trailers-rear.jpg';
import hopperRow from '../assets/images/hopper-trailers-row.jpg';
import stockContainer from '../assets/images/stock-container-port.jpg';
import stockReefer from '../assets/images/stock-reefer-trailers.jpg';
import stockCarCarrier from '../assets/images/stock-car-carrier.jpg';
import stockLowbed from '../assets/images/stock-lowbed-heavy.jpg';
import stockCurtain from '../assets/images/stock-curtain-side.jpg';
import stockDesert from '../assets/images/stock-desert-road.jpg';

// Keys match `service.image`. Own photos cover the hoppers and tippers;
// the other truck types use licensed Unsplash stock until Qiadah's own
// photos arrive (see src/assets/images/CREDITS.md).
export const images: Record<string, ImageMetadata> = {
  hero: sitrak,
  hopper: hopperSide,
  hopperRear,
  hopperRow,
  sitrak,
  desert: stockDesert,
  curtain: stockCurtain,
  container: stockContainer,
  carcarrier: stockCarCarrier,
  reefer: stockReefer,
  lowbed: stockLowbed,
};

export const gallery: { src: ImageMetadata; alt: { ar: string; en: string } }[] = [
  { src: sitrak, alt: { ar: 'أربع شاحنات قلّاب سيتراك ثمانية في أربعة في ساحة قيادة', en: 'Four SITRAK 8×4 tipper trucks in the Qiadah yard' } },
  { src: hopperSide, alt: { ar: 'مقطورة هوبر جديدة بشعار قيادة للنقليات', en: 'New hopper trailer with the Qiadah Logistics livery' } },
  { src: hopperRow, alt: { ar: 'صف من مقطورات الهوبر الجديدة', en: 'A row of new hopper trailers' } },
  { src: hopperRear, alt: { ar: 'مقطورات هوبر من الخلف بشعار قيادة', en: 'Hopper trailers from behind with the Qiadah logo' } },
];
