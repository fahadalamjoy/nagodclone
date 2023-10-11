import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { Fontisto,MaterialCommunityIcons  } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export default function ScreenTwo({ navigation }) {
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
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'center',marginTop:30 }}>
        <Image source={require('../../../assets/tower.png')} />
      </View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center', color: 'gray' }}>Mobile Operator</Text>
      <Text style={{ fontSize: 12, fontWeight: 'light', alignSelf: 'center', textAlign: 'center', color: 'gray' }}>Select recipient’s current mobile network operator</Text>
      <View>
        <TouchableOpacity onPress={handleViewClickGp}>
          <View
            style={{
              backgroundColor: gp ? 'red' : 'white',
              paddingVertical: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 80,
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Image source={require('../../../assets/gp.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleViewClick}>
          <View
            style={{
              backgroundColor: isClicked ? 'red' : 'white',
              paddingVertical: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 80,
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Image source={require('../../../assets/bl.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleViewClick}>
          <View
            style={{
              backgroundColor: isClicked ? 'red' : 'white',
              paddingVertical: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 80,
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Image source={require('../../../assets/tele.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleViewClick}>
          <View
            style={{
              backgroundColor: isClicked ? 'red' : 'white',
              paddingVertical: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              paddingHorizontal: 80,
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Image source={require('../../../assets/gp.png')} />
          </View>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
}
