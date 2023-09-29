import { useState } from "react";
import { ulid } from "ulidx";
import "./App.css";
import { TopicForm } from "./components/TopicForm";
import { TopicList } from "./components/TopicList";
import { Topic } from "./core/interfaces/Topic";

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);

  const onAddTopic = (description: string) => {
    const new_topic: Topic = {
      id: ulid(),
      created_at: new Date().toJSON().slice(0, 10),
      active: true,
      description: description,
      upvote: 0,
      downvote: 0,
      tags: ["teste", "teste2"],
      autor: {
        id: "id_teste",
        name: "Kelson",
        country: "Brazil",
        city: "Teresina",
      },
    };

    setTopics([new_topic, ...topics]);
  };

  return (
    <>
      <header>
        <h1>Welcome to our topic social media</h1>
      </header>
      <main>
        <TopicForm onAddTopic={onAddTopic}/>
        <TopicList topics={topics}/>
      </main>
      <footer>
        <p>Thanks for reading, hope see you soon</p>
      </footer>
    </>
  );
}

export default App;
