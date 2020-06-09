import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const navigateToTodoList = useCallback(() => navigation.navigate("TodoList"), [
    navigation,
  ]);

  //in the following logo image I will be implementing a Bodymovin effect, that uses a json exported file of a  After Effects file. 


  return (
    <View style={styles.container}>
      

      <Image
        style={{ width:450, height:350 }}
        source={require("../../../assets/splash.png")}
      />
      <Text style={styles.text}>Stay focused for some time!</Text>
      <Button
        text="Let's go for it!"
        icon="arrow-right"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
