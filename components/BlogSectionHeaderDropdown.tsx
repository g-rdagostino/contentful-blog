import { useState, ChangeEvent, ChangeEventHandler } from 'react';

interface IBlogSectionHeaderDropdown {
  onCategorySelect: any;
}

const BlogSectionHeaderDropdown = ({ onCategorySelect }: IBlogSectionHeaderDropdown) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryList = ['All', 'Partners', 'Developers', 'Strategy', 'Product'];

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    onCategorySelect(event.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      {categoryList.map((category) => {
        const categoryValue = category.replace(/\s/g, '-').toLowerCase();
        return (
          <option key={categoryValue} value={categoryValue}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default BlogSectionHeaderDropdown;
