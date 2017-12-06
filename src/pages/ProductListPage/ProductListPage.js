import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import ActionDelete from 'material-ui/svg-icons/action/delete'; 
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import ProductList from 'ComponentsPath/Product/ProductList';
import ProductItem from 'ComponentsPath/Product/ProductItem';
import {actionFetchProductsRequest} from 'ActionsPath';
import * as styles from './styles';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.putAllProducts();
    }

    render () {

        let { products } = this.props;

        return (
            <div>
                <RaisedButton icon={<ActionAddShoppingCart/>} primary={true} style={styles.raisedButtonStyles} />
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {

        let result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem 
                            key={index}
                            index={index}
                            product={product}
                        />
            });
        }

        return result;
    }
}

ProductListPage.propTypes = {
    products: PropTypes.array.isRequired,
    putAllProducts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        putAllProducts: () => {
            dispatch(actionFetchProductsRequest());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);