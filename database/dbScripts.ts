import { type SQLiteDatabase } from 'expo-sqlite'

interface PRAGMAResult {
  user_version: number
}

export const migrateDbIfNeeded = async (db: SQLiteDatabase) => {
  let result:PRAGMAResult | null =  await db.getFirstAsync('PRAGMA user_version')
  const currentDbVersion = result?.user_version

  if (currentDbVersion === 0) {
    await db.execAsync(`
      CREATE TABLE animations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT
      )
    `)
    await db.execAsync(`PRAGMA user_version = 1`)
  }
}
