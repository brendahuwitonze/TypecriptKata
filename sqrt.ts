export default function isSquare(n: number): boolean {
    const sqr:number = Math.sqrt(n)
    if(sqr===Math.floor(sqr)){
      return true
      }
     else{
       return false
     }
   };