import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


import Button from "../../components/Button";

import { styles } from "./styles";

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  const navigateToSchedule = useCallback(() => navigation.navigate("Schedule"), [
    navigation,
  ]);
  const navigateToTodolist = useCallback(() => navigation.navigate("Todolist"), [
    navigation,
  ]);



  //in the following logo image I will be implementing a "Bodymovin" effect, that uses a json exported file of a  After Effects file. 


  return (
    <View style={styles.container}>
            

      <Image
        style={{ width:450, height:350 }}
        source={require("../../../assets/splash.png")}
      />
      <Text style={styles.text}>Stay focused for some time!</Text>
      <Button
        text="Go to My Schedule"
        icon="arrow-left"
        style={styles.buttonschedule}
        onPress={navigateToSchedule}
      />
      <Button
        text="I'm ready to focus!"
        icon="arrow-right"
        style={styles.buttonGo}
        onPress={navigateToTimer}
      />
    
            <Button
        text="My Todo List!"
        icon="arrow-left"
        style={styles.buttontodolist}
        onPress={navigateToTodolist}
      />



    </View>
  );
}
