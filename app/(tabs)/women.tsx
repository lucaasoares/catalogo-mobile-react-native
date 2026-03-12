import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductListScreen from "../../src/screens/ProductListScreen";

const Tab = createMaterialTopTabNavigator();

function Bags() {
  return <ProductListScreen category="womens-bags" />;
}

function Dresses() {
  return <ProductListScreen category="womens-dresses" />;
}

function Jewellery() {
  return <ProductListScreen category="womens-jewellery" />;
}

function Shoes() {
  return <ProductListScreen category="womens-shoes" />;
}

function Watches() {
  return <ProductListScreen category="womens-watches" />;
}

export default function Women() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bolsas" component={Bags} />
      <Tab.Screen name="Vestidos" component={Dresses} />
      <Tab.Screen name="Joias" component={Jewellery} />
      <Tab.Screen name="Sapatos" component={Shoes} />
      <Tab.Screen name="Relógios" component={Watches} />
    </Tab.Navigator>
  );
}