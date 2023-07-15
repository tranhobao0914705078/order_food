import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HeaderButton } from './HeaderButton/HeaderButton'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
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
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
      <HeaderButton 
        text="Pickup" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
    </View>
  )
}

// btnColor="white" 
// textColor="black"  