import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '../../routes';
import store from '../../store';

import './App.scss';

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