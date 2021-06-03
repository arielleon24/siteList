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

  const sitesArray = []
  
  

  const axiosCall = () => {
    axios.get(url)
      .then((response) => {
        SetSites(response.data);
        console.log("this is the site Object", response.data)
        sitesArray.push(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
      axiosCall();
    }, []);

    console.log("this is sites in DETAILS", Sites)

    return (
      <div className="Details">
        <div className="Detailhead">
      <ChevronLeftIcon class="ArrowNextPage" />
      <img className="SiteImage" src="https://source.unsplash.com/random" alt="image"></img>
      <div className="SiteInfo">
      <p><b> {Sites.title} </b></p>
      {Sites?.address ? <p> {Sites.address.street}, {Sites.address.city},{Sites.address.country} </p>
      : <p>Not available</p> }
      {Sites.contacts?.main?.firstName ? <p> {Sites.contacts.main.firstName} {Sites.contacts.main.lastName} </p> : <p>Not Working</p>}
      </div>
      </div>
      <container className="Details">
  
      </container>
      <section id="detailSection">
        <div className="icons" >
        <PersonIcon /> 
        <div className="nameAndTitle">
        {Sites.contacts ? <p>{Sites.contacts.main.firstName} {Sites.contacts.main.lastName}</p>: <p>Not available</p>}
        {Sites.contacts ? <p>{Sites.contacts.main.jobTitle}</p>: <p>Not available</p>}
        </div>
        </div>
        <div className="icons">
          {Sites?.contacts?.main?.phoneNumber ? <div>
          <PhoneIcon />  
        <p>{Sites.contacts.main.phoneNumber}</p>         
            </div>   :  ""}
        </div>
        <div className="icons">
          {Sites?.contacts?.main?.email? <div>
            <EmailIcon /> <p>{Sites.contacts.main.email}</p>
          </div> : ""}
        </div>
        <div className="icons">
        {Sites?.contacts?.main?.email? <div>
          <RoomIcon /> <p>{Sites.contacts.main.address.street}, {Sites.contacts.main.address.city}</p>
          </div> : ""}
        </div>
      </section>
    </div>
    )
}