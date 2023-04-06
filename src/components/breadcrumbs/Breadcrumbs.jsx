import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.scss';
import useItem from '../../hooks/useItem';

/* Component for the breadcrumbs*/
const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;
  const itemId = pathname.split('/').pop();
  const { product } = useItem(itemId);
  const getBreadcrumbs = () => {
    const pathnames = pathname.split('/').filter((x) => x);
    const breadcrumbs = [{ title: 'Home', path: '/' }];

    if (pathnames.length === 0) {
      return breadcrumbs;
    }

    if (pathnames.length === 1) {
      breadcrumbs.push({ title: 'Products', path: '/products' });
      return breadcrumbs;
    }

    if (pathnames.length === 2) {
      breadcrumbs.push({ title: 'Products', path: '/products' });
      if (product) {
        breadcrumbs.push({
          title: product.brand + ' ' + product.model,
          path: location.pathname,
        });
      }
      return breadcrumbs;
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.path}>
          {index < breadcrumbs.length - 1 ? (
            <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
          ) : (
            breadcrumb.title
          )}
          {index < breadcrumbs.length - 1 && (
            <span className='breadcrumbs-greater'> &gt; </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
