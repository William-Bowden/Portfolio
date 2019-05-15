import React from "react"

import Slider from "react-slick"
import ItemLayout from "./content/itemLayout"
import Item from "./content/item"

import css from "./content.module.css"

export default class Footer extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div
        style={{
          backgroundColor: "#F1FAEE",
          height: "100%",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Slider {...settings}
        style={{
          height: "100%",
          width: "100%",
        }}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

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
