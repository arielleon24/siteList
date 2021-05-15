import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="flex">
      <img className="SiteImage" src="./logo192.png" alt="image"></img>
      <div className="SiteInfo">
      <p><b> Site name </b></p>
      <p> Site address </p>
      <p> contac info </p>
      </div>
      </div>
      <ChevronRightIcon class="ArrowNextPage" />
    </div>
  )
}