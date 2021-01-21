import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import MainScreen from "../screens/MainScreen";
import BottomBar from "../navigators/BottomBar";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
			<Tab.Screen name="Main" component={MainScreen} />
			<Tab.Screen name="Search" component={SearchScreen} />
		</Tab.Navigator>
	);
};
