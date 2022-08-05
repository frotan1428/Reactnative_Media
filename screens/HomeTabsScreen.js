import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from './ProductsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import FaIcon from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {
  return (
    <Tab.Navigator initialRouteName="products" screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        headerShown: false,
    }}>
      <Tab.Screen name="products" component={ProductsScreen} options={{
        tabBarLabel:"Products",
        tabBarIcon: ()=> <FaIcon name="layer-group" size={20}/>
      }}/>
      <Tab.Screen name="shopping-cart" component={ShoppingCartScreen} options={{
        tabBarLabel:"Shopping Cart",
        tabBarIcon: ()=> <FaIcon name="shopping-cart" size={20}/>
      }}/>
    </Tab.Navigator>
  )
}

export default HomeTabsScreen

const styles = StyleSheet.create({
    tabBar:{
        height:70
    },
    label:{
        fontSize:15,
        marginBottom:5
    }
})