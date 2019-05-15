import React from "react"

export default class ItemLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          alignContent: "flex-start",
          backgroundColor: "aqua",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "15px",
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
