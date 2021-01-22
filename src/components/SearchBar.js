import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import { Octicons } from "@expo/vector-icons";

const SearchBar = ({ style, onPress, placeholder, ...props }) => {
	return (
		<View style={styles.container}>
			<Octicons
				name={"search"}
				size={24}
				style={styles.button}
				color={"rgb(82%, 82%, 82%)"}
			/>
			<TextInput
				{...props}
				placeholder={placeholder}
				placeholderTextColor={"#C7C7CD"}
				style={[styles.input, style]}
				onPress={onPress}
			/>
			<IconButton
				style={styles.button}
				name={"settings"}
				size={24}
				onPress={() => {}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "#D6D6D6",
		borderRadius: 30,
		margin: 14,
		padding: 14,
	},
	input: {
		flex: 0.8,
	},
	button: {
		marginRight: 4,
	},
});

export default SearchBar;
