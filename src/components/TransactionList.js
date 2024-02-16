import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';


// Display list and access transactions
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

// Render the component  
  return (
	<>
	  <h3>Title <span>Amount</span> </h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
	</>
  )
}

export default TransactionList;
