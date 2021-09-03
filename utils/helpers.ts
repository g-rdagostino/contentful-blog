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
