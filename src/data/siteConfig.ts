/**
 * ─────────────────────────────────────────────────────────────────────────
 *  Site Genel Yapılandırması
 * ─────────────────────────────────────────────────────────────────────────
 *  Sunucuyla ilgili tüm değiştirilebilir bilgiler burada toplanmıştır.
 *  Discord linki, sunucu IP'si, modpack linki vb. değiştiğinde SADECE
 *  bu dosyayı güncellemeniz yeterlidir.
 */

export interface SocialLink {
  /** Görünen ad (örn. "Discord", "YouTube") */
  label: string;
  /** Bağlantı adresi. Henüz yoksa "#" bırakın. */
  url: string;
  /** Basit ikon anahtarı (Footer/Header içinde eşlenir) */
  icon: 'discord' | 'youtube' | 'twitter' | 'instagram' | 'tiktok';
}

export interface SiteConfig {
  siteName: string;
  shortName: string;
  description: string;
  discordUrl: string;
  /** İşbirliği / iletişim e-posta adresi */
  contactEmail: string;
  serverIp: string;
  minecraftVersion: string;
  /** Sunucu altyapısı (Mohist vb.) */
  serverSoftware: string;
  /** Modpack adı (örn. "Dramland V02") */
  modpackName: string;
  /** Modpack için gereken mod yükleyici (örn. "Forge 1.20.1") */
  modpackLoader: string;
  modpackUrl: string;
  /** Tanıtım videosu / fragman linki. Yoksa boş bırakın. */
  trailerUrl: string;
  logoPath: string;
  /** Open Graph / sosyal paylaşım görseli (public/ içine göreli) */
  ogImage: string;
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  siteName: 'Hearts Of Steel I',
  shortName: 'HoS I',
  description:
    '2. Dünya Savaşı temalı, 1936 Avrupa haritasında geçen modlu Minecraft 1.20.1 Mohist Towny sunucusu. Ülkeni kur, ittifaklar yap, cepheleri yönet.',

  // ► Discord davet linkinizi buraya yapıştırın
  discordUrl: 'https://discord.gg/EM5KudZTTq',

  // ► İşbirliği / iletişim e-posta adresi
  contactEmail: 'hosresmi@hotmail.com',

  // ► Sunucu giriş adresiniz
  serverIp: 'unit-newspapers.gl.joinmc.link',

  minecraftVersion: '1.20.1',
  serverSoftware: 'Mohist',

  // ► Modpack bilgileri
  modpackName: 'Dramland V02',
  modpackLoader: 'Forge 1.20.1',

  // ► Modpack indirme linki.
  //    Dosya büyük (330 MB) olduğu için GitHub Releases'te barındırılır.
  //    Aşağıdaki adımları izleyip zip'i Releases'e yükleyince bu link çalışır.
  //    Dilersen Google Drive / MediaFire gibi başka bir DOĞRUDAN indirme
  //    linkiyle de değiştirebilirsin.
  modpackUrl:
    'https://github.com/ZeorezDev/hearts-of-steel-i/releases/download/modpack-v02/Dramland-V02.zip',

  // ► Tanıtım videosu linki (henüz yoksa boş bırakın)
  trailerUrl: '',

  logoPath: '/images/placeholders/logo.svg',
  ogImage: '/images/placeholders/og-default.svg',

  // Sosyal medya bağlantıları — linkiniz olmayanları "#" olarak bırakın
  socials: [
    { label: 'Discord', url: 'https://discord.gg/your-invite', icon: 'discord' },
    { label: 'YouTube', url: 'https://www.youtube.com/@heartsofsteel-1/featured', icon: 'youtube' },
    { label: 'Instagram', url: 'https://www.instagram.com/hearts_ofsteel/', icon: 'instagram' },
    { label: 'X (Twitter)', url: 'https://x.com/Zeorez3132', icon: 'twitter' },
    { label: 'TikTok', url: '#', icon: 'tiktok' },
  ],
};

/** Blog kategorileri — blog filtreleme ve doğrulama için kullanılır. */
export const blogCategories = [
  'Duyurular',
  'Güncellemeler',
  'Rehberler',
  'Savaş Raporları',
  'Etkinlikler',
] as const;

export type BlogCategory = (typeof blogCategories)[number];
