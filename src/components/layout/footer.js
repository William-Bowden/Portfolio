import React from "react"

import ContactIcon from "./footer/contactIcon"
import css from "./footer.module.css"

export default class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#F1FAEE",
          borderTop: "1px solid #1D3557",
          bottom: "0",
          display: "flex",
          flexDirection: "row",
          height: "100px",
          justifyContent: "flex-end",
          left: "0",
          position: "relative",
          width: "100%",
        }}
      >
        <ContactIcon src="temp.png" alt="" />
        <ContactIcon src="temp.png" alt="" />
        <ContactIcon src="temp.png" alt="" />
        <ContactIcon src="temp.png" alt="" />
      </div>
    )
  }
}
