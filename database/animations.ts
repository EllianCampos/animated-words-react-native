import { Animation } from '@/types/Animation'
import { SQLiteDatabase } from 'expo-sqlite'

export const saveAnimation = async (db: SQLiteDatabase, text: string) => {
  await db.runAsync(
    `
    INSERT INTO animations (text) VALUES (?)  
  `,
    [text]
  )
}

export const getAnimations = async (
  db: SQLiteDatabase
): Promise<Animation[]> => {
  return db.getAllAsync('SELECT * FROM animations ORDER BY id DESC')
}

export const getAnimationById = async (
  db: SQLiteDatabase,
  animationId: number
): Promise<Animation | null> => {
  return await db.getFirstAsync('SELECT * FROM animations WHERE id = ?', [
    animationId,
  ])
}

export const deleteAnimation = async (
  db: SQLiteDatabase,
  id: number
): Promise<boolean> => {
  try {
    const result = await db.runAsync('DELETE FROM animations WHERE id = ?', [
      id,
    ])
    if (result.changes == 0) return false
    return true
  } catch (error) {
    return false
  }
}

export const editAnimation = async (
  db: SQLiteDatabase,
  id: number,
  text: string
): Promise<boolean> => {
  try {
    const result = await db.runAsync(
      `
        UPDATE animations SET text = ? WHERE id = ?
      `,
      [text, id]
    )
    if (result.changes == 0) return false
    return true
  } catch (error) {
    return false
  }
}
