import './App.css';
import { TopicForm } from './components/TopicForm';
import { TopicList } from './components/TopicList';
import { TopicsProvider } from './core/providers/TopicsProviders';

function App() {

  return (
    <>
      <TopicsProvider>
        <header>
          <h1>Welcome to our topic social media</h1>
        </header>
        <main>
          <TopicForm />
          <TopicList />
        </main>
        <footer>
          <p>Thanks for reading, hope see you soon</p>
        </footer>
      </TopicsProvider>
    </>
  );
}

export default App;
