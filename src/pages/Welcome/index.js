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

  return (
    <View style={styles.container}>
      <Image
        style={{ width:250, height:150 }}
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
