import type { NextPage } from 'next';
import Head from 'next/head';

import fetchEntries from '../utils/contentful-posts';

import BlogSection from '../components/BlogSection';
import { IBlogPost } from '../components/BlogPost';
import classes from '../styles/Home.module.css';

const FEATURED_DUMMY_DATA = [
  {
    id: '1',
    title: 'My first post',
    category: 'Category',
    summary: 'This is the first post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'My second post',
    category: 'Category',
    summary: 'This is the second post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '3',
    title: 'My third post',
    category: 'Category',
    summary: 'This is the third post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '4',
    title: 'My forth post',
    category: 'Category',
    summary: 'This is the forth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
];

const MOST_POPULAR_DUMMY_DATA = [
  {
    id: '1',
    title: 'My first post',
    category: 'Category',
    summary: 'This is the first post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'My second post',
    category: 'Category',
    summary: 'This is the second post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '3',
    title: 'My third post',
    category: 'Category',
    summary: 'This is the third post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '4',
    title: 'My forth post',
    category: 'Category',
    summary: 'This is the forth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '5',
    title: 'My fifth post',
    category: 'Category',
    summary: 'This is the fifth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '6',
    title: 'My sixth post',
    category: 'Category',
    summary: 'This is the sixth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
];

const BROWSE_ALL_DUMMY_DATA = [
  {
    id: '1',
    title: 'My first post',
    category: 'Category',
    summary: 'This is the first post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'My second post',
    category: 'Category',
    summary: 'This is the second post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '3',
    title: 'My third post',
    category: 'Category',
    summary: 'This is the third post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '4',
    title: 'My forth post',
    category: 'Category',
    summary: 'This is the forth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '5',
    title: 'My fifth post',
    category: 'Category',
    summary: 'This is the fifth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
  {
    id: '6',
    title: 'My sixth post',
    category: 'Category',
    summary: 'This is the sixth post published in this blog.',
    datePublished: '2021-08-31',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
    author: 'John Doe',
  },
];

const Home: NextPage = ({ posts }: IBlogPost[]) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
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
        <h1 className={classes.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={classes.description}>
          Get started by editing <code className={classes.code}>pages/index.js</code>
        </p>

        <BlogSection posts={posts} amount={4} variation="featured" />
        <BlogSection title="Most Popular" posts={posts} amount={6} variation="grid" />
        <BlogSection title="Browse All" posts={posts} amount={6} variation="grid" dropdown={true} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetchEntries();
  const posts = await transformContentfulPosts(response);

  return {
    props: {
      posts,
    },
  };
}

/**
 * There are two ways we might be able to solve the “item: any” issue:
 * -1- Use an Interface to identify the fetched content.
 * -2- Ignore the content received.
 */
const transformContentfulPosts = (items: object[] = []): IBlogPost[] => {
  const posts = items.map((item: any): IBlogPost => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      category: item.fields.category,
      summary: item.fields.summary,
      featuredImageUrl: `https:${item.fields.featuredImage?.fields.file.url}` || '',
      datePublished: item.sys.createdAt,
      author: item.fields.author,
    };
  });

  return posts;
};

export default Home;
