import { useReducer } from "react";
import "./App.css";
import { TopicForm } from "./components/TopicForm";
import { TopicList } from "./components/TopicList";
import { ActionType, TopicsReducer } from "./core/reducers/TopicsReducer";

function App() {
  const [topicsState, dispatch] = useReducer(TopicsReducer, {topics: []})

  const onAddTopic = (description: string) => {
    dispatch({type: ActionType.Added, payload: {description}})
  };

  return (
    <>
      <header>
        <h1>Welcome to our topic social media</h1>
      </header>
      <main>
        <TopicForm onAddTopic={onAddTopic}/>
        <TopicList topics={topicsState.topics}/>
      </main>
      <footer>
        <p>Thanks for reading, hope see you soon</p>
      </footer>
    </>
  );
}

export default App;
