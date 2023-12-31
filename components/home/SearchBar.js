import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return (
    <View
        style={{
            marginTop: 15,
            flexDirection: "row",
        }}
    >
      <GooglePlacesAutocomplete 
        query={{key: 'AIzaSyDK_x9WhoqD7xbErkEbUG_Ayki_82FbEiA'}}
        onPress={(data, detail = null) => {
          console.log(data.description)
          const city = data.description.split(",")[0];
          cityHandler(city)
        }}
        styles={{
            textInput: {
                backgroundColor: "white",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
            },
            textInputContainer: {
                backgroundColor: "white",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
            }
        }}
        placeholder='search'
        renderLeftButton={() => (
            <View
              style={{
                marginLeft: 16
              }}
            >
                <Ionicons name="location-sharp" size={24}/>
            </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "#eee",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign name="clockcircle" size={11}
              style={{
                marginRight: 6
              }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  )
}