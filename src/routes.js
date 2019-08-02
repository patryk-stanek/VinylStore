//Importing methods
import React from "react";
import { Switch, Route } from "react-router-dom";

//Importing components
import { Body } from "./components/Body/Body";
import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Basket } from "./pages/Basket/Basket";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import SearchResults from "./pages/SearchResults/SearchResults";
import ProductDetailsContainer from "./components/ProductDetails/ProductDetailsContainer";

//Creating routes
export default (
    <Body>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/catalog/product/:id"} component={ProductDetailsContainer} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/basket"} component={Basket} />
            <Route exact path={"/search"} component={SearchResults} />
            <Route component={NoMatch} />
        </Switch>
    </Body>
)