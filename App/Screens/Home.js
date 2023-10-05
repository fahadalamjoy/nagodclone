import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ServiceData from '../data/Data';
import PaymentData from '../data/PaymentsData';

export default function Home() {
  const [CerviceData, setServiceData] = React.useState([]);
  const [PaymentsData, setPaymentsData] = React.useState([]);
  useEffect(() => {
    setServiceData(ServiceData);
    setPaymentsData(PaymentData);
  })
  return (
    <ScrollView>
    <SafeAreaView style={tw``}>
        <StatusBar
        barStyle="auto"/>
      <View >
        <ImageBackground
          source={require('../../assets/backimage.png')}
          style={tw`w-full h-full items-center justify-center h-62`}>
          <View style={tw`items-center justify-center mt-10`}>
            <Text style={tw`text-5xl font-bold text-white`}>নগদ </Text>
            <Text style={tw`text-xs text-white`}>ডাক বিভাগের ডিজিটাল লেনদেন </Text>
            <Text style={tw`text-base text-white py-2`}>Fahad Alam Joy </Text>
            <View style={tw`bg-white py-2 items-center  justify-between rounded-full px-3`}>
                <View style={tw`flex-row items-center justify-center `}>
                    <Image source={require('../../assets/home.png')}/>
                    <Text style={tw`pl-2 text-sm text-red-500 font-bold`}>Tab for Balance</Text>
                </View>
            </View>
          </View>
        </ImageBackground>
      </View >
      
      <View style={tw`pl-6 py-4`}>
        <Text style={tw`text-base font-bold text-gray-600`}>Services</Text>

      </View>
      <View style={tw`flex-row pl-5 flex-wrap gap-2 items-center justify-start `}>
      {
        CerviceData.map((item) => {
          return (
            <View style={tw` m-0 `}>
            <View key={item.id} style={tw`items-center justify-center`}>
              <Image source={item.img}  />
              <Text style={tw`text-xs font-light text-gray-500 py-1`}>{item.title}</Text>
            </View>
            </View>
          )
        })
      }
      </View>
      <View style={tw`pl-6 py-4`}>
        <Text style={tw`text-base font-bold text-gray-600`}>Payments</Text>

      </View>
      <View style={tw`flex-row flex-wrap gap-2 items-center justify-center `}>
      {
        PaymentsData.map((item) => {
          return (
            <View style={tw` m-0 `}>
            <View key={item.id} style={tw`items-center justify-center`}>
              <Image source={item.img}  />
              <Text style={tw`text-xs font-light text-gray-500 py-1`}>{item.title}</Text>
            </View>
            </View>
          )
        })
      }
      </View>
      <View style={tw`mx-auto py-4`}>
        <Image source={require('../../assets/tamim.png')}/>
      </View>
      <View style={tw`pl-6 py-4`}>
        <Text style={tw`text-base font-bold text-gray-600`}>Others</Text>

      </View>
      <View style={tw`flex-row pl-5 flex-wrap gap-2 items-center justify-start `}>
      {
        CerviceData.map((item) => {
          return (
            <View style={tw` m-0 `}>
            <View key={item.id} style={tw`items-center justify-center`}>
              <Image source={item.img}  />
              <Text style={tw`text-xs font-light text-gray-500 py-1`}>{item.title}</Text>
            </View>
            </View>
          )
        })
      }
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}
