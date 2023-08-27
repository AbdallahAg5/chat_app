import { Helmet } from 'react-helmet';
import { SeoType } from '../type';

export const SEO: React.FC<SeoType> = ({ title }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content="Basic example" />
      </Helmet>
    </div>
  );
};
