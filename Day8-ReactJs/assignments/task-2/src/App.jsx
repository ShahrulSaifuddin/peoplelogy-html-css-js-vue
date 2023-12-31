import { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  // State variables to manage data and loading state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch random user data
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(`https://randomuser.me/api/`);
      const datas = await resp.json();
      setData(datas?.results[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Loading state rendering
  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>;
      </div>
    );
  }

  // Main component rendering
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={data?.picture?.large} className="person-img" alt="user" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">
          {data?.name?.first} {data?.name?.last}
        </h4>
        <p className="email">{data?.email}</p>
        <p className="cell">+{data?.cell}</p>
        {/* Button to fetch new random user data */}
        <button className="btn btn-hipster" onClick={() => fetchUserData()}>
          random user
        </button>
      </article>
    </main>
  );
}

export default App;
