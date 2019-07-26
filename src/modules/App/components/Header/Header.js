import React from 'react';

import { Navigation } from '../../../../components/Navigation/Navigation';
import Searchbar from '../../../../components/Searchbar/Searchbar';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>VinylStore</h1>
                <Navigation />
                <Searchbar />
            </div>
        )
    }
}