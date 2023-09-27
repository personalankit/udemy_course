import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import * as newsActions from '../Redux/actions/NewsAction'

const Card = (props) => {

  const dispatch = useDispatch()
  const isFav = useSelector(state => state.NewsReducers.favorites.some(articles => articles.url === props.url))

  return (
    <TouchableOpacity onPress={() => {
      props.navigation.navigate("NewsDetails", {
        articleUrl : props.url
      })}
    }>
        <View style={styles.card}>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.images}
                source={{uri: props.image}}
              />
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                {props.title && props.title.length > 22 ? props.title.slice(0, 22): props.title} ...
              </Text>
              <MaterialIcons 
                name={isFav ? 'favorite' : "favorite-border"} 
                color="orange" size={24} 
                onPress={()=> {
                  dispatch(newsActions.toggleFavorites(props.url))
                }}
                />
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>
                  {props.description && props.description.length > 99 ? props.description.slice(0, 100)  : props.description} ...
              </Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: "0.25",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: "8",
    elevation: 5,
  },
  imgWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  images: {
    width: "100%",
    height: "100%",
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
});
