function theBeatlesPlay(arrayMusic, arrayArtist){
  let newArray = [];
  for(let i = 0; i < arrayMusic.length; i++){
    newArray.push(`${arrayMusic[i]} plays ${arrayArtist[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  for(let i = 0; i < array.length; i++){
    array[i] = `${array[i]}!!!`;
  }
  return array;
}
