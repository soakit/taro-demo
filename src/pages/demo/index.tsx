/* eslint-disable jsx-quotes */
import { Component } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

export default class Index extends Component {
  onPullDownRefresh() {
    setTimeout(() => {
      Taro.stopPullDownRefresh();
    }, 1500);
  }

  render() {
    return (
      <View className="components-page">
        Taro v 3.4.1
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
        <View>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam
          error, exercitationem non cupiditate placeat. Voluptates quia ratione
          nihil cumque iusto quaerat, esse mollitia autem molestiae natus
          aperiam qui deserunt.
        </View>
      </View>
    );
  }
}
