import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }}/>
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  )
}