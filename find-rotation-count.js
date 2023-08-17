function findRotationCount(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0;
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[start] <= arr[mid]) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    // we look for the pivot idx and since we only want to know how many times the pivot moved from idx of 0, the returned idx is how many times it moved over
}

// function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     let start = 0;
//     let end = arr.length - 1

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] > arr[mid + 1]) return mid + 1
//         else if (arr[start] <= arr[mid]) {
//             start = mid + 1
//         }
//         else {
//             end = mid - 1
//         }
//     }
// }

module.exports = findRotationCount