import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import SearchProducts from './SearchProducts';
import ProductDetail from './ProductDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="SearchProducts" component={SearchProducts} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
