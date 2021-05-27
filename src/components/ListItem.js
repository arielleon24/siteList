
import React, {useState, useEffect} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { createBrowserHistory } from 'history';

//REACT router for ItemView page
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function ListItem(props) {
  const [Id, setId] = useState([])

  // const click = () => {
  //   console.log(props.result.id,"button had been clicked")
  //   setId(props.result.id)
  //   console.log("ID before being passed", Id)
  // }

  const url = `/details/${props.result.id}`

  return (
    <div className="ListItem">
      <div className="flex">
      <img className="SiteImage" src={props.result.images[0]} alt="image"></img>
      <div className="SiteInfo">
      <p><b> {props.result.title} </b></p>
      <p> {props.result.address.street}, {props.result.address.city}, {props.result.address.country} </p>
      <p> {props.result.contacts.main.phoneNumber} </p>
      </div>
      </div>
      <a href={url} >
      <ChevronRightIcon  className="ArrowNextPage"  onClick={ () => {
      console.log(props.result.id,"button had been clicked")
      }
      }/>
      </a>
    </div>
  )
}