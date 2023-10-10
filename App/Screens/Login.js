import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function Login() {
  const navigator = useNavigation();
  const [password, setPassword] = useState(''); 
  
    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false); 
  
    // Function to toggle the password visibility state 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <StatusBar style="hidden" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderColor: "red",
            borderWidth: 1,
            justifyContent: "space-between",
            borderRadius: 10,
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}
          >
            <Text>বাং</Text>
          </View>
          <View
            style={{
              backgroundColor: "red",
              padding: 10,
              borderTopRightRadius: 9,
              borderBottomRightRadius: 9,
            }}
          >
            <Text style={{ color: "white" }}>ENG</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require("../../assets/loginLogo.png")} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "light",
            marginTop: 20,
            color: "gray",
          }}
        >
          Mobile Number
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 5,
            color: "black",
            opacity: 0.8,
            
          }}
        >
          01679104689
        </Text>
        <View style={{ flexDirection: "row" , marginRight: 20, marginLeft: 20,borderBottomColor: 'red', borderBottomWidth: 1 }}>
          <TextInput
            // Set secureTextEntry prop to hide
            //password when showPassword is false
            keyboardType="phone-pad"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={{
              flex: 1,
              padding: 10,
            }}
            placeholder="PIN"
            placeholderTextColor="#aaa"
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={{ padding: 10 }}
            onPress={toggleShowPassword}
          />
        </View>
        <TouchableOpacity style={{ marginTop: 20, borderRadius: 60, alignItems: "center", backgroundColor: "tomato", padding: 10,paddingLeft: 90,paddingRight: 90 }} 
          onPress={() => navigator.navigate("BottomTabs")}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            Login
          </Text>
          
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 20 ,marginBottom: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/locator.png")} />
          <Text style={{ marginTop: 10,color: 'gray',fontSize: 12 }}> Store Locator</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/discoun.png")} />
          <Text style={{ marginTop: 10,color: 'gray',fontSize: 12 }}> Store Locator</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/help.png")} />
          <Text style={{ marginTop: 10,color: 'gray',fontSize: 12 }}> Store Locator</Text>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({ 
//   mainContainer: { 
//       marginTop: 70, 
//       margin: 40, 
//   }, 
//   container: { 
//       flex: 1,
//       flexDirection: 'row', 
//       alignItems: 'center', 
//       justifyContent: 'center', 
//       backgroundColor: '#f3f3f3', 
//       borderRadius: 8, 
//       paddingHorizontal: 14, 
//       marginHorizontal: 20,
//   }, 
//   input: { 
//       flex: 1, 
//       color: '#333', 
//       paddingVertical: 10, 
//       paddingRight: 10, 
//       fontSize: 16, 
//   }, 
//   icon: { 
//       marginLeft: 10, 
//   }, 
//   heading: { 
//       alignItems: 'center', 
//       fontSize: 20, 
//       color: 'green', 
//       marginBottom: 20, 
//   }, 
// }); 