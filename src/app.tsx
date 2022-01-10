import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import "./app.less";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  toPath = path => {
    Taro.navigateTo({
      url: path
    });
  };

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <View>
        <View className="">
          <View onClick={() => this.toPath("/pages/index/index")}>index</View>
          <View onClick={() => this.toPath("/pages/index2/index")}>index2</View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

export default App;
