// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
const ages = [];
ages.push(5);
ages.push(15);
ages.push(25);
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
const gameBoard = [];
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
let myProducts = [];
myProducts.push({ name: "Telefon", price: 5000 });
myProducts.push({ name: "Telefon", price: 10000 });
myProducts.push({ name: "Telefon", price: 15000 });
let total;
function getTotal(product) {
    let totalFiyat = 0;
    for (let i = 0; i < product.length; i++) {
        totalFiyat += product[i].price;
    }
    return totalFiyat;
}
total = getTotal(myProducts);
console.log(total);
export {};
// Kodu buraya yazalım...
//# sourceMappingURL=3-arrayler.js.map