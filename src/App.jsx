import "./App.scss";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import AboutMe from "./components/about-me/about-me";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <AboutMe />
    </div>
  );
}

export default App;
