/**
 * Solution for challenge 23 from advent.js 2021
 * https://adventjs.dev/challenges/23
 * 
 * @param from 
 * @param to 
 * @returns 
 */
export const canReconfigure = (from?, to?): boolean => {
    if (typeof from !== 'string') throw new Error('from must be a string')
    if (typeof to !== 'string') throw new Error('to must be a string')

    const IsSameLength = from.length === to.length
    if (!IsSameLength) return false

    const hasSameUniqueLetters = new Set(from).size === new Set(to).size
    if (!hasSameUniqueLetters) return false

    const transformations = {}
    for (let i = 0; i< from.length; i++) {
        const fromLetter = from[i]
        const toLetter = to[i]

        const storeLetter = transformations[fromLetter]
        if (storeLetter && storeLetter !== toLetter) return false

        transformations[fromLetter] = toLetter
    }

    return true
}