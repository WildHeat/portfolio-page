import "./assests/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactSection from "./sections/ContactSection";
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
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
