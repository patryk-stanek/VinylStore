import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Body } from './modules/App/components/Body/Body';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { Basket } from './pages/Basket/Basket';
import { NoMatch } from './pages/NoMatch/NoMatch';

export default (
    <Body>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/basket'} component={Basket} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)