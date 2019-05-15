import React from "react"

import Slider from "react-slick"
import ItemLayout from "./content/itemLayout"
import Item from "./content/item"

import css from "./content.module.css"

export default class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F1FAEE",
          height: "100%",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <ItemLayout>
          <Item />
        </ItemLayout>

        <ItemLayout>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ItemLayout>
      </div>
    )
  }
}
