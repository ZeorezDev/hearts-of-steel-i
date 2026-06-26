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
    name: 'Komutan',
    role: 'Kurucu',
    description:
      'Sunucunun vizyonunu belirler, genel yönetimi ve teknik altyapıyı üstlenir.',
    avatar: '/images/placeholders/avatar-1.svg',
    discord: 'komutan',
    isBlogAuthor: true,
  },
  {
    name: 'Genelkurmay',
    role: 'Yönetici',
    description:
      'Sunucu içi düzen, etkinlik planlaması ve ekip koordinasyonundan sorumludur.',
    avatar: '/images/placeholders/avatar-2.svg',
    discord: 'genelkurmay',
    isBlogAuthor: true,
  },
  {
    name: 'Diplomat',
    role: 'Diplomasi Sorumlusu',
    description:
      'İttifaklar, antlaşmalar ve uluslararası anlaşmazlıkların çözümünde görev alır.',
    avatar: '/images/placeholders/avatar-3.svg',
    discord: 'diplomat',
    isBlogAuthor: false,
  },
  {
    name: 'Saha Subayı',
    role: 'Moderatör',
    description:
      'Oyun içi kuralların uygulanması ve oyuncu desteğiyle ilgilenir.',
    avatar: '/images/placeholders/avatar-4.svg',
    discord: 'sahasubayi',
    isBlogAuthor: false,
  },
  {
    name: 'Mühendis',
    role: 'Teknik Ekip',
    description:
      'Mod paketi, sunucu performansı ve harita bakımından sorumludur.',
    avatar: '/images/placeholders/avatar-5.svg',
    discord: 'muhendis',
    isBlogAuthor: true,
  },
];
