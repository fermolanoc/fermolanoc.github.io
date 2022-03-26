import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container max-w-screen-lg mx-auto h-screen snap-y snap-mandatory overflow-scroll">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
