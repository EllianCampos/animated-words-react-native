import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  text: string
}

const Label = ({ text }: Props) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
})

export default Label
