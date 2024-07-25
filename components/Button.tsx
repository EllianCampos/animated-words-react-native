import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PressableProps,
  Image,
} from 'react-native'
import React from 'react'

interface Props {
  text: string
  color?: string
  action: () => void
  image?: any
}

const Button = ({ text, action, color = 'blue', image = null }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, width: image === null ? 'auto' : 40 },
      ]}
      onPress={action}
    >
      {image === null ? (
        <Text style={styles.buttonText}>{text}</Text>
      ) : (
        <Image
          style={styles.image}
          source={image}
          resizeMode='stretch'
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    marginVertical: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
  },
  image: {
    width: 35,
    height: 30,
  },
})

export default Button
