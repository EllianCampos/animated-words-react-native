import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnimationCharacter from './AnimationCharacter'
import Button from './Button'
import icons from '@/constants/icons'
import { alphabet } from '@/constants/alphabet'

interface Props {
  text: string
}

let finishedIndexs: number[] = []

const AnimationContainer = ({ text }: Props) => {
  const [chars, setChars] = useState<string[]>(new Array(text.length).fill('_'))

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const mainAlgorithm = async (indexInText: number) => {
    for (let alp = 0; alp < alphabet.length; alp++) {
        if (alphabet[alp] == text[indexInText]) {
          setChars((prevChars) => {
            const updatedChars = [...prevChars]
            updatedChars[indexInText] = alphabet[alp]
            return updatedChars
          })
          finishedIndexs.push(indexInText)
          break
        } else {
          setChars((prevChars) => {
            const updatedChars = [...prevChars]
            updatedChars[indexInText] = alphabet[alp + 1]
            return updatedChars
          })
        }
        await delay(100)
    }
  }

  const play = async () => {
    for (let i = 0; i < text.length; i++) {
      await mainAlgorithm(i)
    }
  }

  const preStart = async () => {
    finishedIndexs = []
    setChars(new Array(text.length).fill('_'))
    await delay(1000)
    await play()
  }

  useEffect(() => {
    preStart()
  }, [])

  return (
    <View>
      <View style={styles.charsContainer}>
        {chars.map((item, index) => (
          <AnimationCharacter
            key={index}
            character={item}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text=''
          action={() => preStart()}
          color='green'
          image={icons.replay}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  charsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 20
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20
  },
})

export default AnimationContainer
