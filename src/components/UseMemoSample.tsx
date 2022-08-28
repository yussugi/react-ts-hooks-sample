import React, { useState, useMemo } from 'react';

// `import { UseMemoSample } from ...`で利用すること
export const UseMemoSample = () => {
  // textは現在のテキストボックスの中身の値を保持する
  const [text, setText] = useState('');
  // itemsは文字列のリストを保持する
  const [items, setItems] = useState<string[]>([]);

  const onCahngeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // ボタンをクリックした時に呼ばれる関数
  const onClickButton = () => {
    setItems((prevItems) => {
      // 現在の入力値をItemsに追加する、このとき新しい配列を作成して保存する
      // prevItemsを展開(...list)し、textを追加
      return [...prevItems, text];
    });
    // テキストボックスの中身を空にする
    setText('');
  };

  // numberOfCharacters1は再描画のたびにitems.reduceを実行して結果を得る
  const nubmerOfCharacter1 = items.reduce((sub, item) => sub + item.length, 0);
  // numberOfCharecters2はuseMemoを使いitemsが更新されるタイミングでitems.reduceを実行して結果を得る
  const nubmerOfCharacter2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
    // 第二引数の配列の中にitemsがあるのでitemsが新しくなった時だけ関数を実行してメモを更新
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onCahngeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Character 1: {nubmerOfCharacter1}</p>
        <p>Total Number of Character 2: {nubmerOfCharacter2}</p>
      </div>
    </div>
  );
};
