import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY;

const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

const fetchEntries = async (): Promise<object[]> => {
  const entries = await client.getEntries({ content_type: 'blogPost' });
  if (!entries.items) console.error(`Error getting Entries for ${contentType.name}.`);
  return entries.items || [];
}

export default fetchEntries;
