import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={tw`  mt-10`}>
        <StatusBar
        barStyle="dark-content"/>
      <View>
        <ImageBackground
          source={require('../../assets/backimage.png')}
          style={tw`w-full h-full items-center justify-center h-52`}>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-5xl font-bold text-white`}>নগদ </Text>
            <Text style={tw`text-md text-white`}>ডাক বিভাগের ডিজিটাল লেনদেন </Text>
            <Text style={tw`text-base text-white py-2`}>Fahad Alam Joy </Text>
            <View style={tw`bg-white py-2 items-center justify-center`}>
                <View style={tw`flex-row items-center justify-center`}>
                    <Image source={require('../../assets/home.png')}/>
                    <Text>Home</Text>
                </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}
