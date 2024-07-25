import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  Redirect,
  router,
  useLocalSearchParams,
  useNavigation,
} from 'expo-router'
import { getAnimationById } from '@/database/animations'
import { useSQLiteContext } from 'expo-sqlite'
import { Animation } from '@/types/Animation'
import AnimationContainer from '@/components/AnimationContainer'

const Play = () => {
  const { animationId } = useLocalSearchParams()
  const db = useSQLiteContext()
  const navigation = useNavigation()

  const [animation, setAnimation] = useState<Animation>({ id: 0, text: '' })
  const [loading, setLoading] = useState(true)

  const get = async () => {
    const result = await getAnimationById(db, Number(animationId))
    if (result == null) {
      return router.push('/')
    }
    setAnimation(result)
    setLoading(false)
  }

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Play Animation' })
    get()
  }, [])

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  return (
    <View>
      <AnimationContainer text={animation.text.toUpperCase()} />
    </View>
  )
}

export default Play
