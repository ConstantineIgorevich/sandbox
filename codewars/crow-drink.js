// description:

// You need to calculate how many stones can be used to make the crow drink water (using only mouth). You need to return a list of the stones to be used. (The stone can only be used from left to right).

// If the crow can drink water (no need to put stone), return [].

// If all the stones are used but the crow still can't drink the water. Please return "The crow is dead."

// You can assume that the bottle is a standard cylinder. This will help you calculate the volume.

// solution:

function drinkWater(bottleHeight,bottleRadius,waterHeight,crowMouth,littleStones){
    const heightToFill = bottleHeight - waterHeight - crowMouth;
    let volumeToFill = Math.PI * bottleRadius * bottleRadius * heightToFill;
    const result = [];
    let i = 0;
    while(volumeToFill > 0) {
      if(i >= littleStones.length) {
        return "The crow is dead."
      }
      result.push(littleStones[i]);
      volumeToFill -= littleStones[i];
      i++;
    }
    return result;
  }