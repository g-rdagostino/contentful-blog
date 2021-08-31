import Image from 'next/image';

import styles from './BlogPost.module.css';

type BlogPostProps = {
  title: string;
  category: string;
  summary: string;
  featuredImageUrl: string;
  datePublished: string;
  author: string;
};

const BlogPost = ({
  title,
  category,
  summary,
  featuredImageUrl,
  datePublished,
  author,
}: BlogPostProps) => {
  return (
    <div className={styles['blog-post']}>
      <div className={styles['blog-post__media']}>
        <Image src={featuredImageUrl} alt="" width="748" height="500" />
      </div>
      <div className={styles['blog-post__content']}>
        <span className={styles['blog-post__category']}>{category}</span>
        <h2 className={styles['blog-post__title']}>{title}</h2>
        <p className={styles['blog-post__summary']}>{summary}</p>
        <div className={styles['blog-post__meta']}>
          <time className={styles['blog-post__date']}>{datePublished}</time>
          <span className={styles['blog-post__author']}>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
