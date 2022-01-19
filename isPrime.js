// Sadece 1 ve kendisine bölünebilen sayılara asal sayılar denmektedir. Asal sayılar 1 rakamı dışında başka hiçbir sayıya bölünemez. 
// Örneğin, 3 bir asal sayıdır çünkü sadece kendisine ve 1'e tam olarak bölünebilir. Diğer bir yandan, 6 sayısı 1, 2, 3 ve 6 sayılarına tam olarak bölünebildiği için bir asal sayı değildir.
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  // console.log(isPrime(0)); false
  // console.log(isPrime(1)); false
  // console.log(isPrime(2)); true
  // console.log(isPrime(3)); true
  // console.log(isPrime(4)); false

