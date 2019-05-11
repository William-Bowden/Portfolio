import React from "react"

import TechIcon from "./navbar/techIcon"
import css from "./navbar.module.css"

import profImg from "../../../assets/portrait.jpg"
import gatsbyIcon from "../../../assets/icons/gatsby-icon.png"

export default class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#F1FAEE",
          borderRight: "1px solid #396581",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "250px",
        }}
      >
        <img
          src={profImg}
          style={{
            height: "auto",
            width: "100%",
          }}
        />

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <button />
          <button />
          <button />
          <button />
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TechIcon src={gatsbyIcon} />
          <TechIcon src={gatsbyIcon} />
          <TechIcon src={gatsbyIcon} />
          <TechIcon src={gatsbyIcon} />
        </div>
      </div>
    )
  }
}
