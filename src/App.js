import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/axteria/react-weather-app"
            className="link-secondary"
            target="_blank"
          >
            Open-sourced
          </a>{" "}
          by Faye.
        </footer>
      </div>
    </div>
  );
}

export default App;
