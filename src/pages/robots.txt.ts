import type { APIRoute } from 'astro';

/**
 * robots.txt — dinamik olarak üretilir.
 * Böylece sitemap adresi her zaman astro.config.mjs'deki `site` değeriyle
 * tutarlı kalır (repo adı/domain değişse bile elle güncelleme gerekmez).
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
