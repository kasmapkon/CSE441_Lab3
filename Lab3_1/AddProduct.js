import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
function AddProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    const handleSubmit = () => {
      // Gửi dữ liệu sản phẩm lên API hoặc xử lý theo cách bạn muốn
    };
  
    return (
      <View>
        <Text>Add a Product</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  }
  
  export default AddProduct;
  