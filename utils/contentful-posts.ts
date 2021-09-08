import { createClient } from 'contentful';

import { IBlogPost } from '../components/BlogPost';
import { formatDate } from './helpers';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

const fetchEntries = async (): Promise<object[]> => {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  if (!entries.items) console.error(`Error getting entries.`);
  return transformContentfulPosts(entries.items);
};

/**
 * There are two ways we might be able to solve the “item: any” issue:
 * -1- Use an Interface to identify the fetched content.
 * -2- Ignore the content received.
 */
const transformContentfulPosts = (items: object[] = []): IBlogPost[] => {
  const posts = items.map((item: any): IBlogPost => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category,
      featuredImageUrl: `https:${item.fields.featuredImage?.fields.file.url}` || '',
      datePublished: formatDate(item.sys.createdAt),
      author: item.fields.author,
    };
  });

  return posts;
};

export default fetchEntries;
