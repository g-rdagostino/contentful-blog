import BlogPost, { IBlogPost } from './BlogPost';
import classes from './BlogSectionContent.module.css';

interface IBlogSectionContent {
  posts: IBlogPost[];
  limit?: number;
  category: string | null;
}

const BlogSectionContent = ({ posts, limit }: IBlogSectionContent) => {
  return (
    <div className={classes['blog-section__content']}>
      {posts.map((post: any, index) => {
        if (limit && index >= limit) {
          return;
        }
        return (
          <BlogPost
            key={post.id}
            id={post.id}
            author={post.author}
            body={post.body}
            categoryName={post.categoryName}
            categorySlug={post.categorySlug}
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
