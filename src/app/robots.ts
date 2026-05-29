import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cms/'], // Prevent crawling of APIs and private CMS routes
      },
      {
        // Explicitly allow AI search crawlers for AI citations (Perplexity, ChatGPT, Claude)
        userAgent: ['PerplexityBot', 'GPTBot', 'OAI-SearchBot', 'anthropic-ai', 'ClaudeBot', 'Google-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://mickiesoft.lk/sitemap.xml',
  }
}
