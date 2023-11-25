// Defining the 'SingleItem' component that takes props 'name' and 'email'
function SingleItem({ name, email }) {
  // Rendering a table row with two columns for 'name' and 'email'
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}

export default SingleItem;
