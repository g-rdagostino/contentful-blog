import { createClient } from 'contentful';

import { IBlogPost } from '../components/BlogPost';
// import { formatBody, formatDate } from './helpers';

interface IBlogCategory {
  id: string;
  name: string;
  slug: string;
}

// const spaceId = process.env.CONTENTFUL_SPACE_ID;
// const accessToken = process.env.CONTENTFUL_ACCESS_KEY;
const spaceId = 'o0nmc8cjy2c6';
const accessToken = '9gdkoPzQN1qeIQ3e2Hu2Zd5CEp_1-pA3VGnB7tVAc4k';

const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

const fetchCategories = async (): Promise<IBlogCategory[]> => {
  const entries = await client.getEntries({ content_type: 'blogCategory' });
  if (!entries.items) console.error(`Error getting categories.`);
  console.log(transformContentfulCategories(entries.items));
  return transformContentfulCategories(entries.items);
};

/**
 * There are two ways we might be able to solve the “item: any” issue:
 * -1- Use an Interface to identify the fetched content.
 * -2- Ignore the content received.
 */
const transformContentfulCategories = (items: object[] = []): IBlogCategory[] => {
  const categories = items.map((item: any): IBlogCategory => {
    return {
      id: item.sys.id,
      name: item.fields.name,
      slug: item.fields.slug,
    };
  });

  return categories;
};

export default fetchCategories;
