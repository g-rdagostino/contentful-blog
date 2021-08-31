import BlogPost from './BlogPost';
import styles from './BlogSection.module.css';

type BlogSectionProps = {
  title?: string;
  variation: string;
};

const POST_DUMMY_DATA = {
  title: 'My first post',
  category: 'Category',
  summary: 'This is the first post published in this blog.',
  datePublished: '2021-08-31',
  featuredImageUrl:
    'https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80',
  author: 'Juan Pérez',
};

const BlogSection = ({ title, variation }: BlogSectionProps) => {
  console.log(variation);
  return (
    <div className={`${styles['blog-section']} ${styles[`blog-section--${variation}`]}`}>
      <header className={styles['blog-section__header']}>
        <h2 className={styles['blog-section__title']}>{title}</h2>
      </header>
      <div className={styles['blog-section__content']}>
        {variation === 'featured' && (
          <>
            <div className={styles['blog-section__column']}>
              <BlogPost
                title={POST_DUMMY_DATA.title}
                category={POST_DUMMY_DATA.category}
                summary={POST_DUMMY_DATA.summary}
                datePublished={POST_DUMMY_DATA.datePublished}
                featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
                author={POST_DUMMY_DATA.author}
              />
            </div>
            <div className={styles['blog-section__column']}>
              <BlogPost
                title={POST_DUMMY_DATA.title}
                category={POST_DUMMY_DATA.category}
                summary={POST_DUMMY_DATA.summary}
                datePublished={POST_DUMMY_DATA.datePublished}
                featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
                author={POST_DUMMY_DATA.author}
              />
              <BlogPost
                title={POST_DUMMY_DATA.title}
                category={POST_DUMMY_DATA.category}
                summary={POST_DUMMY_DATA.summary}
                datePublished={POST_DUMMY_DATA.datePublished}
                featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
                author={POST_DUMMY_DATA.author}
              />
              <BlogPost
                title={POST_DUMMY_DATA.title}
                category={POST_DUMMY_DATA.category}
                summary={POST_DUMMY_DATA.summary}
                datePublished={POST_DUMMY_DATA.datePublished}
                featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
                author={POST_DUMMY_DATA.author}
              />
            </div>
          </>
        )}

        {variation === 'grid' && (
          <>
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
            <BlogPost
              title={POST_DUMMY_DATA.title}
              category={POST_DUMMY_DATA.category}
              summary={POST_DUMMY_DATA.summary}
              datePublished={POST_DUMMY_DATA.datePublished}
              featuredImageUrl={POST_DUMMY_DATA.featuredImageUrl}
              author={POST_DUMMY_DATA.author}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
