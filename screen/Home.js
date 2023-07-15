import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem'




export default function Home() {
  const [data, setData] = useState(localRestaurants);
  return (
    <SafeAreaView 
      style={{
        flex: 1, 
        marginTop: StatusBar.currentHeight + 15,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#f5f5f5",
          padding: 15
        }}
      >
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem data={data}/>
      </ScrollView>
    </SafeAreaView>
  )
}