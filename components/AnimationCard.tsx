import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { Animation } from '@/types/Animation'
import Button from './Button'
import icons from '../constants/icons'
import { router } from 'expo-router'
import { deleteAnimation } from '@/database/animations'
import { type SQLiteDatabase } from 'expo-sqlite'

interface Props {
  animation: Animation,
  db: SQLiteDatabase
  removeAnimationFromUI: (id:number) => void
}

const AnimationCard = ({ animation, db, removeAnimationFromUI }: Props) => {

  const handleDelte = (id: number) => {
    Alert.alert(
      'Delete confirmation',
      'Do you really want to delete the animation',
      [
        { text: 'Cancel', onPress: () => {} },
        { text: 'Procced', onPress: async () => {
          if (await deleteAnimation(db, id)) {
            removeAnimationFromUI(id)
            Alert.alert('Deleted successfuly')
          } else {
            Alert.alert('There was an error deleting de animation')
          }
        } },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text>{animation.text}</Text>
      <View style={styles.controls}>
        <Button
          text=''
          color='green'
          action={() => router.push(`/play/${animation.id}`)}
          image={icons.play}
        />
        <Button
          text=''
          color='blue'
          action={() => router.push(`/edit/${animation.id}`)}
          image={icons.edit}
        />
        <Button
          text=''
          color='red'
          action={() => handleDelte(animation.id)}
          image={icons.trash}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: 'silver',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default AnimationCard
