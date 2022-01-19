// 0'dan 1000'e kadar olan bir for döngüsü oluşturacağız.
// Eğer döngünün içindeki i değeri mükemmel bir sayıysa bunu ekrana basacağız.
// Sayının mükemmel sayı olup olmadığını belirleyebilmek için harici bir şekilde oluşturduğumuz isPerfect isimli fonksiyondan yararlanabiliriz.

const printPerfectNumbersUpToThousand = () => {
  for(let i = 0; i < 1000; i++) {
    if (isPerfect(i)) {
      console.log(i);
    }
  }
}

// Matematikte bazı pozitif tam sayıların pozitif bölenleri toplamı, sayının kendisinin iki katına eşittir. Bu tür sayılara “mükemmel sayı” denir.

// Fonksiyona tek parametre yollayacağız (a)
// Bu sayının pozitif bölenleri toplamının değerini tutmak için bir değişken atayacağız. (divisorCountN)
// For döngüsü ile 0'dan başlayarak n sayısına kadar olan sayıları dönüp, bu sayılardan n'i tam olarak bölen sayıları divisorCountN'e ekleyeceğiz.
// divisorCountN = 2n ise true, değilse false dönüp fonksiyonu sonlandıracağız.

const isPerfect = (n) => {
  let divisorCountN = 0;
  for (let a = 0; a <= n; a++) {
    if (n % a == 0) {
      divisorCountN += a;
    }
  }
  if (divisorCountN == 2 * n) {
    return true;
  } else {
    return false;
  }
};

printPerfectNumbersUpToThousand();


