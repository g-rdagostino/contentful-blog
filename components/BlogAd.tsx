import classes from './BlogAd.module.css';

interface BlogAdInterface {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  backgroundImageUrl: string;
}

const BlogAd = ({ title, description, linkText, linkUrl, backgroundImageUrl }: BlogAdInterface) => {
  return (
    <div className={classes['blog-ad']} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className={classes['blog-ad__content']}>
        <h3 className={classes['blog-ad__title']}>{title}</h3>
        <p className={classes['blog-ad__description']}>{description}</p>
        <a className={classes['blog-ad__link']} href={linkUrl}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default BlogAd;
