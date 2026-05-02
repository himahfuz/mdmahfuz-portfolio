import fs from 'fs';
import path from 'path';
import { MetadataRoute } from 'next';

/**
 * 100% Automated Sitemap for mdmahfuz.com
 * This script reads the filesystem to automatically discover tools, blog posts, and learning notes.
 */

const BASE_URL = 'https://mdmahfuz.com';

/**
 * Helper function to automatically retrieve slugs from the file system.
 * It reads the directories within a target path and filters out Next.js special folders.
 */
function getSlugsFromDirectory(relativeDirPath: string): string[] {
  // Path is adjusted to match your project structure: src/app/(frontend)/[dir]
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
      // Exclude special Next.js folders and generic templates:
      // - [slug] (Dynamic templates)
      // - (group) (Route groups)
      // - _private (Private folders)
      // - api (API routes)
      return (
        !name.startsWith('[') &&
        !name.startsWith('(') &&
        !name.startsWith('_') &&
        name !== 'api' &&
        name !== 'components' // Optional: exclude local component folders if they exist
      );
    });
}

// 1. Static Routes Configuration
const staticRoutes = [
  '',                // Home
  '/cv',             // CV / Resume
  '/tools',          // Tools Listing
  '/blog',           // Blog Listing
  '/learning',       // Learning/Notes Listing
  '/privacy-policy', // Privacy Policy
];

export default function sitemap(): MetadataRoute.Sitemap {
  // 2. Automatically generate dynamic slugs from the filesystem
  const toolSlugs = getSlugsFromDirectory('tools');
  const blogSlugs = getSlugsFromDirectory('blog');
  const learningSlugs = getSlugsFromDirectory('learning');

  // 3. Map Static Routes
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 4. Map Dynamic Tools (Priority: 0.9)
  const toolEntries: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. Map Dynamic Blog Posts (Priority: 0.8)
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 6. Map Dynamic Learning Notes (Priority: 0.7)
  const learningEntries: MetadataRoute.Sitemap = learningSlugs.map((slug) => ({
    url: `${BASE_URL}/learning/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Combine and return all entries
  return [
    ...staticEntries,
    ...toolEntries,
    ...blogEntries,
    ...learningEntries,
  ];
}
