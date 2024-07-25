import { View, Text } from 'react-native'
import { getAnimations } from '@/database/animations'
import { useEffect, useState } from 'react'
import { Animation } from '@/types/Animation'
import { useSQLiteContext } from 'expo-sqlite'
import AnimationCard from './AnimationCard'

const AnimationList = () => {
  const db = useSQLiteContext()

  const [animations, setAnimations] = useState<Animation[]>([])

  const getData = async () => {
    const result: Animation[] = await getAnimations(db)
    setAnimations(result)
  }

  const removeAnimationFromUI = (id: number) => {
    let temp = [...animations]
    const filtered = temp.filter((x) => x.id !== id)
    setAnimations(filtered)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      {animations.map((item) => (
        <AnimationCard
          key={item.id}
          animation={item}
          db={db}
          removeAnimationFromUI={removeAnimationFromUI}
        />
      ))}
    </View>
  )
}

export default AnimationList
