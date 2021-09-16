import React from 'react'
import PropTypes from 'prop-types'
import { TableStyled } from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
    console.log('items :>> ', items);
    return (
        <TableStyled className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {items.map(({id,type,amount,currency }) => (
                <tbody  key={id}>
    <tr>
                        <td className='type'>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
    </tr>
  </tbody>
            ))}
  
</TableStyled>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({

        })
    )
}

export default TransactionHistory;