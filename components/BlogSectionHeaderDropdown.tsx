import { useState, ChangeEvent, ChangeEventHandler } from 'react';

export const categoryList = ['all', 'partners', 'developers', 'strategy', 'product'];

interface IBlogSectionHeaderDropdown {
  onCategorySelect: any;
}

const BlogSectionHeaderDropdown = ({ onCategorySelect }: IBlogSectionHeaderDropdown) => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    onCategorySelect(event.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      {categoryList.map((category) => {
        const categoryLabel = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
        return (
          <option key={category} value={category}>
            {categoryLabel}
          </option>
        );
      })}
    </select>
  );
};

export default BlogSectionHeaderDropdown;
