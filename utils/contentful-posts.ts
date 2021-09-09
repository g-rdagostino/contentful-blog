import { createClient } from 'contentful';

import { IBlogPost } from '../components/BlogPost';
import { formatBody, formatDate } from './helpers';

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
      author: item.fields.author,
      body: formatBody(item.fields.body) || '',
      category: item.fields.category,
      datePublished: formatDate(item.sys.createdAt),
      featuredImageUrl: `https:${item.fields.featuredImage?.fields.file.url}` || '',
      slug: item.fields.slug,
      title: item.fields.title,
    };
  });

  return posts;
};

export default fetchEntries;
