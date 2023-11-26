import { useState } from 'react';

function GitUserSearch() {
  const [userName, setUserName] = useState('ShahrulSaifuddin');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${userName}`);
      const data = await resp.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userData);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <div>
        <input
          type="text"
          placeholder="seacrh user"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={fetchUserData}>Search</button>
      </div>
      <br />
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="" />
          <h1>{userData.name}</h1>
          <p>@{userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}
    </div>
  );
}

export default GitUserSearch;
