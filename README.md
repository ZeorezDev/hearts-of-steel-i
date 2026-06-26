# Hearts Of Steel I — Resmî Web Sitesi

2. Dünya Savaşı temalı, 1936 Avrupa haritasında geçen modlu **Minecraft 1.20.1
Mohist Towny** sunucusu *Hearts Of Steel I* için tasarlanmış modern, sinematik
ve tamamen statik bir web sitesi.

- ⚙️ **Astro** + **TypeScript**
- 🎨 Düz CSS tasarım sistemi (koyu lacivert / kömür siyahı / altın vurgu)
- 📝 Markdown tabanlı blog (frontmatter doğrulamalı)
- 🚀 **GitHub Pages** için otomatik dağıtım (GitHub Actions)
- 📱 Mobil uyumlu, hızlı ve SEO dostu

---

## 1. Kurulum

Gereksinim: **Node.js 18+** (önerilen 20+).

```bash
npm install
```

## 2. Geliştirme

```bash
npm run dev       # Geliştirme sunucusu (http://localhost:4321)
npm run build     # Üretim derlemesi (dist/ klasörüne)
npm run preview   # Derlenen siteyi yerelde önizle
```

---

## 3. Proje Yapısı

```
.
├─ .github/workflows/deploy.yml   # GitHub Pages otomatik dağıtım
├─ astro.config.mjs               # Astro + GitHub Pages base path ayarı
├─ public/
│  ├─ favicon.svg
│  └─ images/placeholders/        # Logo, OG görseli, blog kapakları, avatarlar
└─ src/
   ├─ components/                 # Yeniden kullanılabilir bileşenler
   │  ├─ Header.astro             # Üst menü (mobil hamburger dahil)
   │  ├─ Footer.astro             # Alt bilgi
   │  ├─ HeroSection.astro        # Ana sayfa hero alanı
   │  ├─ FeatureCard.astro        # Özellik kartı
   │  ├─ StatCard.astro           # İstatistik kartı (hero)
   │  ├─ BlogCard.astro           # Blog yazısı kartı
   │  ├─ StaffCard.astro          # Yetkili kartı
   │  ├─ DiscordCTA.astro         # Discord çağrı bandı
   │  ├─ SectionTitle.astro       # Bölüm başlığı
   │  ├─ SEO.astro                # <head> meta etiketleri
   │  ├─ Icon.astro               # Genel inline SVG ikon seti
   │  └─ SocialIcon.astro         # Sosyal medya ikonları
   ├─ content/
   │  ├─ config.ts                # Blog içerik koleksiyonu + frontmatter şeması
   │  └─ blog/                    # ← Blog yazıları (.md) buraya
   ├─ data/
   │  ├─ siteConfig.ts            # Discord, IP, modpack, sürüm vb. AYARLAR
   │  ├─ features.ts              # Ana sayfa özellik kartları
   │  ├─ rules.ts                 # Kurallar
   │  └─ staff.ts                 # Yetkili kadrosu
   ├─ layouts/
   │  └─ Layout.astro             # Ortak sayfa düzeni (head, header, footer)
   ├─ pages/
   │  ├─ index.astro              # Ana Sayfa            /
   │  ├─ server.astro             # Sunucu Tanıtımı      /server
   │  ├─ join.astro               # Nasıl Katılırım?     /join
   │  ├─ rules.astro              # Kurallar             /rules
   │  ├─ staff.astro              # Kadro                /staff
   │  ├─ admin-guide.astro        # Admin Rehberi        /admin-guide
   │  ├─ robots.txt.ts            # robots.txt (dinamik)
   │  └─ blog/
   │     ├─ index.astro           # Blog listesi         /blog
   │     └─ [slug].astro          # Blog detayı          /blog/<slug>
   └─ styles/
      └─ global.css               # Tasarım sistemi & global stiller
```

> `sitemap-index.xml` ve `sitemap-*.xml` derleme sırasında
> `@astrojs/sitemap` tarafından otomatik üretilir.

---

## 4. Yapılandırmayı Değiştirme

Sunucuya özel tüm bilgiler **tek dosyada** toplanmıştır:
[`src/data/siteConfig.ts`](src/data/siteConfig.ts)

```ts
export const siteConfig = {
  discordUrl: 'https://discord.gg/...',   // Discord davet linki
  serverIp: 'play.heartsofsteel.example', // Sunucu IP
  minecraftVersion: '1.20.1',
  serverSoftware: 'Mohist',
  modpackUrl: '#',                        // Modpack linki (yoksa "#")
  trailerUrl: '',                         // Tanıtım videosu (opsiyonel)
  // ...
};
```

- **Kurallar:** [`src/data/rules.ts`](src/data/rules.ts)
- **Özellikler:** [`src/data/features.ts`](src/data/features.ts)
- **Kadro:** [`src/data/staff.ts`](src/data/staff.ts)

