/* eslint-disable jsx-quotes */
import { Component } from "react";
import { View, ScrollView, Image, Text } from "@tarojs/components";
import "./index.less";

const DATA = [
  {
    src: "https://via.placeholder.com/350x150/FF0000",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FF00",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/0000FF",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FFFF00",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FFFF",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FF0000",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FF00",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/0000FF",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FF00",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/0000FF",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FFFF00",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FFFF",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FF0000",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FF00",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/0000FF",
    type: 1,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FFFF00",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/00FFFF",
    type: 2,
    num: Math.random(),
  },
  {
    src: "https://via.placeholder.com/350x150/FF0000",
    type: 2,
    num: Math.random(),
  },
];

export default class Index extends Component {
  state = {
    type: 0,
    arr: DATA,
    triggered: false,
  };

  private _freshing: boolean;

  onRefresh() {
    if (this._freshing) return;
    this._freshing = true;
    this.setState({
      triggered: true,
    });
    setTimeout(() => {
      this.setState({
        arr:
          this.state.type === 0
            ? DATA
            : DATA.filter((item) => item.type === this.state.type),
        triggered: false,
      });
      this._freshing = false;
    }, 1000);
  }

  onAbort = (e) => {
    console.log("onAbort", e);
    this.setState({
      triggered: false,
    });
  };

  onChangeType = (type) => {
    let data: { src: string; type: number }[] = [];
    if (type !== 0) {
      data = DATA.filter((item) => item.type === type);
    } else {
      data = DATA;
    }
    this.setState({
      type,
      arr: data,
      triggered: false,
    });
  };

  render() {
    const { type, arr, triggered } = this.state;
    console.log(triggered, "triggered");
    return (
      <View className="container">
        <View className="menu">
          <View
            className={`menu-item ${type === 0 ? "active" : ""}`}
            onClick={() => this.onChangeType(0)}
          >
            全部
          </View>
          <View
            className={`menu-item ${type === 2 ? "active" : ""}`}
            onClick={() => this.onChangeType(2)}
          >
            分类2
          </View>
        </View>
        <View>
          {type === 2 ? <View>子分类</View> : null}
          <ScrollView
            style="width: 100%; height: 500px;"
            scrollY
            refresherEnabled
            refresherTriggered={triggered}
            onRefresherRefresh={this.onRefresh.bind(this)}
            onRefresherAbort={this.onAbort}
          >
            {arr.map((item) => (
              <View className="scroll-item">
                <Image
                  mode="widthFix"
                  style={{ width: 100, height: 100 }}
                  src={item.src}
                />
                <Text>{item.num}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
