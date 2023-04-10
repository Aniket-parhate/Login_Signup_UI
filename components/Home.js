import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Bg from "./Bg";
import Btn from "./Btn";
import { darkGreen, green } from "./Constants";

const Home = (props) => {
  return (
    <Bg>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            marginBottom: 40,
          }}
        >
          Let's Start
        </Text>
        <Btn
          bgColor={green}
          btnLabel="Login"
          textColor="white"
          Press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          btnLabel="Signup"
          textColor={darkGreen}
          Press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Bg>
  );
};

export default Home;

const styles = StyleSheet.create({});
