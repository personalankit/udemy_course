import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import * as newsActions from '../Redux/actions/NewsAction'

const NewsDetailsScreens = (props) => {
  const dispatch = useDispatch();

  const { articleUrl } = props.route.params;
  const article = useSelector(state => state.NewsReducers.articles.articles.find(articles => articles.url === articleUrl))
  
  
  const isFav = useSelector(state => state.NewsReducers.favorites.some(articles => articles.url === article.url))

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground source={{ uri: article.urlToImage}} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons 
                  name={isFav ? 'favorite' : "favorite-border"} 
                  color="orange" size={24} 
                  onPress={()=> {
                  dispatch(newsActions.toggleFavorites(article.url))
                }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
    </View>
  );
};

export default NewsDetailsScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  author: {
    fontSize: 20,
    color: "white",
  },
  description: {
    margin: 10
  },
  descriptionText: {
    fontSize: 15,
  }
});
