function threeSum(arr, target) {
let closestSum = Infinity;
arr.sort();

	for(let i = 0; i < n-2; i++){

		let start = i+1 , end = n-1;
		while(start < end){
			let currSum = arr[i] + start + end;

			if(currSum === target){
			    return target;
			}else if( currSum > target){
				end--;
			}else {
				start++;
			}

			if(Math.abs(target - currSum) < Math.abs(target - closestSum)){
				closestSum = currSum;
			}
		}
		
	}
	return closestSum;
}

module.exports = threeSum;
