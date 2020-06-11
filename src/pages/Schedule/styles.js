import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#022000",
    paddingHorizontal: 25,
    paddingVertical: 25,
    },
    
    //change later the name to be equal as the index
    button2: {
        backgroundColor: "#100000",
        paddingHorizontal: 15,
        textAlign: "center",
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 90,
        
        bottom: 25,
        left: 55,
    },
    
    
    button: {
        backgroundColor: "#100000",
        paddingHorizontal: 25,
        textAlign: "center",
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 90,
        
        bottom: 225,
        right: 95,
    },
    text:{
        color: "#900010",
        position:"relative",
        backgroundColor: "#004932"
    }
});