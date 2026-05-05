import { useState } from "react";
import { data } from "./data/content";
import Sidebar from "./components/Sidebar";
import TopicList from "./components/TopicList";
import ContentView from "./components/ContentView";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(data[0]);
  const [selectedTopic, setSelectedTopic] = useState(
    data[0].topics[0]
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        data={data}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedTopic(cat.topics[0]);
        }}
      />

      <TopicList
        topics={selectedCategory.topics}
        onSelectTopic={setSelectedTopic}
      />

      <ContentView topic={selectedTopic} />
    </div>
  );
}

export default App;