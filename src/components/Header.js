import React from "react";


//Material UI imports
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Header(props) {
  return (
    <nav className="navBar">
      <div className="navMid">
        <h3>Sites</h3>
      </div>
      <footer className="navFoot">
        <section className="leftNavFoot">
        <h3 id="allSites">All sites</h3>
        <ArrowDropDownIcon id="downArrow" />
        </section>
        <section className="navSideIcons">
          <FilterListIcon />
          <SearchIcon />
        </section>
      </footer>
    </nav>
  );
}