import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/axteria/react-weather-app"
          className="link-secondary"
        >
          Open-sourced
        </a>{" "}
        by Faye.
      </footer>
    </div>
  );
}

export default App;
