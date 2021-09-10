import { useState } from 'react';

import BlogSectionHeader from './BlogSectionHeader';
import BlogSectionContent from './BlogSectionContent';
import classes from './BlogSection.module.css';
import { IBlogPost } from './BlogPost';
import { categoryList } from './BlogSectionHeaderDropdown'

const Category_All = categoryList[0]

interface IBlogSection {
  title?: string;
  dropdown?: boolean;
  loadOnDemand?: boolean;
  posts: IBlogPost[];
  amount: number;
  variation: string;
}

const BlogSection = ({ title, dropdown, posts, loadOnDemand, amount, variation }: IBlogSection) => {
  const [postList, setPostList] = useState<IBlogPost[]>(posts);
  const [category, setCategory] = useState('');

  const handleCategorySelect = (category: string) => {
    setCategory(category)
  };

  const onloadOnDemandClicked = () => {
    const newPosts = postList.concat(posts) // fetch simulated
    
    const newFilteredPosts = newPosts.filter(p => {
      if(category === Category_All) return true
      return p.category === category
    })

    setPostList(newFilteredPosts)
  };

  const filteredPosts = () :IBlogPost[] => category === '' ? posts : postList.filter(p => {
    if(category === Category_All) return true
    return p.category === category
  });

  return (
    <div className={`${classes['blog-section']} ${classes[`blog-section--${variation}`]}`}>
      <BlogSectionHeader
        title={title}
        dropdown={dropdown}
        onCategorySelect={handleCategorySelect}
      />
      <BlogSectionContent posts={filteredPosts()} amount={amount} category={category} />
      {loadOnDemand ? (
        <button onClick={onloadOnDemandClicked} className="load-more">
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default BlogSection;
