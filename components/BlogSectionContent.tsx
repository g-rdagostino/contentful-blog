import BlogPost from './BlogPost';
import classes from './BlogSectionContent.module.css';

interface BlogSectionContentInterface {
  posts: object[];
};

interface PostInterface {
  id: string;
  title: string;
  category: string;
  summary: string;
  datePublished: string;
  featuredImageUrl: string;
  author: string;
}

const BlogSectionContent = ({ posts }: BlogSectionContentInterface) => {
  return (
    <div className={classes['blog-section__content']}>
      {posts.map((post: any) => {
        return (
          <BlogPost
            key={post.id}
            title={post.title}
            category={post.category}
            summary={post.summary}
            datePublished={post.datePublished}
            featuredImageUrl={post.featuredImageUrl}
            author={post.author}
          />
        );
      })}
    </div>
  );
};

export default BlogSectionContent;
