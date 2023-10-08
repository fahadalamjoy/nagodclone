import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import tw from 'twrnc';
import ContactTab from '../components/ContactTab';

const initialLayout = { width: Dimensions.get('window').width };

export default function People() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: 'Contacts' },
    { key: 'tab2', title: 'Saved Contacts' },
    { key: 'tab3', title: 'Save Merchants' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <ContactTab />
        );
      case 'tab2':
        return (
          <ContactTab />
        );
      case 'tab3':
        return (
          <ContactTab />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={tw`bg-red-500`}
      style={tw`bg-white text-sm`}
      labelStyle={tw`text-gray-600 font-medium`}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground style={tw`w-full h-22 mt-10 items-center justify-center bg-red-500`}>
        <Text style={tw`text-base font-bold text-white`}>People</Text>
      </ImageBackground>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
      />
    </View>
  );
}
