import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from 'react-bootstrap/ProgressBar'


import Button from "../../components/Button";

import { styles } from "./styles";

export default function Progress() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  const navigateToHome = useCallback(() => navigation.navigate("Home"), [
    navigation,
  ]);

  const navigateToSchedule = useCallback(() => navigation.navigate("Schedule"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
            <Button
        text="Go to my Schedule"
        style={styles.button2}
        onPress={navigateToSchedule}
      />      
      
      
      
      <Text style={styles.title}>Here you have access to your progress and your done shit</Text>
      <Text style={styles.text1}>My progress:</Text>
      <ProgressBar animated now={45} />
  <Text style={styles.text2}>{todoList}</Text>
      <Text style={styles.text3}>Time I spended focusing</Text>
      
      <Text style={styles.text4}>Stability</Text>
      <Text style={styles.text5}>No se que mas tendra</Text>
      


      

      <Button
        text="Go home"
        style={styles.button}
        onPress={navigateToHome}
      />
    </View>
  );
}
