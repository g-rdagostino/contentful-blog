import { useEffect, useState } from 'react';

import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';
import { IBlogPost } from './BlogPost';
import fetchPosts from '../utils/contentful-posts';

interface IBlogSection {
  title?: string;
  dropdown?: boolean;
  loadOnDemand?: boolean;
  limit: number;
  variation: string;
}

const BlogSection = ({ title, limit, variation, dropdown, loadOnDemand = false }: IBlogSection) => {
  const [postList, setPostList] = useState<IBlogPost[]>([]);
  const [category, setCategory] = useState<string>('');
  const [newLimit, setNewLimit] = useState<number>(limit);

  const LIMIT_INCREMENT = 3;

  useEffect(() => {
    fetchPosts(category).then((posts: any) => setPostList(posts));
  }, []);

  useEffect(() => {
    fetchPosts(category).then((posts: any) => setPostList(posts));
    setNewLimit(limit);
  }, [category]);

  const handleCategorySelect = (category: string) => {
    setCategory(category);
  };

  const handleLoadMore = () => {
    setNewLimit((prevValue) => prevValue + LIMIT_INCREMENT);
  };

  return (
    <div className={`${classes['blog-section']} ${classes[`blog-section--${variation}`]}`}>
      <BlogSectionHeader
        title={title}
        dropdown={dropdown}
        onCategorySelect={handleCategorySelect}
      />
      <BlogSectionContent posts={postList} limit={newLimit} category={category} />
      {loadOnDemand && postList.length > newLimit && (
        <button
          className={classes['blog-section__load-more-button']}
          type="button"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogSection;
