const lunches = [];                                                             // Membuat array menu makan siang kosong; array ini hanya dipakai jika dikirim sebagai argumen ke function.

function addLunchToEnd(lunches, items) {                                        // Membuat function untuk menambahkan items ke bagian akhir array lunches.
  lunches.push(items);                                                          // Menambahkan items sebagai satu elemen; jika items berupa array, array tersebut akan menjadi elemen bersarang.
  console.log(`${items} added to the end of the lunch menu.`);                  // Menampilkan pesan bahwa items ditambahkan ke akhir menu.
  return lunches;                                                               // Mengembalikan array lunches yang sudah diperbarui.
}                                                                               // Menutup function addLunchToEnd.

function addLunchToStart(lunches, item) {                                       // Membuat function untuk menambahkan satu item ke bagian awal array lunches.
  lunches.unshift(item);                                                        // Menyisipkan item di indeks pertama; unshift mengubah array dan menghasilkan panjang baru array.
  console.log(`${item} added to the start of the lunch menu.`);                 // Menampilkan pesan bahwa item ditambahkan ke awal menu.
  return lunches;                                                               // Mengembalikan array lunches yang sudah diperbarui, bukan nilai panjang dari unshift.
}                                                                               // Menutup function addLunchToStart.

function removeLastLunch(lunches) {                                             // Membuat function untuk menghapus item terakhir dari array lunches.
  if (lunches.length === 0) {                                                   // Memeriksa apakah array kosong sebelum mencoba menghapus item.
    console.log("No lunches to remove.");                                       // Menampilkan pesan jika tidak ada item yang bisa dihapus.
  } else {                                                                      // Menjalankan penghapusan jika array berisi setidaknya satu item.
    const removedItems = lunches.pop();                                         // Menghapus item terakhir dan menyimpan item yang dihapus ke removedItems.
    console.log(`${removedItems} removed from the end of the lunch menu.`);     // Menampilkan nama item yang dihapus dari akhir menu.
    return lunches;                                                             // Mengembalikan array menu setelah item terakhir dihapus.
  }                                                                             // Menutup kondisi pengecekan isi array.
}                                                                               // Menutup function removeLastLunch.

function removeFirstLunch(lunches) {                                            // Membuat function untuk menghapus item pertama dari array lunches.
  if (lunches.length === 0) {                                                   // Memeriksa apakah array kosong sebelum mencoba menghapus item.
    console.log("No lunches to remove.");                                       // Menampilkan pesan jika tidak ada item yang bisa dihapus.
  } else {                                                                      // Menjalankan penghapusan jika array berisi setidaknya satu item.
    const removedItem = lunches.shift();                                        // Menghapus item pertama dan menyimpan item yang dihapus ke removedItem.
    console.log(`${removedItem} removed from the start of the lunch menu.`);    // Menampilkan nama item yang dihapus dari awal menu.
    return lunches;                                                             // Mengembalikan array menu setelah item pertama dihapus.
  }                                                                             // Menutup kondisi pengecekan isi array.
}                                                                               // Menutup function removeFirstLunch.

function getRandomLunch(lunches) {                                              // Membuat function untuk memilih dan menampilkan satu item secara acak dari array lunches.
  if (lunches.length === 0) {                                                   // Memeriksa apakah tidak ada item yang bisa dipilih.
    console.log("No lunches available.");                                       // Menampilkan pesan jika array kosong.
  } else {                                                                      // Memilih item secara acak jika array tidak kosong.
    const random = Math.floor(Math.random() * lunches.length);                  // Menghasilkan indeks bilangan bulat acak dari 0 sampai indeks terakhir array.
    console.log(`Randomly selected lunch: ${lunches[random]}`);                 // Menampilkan item pada indeks acak tersebut.
  }                                                                             // Menutup kondisi pengecekan isi array.
}                                                                               // Menutup function getRandomLunch.

function showLunchMenu(lunches) {                                               // Membuat function untuk menampilkan semua item dalam array lunches.
  if (lunches.length > 0) {                                                     // Memeriksa apakah array memiliki item untuk ditampilkan.
    console.log(`Menu items: ${lunches.join(", ")}`);                           // Menggabungkan item dengan pemisah koma lalu menampilkan menu.
  } else if (lunches.length === 0) {                                            // Menangani kondisi ketika array tidak memiliki item.
    console.log("The menu is empty.");                                          // Menampilkan pesan bahwa menu kosong.
  }                                                                             // Menutup kondisi pengecekan isi array.
}                                                                               // Menutup function showLunchMenu.
showLunchMenu(["ASEP", "dimas", "reza"]);                                       // Memanggil function dengan array contoh; array lunches global di atas tidak digunakan di sini.
getRandomLunch(["ASEP", "dimas", "reza"]);                                      // Memilih dan menampilkan item acak dari array contoh yang diberikan.
