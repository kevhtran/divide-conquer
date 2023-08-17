function countZeroes(arr) {
    // if arr.length is 0 ie empty array or the last element in the array is 1 return 0
    if (arr.length === 0 || arr[arr.length - 1] === 1) {
        return 0
    }
    // if the first element of the array is 0, return arr.length for the count
    if (arr[0] == 0) {
        return arr.length;
    }
    // start with left as the initial idx, right as the last idx
    let left = 0
    let right = arr.length - 1
    // while the left idx is not right next to the right idx
    while (left + 1 !== right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === 1) {
            left = mid
        }
        else {
            right = mid
        }
    }
    return arr.length - right;
}


module.exports = countZeroes

