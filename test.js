
const readlineTerm = require('node:readline'); // mengambil module readline bawaan Node.js agar program dapat menerima input dan menampilkan output melalui terminal

const readL = readlineTerm.createInterface({ // initialize interface readline yang menghubungkan input dan output terminal dengan program
  input: process.stdin,                      // menentukan bahwa input berasal dari keyboard pengguna melalui standard input
  output: process.stdout                     // menentukan bahwa output ditampilkan ke terminal melalui standard output
});

function maskEmail(email) { // membuat function maskEmail dengan parameter email yang berisi string email yang akan diproses
  const atIndexOf = email.indexOf("@"); // mencari posisi index karakter "@" pada email; contoh "asep@gmail.com" menghasilkan index 4 karena index dimulai dari 0
  const header = email.slice(0, 1); // mengambil karakter pertama email, mulai dari index 0 sampai sebelum index 1; contoh "asep@gmail.com" menghasilkan "a"
  const bottom = email.slice(atIndexOf - 1); // mengambil string mulai dari satu karakter sebelum "@" sampai akhir email; jika index "@" adalah 4, slice(3) menghasilkan "p@gmail.com
  const middle = "*".repeat(atIndexOf - 2); // membuat string berisi tanda bintang sebanyak jumlah karakter yang akan disamarkan; atIndexOf dikurangi 2 karena karakter pertama dan terakhir sebelum "@" tetap dipertahankan
  return header + middle + bottom; // menggabungkan karakter pertama, tanda bintang, dan bagian akhir email menjadi satu string, kemudian mengembalikan hasilnya kepada pemanggil function
}

readL.question('Please Enter Your Email Here :', (email) => { // menampilkan pertanyaan pada terminal dan menerima input pengguna; callback dijalankan setelah pengguna memasukkan jawaban, sedangkan parameter email menampung input tersebut
  console.log(`Email Masked Here : ${maskEmail(email)}`); // memanggil maskEmail dengan input pengguna sebagai argument, menerima hasil return dari function, kemudian menampilkannya di terminal
  readL.close(); // menutup interface readline setelah input selesai diproses agar program tidak terus menunggu input baru
});
