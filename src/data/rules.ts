/**
 * Sunucu kuralları. Kurallar bölümlere ayrılmıştır.
 * Düzenlemek için ilgili bölümün `items` dizisini güncellemeniz yeterli.
 */

export interface RuleSection {
  /** Bölüm başlığı */
  title: string;
  /** Bölüm açıklaması (opsiyonel) */
  intro?: string;
  /** Basit ikon anahtarı */
  icon: 'general' | 'roleplay' | 'war' | 'diplomacy' | 'town' | 'banned';
  /** Kural maddeleri */
  items: string[];
}

export const rules: RuleSection[] = [
  {
    title: 'Genel Kurallar',
    icon: 'general',
    intro: 'Tüm oyuncular için geçerli temel davranış kuralları.',
    items: [
      'Tüm oyunculara saygılı davran; hakaret, taciz ve ayrımcılık yasaktır.',
      'Hile (hack), kötü amaçlı mod ve oyun açıkları (bug/exploit) kullanmak yasaktır.',
      'Sunucu ekonomisini veya dengesini bozacak istismarlar yasaktır.',
      'Reklam, spam ve istenmeyen tanıtım paylaşımı yapılamaz.',
      'Yetkili kararlarına saygı gösterilir; itirazlar Discord üzerinden yapılır.',
    ],
  },
  {
    title: 'Savaş Kuralları',
    icon: 'war',
    intro: 'Çatışma ve cephe yönetimi sırasında uyulması gereken kurallar.',
    items: [
      'Savaş ilanı yetkili sistem/komutlar üzerinden resmî olarak yapılır.',
      'Savaş dışı oyunculara ve tarafsız bölgelere saldırı yasaktır.',
      'Belirlenen savaş saatleri ve kuşatma kurallarına uyulur.',
      'Ele geçirilen bölgelerde gereksiz yıkım ve yağma sınırları aşılamaz.',
      'Ateşkes ve teslim anlaşmalarına iki taraf da uymak zorundadır.',
    ],
  },
  {
    title: 'Diplomasi Kuralları',
    icon: 'diplomacy',
    intro: 'İttifaklar, antlaşmalar ve uluslararası ilişkiler.',
    items: [
      'Resmî antlaşmalar Discord/sunucu kanalları üzerinden kayıt altına alınır.',
      'İttifak ve pakt ihlalleri rol gereği sonuç doğurur; meta-gaming yasaktır.',
      'Sahte bayrak (false flag) operasyonları yetkili onayı gerektirir.',
      'Diplomatik dolandırıcılık rol içinde kalmalı, oyun dışına taşınmamalıdır.',
    ],
  },
  {
    title: 'Towny / Ülke Kuralları',
    icon: 'town',
    intro: 'Şehir ve ulus yönetimine dair kurallar.',
    items: [
      'Şehir ve ulus isimleri uygunsuz veya nefret içerikli olamaz.',
      'Bir ulusun sınırları içinde izinsiz yapılaşma yapılamaz.',
      'Aktif olmayan şehirler belirli süre sonra silinebilir.',
      'Korumalı alanlar (spawn, etkinlik bölgeleri) işgal edilemez.',
    ],
  },
  {
    title: 'Yasaklı Davranışlar',
    icon: 'banned',
    intro: 'Doğrudan yaptırım gerektiren ağır ihlaller.',
    items: [
      'Gerçek nefret sembolleri, ırkçılık ve nefret söylemi kesinlikle yasaktır.',
      'Doxxing, tehdit ve gerçek hayata taşınan taciz yasaktır.',
      'DDoS, hesap çalma ve sunucuya zarar verme girişimleri kalıcı banla sonuçlanır.',
      'Yetkili taklidi yapmak ve sahte duyuru paylaşmak yasaktır.',
      'Cinsel içerik, rahatsız edici görsel ve uygunsuz materyal paylaşımı yasaktır.',
    ],
  },
];
