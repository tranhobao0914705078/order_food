import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://theplanetd.com/images/Best-Traditional-Thai-Food.jpg',
    price: '$$',
    review_count: '1500',
    rating: 4.5,
    categories: [
        {
            title: 'Thai'
        },
        {
            title: 'Comfort Food'
        }
    ]
}


export default function About(props) {
    const { name, image, price, review_count, rating, categories } = props.route.params;
    const formatCategories = categories.map((cat) => cat.title).join(' • ');
    const description = `${formatCategories} ${price ? ' • ' + price : ''} • 🎫 • ${rating} ⭐ (${review_count}+)`;
    
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }}/>
)

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: "400",
            fontSize: 15.5
        }}
    >
        {props.description}
    </Text>
)