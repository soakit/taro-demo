/* eslint-disable jsx-quotes */
import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  componentDidShow() {
    console.log("did show");
  }

  render() {
    return <View>did show</View>;
  }
}
