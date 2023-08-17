function sortedFrequency(arr, target) {
    let firstIdx = findFirstIdx(arr, target)
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLastIdx(arr, target);
    return lastIdx - firstIdx + 1;

}

function findFirstIdx(arr, target, lowIdx = 0, highIdx = arr.length - 1) {

    if (highIdx >= lowIdx) {
        // find the mid
        let mid = Math.floor((lowIdx + highIdx) / 2)
        // if mid idx is 0 or that the target # is 
        if ((mid === 0 || target > arr[mid - 1] && arr[mid] === target)) {
            return mid;
        }
        else if (target > arr[mid]) {
            return findFirstIdx(arr, target, mid + 1, highIdx)
        }
        else {
            return findFirstIdx(arr, target, lowIdx, mid - 1)
        }

    }
    return -1
}

function findLastIdx(arr, target, lowIdx = 0, highIdx = arr.length - 1) {

    if (highIdx >= lowIdx) {
        // find the mid
        let mid = Math.floor((lowIdx + highIdx) / 2)
        // if mid is last idx arr or check if (target is to the left of mid + 1)
        if ((mid === arr.length - 1 || target < arr[mid + 1] && arr[mid] === target)) {
            return mid;
        }
        else if (target < arr[mid]) {
            return findLastIdx(arr, target, lowIdx, mid - 1)
        }
        else {
            return findLastIdx(arr, target, mid + 1, highIdx)
        }

    }
    return -1
}
module.exports = sortedFrequency
