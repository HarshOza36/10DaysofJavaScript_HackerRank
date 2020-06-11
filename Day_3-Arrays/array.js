/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    var ans_array = sorted_array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return ans_array[ans_array.length - 2];
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}