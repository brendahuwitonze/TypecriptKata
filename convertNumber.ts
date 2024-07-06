export const digitize = (n: number): number[] => {
    let number:string[] = String(n).split('')
    return  number.reverse().map(Number)
    };