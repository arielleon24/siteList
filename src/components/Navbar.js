import React from "react";

export default function Nav(props) {
  return (
    <nav className="navbar">
      <h1>Scheduling</h1>
      <div className="navmid">
        {" "}
        <h2>Sites</h2>{" "}
      </div>
      <footer className="navfoot">
        <h3>All sites</h3>
        <p>down arrow</p>
        <div className="navSideIcons">
          <div>lil triangles </div>
          <div> looking glass</div>
        </div>
      </footer>
    </nav>
  );
}
