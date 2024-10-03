export const generateRandomSalons = function(countryMergedSalons){

    const getMergedCopy = structuredClone(countryMergedSalons);

    let randomMergedSalons = [];
    
    getMergedCopy.forEach((item, index) => {
      item.id = index;
    });
    
    let getSalonIds = getMergedCopy.map((item) => item.id);
    
    // generating random salons (shuffling id's)
    for (let i = 0; i < getMergedCopy.length; i++) {
      let randomNum = Math.floor(Math.random() * getMergedCopy.length);
      if (getSalonIds.includes(randomNum)) {

        // to prevent duplicate, remove array lenght 1 by 1  
        getSalonIds = getSalonIds.filter((item) => item != randomNum);

        randomMergedSalons.push(getMergedCopy[randomNum]);
      } else {
        --i;
      }
      if (randomMergedSalons.length == getMergedCopy.length) {
        break;
      }
    }

    return randomMergedSalons
}