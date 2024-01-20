// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.


// Kodu buraya yazalım...

const ages:number[]=[]
ages.push(5)
ages.push(15)
ages.push(25)


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.


// Kodu buraya yazalım...
const gameBoard:string[][]=[]


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}


// Kodu buraya yazalım...

type Product = {
    name:string,
    price:number
}


// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.

let myProducts: Product[] = [];
myProducts.push({name:"Telefon",price:5000})
myProducts.push({name:"Telefon",price:10000})
myProducts.push({name:"Telefon",price:15000})
let total:any;
function getTotal(product:Product[])
{
    let totalFiyat:number = 0;
    for (let i: number = 0; i < product.length; i++) {
        totalFiyat += product[i].price
    }
    return totalFiyat
}
total = getTotal(myProducts)
console.log(total)
// Kodu buraya yazalım...
