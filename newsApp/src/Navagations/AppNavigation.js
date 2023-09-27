import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewsListScreens from "../screens/NewsListScreens";
import NewsDetailsScreens from "../screens/NewsDetailsScreens";
import FavoritesScreens from "../screens/FavoritesScreens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreens}
        options={{ title: "All News" }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreens}
        options={{ title: "News Details" }}
      />
    </Stack.Navigator>
  );
};

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="favorites" component={FavoritesScreens} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Favorites") {
              iconName = "favorite";
            }

            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
        />
        <Tab.Screen name="Favorites" component={FavoritesNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
