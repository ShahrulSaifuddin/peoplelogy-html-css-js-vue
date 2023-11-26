import { useEffect } from 'react';
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(data);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>;
      </div>
    );
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={data?.picture?.large} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">
          {data?.name?.first} {data?.name?.last}
        </h4>
        <p className="email">{data?.email}</p>
        <p className="cell">+{data?.cell}</p>
        <button className="btn btn-hipster" onClick={() => fetchUserData()}>
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
