import "../assests/Header.css";

const Header = () => {
  const toggle = () => {
    document.getElementsByClassName("header-links")[0].classList.toggle("show");
    document
      .getElementsByClassName("overlay-container")[0]
      .classList.toggle("hidden");
  };

  const closeNavBar = () => {
    document.getElementsByClassName("header-links")[0].classList.remove("show");
    document
      .getElementsByClassName("overlay-container")[0]
      .classList.add("hidden");
  };

  return (
    <div className="header-container">
      <div className="toggle-container" onClick={toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div>
        <h2 className="logo" onClick={() => {}}>
          Aron Berhane
        </h2>
        <div className="overlay-container hidden">
          <div
            className="behind-navbar-overlay"
            onClick={() => closeNavBar()}
          ></div>
        </div>
      </div>
      <div className="header-links">
        <div
          onClick={() => {
            closeNavBar();
          }}
        >
          <p className="link">Home</p>
        </div>
        <div
          onClick={() => {
            closeNavBar();
          }}
        >
          <p className="link">Projects</p>
        </div>
        <div
          onClick={() => {
            closeNavBar();
          }}
        >
          <p className="link">Skills</p>
        </div>
        <div
          onClick={() => {
            closeNavBar();
          }}
        >
          <p className="link">Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
