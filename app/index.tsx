import PostItImage from "@/assets/images/post-it.png";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Homescreen = () => {
  const router = useRouter();
  return (
    <View style={style.container}>
      <Image source={PostItImage} style={style.image} />
      <Text style={style.title}>Welcome to the Notes App</Text>
      <Text style={style.subtitle}>
        Capture your thought Any time , any where{" "}
      </Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => router.push("/Notes")}
      >
        <Text style={style.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Homescreen;
