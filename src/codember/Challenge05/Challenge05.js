import { PLAYERS } from './players.js'

export const challenge05 = players => {
  let playersl = players.length
  let pos = '0'
  while (playersl > 2) {
    let half = playersl % 2 === 0 ? 0 : 1
    pos += half
    playersl = half === 0 ? Math.ceil(playersl / 2) : Math.floor(playersl / 2)
  }
  let indexWinner = parseInt(pos.split('').reverse().join(''), 2)
  return [players[indexWinner], indexWinner]
}

try {
  // read the file
  const players = PLAYERS
  let [winner, indexPosition] = challenge05(players)
  console.log(winner + '-' + indexPosition)
} catch (error) {
  console.error(`ERROR: ${error}`)
}
