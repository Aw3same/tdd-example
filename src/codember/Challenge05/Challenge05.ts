import { readFileSync } from "fs";

export const TheHungerGames = (data: string[]) => {
    const players = Object.assign({}, data)
    const size = Object.keys(players).length;

    let i = 0, j = 1

    while (Object.keys(players).length > 1) {
        while (players[i] === undefined || i === j) {
            i = i > size ? 0 : i + 1;
        }

        while (players[j] === undefined || i === j) {
            j = j > size ? 0 : j + 1
        }
    
        delete players[j]
        i += 2
    }

    return players
}


try {
  // read the file
  const players = JSON.parse(readFileSync(process.cwd() + "/challenge05/mecenas.json", "utf8"));
  let [winner, indexPosition] = TheHungerGames(players);
  console.log(winner + "-" + indexPosition);
} catch (error) {
  console.error(`ERROR: ${error}`);
}