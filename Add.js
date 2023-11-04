const [title,setTitle]=useState('');
const [description,setDescription]=useState('');
const [price,setPrice]=useState('');
const [discountPercentage,setDiscountPercentage]=useState('');
const [rating,setRating]=useState('');
const [stock,setStock]=useState('');
const [brand,setbrand]=useState('');
const [category,setcategory]=useState('');
const [image,setImage]=useState('');

handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
            discountPercentage: discountPercentage,
            rating: rating,
            stock: stock,
            brand: brand,
            category: category,
            image: image,
        }),
    })
        .then((res) => res.json())
        .then(console.log);
    Alert.alert("Add sucessfull")
};
