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
  it('should return play tetris when 11210897121 116101116114105115 is provided', (): void => {
    console.log('__>', challenge02('83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108'))
    expect(challenge02('11210897121 116101116114105115')).toBe('play tetris')
  })
})
