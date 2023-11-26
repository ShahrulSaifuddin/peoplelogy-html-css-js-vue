// Import the useTimer hook from the 'use-timer' library
import { useTimer } from 'use-timer';

const App = () => {
  // Destructure values from the useTimer hook
  const { time, start, pause, reset, status } = useTimer({
    interval: 10, // Time interval in milliseconds
    endTime: 300, // End time in seconds
  });

  // Render the component
  return (
    <>
      {/* Buttons to start, pause, and reset the timer */}
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>

      {/* Display the current time in minutes and seconds */}
      <h1>{`${Math.floor(time / 100)}:${(time % 100)
        .toFixed(0)
        .padStart(2, '0')}`}</h1>

      {/* Display messages based on the timer status */}
      {status === 'RUNNING' && <p>Running...</p>}
      {status === 'PAUSED' && <p>Time is paused!</p>}
      {status === 'STOPPED' && time !== 0 && <p>Time is over!</p>}
    </>
  );
};

export default App;
