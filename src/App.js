import "./assests/App.css";
import Header from "./components/Header";
import Profile from "./sections/ProfileSection";
import Projects from "./sections/ProjectsSection";
import SecondProfileSection from "./sections/SecondProfileSection";
import Skills from "./sections/SkillsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <SecondProfileSection />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
