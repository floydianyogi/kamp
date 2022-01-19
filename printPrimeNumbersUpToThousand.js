// 0'dan 1000'e kadar olan bir for döngüsü oluşturacağız.
// Eğer döngünün içindeki i değeri asal bir sayıysa bunu ekrana basacağız.
// Sayının asal sayı olup olmadığını belirleyebilmek için harici bir şekilde oluşturduğumuz isPrime isimli fonksiyondan yararlanabiliriz.

const printPrimeNumbersUpToThousand = () => {
    for(let i = 0; i < 1000; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }

// Sadece 1 ve kendisine bölünebilen sayılara asal sayılar denmektedir. Asal sayılar 1 rakamı dışında başka hiçbir sayıya bölünemez. 
// Örneğin, 3 bir asal sayıdır çünkü sadece kendisine ve 1'e tam olarak bölünebilir. Diğer bir yandan, 6 sayısı 1, 2, 3 ve 6 sayılarına tam olarak bölünebildiği için bir asal sayı değildir.
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  printPrimeNumbersUpToThousand();