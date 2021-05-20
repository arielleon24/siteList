import React from "react";


//Material UI imports
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Nav(props) {
  return (
    <nav className="navBar">
      <div className="navTop">
      <DehazeIcon className="navIcons" />
      <h2 className="schedulingH3">Scheduling</h2>
      <section className="topRight">
      <AppsIcon className="navIcons" />
      <div className="roundInitial">A</div>
      </section>
      </div>
    </nav>
  );
}
