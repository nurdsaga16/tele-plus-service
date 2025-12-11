// Centralized data for all components

// HomeView data
export const features = [
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',
    title: 'Бесплатная диагностика',
    description: 'Определяем причину поломки без оплаты. Если ремонтируете у нас, диагностика засчитывается в стоимость.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    title: 'Опытные мастера',
    description: 'Специалисты с многолетним опытом работы. Регулярно повышают квалификацию и следят за новинками.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
    title: 'Качественные запчасти',
    description: 'Используем только оригинальные и сертифицированные запчасти от проверенных поставщиков.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    title: 'Быстрые сроки',
    description: 'Большинство ремонтов выполняем в день обращения. Сложные случаи - в течение 1-3 дней.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
    title: 'Гарантия на работы',
    description: 'Предоставляем официальную гарантию на все виды работ и установленные запчасти.'
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    title: 'Честные цены',
    description: 'Прозрачное ценообразование без скрытых доплат. Согласовываем стоимость до начала работ.'
  }
]

export const devices = [
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    title: 'Смартфоны',
    description: 'Ремонт всех популярных брендов',
    brands: [
      { name: 'iPhone', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png' },
      { name: 'Xiaomi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2560px-Xiaomi_logo_%282021-%29.svg.png' },
      { name: 'Huawei', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Huawei_wordmark_2019.svg/2560px-Huawei_wordmark_2019.svg.png' },
      { name: 'OPPO', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png' },
      { name: 'Vivo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vivo_logo_2019.svg/2560px-Vivo_logo_2019.svg.png' },
      { name: 'Realme', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png' }
    ]
  },
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    title: 'Ноутбуки и компьютеры',
    description: 'Восстановление работоспособности ПК',
    brands: [
      { name: 'Apple MacBook', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Lenovo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/2560px-Lenovo_%282015%29.svg.png' },
      { name: 'HP', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HP_logo_2025.svg/2560px-HP_logo_2025.svg.png' },
      { name: 'Dell', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png' },
      { name: 'ASUS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png' },
      { name: 'Acer', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_Acer.png/2560px-Logo_Acer.png' },
      { name: 'MSI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Micro-Star_International_logo.svg/2560px-Micro-Star_International_logo.svg.png' }
    ]
  },
  {
    icon: '<svg class="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>',
    title: 'Планшеты',
    description: 'Ремонт всех типов планшетов',
    brands: [
      { name: 'iPad', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
      { name: 'Samsung Galaxy Tab', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Samsung_wordmark.svg/2560px-Samsung_wordmark.svg.png' },
      { name: 'Lenovo', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/2560px-Lenovo_%282015%29.svg.png' },
      { name: 'Huawei', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Huawei_wordmark_2019.svg/2560px-Huawei_wordmark_2019.svg.png' },
      { name: 'Xiaomi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2560px-Xiaomi_logo_%282021-%29.svg.png' }
    ]
  }
]

export const popularServices = [
  { name: 'Замена дисплея IPS', description: 'Установка IPS-модуля на телефон или планшет', price: '6 000' },
  { name: 'Замена батареи', description: 'Подбор и установка новой батареи', price: '8 000' },
  { name: 'Замена порта Type-C', description: 'Замена разъёма Type-C', price: '6 000' },
  { name: 'Офисные ноутбуки — чистка + MX-4', description: 'Чистка системы охлаждения, замена термопасты MX-4', price: '8 000' },
  { name: 'MacBook — чистка + MX-4', description: 'Чистка системы охлаждения, термопаста MX-4', price: '10 000' },
  { name: 'Замена шлейфов', description: 'Шлейф кнопок, дисплея, датчиков', price: '5 000' },
  { name: 'Замена слухового/полифонического динамика', description: 'Чистка или замена динамиков', price: '6 000' },
  { name: 'Замена порта Micro-USB', description: 'Замена разъёма Micro-USB', price: '3 000' },
  { name: 'Замена шлейфа зарядки', description: 'Шлейф зарядного модуля', price: '5 000' }
]

export const workSteps = [
  { title: 'Заявка', description: 'Оставляете заявку или звоните нам' },
  { title: 'Диагностика', description: 'Бесплатная диагностика устройства' },
  { title: 'Согласование', description: 'Озвучиваем цену и сроки ремонта' },
  { title: 'Ремонт', description: 'Выполняем работы качественно и быстро' },
  { title: 'Гарантия', description: 'Выдаём устройство с гарантийным талоном' }
]

export const reviews = [
  {
    name: 'Александр',
    device: 'iPhone 12',
    text: 'Отлично починили разбитый экран за один день. Цена адекватная, мастер всё объяснил. Рекомендую!'
  },
  {
    name: 'Мария',
    device: 'MacBook Pro',
    text: 'Ноутбук перегревался, почистили и заменили термопасту. Теперь работает как новый. Спасибо!'
  },
  {
    name: 'Дмитрий',
    device: 'Samsung Galaxy',
    text: 'Быстро восстановили телефон после попадания воды. Очень доволен сервисом и гарантией.'
  }
]

// ServicesView data
export const phoneAndTabletPrices = [
  { name: 'Замена дисплея TFT', description: 'Установка TFT-модуля', price: '5 000' },
  { name: 'Замена дисплея IPS', description: 'Установка IPS-модуля', price: '6 000' },
  { name: 'Замена дисплея OMOLED', description: 'Установка OMOLED-модуля', price: '6 000' },
  { name: 'Замена батареи', description: 'Подбор и установка новой батареи', price: '8 000' },
  { name: 'Замена шлейфов', description: 'Шлейф кнопок, дисплея, датчиков', price: '5 000' },
  { name: 'Замена порта Micro-USB', description: 'Замена разъёма Micro-USB', price: '3 000' },
  { name: 'Замена порта Type-C', description: 'Замена разъёма Type-C', price: '6 000' },
  { name: 'Замена шлейфа зарядки', description: 'Шлейф зарядного модуля', price: '5 000' },
  { name: 'Замена слухового/полифонического динамика', description: 'Чистка или замена динамиков', price: '6 000' }
]

export const laptopPrices = [
  { name: 'Офисные ноутбуки — чистка + MX-4', description: 'Чистка системы охлаждения, замена термопасты MX-4', price: '8 000' },
  { name: 'Офисные ноутбуки — чистка + Honeywell', description: 'Чистка, термопаста с фазовым переходом Honeywell', price: '16 000' },
  { name: 'Игровые ноутбуки — чистка + MX-4', description: 'Чистка системы охлаждения, термопаста MX-4', price: '8 000' },
  { name: 'Игровые ноутбуки — Honeywell + Laird', description: 'Чистка, Honeywell + жидкие термопрокладки Laird', price: '28 000' },
  { name: 'Компьютеры — чистка + MX-4', description: 'Чистка и замена термопасты MX-4', price: '8 000' },
  { name: 'Компьютеры — Honeywell + Laird', description: 'Чистка, Honeywell + жидкие термопрокладки Laird', price: '28 000' },
  { name: 'MacBook — чистка + MX-4', description: 'Чистка системы охлаждения, термопаста MX-4', price: '10 000' },
  { name: 'MacBook — чистка + Honeywell', description: 'Чистка, термопаста с фазовым переходом Honeywell', price: '16 000' }
]

// WarrantyView data
export const warrantySteps = [
  {
    title: 'Свяжитесь с нами',
    description: 'Позвоните или напишите в WhatsApp, опишите проблему, которая возникла с устройством.'
  },
  {
    title: 'Предоставьте гарантийный талон',
    description: 'При обращении необходимо предъявить гарантийный талон или квитанцию об оплате ремонта.'
  },
  {
    title: 'Диагностика',
    description: 'Мастер проведёт бесплатную диагностику, чтобы определить причину повторной неисправности.'
  },
  {
    title: 'Гарантийный ремонт',
    description: 'Если проблема связана с нашими работами или установленными запчастями, ремонт выполняется бесплатно.'
  }
]

export const warrantyExceptions = [
  'Новые механические повреждения, полученные после ремонта (падения, удары, трещины)',
  'Следы стороннего вмешательства или попыток самостоятельного ремонта',
  'Грубое нарушение правил эксплуатации устройства',
  'Повреждения, вызванные скачками напряжения или использованием неоригинальных зарядных устройств',
  'Повреждения, связанные с попаданием влаги после ремонта',
  'Естественный износ запчастей после окончания гарантийного срока',
  'Повреждения, вызванные программным обеспечением, установленным пользователем'
]

