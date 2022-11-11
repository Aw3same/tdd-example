import { USERS } from './users.js'

const VALID_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

const validUsers = USERS.split('\n\n')
  .map(line => line.replaceAll('\n', ' ').split(' '))
  .map(dataUser => {
    const userObj = {}
    for (const item of dataUser) {
      const [key, value] = item.split(':')
      userObj[key] = value
    }
    return userObj
  })
  .filter(user => VALID_FIELDS.every(fieldName => fieldName in user))

console.log(`submit ${validUsers.length}${validUsers.at(-1).usr}`)

