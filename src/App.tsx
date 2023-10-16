import { Outlet } from "react-router-dom";
import "./App.css";
import { TopicsProvider } from "./core/providers/TopicsProviders";
import { AuthProvider } from "./core/providers/AuthProvider";

function Root() {
  return (
    <>
      <TopicsProvider>
        <AuthProvider>
          <header>
            <h1>Welcome to our topic social media</h1>
          </header>
          <Outlet />
          <footer>
            <p>Thanks for reading, hope see you soon</p>
          </footer>
        </AuthProvider>
      </TopicsProvider>
    </>
  );
}

export default Root;
