import level from 'level-ts'

const database = new level('./db')

export const get = async (key: string) => {
  try {
    return await database.get(key)
  } catch (error) {
    return { err: error.toString() }
  }
}

export const put = async (key: string, val: Object) => {
  try {
    return await database.put(key, val)
  } catch (error) {
    return { err: error.toString }
  }
}
