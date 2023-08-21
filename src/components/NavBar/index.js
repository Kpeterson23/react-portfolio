import React from "react";

function NavBar(props) {
  const { selectTab, handleTabChange } = props;

  return (
    <>
      <nav>
        <ul className="nav nav-tabs">
          <li>
            <a
              href="#aboutme"
              onClick={() => handleTabChange("Aboutme")}
              className={
                selectTab === "Aboutme" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              About me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handleTabChange("Portfolio")}
              className={
                selectTab === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleTabChange("Contact")}
              className={
                selectTab === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Contact
            </a>
          </li>
          <li>
            <a
              href="#profile"
              onClick={() => handleTabChange("Resume")}
              className={
                selectTab === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
