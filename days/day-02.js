// Día 2 - Advent JS

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

function manufactureGifts(giftsToProduce) {
  return giftsToProduce.reduce((result, gift) => {
    const { toy, quantity } = gift
    if(quantity <= 0 || isNaN(quantity)){
      return result;
    }
    
    const toys = new Array(quantity).fill(toy)
    result.push(...toys)
    
    return result;
  }, [])
}

const result1 = manufactureGifts(production1)
console.log(result1)