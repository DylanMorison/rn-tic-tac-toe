import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, SinglePlayer } from "../screens/";

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayer: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const navigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SinglePlayer" component={SinglePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigator;
