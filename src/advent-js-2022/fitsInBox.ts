export function fitsInOneBox(boxes: {l: number, w: number,h: number}[]): boolean {
    return boxes.sort((a, b) => a.l * a.l * a.w - b.l * b.w * b.h).every((currentBox, i) => {
      
      if(i === boxes.length - 1) return true
  
      const nextBox = boxes[i + 1]
  
      return nextBox.l > currentBox.l && nextBox.w > currentBox.w && nextBox.h > currentBox.h
    })
  }