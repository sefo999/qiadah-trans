import type { L } from '../i18n/utils';

export type Service = {
  slug: string;
  icon: string;
  image: string; // key in the images map
  title: L;
  short: L;
  spec: L; // small badge shown on the card
  intro: L;
  bullets: L<string[]>;
  cargo: L<string[]>;
  sectors: string[]; // sector slugs
};

export const services: Service[] = [
  {
    slug: 'bulk-hoppers',
    icon: 'hopper',
    image: 'hopper',
    title: { ar: 'نقل الحبوب والأعلاف والمواد السائبة', en: 'Bulk Hoppers: Grain, Feed & Liquids' },
    short: { ar: 'هوابر تفريغ سفلي (حلّاب) وهوابر قلّاب لنقل الحبوب والأعلاف والمواد السائبة والسائلة بأمان ودون فاقد.', en: 'Bottom-discharge and tipping hopper trailers for grain, feed, bulk and liquid materials, with no loss and no contamination.' },
    spec: { ar: 'حلّاب وقلّاب', en: 'Bottom-discharge & tipping' },
    intro: { ar: 'الأعلاف والحبوب والمواد السائبة تحتاج معدات مخصصة: هوابر مغلقة تحمي الحمولة من الرطوبة والتلوث، وتفريغاً سريعاً ونظيفاً في صوامع المصانع ومزارع الدواجن. أسطولنا من الهوابر مجهّز بالتفريغ السفلي (الحلّاب) والقلّاب، ويعمل على خطوط ثابتة بين الموانئ ومصانع الأعلاف ومزارع الإنتاج في جميع مناطق المملكة.', en: 'Feed, grain and bulk materials need purpose-built equipment: sealed hoppers that protect the load from moisture and contamination, and fast, clean discharge into factory silos and poultry farms. Our hopper fleet is equipped for bottom discharge and tipping, running fixed lanes between ports, feed mills and production farms across the Kingdom.' },
    bullets: { ar: ['هوابر مغلقة تحمي الحمولة من الرطوبة والتلوث', 'تفريغ سفلي (حلّاب) وقلّاب حسب طبيعة موقع الاستلام', 'خطوط ثابتة من الموانئ إلى المصانع والمزارع', 'تنظيف وتعقيم بين الحمولات المختلفة', 'نقل المواد السائلة بمعدات مخصصة'], en: ['Sealed hoppers that protect the load from moisture and contamination', 'Bottom discharge or tipping, depending on the receiving site', 'Fixed lanes from ports to mills and farms', 'Cleaning and sanitising between different loads', 'Liquid materials carried in dedicated equipment'] },
    cargo: { ar: ['أعلاف', 'ذرة وشعير وفول صويا', 'حبوب', 'مواد خام سائبة', 'مواد سائلة'], en: ['Animal feed', 'Corn, barley and soybean', 'Grain', 'Bulk raw materials', 'Liquid materials'] },
    sectors: ['feed-mills', 'poultry', 'dairy', 'importers'],
  },
  {
    slug: 'curtain-side',
    icon: 'curtain',
    image: 'curtain',
    title: { ar: 'شاحنات الستائر الجانبية', en: 'Curtain-Side Trucks' },
    short: { ar: 'تحميل وتفريغ من الجانبين للبضائع المنصّصة والمعبأة: سيراميك، ألبان معبأة، مواد تصنيع ومنتجات جاهزة.', en: 'Side loading and unloading for palletised and packaged goods: ceramics, packaged dairy, manufacturing inputs and finished products.' },
    spec: { ar: 'تحميل جانبي', en: 'Side loading' },
    intro: { ar: 'شاحنات الستائر الخيار الأمثل للبضائع المنصّصة التي تحتاج تحميلاً سريعاً بالرافعة الشوكية من الجانب، مع حماية كاملة من الشمس والغبار أثناء الطريق. نخدم بها مصانع السيراميك والمصانع الكبيرة ومراكز التوزيع بين المدن وعبر الحدود الخليجية.', en: 'Curtain-siders are the right choice for palletised goods that need fast forklift loading from the side, with full protection from sun and dust on the road. We serve ceramic factories, large manufacturers and distribution centres between cities and across GCC borders.' },
    bullets: { ar: ['تحميل وتفريغ سريع من الجانبين بالرافعة الشوكية', 'حماية كاملة من الشمس والغبار والأمطار', 'تثبيت احترافي للمنصّات والبضائع الهشة', 'مناسبة للتوزيع بين المدن والشحن الخليجي'], en: ['Fast side loading and unloading by forklift', 'Full protection from sun, dust and rain', 'Professional securing of pallets and fragile goods', 'Suited to inter-city distribution and GCC freight'] },
    cargo: { ar: ['سيراميك وبورسلين', 'منتجات معبأة', 'مواد تصنيع', 'منصّات', 'منتجات جاهزة'], en: ['Ceramics and porcelain', 'Packaged products', 'Manufacturing inputs', 'Pallets', 'Finished goods'] },
    sectors: ['ceramics', 'factories', 'dairy', 'importers'],
  },
  {
    slug: 'sea-containers',
    icon: 'container',
    image: 'container',
    title: { ar: 'نقل الحاويات البحرية', en: 'Sea Container Haulage' },
    short: { ar: 'سحب الحاويات 20 و40 قدماً من موانئ جدة والدمام والجبيل وينبع والملك عبدالله إلى المصانع والمستودعات وبالعكس.', en: '20ft and 40ft container haulage from Jeddah, Dammam, Jubail, Yanbu and King Abdullah ports to factories and warehouses, and back.' },
    spec: { ar: '20 و40 قدماً', en: '20ft & 40ft' },
    intro: { ar: 'نعمل مع الخطوط الملاحية والمستوردين ووكلاء الشحن على سحب الحاويات من كل موانئ المملكة وإعادة الفارغ في المواعيد المحددة، لتجنب غرامات التأخير. شاسيهات مخصصة للحاويات 20 و40 قدماً، وفريق تخليص يتابع إجراءات الميناء خطوة بخطوة.', en: 'We work with shipping lines, importers and freight forwarders to haul containers from every Saudi port and return empties on time, avoiding demurrage and detention charges. Dedicated 20ft and 40ft chassis, and a port team that follows terminal procedures step by step.' },
    bullets: { ar: ['شاسيهات مخصصة للحاويات 20 و40 قدماً', 'سحب من جميع موانئ المملكة وميناء الرياض الجاف', 'إعادة الحاويات الفارغة في الوقت المحدد', 'تنسيق مباشر مع الخطوط الملاحية ووكلاء الشحن', 'شحن عابر للحدود إلى دول الخليج'], en: ['Dedicated 20ft and 40ft container chassis', 'Haulage from every Saudi port and Riyadh Dry Port', 'On-time empty container returns', 'Direct coordination with shipping lines and forwarders', 'Cross-border haulage to GCC countries'] },
    cargo: { ar: ['حاويات جافة', 'حاويات مبردة', 'حاويات مفتوحة', 'حاويات مسطحة'], en: ['Dry containers', 'Reefer containers', 'Open-top containers', 'Flat-rack containers'] },
    sectors: ['shipping-lines', 'importers', 'factories', 'ceramics'],
  },
  {
    slug: 'car-carriers',
    icon: 'carcarrier',
    image: 'carcarrier',
    title: { ar: 'ناقلات السيارات', en: 'Car Carriers' },
    short: { ar: 'سطحات كبيرة متعددة الطوابق بسعة 10 سيارات، لنقل المركبات من الموانئ إلى الوكلاء والمعارض في كل المملكة.', en: 'Large multi-deck car carriers with a 10-vehicle capacity, moving vehicles from ports to dealers and showrooms across the Kingdom.' },
    spec: { ar: 'سعة 10 سيارات', en: '10-vehicle capacity' },
    intro: { ar: 'ناقلات سيارات متعددة الطوابق بسعة 10 سيارات في الرحلة الواحدة، مع تثبيت هيدروليكي وسائقين متخصصين في تحميل وتنزيل المركبات دون خدش. نخدم مستوردي السيارات والوكلاء وشركات التأجير بين الموانئ والمعارض والمستودعات.', en: 'Multi-deck car carriers with a 10-vehicle capacity per trip, hydraulic securing and drivers specialised in loading and unloading vehicles without a scratch. We serve vehicle importers, dealers and rental companies between ports, showrooms and yards.' },
    bullets: { ar: ['سعة 10 سيارات في الرحلة الواحدة', 'تثبيت هيدروليكي وتحميل احترافي', 'سائقون متخصصون في نقل المركبات', 'من الموانئ إلى المعارض والوكلاء في كل المدن'], en: ['10 vehicles per trip', 'Hydraulic securing and professional loading', 'Drivers specialised in vehicle transport', 'From ports to showrooms and dealers in every city'] },
    cargo: { ar: ['سيارات جديدة', 'سيارات مستعملة', 'مركبات تجارية خفيفة', 'أساطيل التأجير'], en: ['New vehicles', 'Used vehicles', 'Light commercial vehicles', 'Rental fleets'] },
    sectors: ['importers', 'shipping-lines'],
  },
  {
    slug: 'refrigerated',
    icon: 'reefer',
    image: 'reefer',
    title: { ar: 'الشاحنات المبردة', en: 'Refrigerated Trucks' },
    short: { ar: 'سلسلة تبريد متصلة للدواجن والألبان والأغذية، مع تحكم ومراقبة لدرجة الحرارة طوال الرحلة.', en: 'An unbroken cold chain for poultry, dairy and food, with temperature control and monitoring throughout the journey.' },
    spec: { ar: 'تحكم بالحرارة', en: 'Temperature controlled' },
    intro: { ar: 'في الأغذية الطازجة، كسر سلسلة التبريد لساعة واحدة يعني خسارة الحمولة كاملة. شاحناتنا المبردة مجهزة بوحدات تبريد موثوقة ومراقبة لدرجة الحرارة، وتعمل بين مصانع الدواجن والألبان ومراكز التوزيع والمتاجر الكبرى في جميع المدن.', en: 'In fresh food, a one-hour break in the cold chain can mean losing the entire load. Our reefers run reliable cooling units with temperature monitoring, serving poultry and dairy plants, distribution centres and major retailers in every city.' },
    bullets: { ar: ['وحدات تبريد موثوقة وصيانة دورية', 'مراقبة لدرجة الحرارة طوال الرحلة', 'نظافة وتعقيم بين الحمولات', 'توزيع يومي للمدن ومراكز التوزيع'], en: ['Reliable cooling units with scheduled maintenance', 'Temperature monitoring throughout the journey', 'Cleaning and sanitising between loads', 'Daily distribution to cities and DCs'] },
    cargo: { ar: ['دواجن', 'ألبان ومشتقاتها', 'أغذية مبردة ومجمدة', 'خضار وفواكه'], en: ['Poultry', 'Dairy products', 'Chilled and frozen food', 'Fruit and vegetables'] },
    sectors: ['poultry', 'dairy', 'factories'],
  },
  {
    slug: 'heavy-lowbed',
    icon: 'lowbed',
    image: 'lowbed',
    title: { ar: 'نقل المعدات الثقيلة والشحنات الخاصة', en: 'Heavy Equipment & Project Cargo' },
    short: { ar: 'لوبد لنقل المعدات الثقيلة وخطوط الإنتاج والأحمال غير القياسية، مع تصاريح ومرافقة وتخطيط للمسار.', en: 'Lowbed trailers for heavy equipment, production lines and out-of-gauge loads, with permits, escorts and route planning.' },
    spec: { ar: 'أحمال غير قياسية', en: 'Out-of-gauge loads' },
    intro: { ar: 'نقل خط إنتاج جديد أو معدة ثقيلة ليس رحلة عادية. نخطط المسار، ونستخرج التصاريح، ونؤمّن المرافقة، وننقل الحمولة على مقطورات لوبد مجهزة بأعلى معايير التثبيت والسلامة، إلى موقع المصنع أو المشروع في أي مكان في المملكة.', en: 'Moving a new production line or heavy machine is not an ordinary trip. We plan the route, obtain permits, arrange escorts and move the load on lowbed trailers with the highest securing and safety standards, to the factory or project site anywhere in the Kingdom.' },
    bullets: { ar: ['مقطورات لوبد للأحمال الثقيلة وغير القياسية', 'تخطيط المسار واستخراج التصاريح', 'مرافقة وتأمين للشحنات الحساسة', 'خبرة في نقل خطوط الإنتاج والمعدات الصناعية'], en: ['Lowbed trailers for heavy and out-of-gauge loads', 'Route planning and permit handling', 'Escorts and insurance for sensitive cargo', 'Experience moving production lines and industrial equipment'] },
    cargo: { ar: ['معدات ثقيلة', 'خطوط إنتاج', 'مولدات ومحولات', 'آليات إنشائية'], en: ['Heavy machinery', 'Production lines', 'Generators and transformers', 'Construction plant'] },
    sectors: ['factories', 'ceramics', 'importers'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
