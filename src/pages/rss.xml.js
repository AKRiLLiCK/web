import { getCollection } from 'astro:content';

export async function GET(context) {
  const archive = await getCollection('archive');
  archive.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  
  const siteUrl = context.site ? new URL(context.site).href.replace(/\/$/, '') : 'https://akrillick.github.io';
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  const items = archive.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${siteUrl}${basePath}/archive/${post.id}</link>
      <guid>${siteUrl}${basePath}/archive/${post.id}</guid>
      <description><![CDATA[${post.data.title} - A ${post.data.docType} by ${post.data.author}]]></description>
      <pubDate>${new Date(post.data.publishDate).toUTCString()}</pubDate>
    </item>
  `).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Arcadia</title>
    <link>${siteUrl}${basePath}/archive/</link>
    <description>Open To All Public License Archive</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
