import React from 'react';

import { Sidebar } from '../../components/Sidebar/Sidebar';
// import { ProductsListContainer } from '../../modules/Product/ProductsListContainer';
import ProductsListContainer from '../../modules/Product/ProductsListContainer.js';
import { Pagination } from '../../components/Pagination/Pagination';

import './Home.scss';

export class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <Sidebar />
                <div className='Home__container'>
                    <ProductsListContainer />
                    <Pagination />
                </div>
            </div>
        )
    }
}