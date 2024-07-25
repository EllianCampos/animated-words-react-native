import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Title from '@/components/Title'
import ButtonLink from '@/components/ButtonLink'
import { Redirect } from 'expo-router'
import AnimationList from '@/components/AnimationList'

const index = () => {
  return (
    <ScrollView>
      <View>
        <Title text='Animations' />
        <ButtonLink
          style={{ backgroundColor: 'green', color: 'white' }}
          href='/create'
          text='Add animation'
        />
        <AnimationList />
      </View>
    </ScrollView>
  )
}

export default index
