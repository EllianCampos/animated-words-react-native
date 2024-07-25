import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  text: string
}

const Title = ({ text }: Props) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15
  }
})

export default Title
