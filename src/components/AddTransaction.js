import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


// Define state variables using the useState hook
const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  

// Define a function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      category,
      date
    }


// Call the addTransaction
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setCategory('');
    setDate('');
  }


  // Render the component
  return (
	<>
	  <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>

      <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="form-control">
        <label htmlFor="category">Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Please choose an option</option>
            <option value="Housing">Housing</option>
            <option value="Grocery">Grocery</option>
            <option value="Transport">Transport</option>
            <option value="Clothes">Clothes</option>
            <option value="Other">Other</option>
    </select>
    </div>

        <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required />
      </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br/>
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        
        <button className="btn">Add transaction</button>
      </form>
	</>
  )
}

export default AddTransaction
