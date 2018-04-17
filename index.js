function theBeatlesPlay(arrayMusic, arrayArtist){
  let newArray = [];
  for(let i = 0; i < arrayMusic.length; i++){
    newArray.push(arrayArtist[i] + " plays " arrayMusic[i]);
  }
  return newArray;
}
