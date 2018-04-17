function theBeatlesPlay(arrayMusic, arrayArtist){
  let newArray = [];
  for(let i = 0; i < arrayMusic.length; i++){
    newArray.push(`${arrayMusic[i]} plays ${arrayArtist[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  length = array.length;
  while (length > 0) {
    console.log(`${array[length]}!!!`)
    length--;
  }
  return array;
}
