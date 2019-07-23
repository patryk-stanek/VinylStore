import React from 'react';

import { Navigation } from '../Navigation/Navigation';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>VinylStore</h1>
                <Navigation />
            </div>
        )
    }
}