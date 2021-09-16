import type { NextPage } from 'next';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { createClient } from 'contentful';
import { formatBody, formatDate } from '../../utils/helpers';

import { IBlogPost } from '../../components/BlogPost';
import classes from '../../styles/Post.module.css';

const Post: NextPage = ({ post }: any) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={classes.main}>
        <h1 className={classes.title}>{post.title}</h1>
        <div className={classes['blog-post__media-meta-wrapper']}>
          <div className={classes['blog-post__media']}>
            <Image src={post.featuredImageUrl} alt="" width="748" height="500" />
          </div>
          <div className={classes['blog-post__meta']}>
            <div className={classes['blog-post__meta-block']}>
              <p className={classes['blog-post__meta-title']}>Published</p>
              <p className={classes['blog-post__meta-content']}>{post.datePublished}</p>
            </div>
            <div className={classes['blog-post__meta-block']}>
              <p className={classes['blog-post__meta-title']}>Author</p>
              <p className={classes['blog-post__meta-content']}>{post.author}</p>
            </div>
            <div className={classes['blog-post__meta-block']}>
              <p className={classes['blog-post__meta-title']}>Category</p>
              <p className={classes['blog-post__meta-content']}>{post.category}</p>
            </div>
          </div>
        </div>
        <div
          className={classes['blog-post__body']}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </main>
    </div>
  );
};

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

const client = createClient({
  space: spaceId || '',
  accessToken: accessToken || '',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' });

  const paths = response.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });

  return {
    props: { post: transformContentfulPost(entries.items[0]) },
  };
};

/**
 * There are two ways we might be able to solve the “item: any” issue:
 * -1- Use an Interface to identify the fetched content.
 * -2- Ignore the content received.
 */
const transformContentfulPost = (item: any): IBlogPost => {
  return {
    id: item.sys.id,
    author: item.fields.author,
    body: formatBody(item.fields.body) || '',
    categoryName: item.fields.category?.fields.name || '',
    categorySlug: item.fields.category?.fields.slug || '',
    datePublished: formatDate(item.sys.createdAt),
    featuredImageUrl: `https:${item.fields.featuredImage?.fields.file.url}` || '',
    slug: item.fields.slug,
    title: item.fields.title,
  };
};

export default Post;
