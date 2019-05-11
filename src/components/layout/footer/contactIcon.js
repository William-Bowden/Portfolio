import React from "react"

export default class ContactIcon extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "aqua",
          margin: "15px 5px",
          width: "50px",
        }}
      >
        <img src={this.props.src}/>
      </div>
    )
  }
}
