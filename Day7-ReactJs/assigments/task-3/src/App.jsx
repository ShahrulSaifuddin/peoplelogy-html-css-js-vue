import { useState } from 'react';

// Importing the 'Form' and 'Items' components from their respective files
import Form from './components/Form';
import Items from './components/Items';

function App() {
  // Using the 'useState' hook to create a state variable 'items' and a function 'setItems' to update it
  const [items, setItems] = useState([]);

  // Function to add a new item to the 'items' state
  const addItem = (itemName, itemEmail) => {
    // Creating a new item object with a unique 'id', 'name', and 'email'
    const newItem = {
      id: new Date().getTime().toString(),
      name: itemName,
      email: itemEmail,
    };

    // Updating the 'items' state by spreading the existing items and adding the new item
    setItems([...items, newItem]);
  };

  // Rendering the main component with a form and a list of items
  return (
    <section className="section-center">
      {/* Passing the 'addItem' function as a prop to the 'Form' component */}
      <Form addItem={addItem} />
      {/* Passing the 'items' state as a prop to the 'Items' component */}
      <Items items={items} />
    </section>
  );
}

export default App;
