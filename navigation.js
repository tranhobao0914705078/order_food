import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import RestaurantDetail from "./screen/RestaurantDetail";


export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShow: false
    }

    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        </Stack.Navigator>
    </NavigationContainer>
}