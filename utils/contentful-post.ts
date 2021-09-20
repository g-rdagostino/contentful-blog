import client from './contentful-create-client';
import { formatBody, formatDate } from './helpers';

import { IBlogPost } from '../components/BlogPost';

export const fetchPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' });

  const paths = response.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return paths;
};

export const fetchPost = async (params: any) => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  return transformContentfulPost(entries.items[0]);
};

/**
 * There are two ways we might be able to solve the “item: any” issue:
 * -1- Use an Interface to identify the fetched content.
 * -2- Ignore the content received.
 */
const transformContentfulPost = (item: any): IBlogPost => {
  return {
    id: item.sys.id,
    author: item.fields.author,
    body: formatBody(item.fields.body) || '',
    categoryName: item.fields.category?.fields.name || '',
    categorySlug: item.fields.category?.fields.slug || '',
    datePublished: formatDate(item.sys.createdAt),
    featuredImageUrl: `https:${item.fields.featuredImage?.fields.file.url}` || '',
    slug: item.fields.slug,
    title: item.fields.title,
  };
};
