import React from "react";
import { USER_LIST } from "../constants/constants";

function* userList() {
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-04-25&sortBy=publishedAt&apiKey=61c44ecf345d45a8bf3fcc6e9d440cb9";
  let data = yield fetch(url);
  data = yield data.json();
  console.warn("data in saga", data);
}

function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}
export default SagaData;
