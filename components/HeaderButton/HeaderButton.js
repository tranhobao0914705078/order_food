import { View, TouchableOpacity, Text } from "react-native";

export const HeaderButton = ( props ) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "black" : "transparent",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text 
            style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900"
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);