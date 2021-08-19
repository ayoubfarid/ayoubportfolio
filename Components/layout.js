// components/layout.js
import React from "react";
import { init } from "ityped";
export default class Layout extends React.Component {
  componentDidMount() {
    const myElement = document.querySelector("#name");
    init(myElement, { showCursor: false, strings: ["Ayoub Farid "] ,typeSpeed:  200});
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
