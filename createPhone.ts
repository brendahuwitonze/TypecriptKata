export function createPhoneNumber(numbers: number[]): string {
    if(numbers.length!==10 || !numbers.every(num=>num>=0 && num<=9)){
       throw Error ('you number is not valid')
       }
       let firstThreeNumbers = numbers.slice(0,3).join("")
        let secondThreeNumbers = numbers.slice(3,6).join("")
        let thirdThreeNumbers = numbers.slice(6,10).join("")
    return `(${firstThreeNumbers}) ${secondThreeNumbers}-${thirdThreeNumbers}`
  }

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) )// => returns "(123) 456-7890"