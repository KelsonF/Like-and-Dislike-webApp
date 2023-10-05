import { useEffect, useReducer } from 'react';
import './App.css';
import { TopicForm } from './components/TopicForm';
import { TopicList } from './components/TopicList';
import { ActionType, TopicsReducer } from './core/reducers/TopicsReducer';
import { fetchAllTopics } from './providers/api';
import { Topic } from './core/interfaces/Topic';
import { ulid } from 'ulidx';

function App() {
  const [topicsState, dispatch] = useReducer(TopicsReducer, { topics: [] });

  const onAddTopic = (description: string) => {
    const topic: Topic = {
      id: ulid(),
      description: description,
      created_at: new Date(),
      upvote: 0,
      downvote: 0,
      autor: {
        id: 'id_teste',
        name: 'Kelson',
        city: 'Teresina',
        country: 'Brazil',
      },
      active: true,
      tags: ['tag1', 'tag2'],
    };

    const init = {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('http://localhost:3000/topics', init).then((response) => {
      if (response.ok) {
        dispatch({ type: ActionType.Added, payload: { topic } });
      }
    });
  };

  useEffect(() => {
    const loadTopics = async () => {
      const topics = await fetchAllTopics();
      dispatch({ type: ActionType.Loaded, payload: { topics } });
    };

    loadTopics();
  }, []);

  return (
    <>
      <header>
        <h1>Welcome to our topic social media</h1>
      </header>
      <main>
        <TopicForm onAddTopic={onAddTopic} />
        <TopicList topics={topicsState.topics} />
      </main>
      <footer>
        <p>Thanks for reading, hope see you soon</p>
      </footer>
    </>
  );
}

export default App;
