import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav.js";
import CatNav from "./components/CatNav/index.js";
import MainComponent from "./components/MainComponent/index.js";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
