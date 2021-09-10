import { useState, useEffect } from 'react';

import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';
import { IBlogPost } from './BlogPost';

interface IBlogSection {
  title?: string;
  dropdown?: boolean;
  posts: IBlogPost[];
  amount: number;
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
  const [postList, setPostList] = useState<IBlogPost[]>(posts);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    if (category && category !== 'all') {
      const filteredPostList = posts.filter(
        (post) => post.category.replace(/\s/g, '-').toLowerCase() === category
      );
      setPostList(filteredPostList);
    }

    if (category === 'all') {
      setPostList(posts);
    }
  }, [category]);

  const handleCategorySelect = (category: string) => {
    setCategory(category);
  };

  return (
    <div className={`${classes['blog-section']} ${classes[`blog-section--${variation}`]}`}>
      <BlogSectionHeader
        title={title}
        dropdown={dropdown}
        onCategorySelect={handleCategorySelect}
      />
      <BlogSectionContent
        posts={postList}
        amount={amount}
        category={category}
        loadOnDemand={loadOnDemand}
      />
    </div>
  );
};

export default BlogSection;
