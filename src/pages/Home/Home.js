//Importing methods
import React from 'react';

//Importing components
import { Sidebar } from '../../components/Sidebar/Sidebar';
import ProductsListContainer from '../../modules/Product/ProductsListContainer';
import { Pagination } from '../../components/Pagination/Pagination';

//Importing styles
import './Home.scss';

//Home component
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