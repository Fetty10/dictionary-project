import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>📚 DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultValue="Design" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="https://github.com/Fetty10"> Fetty</a>,
            open-sourced on{" "}
            <a href="https://github.com/Fetty10/dictionary-project"> GitHub</a>{" "}
            and hosted on{" "}
            <a href="https://dictionary-search-engine.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
