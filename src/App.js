import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-secondary">
          Africa's Greatest Players Of All Time
        </h1>
        <div className="row">
          <PlayerList />
        </div>
      </div>
    </div>
  );
}

export default App;
