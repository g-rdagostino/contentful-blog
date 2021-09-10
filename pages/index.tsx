import type { NextPage } from 'next';
import Head from 'next/head';

import fetchEntries from '../utils/contentful-posts';

import BlogSection from '../components/BlogSection';
import classes from '../styles/Home.module.css';

const Home: NextPage = ({ posts }: any) => {
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
        <BlogSection
          title="Browse All"
          posts={posts}
          amount={100}
          variation="grid"
          dropdown={true}
          loadOnDemand={true}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await fetchEntries();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
