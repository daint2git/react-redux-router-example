import React, {Component} from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ActionRemoveShoppingCart from 'material-ui/svg-icons/action/remove-shopping-cart';

import * as styles from './styles';

class ProductItem extends Component {

    render () {

        let { index, product } = this.props;

        return (
            <TableRow>
                <TableRowColumn style={styles.tableRowColumnStyles}>{index + 1}</TableRowColumn>
                <TableRowColumn style={styles.tableRowColumnStyles}>{product.id}</TableRowColumn>
                <TableRowColumn style={styles.tableRowColumnStyles}>{product.name}</TableRowColumn>
                <TableRowColumn style={styles.tableRowColumnStyles}>{product.price}</TableRowColumn>
                <TableRowColumn style={styles.tableRowColumnStyles}>{this.showStatus(product.status)}</TableRowColumn>     
                <TableRowColumn style={styles.tableRowColumnStyles}>
                    <RaisedButton style={styles.raisedButtonStyles} backgroundColor="#FFC107" icon={<ActionUpdate/>}/>
                    <RaisedButton style={styles.raisedButtonStyles} backgroundColor="#616161" icon={<ActionDelete/>}/>
                </TableRowColumn >                     
            </TableRow>
        );
    }

    showStatus = (status) => {
        return status ? <ActionShoppingCart/> : <ActionRemoveShoppingCart/>;
    }
}

export default ProductItem;