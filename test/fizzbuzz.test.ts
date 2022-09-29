import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // Not neccesary because is tested in the next test cases
  // it('should be a function', (): void => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })
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
  it('should return "fizz" if number provided is 3', (): void => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('should return "fizz" if number provided is multiple of 3', (): void => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  // Not necessary, cover by another test
  // it('should return 4 if number provided is 4', (): void => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })
  it('should return "buzz" if number provided is 5', (): void => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
  it('should return "buzz" if number provided is multiple of 5', (): void => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })
  it('should return "fizzbuzz" if number provided is multiple of 15', (): void => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
