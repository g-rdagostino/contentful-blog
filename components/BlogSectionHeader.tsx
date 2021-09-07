import BlogSectionHeaderDropdown from './BlogSectionHeaderDropdown';
import classes from './BlogSectionHeader.module.css';

interface IBlogSectionHeader {
  title?: string;
  dropdown?: boolean;
  onCategorySelect(category: string): void;
}

const BlogSectionHeader = ({ title, dropdown, onCategorySelect }: IBlogSectionHeader) => {
  const handleCategorySelect = (category: string) => onCategorySelect(category);

  return (
    <header className={classes['blog-section__header']}>
      {title && <h2 className={classes['blog-section__title']}>{title}</h2>}

      {dropdown && <BlogSectionHeaderDropdown onCategorySelect={handleCategorySelect} />}
    </header>
  );
};

export default BlogSectionHeader;
