import React, { ReactElement } from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./home.styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "../../config/navigator";
import Background from "../../background/gradientBG";
import Text from "../../text/text";
import Button from "../../buttons/Button";

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "SinglePlayer">;
};

const Home = ({ navigation }: HomeProps): ReactElement => {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <ScrollView contentContainerStyle={styles.container}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <View style={styles.buttons}>
            <Button
              onPress={() => {
                navigation.navigate("SinglePlayer");
              }}
              style={styles.btn}
              title="Single Player"
            />
            <Button style={styles.btn} title="Multiplayer" />
            <Button style={styles.btn} title="Login" />
            <Button style={styles.btn} title="Settings" />
          </View>
        </ScrollView>
      </Background>
    </View>
  );
};

export default Home;
