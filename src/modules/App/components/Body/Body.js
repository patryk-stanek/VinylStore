import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export class Body extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}