import React from "react"

import Footer from "./layout/footer"
import Content from "./layout/content"
import Nav from "./layout/navbar"

export default class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "row",
          height: "100%",
          left: "0",
          position: "absolute",
          top: "0",
          width: "100%",
        }}
      >
        <Nav />
        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <Content />
          <Footer />
        </div>
      </div>
    )
  }
}
