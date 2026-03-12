import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>Carrinho vazio</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>
            Total: R$ {total.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  card: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10
  },
  info: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontWeight: "600"
  },
  price: {
    marginTop: 4,
    color: "#007AFF",
    fontWeight: "bold"
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee"
  },
  total: {
    fontSize: 18,
    fontWeight: "bold"
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18
  }
});