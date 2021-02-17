import level from 'level-ts';

const database = new level('./db');

export const get = async (key) => {
  try {
    return await database.get(key)
  } catch (error) {
    return { err: error.toString() }
  }
}

export const put = async (key, val) => {
  try {
    return await database.put(key, val)
  } catch (error) {
    return { err: error.toString }
  }

}

