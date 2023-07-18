import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'


const foods = [
    {
        title: "Spicy shrimp soup",
        description: "om yum goong is a bold, refreshing blend of fragrant lemongrass, chilli, galangal, kaffir lime leaves, shallots, lime juice, and fish sauce. Containing succulent river shrimps and straw mushrooms, this spicy and sour soup is best paired with steamed white rice.",
        price: "$13.50",
        image: "https://a.cdn-hotels.com/gdcs/production28/d353/1a4556f8-80ec-4c9d-b5fe-a067f8205db8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Spicy green papaya salad",
        description: "Som tum, or spicy green papaya salad, comes from Thailand’s north-eastern state of Isaan. Garlic, chillies, green beans, cherry tomatoes, and shredded raw papaya are pounded using a pestle and mortar, which release a sweet-sour-spicy flavour that's quite distinctive.",
        price: "$14.50",
        image: "https://a.cdn-hotels.com/gdcs/production73/d1742/496b95ba-5a96-4728-84c5-f5abf8ce763d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Chicken in coconut soup",
        description: "A mild, tamer twist on tom yum, tom kha kai infuses fiery chillies, thinly sliced young galangal, crushed shallots, stalks of lemongrass, and tender strips of chicken.",
        price: "$19.50",
        image: "https://a.cdn-hotels.com/gdcs/production98/d1396/e474641d-317d-4c62-933c-934b8b2eb63e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Chicken in coconut soup",
        description: "A mild, tamer twist on tom yum, tom kha kai infuses fiery chillies, thinly sliced young galangal, crushed shallots, stalks of lemongrass, and tender strips of chicken.",
        price: "$19.50",
        image: "https://a.cdn-hotels.com/gdcs/production98/d1396/e474641d-317d-4c62-933c-934b8b2eb63e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Chicken in coconut soup",
        description: "A mild, tamer twist on tom yum, tom kha kai infuses fiery chillies, thinly sliced young galangal, crushed shallots, stalks of lemongrass, and tender strips of chicken.",
        price: "$19.50",
        image: "https://a.cdn-hotels.com/gdcs/production98/d1396/e474641d-317d-4c62-933c-934b8b2eb63e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Chicken in coconut soup",
        description: "A mild, tamer twist on tom yum, tom kha kai infuses fiery chillies, thinly sliced young galangal, crushed shallots, stalks of lemongrass, and tender strips of chicken.",
        price: "$19.50",
        image: "https://a.cdn-hotels.com/gdcs/production98/d1396/e474641d-317d-4c62-933c-934b8b2eb63e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
    {
        title: "Chicken in coconut soup",
        description: "A mild, tamer twist on tom yum, tom kha kai infuses fiery chillies, thinly sliced young galangal, crushed shallots, stalks of lemongrass, and tender strips of chicken.",
        price: "$19.50",
        image: "https://a.cdn-hotels.com/gdcs/production98/d1396/e474641d-317d-4c62-933c-934b8b2eb63e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
    },
]

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    title: {
        fontSize: 20,
        fontWeight: "600"
    }
})

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItem}>
                    <BouncyCheckbox 
                        fillColor='green'
                    />
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                </View>
                <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}}/>
            </View>
        ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View
        style={{
            width: 240,
            justifyContent: "space-evenly"
        }}
    >
        <Text style={styles.title}>{props.food.title}</Text>
        <Text
            numberOfLines={2}
            ellipsizeMode='tail'
        >
            {props.food.description}
        </Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
            source={{uri: props.food.image}}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8
            }}
        />
    </View>
)
