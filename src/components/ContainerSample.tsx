// Containerのprops型定義
type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

// Containerは赤背景のボックスの中にタイトルと子要素を表示
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div style={{ background: 'red' }}>
      {/* 呼び出し元のtitleを表示する*/}
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    // Containerを使用する際に他の要素を囲って使用する
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれる</p>
    </Container>
  );
};

export default Parent;
