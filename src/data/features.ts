/**
 * Ana sayfa ve sunucu tanıtım sayfasında kullanılan özellik kartları.
 * Yeni özellik eklemek için diziye yeni bir nesne ekleyin.
 */

export interface Feature {
  /** Kart başlığı */
  title: string;
  /** Kısa açıklama metni */
  description: string;
  /** Basit ikon anahtarı (FeatureCard içinde SVG'ye eşlenir) */
  icon: FeatureIcon;
}

export type FeatureIcon =
  | 'mod'
  | 'map'
  | 'town'
  | 'diplomacy'
  | 'tank'
  | 'economy'
  | 'staff'
  | 'roleplay';

export const features: Feature[] = [
  {
    title: '50+ Özenle Seçilmiş Mod',
    description:
      'Performans ve denge gözetilerek seçilmiş, birbiriyle uyumlu çalışan bir mod paketi. Her mod, savaş atmosferini güçlendirmek için yerinde.',
    icon: 'mod',
  },
  {
    title: '1936 Tarihsel Avrupa Haritası',
    description:
      'Savaşın eşiğindeki Avrupa, sınırları ve stratejik noktalarıyla yeniden inşa edildi. Tarihin başlangıç çizgisi senin elinde.',
    icon: 'map',
  },
  {
    title: 'Towny Tabanlı Ülke Yönetimi',
    description:
      'Şehirler kur, bölgeler birleştir, uluslar ilan et. Topraklarını yönet, vergi topla ve halkını koru.',
    icon: 'town',
  },
  {
    title: 'Diplomasi ve İttifak Sistemi',
    description:
      'Pakt imzala, ittifaklar kur, ihanetleri yönet. Sözler ve antlaşmalar bazen toplardan daha güçlüdür.',
    icon: 'diplomacy',
  },
  {
    title: 'Tarihsel Tanklar, Uçaklar ve Silahlar',
    description:
      'Dönemin zırhlı araçları, av uçakları ve piyade silahları. Cephede üstünlük teknolojiyi doğru kullanana ait.',
    icon: 'tank',
  },
  {
    title: 'Savaş, Ekonomi ve Üretim Dengesi',
    description:
      'Cephane üret, kaynakları yönet, lojistiği planla. Savaş yalnızca cephede değil, fabrikalarda da kazanılır.',
    icon: 'economy',
  },
  {
    title: 'Aktif Yetkili Ekibi',
    description:
      'Adil, denetimli ve oyuncuya saygılı bir yönetim. Sorunlar hızla çözülür, kurallar tutarlı uygulanır.',
    icon: 'staff',
  },
  {
    title: 'Rolplay Destekli Savaş Deneyimi',
    description:
      'Sadece çatışma değil; diplomasi, siyaset ve hikâye. Karakterini yaşa, ulusunun kaderini yaz.',
    icon: 'roleplay',
  },
];
