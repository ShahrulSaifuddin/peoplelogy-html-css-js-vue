import { useEffect, useState } from 'react';

function FetchApi() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // Log the fetched data to the console (for debugging purposes)
  console.log(data);

  return (
    <div>
      {/* Table to display the fetched data */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th colSpan={2}>rating</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the fetched data and create table rows */}
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>
                {/* Display the image using an img tag */}
                <img src={item.image} alt="" />
              </td>
              <td>{item.rating.rate}</td>
              <td>{item.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchApi;
