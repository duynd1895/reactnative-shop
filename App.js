import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { View, Text } from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
// import {SafeAreaView} from "react-native";
// import ProductsOverviewScreen from "./screens/shop/ProductsOverviewScreen";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
  );
}

