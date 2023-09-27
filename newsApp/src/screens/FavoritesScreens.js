import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import Card from "../components/Card";

const FavoritesScreens = (props) => {
  const favorites = useSelector((state) => state.NewsReducers.favorites);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <Card
          navigation={props.navigation}
          title={item.title}
          image={item.urlToImage}
          description={item.description}
          url={item.url}
        />
      )}
    />
  );
};

export default FavoritesScreens;

const styles = StyleSheet.create({});
