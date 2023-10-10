import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'

export default function Login() {
  return (
    <View style={{ flex: 1,marginTop: 50  }}>
        <StatusBar style="hidden" />
      <View style={{ flexDirection: 'row',justifyContent:'flex-end', marginRight: 20 }}>
        <View style={{ flexDirection: 'row',borderColor: 'red',borderWidth: 1,justifyContent: 'space-between',borderRadius: 10 }}>
            <View style={{backgroundColor: 'white',padding: 10,borderRadius: 10}}><Text>বাং</Text></View>
            <View style={{backgroundColor: 'red',padding: 10, borderTopRightRadius: 9,borderBottomRightRadius: 9}}><Text style={{color: 'white'}}>ENG</Text></View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/loginLogo.png')} />
        <Text style={{ fontSize: 14, fontWeight: 'light', marginTop: 20, color: 'gray' }}>Mobile Number</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5, color: 'black' }}>01679104689</Text>
      </View>
    </View>
  )
}