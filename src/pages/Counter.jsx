import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CounterButton } from '../components';

import {
  text,
  layout
} from '../styles'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
      <View
        style={[
          {
          }
        ]}
      >
        <Text
          style={[
            text.fboldheader
          ]}
        >
          count = {count}
        </Text>

        <CounterButton
          label='increment'
          onPress = {increment}
        />

        {count > 0 && (<CounterButton
          label='decrement'
          onPress = {decrement}
        />)}
      </View>
  )
}