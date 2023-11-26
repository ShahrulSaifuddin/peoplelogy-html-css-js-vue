import { useTimer } from 'use-timer';

function UseTime() {
  const { time, start, pause, reset, status } = useTimer({
    endTime: 3,
    onTimeOver: () => {
      console.log('Time is over');
    },
  });
  return (
    <div className="container">
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>Start Timer: {time}</p>
      {status === 'Running' && <p>Running...</p>}
    </div>
  );
}

export default UseTime;
