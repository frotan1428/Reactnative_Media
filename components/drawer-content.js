import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import bgImage from "../assets/img/bg.jpg";
import logoImage from "../assets/img/logo.png";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const DrawerContent = (props) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={bgImage}
        style={styles.bg}
        imageStyle={styles.bgImage}
      >
        <Image source={logoImage} style={styles.logo} />
      </ImageBackground>

      <View style={{flex:1}}>
        <DrawerContentScrollView>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  bg: {
    height: 170,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    opacity: 0.8,
  },
  logo: {
    width: 200,
    height: 63,
  },
});
