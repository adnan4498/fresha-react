const removingDuplicates = (arr) =>{
    let removeDuplicates = new Set(arr);

    let arrDuplicatesRemoved = []

    // make Set object to array
    // populating the array back without value word that came with set
    for (let i of removeDuplicates) {
        arrDuplicatesRemoved.push(i);
    }

    return arrDuplicatesRemoved
}

export default removingDuplicates