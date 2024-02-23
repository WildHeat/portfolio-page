import "./assests/App.css";
import Header from "./components/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
