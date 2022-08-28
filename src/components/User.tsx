import React, { useContext } from 'react';

type User = {
  id: number;
  name: string;
};

// ユーザーデータを保存するContextを作成
const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  // useContextにContextを渡すことでContextから値を取得する
  const user = useContext(UserContext);

  return user !== null ? <p>--- Hello, {user.name} ---</p> : null;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <GrandChild />
    </div>
  );
};

export const User = () => {
  const user: User = {
    id: 1,
    name: 'Team',
  };

  return (
    // Contextに値を渡す
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
