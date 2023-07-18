import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItem'
import { Divider } from 'react-native-elements'
import BottomTab from '../components/home/BottomTab'

const YELP_API_KEY = "q11lpdJdc3cUWm6aXeHAJ39y6iq9Z_CBQ9iFghv_hUoGo3_DE0rnNY9uH2vmFrFITOt5SUC5o7YX6UgX_gmF5fJKlSQgS1CiNlyanxOPTw7b4-sPfynLatGuZlSyZHYx"
const cors = 'https://cors.bridged.cc';
const link = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=NYC';

export default function Home({ navigation }) {
  const [data, setData] = useState(localRestaurants); 
  const [city, setCity] = useState("NYC");
  const [activeTab, setActiveTab] = useState("Delivery")

  useEffect(() => {
    const getuRL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    };
    const fetchData = async () => {
      try{
        const response = await fetch(getuRL, options);
        const json = await response.json();
        setData(json.businesses.filter((business) => 
          business.transactions.includes(activeTab.toLowerCase())
        ));
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }, [city, activeTab])

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
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem data={data} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTab />
    </SafeAreaView>
  )
}