import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import { useParams } from "react-router";

export default function Details(props) {
  const [Sites, SetSites] = useState([]);

  console.log("THIS IS THE ID we need", useParams().id)
  const url = `http://localhost:3000/sites/${useParams().id}`
  
  

  const axiosCall = () => {
    axios.get(url)
      .then((response) => {
        SetSites(response.data);
        console.log("this is the site Object", response.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
      axiosCall();
    }, []);

    console.log(Sites)

  return (
    <div className="Details">
      <div className="Detailhead">
    <ChevronLeftIcon class="ArrowNextPage" />
    <img className="SiteImage" src="./logo192.png" alt="image"></img>
    <div className="SiteInfo">
    <p><b> {Sites.title} </b></p>
    <p> {Sites.address.street}, {Sites.address.city},{Sites.address.country} </p>
    <p> {Sites.contacts.main.firstName} {Sites.contacts.main.lastName} </p>
    </div>
    </div>
    <container className="Details">

    </container>
    <section>
      <div className="icons" >
      <PersonIcon /> 
      <div className="nameAndTitle">
        <p>{Sites.contacts.main.firstName} {Sites.contacts.main.lastName}</p> <br />
        <p>{Sites.contacts.main.jobTitle}</p>
      </div>
      </div>
      <div className="icons">
      <PhoneIcon />  <p>{Sites.contacts.main.phoneNumber}</p>
      </div>
      <div className="icons">
      <EmailIcon /> <p>{Sites.contacts.main.email}</p>
      </div>
      <div className="icons">
      <RoomIcon /> <p>{Sites.contacts.main.email}</p>
      </div>
    </section>
  </div>
  )
}