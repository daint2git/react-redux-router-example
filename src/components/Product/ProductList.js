import React, {Component} from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

import * as styles from './styles';

class ProductList extends Component {

    render () {

        let { children } = this.props;

        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Stt</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Mã số</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Tên sản phẩm</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Giá</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Trạng thái</TableHeaderColumn>
                        <TableHeaderColumn style={styles.tableHeaderColumnStyles}>Điều chỉnh</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default ProductList;