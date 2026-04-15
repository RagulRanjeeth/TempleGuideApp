import Temples from "@/TempleExerciseComponents/Temples";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  const templeChidambaram={
    name : "Thillai Chidambaram",
    image : require("../../assets/images/NewNewThillai.jpg"),
    type: "Space",
    location : ["Cuddalore","TamilNadu","India"]
  } 

   const templeEkambanathar={
    name : " Ekambareswarar",
    image : require("../../assets/images/Ekambareshwarar.jpg"),
    type: "Land",
    location : ["Kanchipuram","TamilNadu","India"]
  }

  const templeThiruAnaika ={
     name : " Jambukeswarar",
    image : require("../../assets/images/JambukeshwararNew.jpg"),
    type: "Water",
    location : ["Tiruchirappalli","TamilNadu","India"]
  }

  const templeArunachaleshwarar ={
     name : "Arunachaleswarar",
    image : require("../../assets/images/Arunachaleshwarsar.jpg"),
    type: "Fire",
    location : [" Tiruvannamalai","TamilNadu","India"]
  }

  const templeKalahastheeshwarar = {
    name : "Srikalahasteeswarar",
    image : require("../../assets/images/SreeKalahasthi.jpg"),
    type: "Air",
    location : ["Srikalahasti Tirupati", "Andhra Pradesh", "India"]

  }
  

 return(
  <ScrollView>
  <SafeAreaView style={styles.container}>
    {/* <Text style={styles.firstText}>Temple Guide</Text> */}
    <Temples {...templeChidambaram}/>
    <Temples {...templeEkambanathar}/>
    <Temples {...templeThiruAnaika}/>
    <Temples {...templeArunachaleshwarar}/>
    <Temples {...templeKalahastheeshwarar}/>
  </SafeAreaView>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: "#f5f5f5",
  textAlign:"center"
},

firstText:{
  flex:1,
  flexDirection: "row",
  justifyContent:"center",
}
});
