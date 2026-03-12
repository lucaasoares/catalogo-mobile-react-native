import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { clearCart } from "../../src/store/cartSlice";

export default function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogout() {
    await AsyncStorage.clear();
    dispatch(clearCart());
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Button title="Sair da conta" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },
});