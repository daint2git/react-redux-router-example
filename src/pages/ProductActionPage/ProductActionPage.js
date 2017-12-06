import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import * as styles from './styles';

class ProductActionPage extends Component {

    render () {
        return (
            <div>
                <Paper zDepth={2} style={styles.paperstyles}>
                    <div style={styles.divStyles}>
                        <TextField hintText="Tên sản phẩm" style={styles.formControlStyles} />
                        <TextField hintText="Giá sản phẩm" style={styles.formControlStyles} type="number" />
                        <Checkbox label="Còn hàng" style={styles.checkboxStyles.checkbox} />
                        <RaisedButton label="Submit" primary={true} style={styles.formControlStyles} />                     
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ProductActionPage;