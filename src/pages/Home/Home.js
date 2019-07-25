import React from 'react';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ProductsList } from '../../modules/Product/ProductsList';
import { Pagination } from '../../components/Pagination/Pagination';

import './Home.scss';

export class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <Sidebar />
                <div className='Home__container'>
                    <ProductsList />
                    <Pagination />
                </div>
            </div>
        )
    }
}