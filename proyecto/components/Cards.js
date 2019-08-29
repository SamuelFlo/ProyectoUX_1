import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

class Cards extends Component {
  render() {
    console.log(this.props)
    let {title, price, pictureUrl} = this.props;
    return (
      <div></div>
    );
  }
}

export default Cards;
