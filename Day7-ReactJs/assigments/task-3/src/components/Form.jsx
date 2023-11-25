import { useState } from 'react';

// Defining the 'Form' component that takes a prop 'addItem' (a function to add items to the list)
function Form({ addItem }) {
  // Using 'useState' to create state variables for the new item's name and email
  const [newItemName, setNewItemName] = useState('');
  const [newItemEmail, setNewItemEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking if the name or email fields are empty, and showing an alert if they are
    if (!newItemName.trim() || !newItemEmail.trim()) {
      alert('Fill in the form!');
    } else {
      // Calling the 'addItem' function passed as a prop with the trimmed name and email
      addItem(newItemName.trim(), newItemEmail.trim());
      alert('Successfully send form');

      // Clearing the input fields after successfully adding an item
      setNewItemName('');
      setNewItemEmail('');
    }
  };

  // Rendering the form with input fields for name and email, and a button to submit the form
  return (
    <form onSubmit={handleSubmit}>
      <h4>list</h4>
      <div className="form-control">
        {/* Input field for the item's name */}
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          placeholder="name"
        />
        {/* Input field for the item's email */}
        <input
          type="email"
          className="form-input"
          value={newItemEmail}
          onChange={(event) => setNewItemEmail(event.target.value)}
          placeholder="email"
        />
      </div>
      <div className="btn-container">
        {/* Button to submit the form */}
        <button type="submit" className="btn">
          add item
        </button>
      </div>
      {/* Displaying the current values of name and email for testing purposes */}
      <p>Name: {newItemName}</p>
      <p>Email: {newItemEmail}</p>
    </form>
  );
}

export default Form;
