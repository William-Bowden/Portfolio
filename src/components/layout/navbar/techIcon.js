import React from "react"

export default class TechIcon extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "40px",
          margin: "10px 5px",
          width: "40px",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src={this.props.src}
        />
      </div>
    )
  }
}
