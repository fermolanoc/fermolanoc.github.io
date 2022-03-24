import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container max-w-screen-lg mx-auto h-screen px-3">
        <Header />
        <div className="text-left text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-emerald-500">
            Fernando Molano
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
