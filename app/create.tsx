import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Label from '@/components/Label'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useSQLiteContext } from 'expo-sqlite'
import { editAnimation, getAnimationById, saveAnimation } from '@/database/animations'
import { router, useLocalSearchParams } from 'expo-router'
import { alphabet } from '@/constants/alphabet'

const create = () => {
  const db = useSQLiteContext()
  const { animationId } = useLocalSearchParams()

  const [text, setText] = useState('')

  const searchAnimationData = async () => {
    const result = await getAnimationById(db, Number(animationId))
    setText(result?.text ?? '') 
  }

  const write = (event: string) => {
    const eventUpper = event.toUpperCase()
    const lastChar = eventUpper.charAt(eventUpper.length - 1)

    let charFounded = false
    for (const alp of alphabet) {
      if (alp == lastChar) {
        charFounded = true
      }
    }
    if (!charFounded) return

    setText(eventUpper)
  }

  const save = async () => {
    if (text.length < 5)
      return Alert.alert('The text must have at least 5 characters')

    if (animationId == undefined) {
      await saveAnimation(db, text)
    } else {
      await editAnimation(db, Number(animationId), text)
    }

    setText('')
    router.push('/')
  }

  useEffect(() => {
    if (animationId !== undefined) {
      searchAnimationData()
    }
  }, [])

  return (
    <View>
      <Label text='Enter the text' />
      <TextField
        value={text}
        action={(event) => write(event)}
      />
      <Button
        text='Save'
        color='green'
        action={() => save()}
      />
    </View>
  )
}

export default create
