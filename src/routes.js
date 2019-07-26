import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Body } from './modules/App/components/Body/Body';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Contact } from './pages/Contact/Contact';
import { Basket } from './pages/Basket/Basket';
import { NoMatch } from './pages/NoMatch/NoMatch';

import ProductsListContainer from './modules/Product/ProductsListContainer';
import ProductDetailsContainer from './modules/Product/ProductDetailsContainer';

export default (
    <Body>
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/products'} component={ProductsListContainer} />
            <Route exact path={'/products/product/:id'} component={ProductDetailsContainer} />
            <Route exact path={'/contact'} component={Contact} />
            <Route exact path={'/basket'} component={Basket} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)