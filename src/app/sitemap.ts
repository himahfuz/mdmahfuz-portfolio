import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

/**
 * Automated Sitemap for mdmahfuz.com
 * Fetches static pages, filesystem tool routes, and dynamic blog/learning content from Sanity CMS.
 */

const BASE_URL = 'https://mdmahfuz.com';

/**
 * Helper function to automatically retrieve slugs from local file system.
 * Used for local static folder routes like `/tools`.
 */
function getSlugsFromDirectory(relativeDirPath: string): string[] {
  const fullPath = path.join(process.cwd(), 'src', 'app', '(frontend)', relativeDirPath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Sitemap warning: Directory not found at ${fullPath}`);
    return [];
  }

  return fs
    .readdirSync(fullPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => {
      return (
        !name.startsWith('[') &&
        !name.startsWith('(') &&
        !name.startsWith('_') &&
        name !== 'api' &&
        name !== 'components'
      );
    });
}

// Static Routes Configuration
const staticRoutes = [
  '',                // Home
  '/cv',             // CV / Resume
  '/tools',          // Tools Listing
  '/blog',           // Blog Listing
  '/learning',       // Learning/Notes Listing
  '/privacy-policy', // Privacy Policy
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Local File System Dynamic Tools (Priority: 0.9)
  const toolSlugs = getSlugsFromDirectory('tools');
  const toolEntries: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Dynamic Learning Notes from Sanity CMS (Priority: 0.8)
  let learningPosts: Array<{ slug: string; _updatedAt?: string }> = [];
  try {
    learningPosts = await client.fetch(`
      *[_type == "learning" && !(_id in path("drafts.**")) && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }
    `);
  } catch (error) {
    console.error('Sitemap error fetching learning posts from Sanity:', error);
  }

  const learningEntries: MetadataRoute.Sitemap = learningPosts.map((post) => ({
    url: `${BASE_URL}/learning/${post.slug}`,
    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Dynamic Blog Posts from Sanity CMS (Priority: 0.8)
  let blogPosts: Array<{ slug: string; _updatedAt?: string }> = [];
  try {
    blogPosts = await client.fetch(`
      *[_type == "blog" && !(_id in path("drafts.**")) && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }
    `);
  } catch (error) {
    console.error('Sitemap error fetching blog posts from Sanity:', error);
  }

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Combine and return all sitemap entries
  return [
    ...staticEntries,
    ...toolEntries,
    ...blogEntries,
    ...learningEntries,
  ];
}

