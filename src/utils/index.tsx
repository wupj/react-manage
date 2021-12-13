/**
 * 是否为空
 * @param {object} object
 * @param {Object} result
 */
const isEmpty = (value: any) => value === null || value === undefined || value === ''

/**
 * 清理对象
 * @param {object} object
 * @param {Object} result
 */
const cleanObject = (object: any) => {
  if (!object) {
    return {}
  }
  const result = { ...object }
  Object.keys(result).forEach((key: string) => {
    const value = result[key]
    if (isEmpty(value)) {
      delete result[key]
    }
  })
  return result
}

export default {
  isEmpty,
  cleanObject,
}
