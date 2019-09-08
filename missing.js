var nums = [1,3,4,5,6,10];
var found = [];

for (var i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i-1] !=1) {
        var x = nums[i] - nums[i-1];
        var j = 1;
        while(j<x)
        {
            found.push(nums[i-1]+j);
            j++
        }
    }
    
}
console.log(alert(found));