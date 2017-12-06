import React from 'react';

import HomePage from 'PagesPath/HomePage/HomePage';
import ProductListPage from 'PagesPath/ProductListPage/ProductListPage';
import ProductActionPage from 'PagesPath/ProductActionPage/ProductActionPage';
import AboutPage from 'PagesPath/AboutPage/AboutPage';
import NotFoundPage from 'PagesPath/NotFoundPage/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        component: () => <ProductListPage />
    },
    {
        path: '/product-action',
        exact: false,
        component: () => <ProductActionPage />
    },
    {
        path: '/product-action/:id',
        exact: false,
        component: ({match}) => <ProductActionPage match = {match} />
    },  
    {
        path: '/about',
        exact: false,
        component: () => <AboutPage />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage />
    },
];

export default routes;