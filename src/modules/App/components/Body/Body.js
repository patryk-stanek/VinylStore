import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './Body.scss';

export class Body extends React.Component {
    render() {
        return (
            <div className='Body'>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}