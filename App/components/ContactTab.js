import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Fontisto,MaterialCommunityIcons  } from '@expo/vector-icons';

export default function ContactTab() {
  return (
    <ScrollView>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Fahad Alam</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Nila</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="male" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Abbu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ padding: 1, marginTop: 10,borderBottomColor: 'gray', borderBottomWidth: 1}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="female" size={24} color="black" />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Ammu</Text>
          </View>
          <View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
