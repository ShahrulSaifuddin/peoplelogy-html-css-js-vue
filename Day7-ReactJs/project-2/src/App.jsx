// import { useState } from 'react';

import Test from './Test';

function App() {
  // first variable is responsible to holdd all the data
  // second variable is responsible to manipulate or change the data
  // () to pass initial value
  // const [press, setPress] = useState(0);

  // return (
  //   <div className="container">
  //     <div>
  //       <h1>Counter</h1>
  //       <p>{press}</p>
  //       <button onClick={() => setPress(press + 1)}>Click Me</button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      <Test />;
    </div>
  );
}

export default App;
