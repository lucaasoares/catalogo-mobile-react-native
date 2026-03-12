import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { api } from "../services/api";

export default function ProductListScreen({ category = "mens-shirts" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true); // ✅ importante ao trocar aba

      try {
        const response = await api.get(
          `/products/category/${category}`
        );

        setProducts(response.data?.products ?? []);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category]);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Carregando roupas...</Text>
      </View>
    );
  }

  /* ================= ITEM ================= */

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => router.push(`/product/${item.id}`)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <Text style={styles.category}>
  {item.category.startsWith("mens") ? "👕 Masculino" : "👗 Feminino"}
      </Text>

      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.price}>R$ {item.price}</Text>
    </TouchableOpacity>
  );

  /* ================= LISTA ================= */

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
      numColumns={2} // 🔥 estilo loja
      contentContainerStyle={styles.list}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
}

/* ================= ESTILOS ================= */

const styles = StyleSheet.create({
  list: {
    padding: 12,
    backgroundColor: "#f5f5f5",
  },

  card: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
  },

  category: {
    marginTop: 6,
    fontSize: 12,
    color: "#777",
    fontWeight: "600",
  },

  title: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 4,
    color: "#111",
  },

  price: {
    marginTop: 6,
    fontSize: 15,
    color: "#0a7",
    fontWeight: "bold",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});