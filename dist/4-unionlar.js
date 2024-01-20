// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.
// Kodu buraya yazalım...
const highScore = 5;
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.
// Kodu buraya yazalım...
const stuff = [];
// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.
// Kodu buraya yazalım...
const colors = { r: 0, g: 0, b: 0 };
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.
const greet = (nameOrNames) => {
    if (Array.isArray(nameOrNames)) {
        for (let name of nameOrNames) {
            console.log(`Merhaba ${name}`);
        }
    }
    else {
        console.log(`Merhaba ${nameOrNames}`);
    }
};
greet("Ahmet");
greet(["Ahmet", "Mehmet"]);
export {};
// Kodu buraya yazalım...
//# sourceMappingURL=4-unionlar.js.map