function theBeatlesPlay(arrayMusic, arrayArtist){
  let newArray = [];
  for(let i = 0; i < arrayMusic.length; i++){
    newArray.push(`${arrayMusic[i]} plays ${arrayArtist[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array){
  let length = array.length;
  let i = 0;
  while(i < length){
    console.log(array[length] + "!!!");
    i++;
  }
}
