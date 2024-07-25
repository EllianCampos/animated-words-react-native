import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface Props {
  character: string
}

const AnimationCharacter = ({ character }: Props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current

  // console.log(character)

  useEffect(() => {
    rotateAnim.setValue(0)
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration:300,
      useNativeDriver: true,
    }).start()
  }, [character])

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.text}>{character}</Text>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 50,
    margin: 5,
  },
  subcontainer: {
    backgroundColor: 'blue',
    width: 50,
    alignItems: 'center',
    borderRadius: 80
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
})

export default AnimationCharacter