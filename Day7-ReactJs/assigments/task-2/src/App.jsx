import { useEffect, useState } from 'react';

function App() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
      .then((res) => res.json())
      .then((data) => setData(data.drinks))
      .catch((err) => console.log(err));
  }, []);

  // Log the fetched data to the console (for debugging purposes)
  console.log(data);

  return (
    <div>
      <h1>cocktails</h1>
      {/* Table to display the fetched data */}
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>category</th>
            <th>image</th>
            <th>instruction</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the fetched data and create table rows */}
          {data.map((item) => (
            <tr key={item.idDrink}>
              <td>{item.strDrink}</td>
              <td>{item.strCategory}</td>
              <td>
                <img src={item.strDrinkThumb} alt="" />
              </td>
              <td>{item.strInstructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
