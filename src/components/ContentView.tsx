export default function ContentView({ topic }: any) {
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <h2>{topic.title}</h2>
      <pre>{topic.content}</pre>
    </div>
  );
}