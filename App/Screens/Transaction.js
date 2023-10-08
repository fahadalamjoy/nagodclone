import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';
import tw from 'twrnc';
import TabOne from '../components/TabOne';
import TabTwo from '../components/TabTwo';
import TabThree from '../components/TabThree';

export default function Transaction() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: 'All' },
    { key: 'tab2', title: 'In' },
    { key: 'tab3', title: 'Out' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <TabOne />
        );
      case 'tab2':
        return (
          <TabTwo />
        );
      case 'tab3':
        return (
          <TabThree />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={tw`bg-red-500 `}
      style={tw`bg-white mt-2`}
      labelStyle={tw`text-gray-600`}
    />
  );

  return (
    <View style={tw`mt-10 flex-1`}>
      <ImageBackground style={tw`w-full h-22 items-center justify-center bg-red-500`}>
        <Text style={tw`text-base font-bold text-white`}>Transaction</Text>
      </ImageBackground>
      <View style={tw`flex-row justify-between items-center px-5 py-4 bg-white shadow-md`}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={tw`text-base font-bold text-gray-600 py-2 text-center`}>November 2022</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}
