import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import { styles } from "./styles";

export default function Schedule() {
  const navigation = useNavigation();


  const navigateToWelcome = useCallback(() => navigation.navigate("Welcome"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      
      
      
      
      <Text style={styles.text}>Under development :)</Text>
      <Button
        text="Go back!"
        icon="arrow-left"
        style={styles.button}
        onPress={navigateToWelcome}
      />

    </View>
  );
}
