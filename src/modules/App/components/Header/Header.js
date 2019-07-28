//Importing methods
import React from 'react';

//Importing component
import { Navigation } from '../../../../components/Navigation/Navigation';
import Searchbar from '../../../../components/Searchbar/Searchbar';

//Header component
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