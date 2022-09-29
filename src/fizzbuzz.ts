/**
 * Given an integer n, return:
 * - "Buzz" if i is divisible by 5.
 * - "Fizz" if i is divisible by 3.
 * - "FizzBuzz" if i is divisible by 3 and 5.
 * - n if none of the above conditions are true.
 * 
 * @param number 
 * @returns 
 */
export const fizzbuzz = (
  number?: number
): number | string => {
  if (typeof number !== 'number')
    throw new Error('Parameter provided must be a number')
  if (Number.isNaN(number))
    throw new Error('Parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % Number(multiplier) === 0 ) output += word
  });

  return output === '' ? number : output
}
