import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
export default function ScreenFour() {
    const navigator = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:'white'}}>
        <View style={{justifyContent:'center',alignItems:'center',bottomBorderWidth:1,borderBottomColor:'gray'}}>
            <Image source={require('../../../assets/checkout.png')} />
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,color:'red'}}>Mobile Recharge Success</Text>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:5,color:'gray'}}>01859-489562</Text>
        </View>
        <View style={{marginTop:20 ,borderWidth:1,borderColor:'#EDEDED',paddingVertical:20}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:20 }}>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Transaction ID</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'medium',color:'gray'}}>#sd5846847dsad</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:20 }}>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Amount</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'medium',color:'gray'}}>500.00 Tk.</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:20 }}>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Charge</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'medium',color:'gray'}}>0 Tk.</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:20 }}>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Total</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'medium',color:'gray'}}>500.00 Tk.</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginHorizontal:20 }}>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Timestamp</Text>
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'medium',color:'gray'}}>01/11/22, 10:45PM</Text>
                </View>
            </View>
        </View>

        <TouchableOpacity onPress={() => navigator.navigate('BottomTabs')} style={{flexDirection: 'row', padding: 10,marginTop:10, justifyContent: 'center',backgroundColor: 'red',paddingHorizontal:5,paddingVertical:10,borderRadius:20,marginHorizontal:70}}>
          <Text style={tw`text-white text-2xl font-bold`}>Back To Home</Text>
        </TouchableOpacity>
      
    </View>
  )
}