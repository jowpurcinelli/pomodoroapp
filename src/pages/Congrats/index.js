import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


import Button from "../../components/Button";

import { styles } from "./styles";

export default function Congrats() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Great work!</Text>
      <Text style={styles.text}>It’s time for some coffe now!</Text>
      <Image
         style={{  width:100, height:100 }}
         source={require("../../../assets/coffe.jpg")}
         />


      
<Button
        text=""
        style={styles.button}
        onPress={navigateToTimer}
      />      
      <Button
        text="I'm ready to focus again"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
