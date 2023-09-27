import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9F5F6",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
});
