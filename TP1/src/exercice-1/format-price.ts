export function formatPrice(num:number, separator?:{"decimal": string, "thousands": string}) : string {
    // Erreurs personnalisées
    if (isNaN(num)) {
        throw new Error('Le paramètre doit être un nombre');
    }
    const twoDec = num.toFixed(2);
    const commaFormat = twoDec.replace('.', separator?.decimal ? separator.decimal : ',');
    const thousandsSep = commaFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator?.thousands ? separator.thousands : ' ');
    const str:string = thousandsSep.toString();
        
    return(str);
}
const separate : {"decimal":string, "thousands":string} = 
{
    "decimal": '', 
    "thousands": '.'
}

console.log(formatPrice(19.991988645432));
console.log(formatPrice(1));
console.log(formatPrice(1000000));
// @ts-ignore
//console.log(formatPrice("jhgjhg"));


