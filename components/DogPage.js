import React from 'react'
import {FlatList, View, StyleSheet, TextInput} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';
import Template from './Template'

export default function DogPage() {
    const animals = [
        {Image:require("../assets/cat1.jpg"), name:"Let them say", type:"Cat", age:'4', location:"mallam junction",id:1 },
        {Image:require("../assets/Dog1.jpg"), name:"Mexico", type:"Dog", age:"1 years old", location:"Apenkwa", id:2},
        {Image:require("../assets/Dog2.jpg"), name:"Chickson", type:"Dog", age:"6 months", location:"Kasoa", id:3},
        {Image:require("../assets/bulldog.jpg"), name:"Killer", type:"Dog", age:"10 years", location:"East Legon", id:4},
    ]
  return (
        <View>
        <View style={styles.infoA}>
      <FontAwesome name="search" style={styles.Icon} />
      <TextInput   
          style={styles.infoB}  
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Search here'
          placeholderTextColor='#FFFFFF'
      />
      </View>
        <FlatList 
        data={animals}
        renderItem={({item})=>{
            return <Template image={item.Image} name={item.name} type={item.type} age={item.age} location={item.location}/>

        }}
            keyExtractor={(item)=>item.id}
        />
        </View>
  )
}


const styles = StyleSheet.create({
    infoA:{
        flexDirection:'row',
        marginTop:30,
        backgroundColor:'#66c7f4',
        height:30,
        borderRadius:7,
        marginHorizontal:25
      },
      

      Icon:{
        color:'#FFFFFF',
        fontSize:24,
        alignSelf:'center'
      },

})