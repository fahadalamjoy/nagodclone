import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign,MaterialIcons  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Fontisto,MaterialCommunityIcons  } from '@expo/vector-icons';
import tw from 'twrnc';

export default function ScreenThree({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  const [gp, setIsClickedGP] = useState(false);

  const handleViewClick = () => {
    // Toggle the background color when clicked
    setIsClicked(!isClicked);
  };
  const handleViewClickGp = () => {
    // Toggle the background color when clicked
    setIsClickedGP(!isClicked);
  };
  const navigator = useNavigation();
  const handleBackNavigation = () => {
    navigation.goBack(); // Use the appropriate navigation function for your navigation stack
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: 'red', paddingVertical: 30, flexDirection: 'row', paddingLeft: 20, alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity onPress={handleBackNavigation}>
            <Ionicons style={{ color: 'white', marginTop: 10 }} name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Mobile Recharge</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,opacity:0.6,backgroundColor: 'white',marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
                <Fontisto style={{padding:10, backgroundColor: 'gray',borderRadius: 50}} name="female" size={24} color="black" />
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Nila</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10 }}>01845789468</Text>
            </View>
          </View>
          <View>
            <Image source={require('../../../assets/robi.png')} />
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 40,borderRadius:10, marginTop: 10,opacity:0.6,backgroundColor: 'white',marginHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'red',marginTop:5 }}>Amount</Text>
        <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'center' }}>
            <MaterialIcons style={{ color: 'red', marginTop: 10, marginRight: 10 }} name="money" size={24} color="black" />
            <View style={{ flexDirection: 'row', borderBottomColor: 'red', borderBottomWidth: 1 }}>
            <TextInput keyboardType="phone-pad" placeholder="Enter Mobile Number" style={{ paddingLeft: 20, paddingRight: 60,fontSize: 20 }} />
            {/* <TouchableOpacity onPress={() => navigator.navigate('ScreenTwo')}>
                <AntDesign style={{ color: 'white', padding: 2, marginBottom: 10, backgroundColor: 'red', borderRadius: 50 }} name="arrowright" size={20} color="black" />
            </TouchableOpacity> */}
            </View>
        </View>
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'center',gap:10 }}>
            <View style={{backgroundColor: 'red',paddingHorizontal:20,paddingVertical:2,borderRadius:10,alignContent:'center',justifyContent:'center'}}>
                <Text style={tw`text-white text-xl font-bold`}>50</Text>
            </View>
            <View style={{backgroundColor: 'red',paddingHorizontal:20,paddingVertical:2,borderRadius:10,alignContent:'center',justifyContent:'center'}}>
                <Text style={tw`text-white text-xl font-bold`}>100</Text>
            </View>
            <View style={{backgroundColor: 'red',paddingHorizontal:20,paddingVertical:2,borderRadius:10,alignContent:'center',justifyContent:'center'}}>
                <Text style={tw`text-white text-xl font-bold`}>200</Text>
            </View>
            <View style={{backgroundColor: 'red',paddingHorizontal:20,paddingVertical:2,borderRadius:10,alignContent:'center',justifyContent:'center'}}>
                <Text style={tw`text-white text-xl font-bold`}>500</Text>
            </View>
            
      </View>
        <Text style={tw`text-black text-base font-bold text-center`}>Available Balance: 1000.56 Tk.</Text>
        <TouchableOpacity onPress={() => navigator.navigate('ScreenFour')} style={{flexDirection: 'row', padding: 20,marginTop:10, justifyContent: 'center',backgroundColor: 'red',paddingHorizontal:20,paddingVertical:5,borderRadius:10,marginHorizontal:50}}>
          <Text style={tw`text-white text-2xl font-bold`}>NEXT</Text>
        </TouchableOpacity>
      </View>

      
     
      
      
    </View>
  );
}
