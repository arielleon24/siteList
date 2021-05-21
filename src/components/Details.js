import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

export default function Details(props) {
  return (
    <div className="Details">
      <div className="Detailhead">
    <ChevronLeftIcon class="ArrowNextPage" />
    <img className="SiteImage" src="./logo192.png" alt="image"></img>
    <div className="SiteInfo">
    <p><b color="white"> Site name </b></p>
    <p> Site address </p>
    <p> contac info </p>
    </div>
    </div>
    <container className="Details">
      
    </container>
    <section>
      <div className="icons" >
      <PersonIcon />
      <PhoneIcon />
      <EmailIcon />
      <RoomIcon />
      </div>
      <div className="icons">
      <p>name</p>
      <p>Phone</p>
      <p>Email</p>
      <p>Address</p>
      </div>
    </section>
  </div>
  )
}