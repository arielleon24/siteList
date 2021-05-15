import React from "react";
// import { ArrowDropDownIcon, SubjectIcon } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <div className="navtop">
      <DehazeIcon className="navIcons" />
      <h1>Scheduling</h1>
      <section className="topRight">
      <AppsIcon className="navIcons" />
      <div className="roundInitial">D</div>
      </section>
      </div>
      <div className="navmid">
        <h2>Sites</h2>
      </div>
      <footer className="navfoot">
        <h3>All sites</h3>
        <ArrowDropDownIcon />
        <div className="navSideIcons">
          <FilterListIcon />
          <SearchIcon />
        </div>
      </footer>
    </nav>
  );
}
