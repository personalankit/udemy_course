import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import * as newsAction from "../Redux/actions/NewsAction";

const NewsListScreens = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  const { articles } = useSelector((state) => state.NewsReducers.articles);

  return (
    <FlatList
      data={articles}
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

export default NewsListScreens;

const styles = StyleSheet.create({});
