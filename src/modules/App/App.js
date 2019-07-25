import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Body } from './components/Body/Body';
import { Home } from '../../pages/Home/Home';
import { Contact } from '../../pages/Contact/Contact';
import { Basket } from '../../pages/Basket/Basket';
import { NoMatch } from '../../pages/NoMatch/NoMatch';

import './App.scss';

// const App = props => {
//     return (
        // <BrowserRouter>
        //     <Body>
        //         <Switch>
        //             <IndexRoute component={Home} />
        //             <Route exact path={'/contact'} component={Contact} />
        //             <Route exact path={'/basket'} component={Basket} />
        //             <Route component={NoMatch} />
        //         </Switch>
        //     </Body>
        // </BrowserRouter>
//     )
// }

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Body>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/contact'} component={Contact} />
                        <Route exact path={'/basket'} component={Basket} />
                        <Route component={NoMatch} />
                    </Switch>
                </Body>
            </BrowserRouter>
        )
    }
}