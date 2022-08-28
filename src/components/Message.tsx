// Textコンポーネントにて親から`content`を受け取る
const Text = (props: { content: string }) => {
  // propsからcontent取得
  const { content } = props;
  // propsで渡されたデータの表示
  return <p className="text">{content}</p>;
};

const Message = (props: {}) => {
  const content1 = 'This is parent component';
  const content2 = 'Message uses Text Component';

  return (
    <div>
      {/* content keyでコンポーネントにデータを渡す */}
      <Text content={content1} />
      {/* 違うデータを渡した際には違う内容が表示される */}
      <Text content={content2} />
    </div>
  );
};

export default Message;
