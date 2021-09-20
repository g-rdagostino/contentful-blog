import client from './contentful-create-client';

interface IBlogCategory {
  id: string;
  name: string;
  slug: string;
}

const fetchCategories = async (): Promise<IBlogCategory[]> => {
  const entries = await client.getEntries({ content_type: 'blogCategory' });
  if (!entries.items) console.error(`Error getting categories.`);
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
