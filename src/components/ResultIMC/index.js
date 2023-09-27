import React from "react";
import { View, Text } from "react-native";

export default function ResultIMC(props) {
    return (
        <View>
            <Text>{props.messageResultIMC} {props.resultIMC}</Text>
        </View>
    );
}