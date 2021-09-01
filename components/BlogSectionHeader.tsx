import classes from './BlogSectionHeader.module.css';

interface BlogSectionHeaderInterface {
  title?: string;
  dropdown?: boolean;
};

const BlogSectionHeader = ({ title, dropdown }: BlogSectionHeaderInterface) => {
  return (
    <header className={classes['blog-section__header']}>
      {title && <h2 className={classes['blog-section__title']}>{title}</h2>}

      {dropdown && (
        <select>
          <option value="category-1">Category 1</option>
          <option value="category-2">Category 2</option>
          <option value="category-3">Category 3</option>
          <option value="category-4">Category 4</option>
        </select>
      )}
    </header>
  );
};

export default BlogSectionHeader;
