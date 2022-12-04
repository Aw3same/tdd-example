export function wrapping(gifts: string[]): string[] {
    const result: string[] = []
    gifts.forEach(gift => {
      result.push(`${'*'.repeat(gift.length)}**\n*${gift}*\n**${'*'.repeat(gift.length)}`)
    })
    return result
  }