import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{ uri: product.thumbnail }} />
        <Card.Content>
          <Title>{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Text>Price: ${product.price}</Text>
          <Text>Brand: {product.brand}</Text>
          <Text>Category: {product.category}</Text>
          <Text>Rating: {product.rating}</Text>
          <Text>Stock: {product.stock}</Text>
        </Card.Content>
      </Card>
      <View style={{ margin: 20 }}>
        <Text>Images:</Text>
        {product.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
