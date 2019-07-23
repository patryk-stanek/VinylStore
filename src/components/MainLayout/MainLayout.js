import React from 'react';

import { Header } from '../Header/Header';

export class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}