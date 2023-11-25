import { useState } from 'react';

// Importing data from an external source (data.js).
import data from './data';

function Test() {
  // Using the 'useState' hook to initialize a state variable 'user' with the data imported.
  const [user, setUser] = useState(data);

  console.log(setUser, user);

  // Returning JSX for rendering.
  return (
    <section>
      {/* Rendering a table with table headers and data rows */}
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>city</th>
        </tr>

        {/* Mapping through 'user' and rendering each item in a table row */}
        {user.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}

// Exporting the 'Test' component as the default export.
export default Test;
