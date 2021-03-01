// Using REST params
function sum(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        total = total + num;
    }

    return total;
}

module.exports = sum;