import React from "react";
import ListItem from "./ListItem"
import Slide from 'react-reveal/Slide'

export default function List(props) {
  const duplicateItem = (item) => {
    const array = [];
    for(let i = 0; i<= 5; i++) {
      array.push(item)
    }
    return array
  }

  const arrayOfItems = duplicateItem(ListItem)

  return (
    <Slide bottom>
    <div className="siteList">
      {/* <img className="gif" src="https://i.gifer.com/Ova.gif" alt="MontrealGif" ></img> */}
      < ListItem />
      < ListItem />
      < ListItem />
      < ListItem />
      < ListItem />
    </div>
    </Slide>
  )
}