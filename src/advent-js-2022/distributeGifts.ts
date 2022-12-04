export function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
    const reindeersWeight = reindeers.reduce((weight, reindeer) => {
      return weight += reindeer.length * 2
    }, 0)
    const packOfGiftsWeight = packOfGifts.reduce((weight, gift) => {
      return weight += gift.length
    }, 0)
  
    return Math.trunc(reindeersWeight / packOfGiftsWeight)
  }