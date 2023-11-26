import { useTimer } from 'use-timer';

const App = () => {
  const { time, start, pause, reset, status } = useTimer({
    interval: 10,
    endTime: 300,
  });

  return (
    <>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h1>{`${Math.floor(time / 100)}:${(time % 100)
        .toFixed(0)
        .padStart(2, '0')}`}</h1>
      {status === 'RUNNING' && <p>Running...</p>}
      {status === 'PAUSED' && <p>Time is pause!</p>}
      {status === 'STOPPED' && time != 0 && <p>Time is over!</p>}
    </>
  );
};

export default App;
