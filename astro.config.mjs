// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  GitHub Pages dağıtım ayarları
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  GitHub Pages iki farklı şekilde yayın yapar:
 *
 *  1) Proje sayfası (en yaygın):
 *     URL: https://<KULLANICI_ADI>.github.io/<REPO_ADI>/
 *     Bu durumda `site` ve `base` aşağıdaki gibi DOLDURULMALIDIR.
 *
 *  2) Kullanıcı / kuruluş sayfası ya da özel alan adı (custom domain):
 *     URL: https://<KULLANICI_ADI>.github.io/   veya   https://alanadiniz.com/
 *     Bu durumda `base` '/' olmalı (yani BASE_PATH = '' bırakın).
 *
 *  ► Repo adınız değişirse SADECE aşağıdaki iki değişkeni güncelleyin.
 */

// GitHub kullanıcı adınız (veya kuruluş adınız)
const GITHUB_USER = 'Zeorez';

// GitHub repository adınız. Custom domain kullanıyorsanız boş ('') bırakın.
const REPO_NAME = 'hearts-of-steel-i';

// Yukarıdaki değerlerden site ve base otomatik üretilir.
const SITE_URL = `https://${GITHUB_USER}.github.io`;
const BASE_PATH = REPO_NAME ? `/${REPO_NAME}` : '';

// https://astro.build/config
export default defineConfig({
  site: `${SITE_URL}${BASE_PATH}`,
  base: BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Sayfaları /sayfa/index.html yerine /sayfa.html olarak değil,
    // varsayılan dizin yapısında üret (temiz URL'ler için).
    format: 'directory',
  },
});
