import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native'
import {
    text,
    layout
} from '../styles'

export const CounterButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity
            style={
                [
                    layout.button,
                ]
            }
            onPress={onPress}
        >
            <Text
                style={
                    [
                        text.buttonText,
                    ]
                }
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}