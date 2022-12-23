import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const icon = props.mode ? "fa-moon" : "fa-sun";
  const modeText = props.mode ? "Dark" : "Light";
  const [small, setSmall] = useState(false);

  const toggleMode = () => {
    props.setMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(props.mode));
  }, [props.mode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 40));
    }
  }, []);

  const style = {
    height: small ? "50px" : "80px",
    boxShadow: small
      ? props.mode
        ? "rgb(255 255 255 / 35%) 0px 0px 16px"
        : "rgb(32,45,55) 0px 0px 16px"
      : "",
  };

  return (
    <header className="header" style={style}>
      <NavLink to="/React-countries-rest-api">
        <h1 className="title">Where in the world?</h1>
      </NavLink>
      <div
        className="modeToggle"
        onClick={() => {
          toggleMode();
        }}
      >
        <i className={`fa-regular ${icon}`} id="mode-icon"></i>{" "}
        <span className="mode">{modeText}</span> Mode
      </div>
    </header>
  );
};

export default Header;
