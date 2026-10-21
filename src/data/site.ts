import type { L } from '../i18n/utils';

export const site = {
  name: { ar: 'قيادة للنقليات', en: 'Qiadah Logistics' } satisfies L,
  tagline: { ar: 'حلول تنقل مصمّمة لأعمالك', en: 'Mobility Solutions Built Around Your Business' } satisfies L,
  motto: { ar: 'شريك في كل طريق', en: 'A partner on every road' } satisfies L,
  domain: 'qiadah.sa',
  url: 'https://qiadah.sa',
  phone: { display: '920018503', tel: 'tel:920018503' },
  whatsapp: { display: '050 819 1222', intl: '966508191222' },
  email: 'logistics@qiadah.sa',
  instagram: { handle: '@1qiadah', url: 'https://instagram.com/1qiadah' },
  // يُحدَّث عند وصول البيانات من العميل
  address: { ar: 'المملكة العربية السعودية', en: 'Kingdom of Saudi Arabia' } satisfies L,
  cr: '', // رقم السجل التجاري
  responseHours: 1,
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp.intl}?text=${encodeURIComponent(message)}`;
}

export const stats: { value: number; suffix: string; label: L; icon: string }[] = [
  { value: 500, suffix: '+', label: { ar: 'شاحنة في الأسطول', en: 'Fleet vehicles' }, icon: 'truck' },
  { value: 3000, suffix: '+', label: { ar: 'رحلة منفّذة', en: 'Trips completed' }, icon: 'route' },
  { value: 1200, suffix: '+', label: { ar: 'موظف', en: 'Employees' }, icon: 'users' },
  { value: 30, suffix: '', label: { ar: 'عاماً من الخبرة', en: 'Years of experience' }, icon: 'award' },
  { value: 150, suffix: '+', label: { ar: 'عميل يثق بنا', en: 'Clients who trust us' }, icon: 'handshake' },
];

export const values: { title: L; text: L; icon: string }[] = [
  { icon: 'shield', title: { ar: 'النزاهة والشفافية', en: 'Integrity & Transparency' }, text: { ar: 'نطبّق أعلى المعايير الأخلاقية والمهنية في جميع تعاملاتنا مع عملائنا وشركائنا، بما يرسّخ الثقة والشفافية والعلاقات طويلة الأمد.', en: 'The highest ethical and professional standards in every dealing with our clients and partners, building trust and long-term relationships.' } },
  { icon: 'star', title: { ar: 'التميّز والجودة', en: 'Excellence & Quality' }, text: { ar: 'نلتزم بتقديم أعلى مستويات الجودة في كافة خدماتنا، من خلال الاهتمام بأدق التفاصيل والاحترافية العالية في كل جانب من جوانب التشغيل.', en: 'Meticulous attention to detail and high professionalism across every aspect of our operations.' } },
  { icon: 'bulb', title: { ar: 'الابتكار والحلول الذكية', en: 'Innovation & Smart Solutions' }, text: { ar: 'نبحث دائماً عن حلول وأساليب مبتكرة في قطاع النقل لتلبية احتياجات السوق المتغيرة، والتكيّف مع تحديات النقل بذكاء وكفاءة.', en: 'Advanced approaches that meet evolving market needs and adapt to transport challenges with intelligence and efficiency.' } },
  { icon: 'growth', title: { ar: 'نجاح عملائنا', en: "Our Clients' Success" }, text: { ar: 'نضع مصلحة عملائنا في مقدمة أولوياتنا، ونلتزم ببناء شراكات استراتيجية طويلة الأجل قائمة على الثقة المتبادلة والنمو المشترك.', en: 'Long-term strategic partnerships built on mutual trust and shared growth.' } },
];

export const process: { title: L; text: L }[] = [
  { title: { ar: 'الاستشارة وفهم المتطلبات', en: 'Consultation' }, text: { ar: 'نبدأ بدراسة احتياجات عملك بدقة: نوع الشحنات، الجداول الزمنية، والوجهات المطلوبة، لتصميم خطة نقل وشحن مخصصة ومرنة.', en: 'We assess your cargo, schedules and destinations to build a tailored, flexible plan.' } },
  { title: { ar: 'الحلول المخصصة والمبتكرة', en: 'Customized Solutions' }, text: { ar: 'نضع حلولاً مرنة تناسب حجم وطبيعة شحناتكم، مع تحديد أنواع الشاحنات والمعدات الأنسب لضمان كفاءة النقل وتقليل تكلفة التشغيل.', en: 'The right trucks and equipment for your cargo, for efficiency and lower operating cost.' } },
  { title: { ar: 'التنفيذ السلس والدقيق', en: 'Precise Execution' }, text: { ar: 'نتولى عملية النقل الفعلي عبر أسطولنا مع الالتزام بالجداول الزمنية، وتطبيق أعلى معايير السلامة والأمان لضمان سلامة الشحنات طوال الرحلة.', en: 'On-schedule delivery through our own fleet, with the highest safety standards throughout the journey.' } },
  { title: { ar: 'المتابعة والدعم المستمر', en: 'Monitoring & Support' }, text: { ar: 'نوفر لعملائنا تحديثات مستمرة حول مسار الشحنات، مع دعم فني وتواصل على مدار الساعة للإجابة على الاستفسارات وحل أي تحديات فوراً.', en: 'Live route updates and 24/7 assistance for any question or challenge.' } },
];

export const whyUs: { title: L; text: L; icon: string }[] = [
  { icon: 'fleet', title: { ar: 'أسطول مملوك ومتنوع', en: 'Owned, diverse fleet' }, text: { ar: 'أكثر من 500 شاحنة بأنواعها: هوابر، ستائر، حاويات، مبردات، ناقلات سيارات، ولوبد. لا وسطاء ولا تأخير.', en: '500+ trucks of every type: hoppers, curtain-siders, container chassis, reefers, car carriers and lowbeds. No brokers, no delays.' } },
  { icon: 'map', title: { ar: 'تغطية المملكة والخليج', en: 'Kingdom & GCC coverage' }, text: { ar: 'نصل إلى كل مدينة وكل ميناء في المملكة، وإلى جميع دول مجلس التعاون الخليجي.', en: 'Every city and every port in Saudi Arabia, and all six GCC countries.' } },
  { icon: 'clock', title: { ar: 'التزام بالمواعيد', en: 'On-time, every time' }, text: { ar: 'جداول زمنية واضحة وتنفيذ دقيق، لأن توقف خط الإنتاج أو تأخر الحاوية يكلّفك أكثر من النقل نفسه.', en: 'Clear schedules and precise execution, because a stopped production line costs more than the freight itself.' } },
  { icon: 'support', title: { ar: 'متابعة على مدار الساعة', en: '24/7 follow-up' }, text: { ar: 'فريق عمليات يتابع كل شحنة ويرد على استفساراتك في أي وقت، ونعدك بالرد على طلبات الأسعار خلال ساعة عمل.', en: 'An operations team tracks every shipment around the clock, and we answer quote requests within one business hour.' } },
  { icon: 'shield', title: { ar: 'سلامة بمعايير عالية', en: 'Safety first' }, text: { ar: 'سائقون مدرّبون، صيانة دورية، وإجراءات سلامة صارمة لكل نوع بضاعة، من الأعلاف إلى المعدات الثقيلة.', en: 'Trained drivers, scheduled maintenance and strict procedures for every cargo type, from feed to heavy equipment.' } },
  { icon: 'vision', title: { ar: 'شريك في رؤية 2030', en: 'A Vision 2030 partner' }, text: { ar: 'نساهم في تحويل المملكة إلى مركز لوجستي عالمي بأسطول حديث وفريق سعودي محترف.', en: 'Contributing to the Kingdom’s transformation into a global logistics hub with a modern fleet and professional team.' } },
];
