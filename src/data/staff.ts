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
];
