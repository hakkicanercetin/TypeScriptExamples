// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "kardesPayi" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre
// olarak bir isim alsın. Eğer fonksiyona bir isim girilirse, fonksiyon
// "bir tane İSİM_BURAYA_GELECEK için, bir de benim için" şeklinde bir string dönsün.
// Eğer fonksiyona bir isim girilmezse, fonksiyon şu şekilde bir string dönsün:
// "bir tane senin için, bir de benim için."
// Örnekler:
// kardesPayi("Ahmet") --> "Bir tane Ahmet için, bir de benim için"
// kardesPayi() --> "Bir tane senin için, bir de benim için."
// Kodu buraya yazalım...
function kardesPayi(name = "senin") {
    console.log("Bir tane " + name + " için, bir de benim için.");
}
kardesPayi("Ahmet");
kardesPayi();
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "Artık yıl" hesaplayan bir "isLeapYear" fonksiyonu yazalım. Bu fonksiyon, 
// parametre olarak bir yıl alsın ve eğer bu yıl artık yıl ise true, değilse
// false dönsün. Bir yılın artık yıl olması için şu koşulların sağlanması gerekiyor:
// 1 - Yıl 4'e tam bölünmeli
// 2 - Yıl 100'e tam bölünmemeli
// VEYA
// 1 - Yıl 400'e tam bölünmeli
// Artık yıl hakkında daha fazla bilgi için:
// https://tr.wikipedia.org/wiki/Art%C4%B1k_y%C4%B1l
// Örnekler:
// artikYil(2024) --> true
// artikYil(2021) --> false
// artikYil(2020) --> true
// artikYil(2019) --> false
// artikYil(2000) --> true
// artikYil(1900) --> false
// artikYil(1700) --> false
// artikYil(1600) --> true
// İPUCU: mod alma işlemi için % operatörünü kullanabiliriz.
// Kodu buraya yazalım...
function isLeapYear(year) {
    console.log(year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}
isLeapYear(2024);
isLeapYear(2021);
isLeapYear(2020);
isLeapYear(2019);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(1700);
isLeapYear(1600);
const sayWelcome = (user) => {
    console.log(`Hoşgeldin ${user.firstName}`);
};
const sayGoodBye = (user) => {
    console.log(`Güle güle ${user.firstName}`);
};
sayWelcome({ firstName: "Ahmet" });
sayGoodBye({ firstName: "Ahmet" });
export {};
//# sourceMappingURL=1-fonksiyonlar.js.map