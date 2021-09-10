import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];
  const dayOfTheMonth = date.getDate();
  const year = date.getFullYear();

  return `${month} ${dayOfTheMonth}, ${year}`;
};

export const formatBody = (body: any) => {
  const options: any = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => `<strong>${text}</strong>`,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, next: any) => `<p>${next(node.content)}</p>`,
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        const assetData = node.data.target.fields;
        switch (assetData.file.contentType) {
          case 'image/jpeg':
            return `<img
                src="${assetData.file.url}"
                width="${assetData.file.details.image.width}"
                height="${assetData.file.details.image.height}"
                alt="${assetData.description}"
              />`;
          default:
            return 'Nothing to see here...';
        }
      },
    },
  };

  return documentToHtmlString(body, options);
};
