import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';

import routes from 'TestDataPath/routes';
import * as styles from './styles';

class Main extends Component {

    render () {
        return (
            <Paper style={styles.paperStyles} zDepth={5} >
                {this.showContentMenu(routes)}
            </Paper>
        );
    }

    showContentMenu = (routes) => {

        let result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route 
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
            })
        }

        return <Switch>{result}</Switch>;
    }
}

export default Main;