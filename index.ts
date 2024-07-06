export function shortLongShort(a:string, b:string): string {
 if(a.length < b.length){
     return a+b+a;
      } else {
          return b+a+b;
      }
 }

 console.log(shortLongShort('1','222'))