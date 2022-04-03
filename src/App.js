import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container max-w-screen-lg mx-auto h-screen">
        <Header />
        <Hero />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
