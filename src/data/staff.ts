/**
 * Sunucu yetkili kadrosu.
 * Yeni yetkili eklemek için diziye yeni bir nesne ekleyin.
 *
 * `isBlogAuthor: true` olan yetkililer, blog yazısı yayınlama yetkisine
 * sahip olduğu için kadro sayfasında ayrıca rozetle işaretlenir.
 */

export interface StaffMember {
  /** Görünen isim */
  name: string;
  /** Rol / unvan (örn. "Kurucu", "Yönetici", "Moderatör") */
  role: string;
  /** Kısa açıklama / görev tanımı */
  description: string;
  /** Avatar görseli (yoksa placeholder kullanılır) */
  avatar: string;
  /** Discord kullanıcı adı */
  discord: string;
  /** Blog yazısı yayınlayabilen yetkili mi? */
  isBlogAuthor: boolean;
}

export const staff: StaffMember[] = [
  {
    name: 'Zeorez',
    role: 'Kurucu',
    description:
      'Sunucunun vizyonunu belirler, genel yönetimi ve teknik altyapıyı üstlenir.',
    avatar: '/images/placeholders/avatar-1.svg',
    discord: 'zeorez',
    isBlogAuthor: true,
  },
  {
    name: 'Dram',
    role: 'Kurucu',
    description:
      'Sunucunun kuruluşunda yer alır; yönetim, planlama ve topluluk kararlarında söz sahibidir.',
    avatar: '/images/placeholders/avatar-2.svg',
    discord: 'dram',
    isBlogAuthor: true,
  },
  {
    name: 'Okaci',
    role: 'Admin',
    description:
      'Sunucu içi düzen, etkinlik yönetimi ve yetkili koordinasyonundan sorumludur.',
    avatar: '/images/placeholders/avatar-3.svg',
    discord: 'okaci',
    isBlogAuthor: true,
  },
  {
    name: 'Xwex',
    role: 'Moderatör',
    description:
      'Oyun içi kuralların uygulanması ve oyuncu desteğiyle ilgilenir.',
    avatar: '/images/placeholders/avatar-4.svg',
    discord: 'xwex',
    isBlogAuthor: false,
  },
  {
    name: 'Emre Guderian',
    role: 'Moderatör',
    description:
      'Kural ihlallerini denetler, oyuncuların sorunlarını çözer ve düzeni korur.',
    avatar: '/images/placeholders/avatar-5.svg',
    discord: 'emreguderian',
    isBlogAuthor: false,
  },
];
