import { useState } from 'react';

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count:{count}</p>
      {/* setCountを呼び出して状態更新 */}
      <dl>
        <dt>
          <button onClick={() => setCount(count - 1)}>-</button>
        </dt>
        <dt>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            +
          </button>
        </dt>
      </dl>
    </div>
  );
};

export default Counter;
