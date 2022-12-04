export function countHours(year: number, holidays: string[]): number {    
    return holidays.reduce((count,day) => {
      const weekDay = new Date(`${day}/${year}`).getDay()
      return weekDay > 0 && weekDay < 6 ? count += 2 : count
    }, 0)  
  }