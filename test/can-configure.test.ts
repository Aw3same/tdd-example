import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/canReconfigure'

describe('canReconfigure', (): void => {
    // it('should be a function', (): void => {
    //     expect(canReconfigure).toBeTypeOf('function')
    // })
    it('should throw if first parameter is missing', (): void => {
        expect((): boolean  => canReconfigure()).toThrow()
    })
    it('should throw if first parameter is missing', (): void => {
        expect((): boolean => canReconfigure(2)).toThrow()
    })
    it('should throw if second parameter is not a string', (): void => {
        expect((): boolean  => canReconfigure('a')).toThrow()
    })
    it('should return a boolean', (): void => {
        expect(canReconfigure('a','b')).toBeTypeOf('boolean')
    })
    it('should return false if strings provided have different length', (): void => {
        expect(canReconfigure('aab','ab')).toBe(false)
    })
    it('should return false if strings provided have different number of unique letters', (): void => {
        expect(canReconfigure('abc','ddd')).toBe(false)
    })
    it('should return false if string  has different order of transformations', (): void => {
        expect(canReconfigure('XBOX','XXBO')).toBe(false)
    })
})