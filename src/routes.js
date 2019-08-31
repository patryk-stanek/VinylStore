//Importing methods
import React from "react";
import { Switch, Route } from "react-router-dom";

//Importing components
import { Body } from "./components/Body/Body";
import Home from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import Basket from "./components/Basket/Basket";
import { NoMatch } from "./components/NoMatch/NoMatch";
import SearchResults from "./components/SearchResults/SearchResults";
import ProductDetailsContainer from "./components/ProductDetails/ProductDetailsContainer";
import FAQ from "./components/FAQ/FAQ";
import Rules from "./components/Rules/Rules";

//Creating routes
export default (
    <Body>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/catalog/product/:id"} component={ProductDetailsContainer} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/basket"} component={Basket} />
        <Route exact path={"/search"} component={SearchResults} />
        <Route exact path={"/FAQ"} component={FAQ} />
        <Route exact path={"/rules"} component={Rules} />
        <Route component={NoMatch} />
      </Switch>
    </Body>
)