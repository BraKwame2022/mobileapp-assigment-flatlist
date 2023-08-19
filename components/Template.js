import React from 'react'
import {Ionicons } from '@expo/vector-icons';
import { View, Text,Image, StyleSheet } from 'react-native'
import Dog1 from '../assets/Dog1.jpg'


export default function Template({image,name,type,age,location}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
      <Image source={image} style={styles.images}/>
      <View style={styles.container2} >
        <Text style={styles.FirstText}>{name}</Text>
        <Text>{type}</Text>
        <Text>{age}</Text>

        <View style={styles.Icon2}>
       <Ionicons name="location" size={18} color="black" />  
       <Text>{location}</Text>
       </View>
        </View>
      </View>

        



    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal: 25,
  },
  infoB:{
    marginHorizontal:10,
    borderRadius:5,
  },
  images:{
    width:150,
    height:170,
    borderRadius:20,
  },

  container1:{  
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
  
    
  },

  container2:{
    backgroundColor:"#C1CAD6",
    borderRadius:10,
    height:150,
    flex:2,
    paddingHorizontal:20,
    justifyContent:'center'
  },
   
  Icon2:{
    flexDirection:'row',
  },

  FirstText:{
    color:"#0b31db",
    fontWeight:'bold',
    fontSize:25
  }


})
