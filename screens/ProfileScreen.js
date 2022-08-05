import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from "@react-navigation/native";
const ProfileScreen = () => {
  const sheetRef = React.useRef(null);
  const [profileImage, setprofileImage] = useState("https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")

    const getPhotoFromCamera = async () =>{
      const result=  await ImagePicker.launchCameraAsync();
      if(!result.cancelled){
        setprofileImage(result.uri);
      }
    }

    const getPhotFromLibrary = async () =>{
      const result=  await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled){
        setprofileImage(result.uri);
      }
    }
    const getPermissions = async () => {
      //Mevcut izinleri kontrol ediyoruz
  
      // Kamera için izin kontrolü
      const respCamera = await ImagePicker.getCameraPermissionsAsync();
      if (!respCamera.granted) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        console.log(status);
        if (status !== "granted") {
          Alert.alert("The camera permission is required");
        }
      }
  
      // Library için izin kontrolü
      const respLib = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (!respLib.granted) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("The library permission is required");
        }
      }
    };
  

   


   // navigation yapilarinda useeffect in load yontemi
   // 
   useFocusEffect(
    useCallback(
      () => {
        getPermissions();
      },
      [],
    )
  )

//
  // useEffect(() => {
  //     getPermission();
  // }, []);
  
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerButton}></View>
    </View>
  );

  const renderContent = () => (

    <View style={styles.content}>

      <View style={styles.title}>
        <Text style={styles.maintitle}>Upload Photo</Text>
        <Text style={styles.subTitle}>Chose your profile picture</Text>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={getPhotoFromCamera}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={getPhotFromLibrary}>Chose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}  onPress={()=> sheetRef.current.snapTo(1)}>Cancel</Text>
      </TouchableOpacity>
    
  </View>
  );

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button title="Open"  onPress={()=> sheetRef.current.snapTo(0) } />
        <Button title="Close"  onPress={()=> sheetRef.current.snapTo(1)} />
      </View>
      <Image source={{uri: profileImage}} style={styles.profileImage}/>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 50, 40]}
        initialSnap={1}
        renderContent={renderContent}
        renderHeader={renderHeader}

      />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#efefef",
  },
  headerContainer:{
    backgroundColor:"white",
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    alignItems:"center",
    paddingTop:10

  },
  headerButton:{
    width:100,
    height:10,
    backgroundColor:"gray",
    borderRadius:5
  },
  content:{
    padding:20,
    backgroundColor:"white",
    height:"100%"
  },
  title:{
    alignItems:"center",
    marginBottom:20
  },
  maintitle:{
      fontSize:25,
      color:"#FF8E00"
  },
  subTitle:{
      fontSize:15,
      color:"gray"
  },
  button:{
      backgroundColor:"#FF8E00",
      padding:10,
      borderRadius:10,
      marginVertical:5,
      alignItems:"center"
  },
  buttonText:{
    color:"white",
    fontSize:15,
    fontWeight:"bold"

  },
  profileImage:{
      width:"100%",
      height:"80%"
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    paddingVertical:20

  }
});
