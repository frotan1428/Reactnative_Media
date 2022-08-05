import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./screens/ProfileScreen";
import FollowersScreen from "./screens/FollowersScreen";
import SettingsScreen from "./screens/SettingsScreen";
import FaIcon from "@expo/vector-icons/FontAwesome5";
import DrawerContent from "./components/drawer-content";
import HomeTabsScreen from "./screens/HomeTabsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="followers" screenOptions={{
        drawerType:"back",   //front, back, slide, permanent
        drawerPosition:"left",
        drawerActiveTintColor:"#ef00ec",
        drawerStyle: styles.drawer,
        drawerLabelStyle: styles.label,
      }}
      drawerContent={ (props)=> <DrawerContent {...props}/>}
      >
        <Drawer.Screen name="home" component={HomeTabsScreen} options={{
          title:"Products",
          drawerIcon: ()=> <FaIcon name="home"/>
        }} />
        <Drawer.Screen name="profile" component={ProfileScreen} options={{
          title:"Profile",
          drawerIcon: ()=> <FaIcon name="user"/>
        }} />
        <Drawer.Screen name="followers" component={FollowersScreen} options={{
          title:"Followers",
          drawerIcon: ()=> <FaIcon name="users"/>
        }}/>
        <Drawer.Screen name="settings" component={SettingsScreen} options={{
          title:"Settings",
          drawerIcon: ()=> <FaIcon name="cog"/>
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#addbf6",
  },
  label:{
    marginLeft:-20
  }

});
