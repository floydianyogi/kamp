// İki sayı birbirinin kendisi hariç pozitif bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// En küçük arkadaş sayı çifti 220 ve 284'tür. Bu iki sayı arkadaş sayıdır çünkü 220'nin kendisi hariç pozitif bölenlerinin toplamı 284'e, 284'ün kendisi hariç pozitif bölenlerinin toplamı 220'ye eşittir.

// Fonksiyonun içinde 2 parametre yollayacağız (a,b)
// a'nın kendisi hariç pozitif bölenlerinin toplamının değerini tutmak için bir variable assign edeceğiz. (counta)
// b'nin kendisi hariç pozitif bölenlerinin toplamının değerini tutmak için bir variable assign edeceğiz. (countb)
// For döngüsü ile a'dan küçük sayıları iterate edip a % n değeri 0'a eşit olan n değerlerini toplayacağız.
// For döngüsü ile b'den küçük sayıları iterate edip b % n değeri 0'a eşit olan n değerlerini toplayacağız.
// counta == b && countb == a ise true, değilse false dönüp fonksiyonu sonlandıracağız.

const isAmicable = (a, b) => {
  let divisorsCountA = 0;
  let divisorsCountB = 0;

  for (let n = 0; n < a; n++) {
    if (a % n == 0) {
      divisorsCountA += n;
    }
  }

  for (let n = 0; n < b; n++) {
    if (b % n == 0) {
      divisorsCountB += n;
    }
  }

  if (divisorsCountA == b && divisorsCountB == a) {
    return true;
  } else {
    return false;
  }
};

// console.log(isAmicable(220,284)); true
// console.log(isAmicable(1184,1210)); true
// console.log(isAmicable(2620,2924)); true
// console.log(isAmicable(5020,5564)); true
// console.log(isAmicable(6232,6368)); true
// console.log(isAmicable(100,500)); false
// console.log(isAmicable(5020,5500)); false
// console.log(isAmicable(220,286)); false



