import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductListScreen from "../../src/screens/ProductListScreen";

const Tab = createMaterialTopTabNavigator();

function Shirts() {
  return <ProductListScreen category="mens-shirts" />;
}

function Shoes() {
  return <ProductListScreen category="mens-shoes" />;
}

function Watches() {
  return <ProductListScreen category="mens-watches" />;
}

export default function Men() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Camisas" component={Shirts} />
      <Tab.Screen name="Sapatos" component={Shoes} />
      <Tab.Screen name="Relógios" component={Watches} />
    </Tab.Navigator>
  );
}