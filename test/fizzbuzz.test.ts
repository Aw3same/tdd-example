import { describe, expect, it } from 'vitest'

const fizzbuzz = (number?: number): number | 'fizz' => {
  if (typeof number !== 'number') throw new Error('Parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number')

  if (number === 3) return 'fizz'

  return number
}

describe('fizzbuzz', () => {
  it('should be a function', (): void => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('should throw an error if not number is provided as parameter', (): void => {
    expect(() => fizzbuzz()).toThrow()
  })
  it('should throw an specific error message if not number is provided as parameter', (): void => {
    expect(() => fizzbuzz()).toThrow('Parameter provided must be a number')
  })
  it('should throw an specific error message if not a number is provided', (): void => {
    expect(() => fizzbuzz()).toThrow('Parameter provided must be a number')
  })
  it('should return 1 if number provided is 1', (): void => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return 2 if number provided is 2', (): void => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('should returnn fizz if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

})
