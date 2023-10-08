import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import tw from 'twrnc';
import { MaterialCommunityIcons,AntDesign,FontAwesome,MaterialIcons   } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function MyNagad() {
  return (
    <View >
      <View style={tw` bg-white shadow-md`}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <MaterialCommunityIcons name="face-man-profile" size={50} color="black" />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fahad Alam Joy</Text>
                    <Text>01679104689</Text>
                </View>
            </View>
            <View>
                    <AntDesign name="right" size={24} color="black" />
            </View>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'medium', marginLeft: 20, marginTop: 10 }}>General</Text>
      <ScrollView>
        <View style={{ padding: 1, marginTop: 5,borderBottomColor: 'gray', borderBottomWidth: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <FontAwesome style={{ marginLeft: 10,color: 'red' }} name="language" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'light' }}>Language</Text>
                    </View>
                </View>
                <View>
                        <Text style={{ fontSize: 14, fontWeight: 'medium', marginLeft: 20 }}>English</Text>
                </View>
            </View>
        </View>
        <View style={{ padding: 1, marginTop: 5,borderBottomColor: 'gray', borderBottomWidth: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <MaterialIcons style={{ marginLeft: 10,color: 'red' }} name="switch-account" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'light' }}>Account Type</Text>
                    </View>
                </View>
                <View>
                        <Text style={{ fontSize: 14, fontWeight: 'medium', marginLeft: 20 }}>Regular</Text>
                </View>
            </View>
        </View>
        <View style={{ padding: 1, marginTop: 5,borderBottomColor: 'gray', borderBottomWidth: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <MaterialIcons style={{ marginLeft: 10,color: 'red' }} name="credit-card" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'light' }}>Change PIN</Text>
                    </View>
                </View>
                <View>
                        <Text style={{ fontSize: 14, fontWeight: 'medium', marginLeft: 20 }}>No</Text>
                </View>
            </View>
        </View>
        <View style={{ padding: 1, marginTop: 5,borderBottomColor: 'gray', borderBottomWidth: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <MaterialIcons style={{ marginLeft: 10,color: 'red' }} name="help" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'light' }}>FAQ</Text>
                    </View>
                </View>
                <View>
                        <Text style={{ fontSize: 14, fontWeight: 'medium', marginLeft: 20 }}></Text>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}