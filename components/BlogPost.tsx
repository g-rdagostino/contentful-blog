import Image from 'next/image';
import Link from 'next/link';

import classes from './BlogPost.module.css';

export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  featuredImageUrl: string;
  datePublished: string;
  author: string;
}

const BlogPost = ({
  title,
  slug,
  category,
  featuredImageUrl,
  datePublished,
  author,
}: IBlogPost) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className={classes['blog-post']}>
        <div className={classes['blog-post__media']}>
          <Image src={featuredImageUrl} alt="" width="748" height="500" />
        </div>
        <div className={classes['blog-post__content']}>
          <span className={classes['blog-post__category']}>{category}</span>
          <h3 className={classes['blog-post__title']}>{title}</h3>
          <div className={classes['blog-post__meta']}>
            <time className={classes['blog-post__date']}>{datePublished}</time>
            <span className={classes['blog-post__author']}>{author}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
