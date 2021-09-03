import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';

interface BlogSectionInterface {
  title?: string;
  dropdown?: boolean;
  posts: object[];
  amount: number;
  variation: string;
}

const BlogSection = ({ title, dropdown, posts, amount, variation }: BlogSectionInterface) => {
  return (
    <div className={`${classes['blog-section']} ${classes[`blog-section--${variation}`]}`}>
      <BlogSectionHeader title={title} dropdown={dropdown} />
      <BlogSectionContent posts={posts} amount={amount} />
    </div>
  );
};

export default BlogSection;