Görselleri değiştirmek için `public/images/` altına kendi dosyalarını koy ve
ilgili data dosyasındaki yolu güncelle.

---

## 5. Blog Yazısı Ekleme

1. `src/content/blog/` klasörüne yeni bir `.md` dosyası oluştur.
   Dosya adı yazının URL’si (slug) olur: `yeni-yazi.md` → `/blog/yeni-yazi`
2. Dosyanın en üstüne frontmatter ekle:

```markdown
---
title: "Yeni Güncelleme Yayında"
description: "Sunucuya eklenen yeni sistemler ve değişiklikler."
date: "2026-06-26"
author: "Admin"
category: "Duyurular"
cover: "/images/blog/update-1.jpg"
published: true
---

Yazının içeriği buradan itibaren Markdown olarak...
```

| Alan | Açıklama | Zorunlu |
|------|----------|---------|
| `title` | Başlık | ✅ |
| `description` | Kısa açıklama (kart + SEO) | ✅ |
| `date` | `YYYY-MM-DD` | ✅ |
| `author` | Yazar adı | ✅ |
| `category` | Duyurular · Güncellemeler · Rehberler · Savaş Raporları · Etkinlikler | ✅ |
| `cover` | Kapak görseli yolu | ➖ (yoksa fallback) |
| `published` | `true` / `false` | ➖ (varsayılan `true`) |

- `published: false` olan yazılar **listelenmez ve sayfası oluşturulmaz**.
- Yazılar **tarihe göre** otomatik sıralanır (yeni → eski).
- Frontmatter doğrulaması nedeniyle hatalı/eksik alan derlemeyi durdurur —
  bozuk yazı yanlışlıkla yayınlanmaz.

---

## 6. Admin / Blog Yazarı Ekleme

Bu site statik olduğu için **gerçek bir admin paneli yoktur**. Blog yayınlama
yetkisi tamamen **GitHub deposundaki collaborator (katkıcı) izinleriyle**
yönetilir:

1. GitHub deposunda **Settings → Collaborators** bölümünden kişiyi ekle.
2. Eklenen kişi `src/content/blog/` klasörüne `.md` dosyası ekleyip
   commit/push yaparak yazı yayınlayabilir.
3. İsterseniz bu kişiyi [`src/data/staff.ts`](src/data/staff.ts) içinde
   `isBlogAuthor: true` olarak işaretleyebilirsiniz (Kadro sayfasında rozetlenir).

Site içindeki [`/admin-guide`](src/pages/admin-guide.astro) sayfası bu süreci
yazarlara anlatan bir rehberdir (güvenlik katmanı değildir).

---

## 7. GitHub Pages’e Dağıtım

### a) astro.config.mjs’i ayarla

[`astro.config.mjs`](astro.config.mjs) içindeki iki değişkeni güncelle:

```js
const GITHUB_USER = 'kullaniciadi';        // GitHub kullanıcı/kuruluş adın
const REPO_NAME   = 'hearts-of-steel-i';   // Repo adın
```

- **Proje sayfası** (`kullanici.github.io/repo`) → `REPO_NAME` dolu kalsın.
- **Kullanıcı sayfası / özel domain** (`kullanici.github.io` veya `alanadi.com`)
  → `REPO_NAME = ''` yap.

> Repo adı değişirse **sadece** bu iki değeri güncellemen yeterli; tüm iç
> bağlantılar `import.meta.env.BASE_URL` üzerinden otomatik uyum sağlar.

### b) GitHub Pages’i etkinleştir

1. Depoyu GitHub’a push et.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions** seç.
3. `main` (veya `master`) dalına her push’ta
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) otomatik
   olarak derler ve yayınlar.

Birkaç dakika içinde sit*en yayında olur:
`https://<GITHUB_USER>.github.io/<REPO_NAME>/`

---

## 8. Notlar

- Arka plan fotoğrafları (`public/images/backgrounds/`) **kamu malı (public domain)**
  2. Dünya Savaşı arşiv görselleridir; Wikimedia Commons'tan alınmıştır
  (`ww2-tanks.jpg`, `ww2-sky.jpg`, `ww2-infantry.jpg`). Telif/atıf zorunluluğu
  yoktur; istersen kendi görsellerinle değiştirebilirsin.
- Site tamamen **statiktir**: backend, veritabanı veya sunucu tarafı kod yoktur.
- Arama ve kategori filtreleme **istemci tarafında** (tarayıcıda) çalışır.
- Görseller şu an placeholder SVG’lerdir; `public/images/` altına kendi
  görsellerini koyarak değiştirebilirsin.
- Türkçe karakterler `lang="tr"` ve UTF-8 ile sorunsuz desteklenir.

---

*Hearts Of Steel I — Resmî web sitesi.*
