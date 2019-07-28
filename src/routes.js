//Importing methods
import React from "react";
import { Switch, Route } from "react-router-dom";

//Importing components
import { Body } from "./modules/App/components/Body/Body";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Contact } from "./pages/Contact/Contact";
import { Basket } from "./pages/Basket/Basket";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProductsListContainer from "./modules/Product/ProductsListContainer";
import ProductDetailsContainer from "./modules/Product/ProductDetailsContainer";

//Creating routes
export default (
    <Body>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/catalog"} component={ProductsListContainer} />
            <Route exact path={"/catalog/product/:id"} component={ProductDetailsContainer} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/basket"} component={Basket} />
            <Route exact path={"/search/:term"} component={SearchResults} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)