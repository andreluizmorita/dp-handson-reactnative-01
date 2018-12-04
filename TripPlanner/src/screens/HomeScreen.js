import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/Background.png")}
        imageStyle={{ resizeMode: "stretch" }}
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image source={require("../../assets/Logo.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 32
          }}
        >
          <Image source={require("../../assets/LogoDev.png")} />
        </View>
        <TouchableWithoutFeedback
          style={{
            background: "white",
            paddingBottom: 16,
            paddingTop: 16
          }}
        >
          <Text>COMEÇAR</Text>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

export default HomeScreen;
