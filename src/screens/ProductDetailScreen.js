import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import { addToCart } from "../store/cartSlice";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log("Erro ao buscar produto", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  function handleAddToCart() {
    dispatch(addToCart(product));
    console.log("Produto adicionado:", product);

    Alert.alert(
      "Produto adicionado",
      "O item foi adicionado ao carrinho.",
      [
        {
          text: "Continuar comprando",
          onPress: () => router.back()
        },
        {
          text: "Ir para carrinho",
          onPress: () => router.push("/cart")
        }
      ]
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>R$ {product.price}</Text>

      <Text style={styles.discount}>
        Desconto: {product.discountPercentage}%
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddToCart}
      >
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  back: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },
  price: {
    fontSize: 20,
    color: "#007AFF",
    marginTop: 8
  },
  discount: {
    marginTop: 4,
    fontWeight: "600"
  },
  description: {
    marginTop: 10,
    color: "#555"
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});