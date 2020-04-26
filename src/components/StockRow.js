import React, { Component } from 'react';

class StockRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>Price</td>
                <td>Date</td>
                <td>Time</td>
            </tr>  
        )
    }
}

export default StockRow;