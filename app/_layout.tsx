import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SQLiteProvider } from 'expo-sqlite'
import { migrateDbIfNeeded } from '@/database/dbScripts'

const RootLayout = () => {
  return (
    <SQLiteProvider databaseName='animationsdb2' onInit={migrateDbIfNeeded}>
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='create'
          options={{ headerTitle: 'Add Animation' }}
        />
      </Stack>
    </SafeAreaView>
    </SQLiteProvider>
  )
}

export default RootLayout
