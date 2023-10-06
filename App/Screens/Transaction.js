import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import React from 'react'
import tw from 'twrnc';
// import MaterialTopTab from '../Navigation/MaterialTopTab';

export default function Transaction() {
  return (
    <SafeAreaView>
      <View>
        <View style={tw`pt-4`}>
          <ImageBackground  style={tw`w-full py-6 items-center justify-center bg-red-500`}>
            <Text style={tw`text-base font-bold text-white`}>Transaction</Text>
          </ImageBackground>
          <View style={tw`flex-row justify-between items-center px-5 py-4 bg-white shadow-md`}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text style={tw`text-base font-bold text-gray-600 py-2 text-center`}>Novenber 2022</Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
          {/* <MaterialTopTab /> */}
        </View>
      </View>  

    </SafeAreaView>
  )
}