import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HeaderButton } from '../HeaderButton/HeaderButton'

export default function HeaderTabs(props) {
  return (
    <View
        style={{
            flexDirection: "row",
            alignSelf: "center"
        }}
    >
      {/* HeaderButton */}
      <HeaderButton 
        text="Delivery" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab}
        />
      <HeaderButton 
        text="Pickup" 
        activeTab={props.activeTab} 
        setActiveTab={props.setActiveTab}
        />
    </View>
  )
}