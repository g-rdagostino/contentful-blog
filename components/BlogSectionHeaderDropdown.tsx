import { useState, useEffect, ChangeEvent, ChangeEventHandler } from 'react';
import fetchCategories from '../utils/contentful-categories';

interface IBlogSectionHeaderDropdown {
  onCategorySelect: any;
}

interface ICategory {
  id: string;
  name: string;
  slug: string;
}

const BlogSectionHeaderDropdown = ({ onCategorySelect }: IBlogSectionHeaderDropdown) => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchCategories().then((categories: ICategory[]) => setCategoryList(categories));
  }, []);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    onCategorySelect(event.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      <option value="all">All</option>
      {categoryList.length > 0 &&
        categoryList.map((category: ICategory) => {
          return (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          );
        })}
    </select>
  );
};

export default BlogSectionHeaderDropdown;
