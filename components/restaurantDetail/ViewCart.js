import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function ViewCart() {
  return (
    <View
        style={{
            flexDirection: "row",
            position: "absolute",
            top: 185,
            left: 160,            
        }}
    >
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    padding: 13,
                }}
            >
                <Icon icon="shopping-bag"/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5 
                name={props.icon}
                size={25}
            />
        </View>
    </TouchableOpacity>
)