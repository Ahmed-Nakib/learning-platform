export default function TopicList({ topics, onSelectTopic }: any) {
  return (
    <div style={{ width: "250px" }}>
      {topics.map((topic: any, i: any) => (
        <div
          key={i}
          onClick={() => onSelectTopic(topic)}
          style={{ cursor: "pointer", padding: "10px" }}
        >
          {topic.title}
        </div>
      ))}
    </div>
  );
}