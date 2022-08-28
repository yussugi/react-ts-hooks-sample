const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    // styleオブジェクト定義
    <div style={{ padding: '16px', backgroundColor: 'gray' }}>
      <label htmlFor="name">名前</label>
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  );
};

export default Name;
