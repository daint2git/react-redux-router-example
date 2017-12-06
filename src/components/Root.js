import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import appReducers from 'ReducersPath/index';
import Header from 'ComponentsPath/Header/Header';
import Main from 'ComponentsPath/Main/Main';
import Footer from 'ComponentsPath/Footer/Footer';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

class Root extends Component {

    render () {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Header />
                            <Main />
                            <Footer />
                        </div>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default Root;