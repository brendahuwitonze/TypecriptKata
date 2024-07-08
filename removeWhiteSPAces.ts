export function noSpace(x:string):string {
    const newString = x.split("").filter(eleme=>eleme!==' ').join("")
    return newString
    }