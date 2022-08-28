import React, { useState, useCallback } from 'react';

type ButtonProps = {
  onClick: () => void;
};

// Decrementボタンは通常の関数コンポーネントでボタンを表示
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('Decrementが再描画されました');

  return <button onClick={onClick}>Decrement</button>;
};

// Incrementボタンはメモ化した関数コンポーネントでボタンを表示
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtonが再描画されました');

  return <button onClick={onClick}>Increment</button>;
});

// DoubleButtonはメモ化した関数コンポーネントでボタン表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtonが再描画されました');

  return <button onClick={onClick}>Double</button>;
});

export const ParentUseCallback = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallbackを使って関数をメモ化
  const double = useCallback(() => {
    setCount((c) => c * 2);
    // 第二引数は空配列なのでuseCallbackは常に同じ関数を返す
  }, []);

  return (
    <div>
      <p>useCallback</p>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す */}
      <IncrementButton onClick={increment} />
      {/* メモ化コンポーネントに関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  );
};
