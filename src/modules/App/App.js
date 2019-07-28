//Importing methods
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//Importing routes and store
import routes from "../../routes";
import store from "../../store";

//Importing styles
import "./App.scss";

//App component
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </Provider>
        )
    }
}