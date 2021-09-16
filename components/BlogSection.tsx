import { useState, useEffect } from 'react';

import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';
import { IBlogPost } from './BlogPost';
import fetchPosts from '../utils/contentful-posts';

interface IBlogSection {
  title?: string;
  dropdown?: boolean;
  posts: IBlogPost[];
  amount?: number;
  variation: string;
  loadOnDemand?: boolean;
}

const BlogSection = ({
  title,
  dropdown,
  posts,
  amount,
  variation,
  loadOnDemand = false,
}: IBlogSection) => {
  const [postList, setPostList] = useState<IBlogPost[]>([]);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    fetchPosts(category).then((posts: any) => setPostList(posts));
  }, []);

  useEffect(() => {
    fetchPosts(category).then((posts: any) => setPostList(posts));
  }, [category]);

  const handleCategorySelect = (category: string) => {
    setCategory(category);
  };

  const handleLoadMore = () => {
    setDisplayedPosts((prevState) => prevState + DEFAULT_POSTS_NUMBER);
  };

  return (
    <div className={`${classes['blog-section']} ${classes[`blog-section--${variation}`]}`}>
      <BlogSectionHeader
        title={title}
        dropdown={dropdown}
        onCategorySelect={handleCategorySelect}
      />
      <BlogSectionContent posts={filteredPostList()} amount={amount} category={category} />

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

export default BlogSection;
