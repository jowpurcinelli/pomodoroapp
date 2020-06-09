import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 17,
    textAlign: "center",
    color: "#41414B",
    marginTop: 1,
    marginBottom: 155,
  },
  buttonGo: {
    backgroundColor: "#800000",
    paddingHorizontal: 25,
    paddingVertical: 15,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  buttonschedule: {
    backgroundColor: "#100000",
    paddingHorizontal: 25,
    textAlign: "center",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 90,
    
    bottom: 75,
    right: 25,
  },
});
