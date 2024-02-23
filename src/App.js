import "./assests/App.css";
import Header from "./components/Header";
import Profile from "./sections/ProfileSection";
import Projects from "./sections/ProjectsSection";
import Skills from "./sections/SkillsSection";

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
