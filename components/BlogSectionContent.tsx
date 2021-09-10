import BlogPost, { IBlogPost } from './BlogPost';
import classes from './BlogSectionContent.module.css';

interface IBlogSectionContent {
  posts: IBlogPost[];
  amount: number;
  category?: string | null;
}

const BlogSectionContent = ({ posts, amount }: IBlogSectionContent) => {
  return (
    <div className={classes['blog-section__content']}>
      {posts.map((post: any, index) => {
        if (index >= amount) {
          return;
        }
        return (
          <BlogPost
            key={post.id}
            id={post.id}
            author={post.author}
            body={post.body}
            category={post.category}
            datePublished={post.datePublished}
            featuredImageUrl={post.featuredImageUrl}
            slug={post.slug}
            title={post.title}
          />
        );
      })}
    </div>
  );
};

export default BlogSectionContent;
