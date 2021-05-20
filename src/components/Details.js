import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function Details(props) {
  return (
    <div className="Details">
      <div className="Detailhead">
    <ChevronLeftIcon class="ArrowNextPage" />
    <img className="SiteImage" src="./logo192.png" alt="image"></img>
    <div className="SiteInfo">
    <p><b> Site name </b></p>
    <p> Site address </p>
    <p> contac info </p>
    </div>
    </div>
    <h1 className="Details">
      DETAILS Placeholder
    </h1>
  </div>
  )
}