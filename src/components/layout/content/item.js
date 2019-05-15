import React from "react"

export default class Item extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "red",
          height: "300px",
          margin: "15px 5px",
          width: "300px",
        }}
      >
        <img src={this.props.src}/>
      </div>
    )
  }
}
