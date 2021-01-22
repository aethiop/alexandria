import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import FilledButton from "../components/FilledButton";
import IconButton from "../components/IconButton";
import { Authentication } from "../contexts/Authentication";
import { User } from "../contexts/User";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";

const SearchScreen = ({ navigation }) => {
	const { username, keypair } = useContext(User);
	const [query, setQuery] = useState("");
	const { logout } = useContext(Authentication);

	return (
		<View style={styles.container}>
			<SearchBar
				onChangeText={(text) => {
					setQuery(text);
				}}
				placeholder={"Search by Title, Author"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	header: {
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "100",
	},
});

export default SearchScreen;
