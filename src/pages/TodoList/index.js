import React, {useCallback} from "react";
import {StyleSheet, Text, View } from "react-native";
import colors from "../../components/Colors/Colors";
import { useNavigation } from "@react-navigation/native";
// import {styles} from  "./styles"

import Button from "../../components/Button";

export default function Todolist  () {
  
    const navigation = useNavigation();


    const navigateToWelcome = useCallback(() => navigation.navigate("Welcome"), [
      navigation,
    ]);
  
  
  


    return (
      <View style={ztyles.container}>
        <View style={ztyles.divider} />
          <Text style={ztyles.title}>
            Todo  <Text style={{fontWeight: "300", color: colors.blue}}> Lists </Text>
          </Text>
            <View style={ztyles.divider} />
              <Button
                text="Go back!"
                icon="arrow-left"
                style={ztyles.button}
                onPress={navigateToWelcome}
              />
      </View>
        )
    }





const ztyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#300001",
    alignItems: "center",
    justifyContent: "center"
  },

  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64
  },
})