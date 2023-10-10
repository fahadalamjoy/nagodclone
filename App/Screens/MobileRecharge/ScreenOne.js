import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ScreenOne() {
  return (
    <View>
      <View>
        <View style={{ backgroundColor: 'red',paddingVertical: 30,flexDirection: 'row',paddingLeft: 20, alignContent: 'center',alignItems: 'center',marginTop: 20 }}>
          <Ionicons style={{ color: 'white' }} name="arrow-back" size={24} color="black" />
          <Text style={{ color: 'white', textAlign: 'center',fontSize: 20,fontWeight: 'bold', paddingLeft: 100 }}>Mobile Recharge</Text>
        </View>
      </View>
    </View>
  )
}