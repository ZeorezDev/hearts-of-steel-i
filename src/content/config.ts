import { defineCollection, z } from 'astro:content';
import { blogCategories } from '../data/siteConfig';

/**
 * Blog içerik koleksiyonu.
 *
 * Her blog yazısı `src/content/blog/` altında bir .md (veya .mdx) dosyasıdır.
 * Aşağıdaki şema, her yazının frontmatter alanlarını DOĞRULAR. Hatalı veya
 * eksik bir alan varsa `npm run build` hata verir — bu sayede bozuk yazı
 * yanlışlıkla yayınlanmaz.
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** Yazı başlığı */
    title: z.string(),
    /** Kısa açıklama (kartlarda ve SEO'da kullanılır) */
    description: z.string(),
    /** Yayın tarihi (YYYY-MM-DD) */
    date: z.coerce.date(),
    /** Yazar adı */
    author: z.string(),
    /** Kategori — sadece tanımlı kategorilere izin verilir */
    category: z.enum(blogCategories),
    /** Kapak görseli yolu (opsiyonel — yoksa şık fallback gösterilir) */
    cover: z.string().optional(),
    /** Yayında mı? false ise sitede listelenmez/görünmez. */
    published: z.boolean().default(true),
  }),
});

export const collections = { blog };
