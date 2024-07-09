function smaller(nums: number[]): number[] {
    let countSmall=[]
    for(let i=0; i < nums.length;i++){
        let count =0
      for(let j=i+1; j < nums.length;i++){
        if(nums[j]<nums[i]){
              count++
        }
    }
      countSmall.push(count)
      }
    return countSmall
  }
 console.log(smaller([5,4,3,2,1]))