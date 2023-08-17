// function findRotatedIndex(arr, num) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if (num === arr[mid]) {
//             return mid
//         }

//         // check if on the left side by seeing if the middle value is greater than the left value
//         if (arr[0] <= arr[mid]) {
//             // checking if on the right side
//             if (num >= num[mid] || num < arr[left]) {
//                 left = mid + 1
//             }
//             // that means target is less than the middle but greater than left so on left side
//             else {
//                 right = mid - 1
//             }
//         }
//         // right sorted portion
//         else {
//             // check to see if it's on the left side
//             if (num < arr[mid] || num > arr[right]) {
//                 right = mid - 1
//             }
//             // target is greater than middle value and is less than right value
//             else {
//                 left = mid + 1
//             }
//         }
//     }
//     // if not found return false
//     return -1

// }

function findRotatedIndex(array, num) {
    let pivot = findPivot(array)
    // making sure this is the left array of the pivot
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
    }
    // if target is not on the left side, then we search the right side
    else {
        return binarySearch(array, num, pivot, array.length - 1);
    }
}


function binarySearch(arr, num, lowIdx, highIdx) {
    // edge case if nothing in array, return false
    if (arr.length === 0) return -1
    // edge case if the target number is outside the sorted array, we return false
    if (num < arr[lowIdx] || num > arr[highIdx]) return -1


    while (lowIdx <= highIdx) {
        let mid = Math.floor((lowIdx + highIdx) / 2);
        if (arr[mid] === num) {
            return mid;
        }
        else if (num < arr[mid]) {
            highIdx = mid - 1;
        }
        else {
            lowIdx = mid + 1;
        }
    }
    // if you cant find it
    return -1;
}

function findPivot(arr) {
    // mini binary search for the pivot. the pivot will be the index where lowIdx VALUE is greater than value of lowIdx + 1

    // edge case if there is only 1 value [1] or if the start value is less than the next value [1,2], then the pivot idx is 0. 
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // edge case if [3,4,5,1,2] then mid + 1 is the pivot idx
        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[start] <= arr[mid]) {
            // if the start value is less than the middle value, then we move the start value up to the next idx after mid since we know from mid back to start these are in order 
            start = mid + 1
        }
        else {
            // if the start value is greater than middle value [6, 7, 1, 2, 3, 4, 5], then we move the end index to the mid -1 since we know the mid is in the right array and not the left
            end = mid - 1
        }
    }
}
module.exports = findRotatedIndex