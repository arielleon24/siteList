import React from "react";
import ListItem from "./ListItem"
import Slide from 'react-reveal/Slide'

export default function List(props) {
  const sitesArray = []

  const listArray = props.sites.map((result, index)=>{
    sitesArray.push(result)
    if(index < 4) {
      return (
        < ListItem key={result.id} result={result} />)}
    })

    console.log(sitesArray)

  return (
    <Slide bottom>
    <div className="siteList">
      {/* <img className="gif" src="https://i.gifer.com/Ova.gif" alt="MontrealGif" ></img> */}
      {listArray}
      {/* < ListItem sites={props.sites} /> */}
    </div>
    </Slide>
  )
}