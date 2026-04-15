import { View, Text, Platform, StyleSheet, Image } from 'react-native'
import React from 'react'


type templeprops = {
  name: string;
  image: any;
  type: string;
  location: string[];
};

const getTypeDetails = (type:string)=>{
    switch(type.toLowerCase()){
        case "space":
            return { borderColor: "#0b1a3a", emoji:"🌌"}

        case "fire":
            return {borderColor:"#ff2e00", emoji:"🔥"} 
            
        case "water":
            return {borderColor:"#1ca3ec",  emoji:"💧"}  
            
        case "air":
            return {borderColor: "#939697", emoji:"💨"}  
            
        case "land":
            return {borderColor:"#063f04", emoji:"🌱"}
            
         default:
            return { borderColor: "#fff", emoji: "❓" };    
    }
}


const Temples: React.FC<templeprops> = ({
    name,
    image,
    type,
    location
}) => 
    {
    
    const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View style={styles.card}>

        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
        </View>

        <Image source={image} accessibilityLabel={name} style={styles.image} resizeMode="contain"/>

        <View style={styles.typeContainer}>
            <View style={[styles.badge, {borderColor}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>{type}</Text>
            </View>
        </View>

        <View style={styles.locationContainer}>
            <Text style={styles.location}>Location : {location.join(", ")}</Text>
        </View>
    </View>
  )
}

export default Temples

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#ffff",
        borderRadius:16,
        borderWidth: 2,
        padding: 16,
        margin: 16,

        ...Platform.select({
            ios:{
                shadowOffset: {width: 2, height:2},
                shadowColor:"#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android:{
                elevation: 5,
            }
        }),
    },

     nameContainer:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        textAlign: "center"

        },

        name:{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center"
        },

        image:{
            width: "100%",
            height: 200,
            marginBottom: 20
        },

        typeContainer:{
            alignItems:"center",
            marginBottom: 30
        },

        badge:{
            flexDirection: "row",
            alignItems:"center",
            paddingVertical:6,
            paddingHorizontal:14,
            borderRadius:26,
            borderWidth: 4
        },

        typeEmoji:{
            fontSize: 30,
            marginRight: 12
        },

        typeText:{
            fontSize: 20,
            fontWeight: "bold"
        },

        locationContainer:{
            marginBottom: 16
        },

        location:{
            fontSize: 18,
            fontWeight: "bold"
        }

   
})