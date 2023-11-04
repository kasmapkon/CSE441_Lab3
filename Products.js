import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Products = () => {
  const [productData, setProductData] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchProductData().then((data) => setProductData(data.products));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <FlatList
          data={productData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnailImage} />
          )}
        />
      </View>
      <View style={styles.productInfo}>
        <Text>Product List</Text>
        <FlatList
          data={productData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
                <Image source={{URL:item.thumbnail}}/>
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Discount Percentage: {item.discountPercentage}</Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>Brand: {item.brand}</Text>
              <Text>Category: {item.category}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    flex: 2,
    padding: 10,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
  },
});

export default Products;