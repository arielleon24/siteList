import React from "react";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function ListItem(props) {
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
      <ChevronRightIcon className="ArrowNextPage" />
    </div>
  )
}