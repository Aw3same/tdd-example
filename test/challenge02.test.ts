import { describe, expect, it } from 'vitest'

const challenge02 = (encryptedMessage?: string | any): string => {
  if (!encryptedMessage) throw new Error('You must provide a code')
  if (typeof encryptedMessage !== 'string')
    throw new Error('Parameter provided must be a string')

  const words = encryptedMessage.split(' ')
  const message: string[] = [];
  words.forEach(element => {
    const codes: number[] = []
    for (let i = 0; i < element.length; ) {
      const numDigits = element[i] === '1' ? 3 : 2
      codes.push(Number(element.substring(i, numDigits + i)))
      i += numDigits
    }
    const str = String.fromCharCode(...codes)
    message.push(str)
  })
  return message.join(' ')
}

describe('Challenge 02', () => {
  // Not neccesary because is tested in the next test cases
  it('should be a function', (): void => {
    expect(typeof challenge02).toBe('function')
  })
  it('should throw an specific error message if not value is provided as parameter', (): void => {
    expect(() => challenge02()).toThrow('You must provide a code')
  })
  it('should throw an specific error message if not a string is provided', (): void => {
    expect(() => challenge02(11)).toThrow('Parameter provided must be a string')
  })
  it('should return codember when 9911110010110998101114 is provided', (): void => {
    expect(challenge02('9911110010110998101114')).toBe('codember')
  })
  it('should return codember midu when 9911110010110998101114 109105100117 is provided', (): void => {
    expect(challenge02('9911110010110998101114 109105100117')).toBe('codember midu')
  })
  it('should return play tetris when 11210897121 116101116114105115 is provided', (): void => {
    expect(challenge02('11210897121 116101116114105115')).toBe('play tetris')
  })
})
