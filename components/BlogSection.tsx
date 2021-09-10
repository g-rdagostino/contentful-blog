import { useState, useEffect } from 'react';

import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';
import { IBlogPost } from './BlogPost';
import { categoryList } from './BlogSectionHeaderDropdown';

const DEFAULT_CATEGORY = categoryList[0];
const DEFAULT_POSTS_NUMBER = 3;

interface IBlogSection {
  title?: string;
  dropdown?: boolean;
  loadMore?: boolean;
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
  const [displayedPosts, setDisplayedPosts] = useState(DEFAULT_POSTS_NUMBER);
  const [category, setCategory] = useState<string>(DEFAULT_CATEGORY);

  const handleCategorySelect = (category: string) => {
    setCategory(category);
    setDisplayedPosts(DEFAULT_POSTS_NUMBER);
  };

  const handleLoadMore = () => {
    setDisplayedPosts((prevState) => prevState + DEFAULT_POSTS_NUMBER);
  };

  const filteredPostList = (): IBlogPost[] =>
    category === DEFAULT_CATEGORY
      ? posts.slice(0, displayedPosts)
      : posts
          .filter((post) => {
            if (category === DEFAULT_CATEGORY) return true;
            return post.category === category;
          })
          .slice(0, displayedPosts);

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
