import type { NextPage } from 'next';
import Head from 'next/head';
import { createClient } from 'contentful';

import BlogSection from '../components/BlogSection';
import classes from '../styles/Home.module.css';
import BlogAd from '../components/BlogAd';

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

const Home: NextPage = () => {
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

        <BlogSection posts={FEATURED_DUMMY_DATA} variation="featured" />
        <BlogSection title="Most Popular" posts={MOST_POPULAR_DUMMY_DATA} variation="grid" />
        <BlogSection
          title="Browse All"
          posts={BROWSE_ALL_DUMMY_DATA}
          variation="grid"
          dropdown={true}
        />
      </main>
    </div>
  );
};

export default Home;
