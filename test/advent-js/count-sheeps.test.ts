import { describe, expect, it } from 'vitest'

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
]

const countSheeps = (sheeps?: any): Array<any> => {
  if (!sheeps) throw new Error('There are no sheeps')
  if (typeof sheeps !== 'object')
    throw new Error('Parameter provided must be a list')
  if (sheeps.length === 0) throw new Error('We need a list of sheeps')

  return []
}

describe('countSheeps', (): void => {
  it('should be a function', (): void => {
    expect(countSheeps).toBeTypeOf('function')
  })
  it('should throw an error if not parameter is provided', (): void => {
    expect(() => countSheeps()).toThrow()
  })
  it('should throw an errorif parameter is not a list', (): void => {
    expect(() => countSheeps(1)).toThrow()
  })
  it('should throw an error if parameter is an empty list', (): void => {
    expect(() => countSheeps([])).toThrow()
  })
  it('should return a list', (): void => {
    expect(countSheeps([1])).toBeTypeOf('object')
  })
})
