import Image from 'next/image';
import Link from 'next/link';

import classes from './BlogPost.module.css';

export interface IBlogPost {
  id: string;
  author: string;
  body: string;
  categoryName: string;
  categorySlug: string;
  datePublished: string;
  featuredImageUrl: string;
  slug: string;
  title: string;
}

const BlogPost = ({
  author,
  categoryName,
  categorySlug,
  datePublished,
  featuredImageUrl,
  slug,
  title,
}: IBlogPost) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className={classes['blog-post']}>
        <div className={classes['blog-post__media']}>
          <Image src={featuredImageUrl} alt="" width="748" height="500" />
        </div>
        <div className={classes['blog-post__content']}>
          <span className={classes['blog-post__category']}>{categoryName}</span>
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
