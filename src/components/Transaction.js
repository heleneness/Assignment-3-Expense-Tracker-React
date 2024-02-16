import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// Display, access delete and determine the transaction amount - +
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

// Render the component  
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.date} {transaction.category} {transaction.text} <span> {sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
