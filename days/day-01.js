// Día 1 - Advent JS

const gifts1 = ['car', 'doll#arm', 'ball', '#train']

function filterGifts(gifts){
  return gifts.filter(gift => !gift.includes("#"))
}

const good1 = filterGifts(gifts1)
console.log(good1) // ['car', 'ball']