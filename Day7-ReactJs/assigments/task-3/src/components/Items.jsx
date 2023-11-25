// Importing the 'SingleItem' component from its respective file
import SingleItem from './SingleItem';

// Defining the 'Items' component that takes a prop 'items' (an array of items)
function Items({ items }) {
  // Rendering a table to display a list of items
  return (
    <table className="items">
      {/* Table header with columns for 'name' and 'email' */}
      <tr>
        <th>name</th>
        <th>email</th>
      </tr>
      {/* Mapping through the 'items' array and rendering a 'SingleItem' component for each item */}
      {items.map((item) => {
        // Rendering the 'SingleItem' component with a unique key and spreading the item properties
        return <SingleItem key={item.id} {...item} />;
      })}
    </table>
  );
}

export default Items;
