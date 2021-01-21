import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const IconButton = ({ name, style, onPress, color }) => {
	return (
		<TouchableHighlight style={[styles.container, style]} onPress={onPress}>
			<Ionicons name={name} size={24} color={color} />
			{/* {<Icon name={name} size={21} color={"#644c7c"} />} */}
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default IconButton;
