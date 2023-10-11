import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-gesture-handler';
import { Fontisto,MaterialCommunityIcons  } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScreenOne({ navigation }) {
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
      <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'center' }}>
        <Ionicons style={{ color: 'red', marginTop: 10, marginRight: 10 }} name="call-outline" size={24} color="black" />
        <View style={{ flexDirection: 'row', borderBottomColor: 'red', borderBottomWidth: 1 }}>
          <TextInput keyboardType="phone-pad" placeholder="Enter Mobile Number" style={{ paddingLeft: 60, paddingRight: 60 }} />
          <TouchableOpacity onPress={() => navigator.navigate('ScreenTwo')}>
            <AntDesign style={{ color: 'white', padding: 2, marginBottom: 10, backgroundColor: 'red', borderRadius: 50 }} name="arrowright" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ fontSize: 14, fontWeight: 'light', alignSelf: 'center', textAlign: 'center', color: 'gray' }}>Enter 11-digit Mobile Number</Text>
      <ScrollView>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5, backgroundColor: 'gray',borderRadius: 50}} name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Fahad Alam</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Nila</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Abbu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Ammu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5, backgroundColor: 'gray',borderRadius: 50}} name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Fahad Alam</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Nila</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Abbu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1,opacity:0.6}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto style={{padding:5,backgroundColor: 'gray',borderRadius: 50}} name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Ammu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
