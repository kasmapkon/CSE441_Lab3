import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text>{item.title}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Discount: {item.discountPercentage}%</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Stock: {item.stock} units</Text>
      <Text>Brand: {item.brand}</Text>
      <Text>Category: {item.category}</Text>
      {item.images.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.productImage} />
      ))}
    </View>
  )}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default ProductList;
