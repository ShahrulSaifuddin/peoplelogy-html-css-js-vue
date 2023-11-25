// import { useState } from 'react';

import Todo from './components/Todo';

// import Props from './components/Props';

// import FetchApi from './components/FetchApi';
// import Test from './components/Test';

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

  // const name = 'shahrul';

  // const check = () => {
  //   alert('You click this button');
  // };
  return (
    <div className="container">
      {/* <Test />; */}
      {/* <FetchApi /> */}
      {/* <Props name={name} check={check} /> */}
      <Todo />
    </div>
  );
}

export default App;
