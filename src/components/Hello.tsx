export const Hello = () => {
  const onClick = () => {
    alert('hello');
  };

  const text = 'Hello, React';

  return (
    <div>
      <p>Hello, React</p>
      <br />
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
