import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleProductDetail(item)}>
          <Card>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <Text>Price: ${item.price}</Text>
              <Text>Discount: {item.discountPercentage}%</Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Stock: {item.stock}</Text>
              <Text>Brand: {item.brand}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Images:</Text>
              {item.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={{ width: 100, height: 100, margin: 5 }}
                />
              ))}
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

export default ProductList;
