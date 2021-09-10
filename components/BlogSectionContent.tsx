import { useEffect, useState } from 'react';
import BlogPost, { IBlogPost } from './BlogPost';
import classes from './BlogSectionContent.module.css';

interface IBlogSectionContent {
  posts: IBlogPost[];
  amount: number;
  category: string | null;
  loadOnDemand: boolean;
}

const BlogSectionContent = ({ posts, amount, loadOnDemand }: IBlogSectionContent) => {
  const [displayedPosts, setDisplayedPosts] = useState(3);
  const [postList, setPostList] = useState<IBlogPost[]>(
    loadOnDemand ? posts.slice(0, displayedPosts) : posts
  );

  useEffect(() => {
    if (loadOnDemand) {
      setPostList(posts.slice(0, displayedPosts));
    }
  }, [displayedPosts]);

  const handleLoadMore = () => {
    setDisplayedPosts((prevState) => prevState + 3);
  };

  return (
    <div className={classes['blog-section__content']}>
      {postList.map((post: any, index) => {
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

      {loadOnDemand && displayedPosts < posts.length && (
        <button
          className={classes['blog-section__load-more-button']}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default BlogSectionContent;
