function Props(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={props.check}>click me</button>
    </div>
  );
}

export default Props;
