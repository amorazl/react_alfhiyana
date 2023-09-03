# Summary

Data Structure penting dipahami agar code berjalan tidak hanya efektif namun juga efisien, sehingga lebih mudah dipahami dan proses maintenance code lebih terstruktur.

### Introduction Data Structure

1. **Reading:** <br>
   name of the array variable with or without square brackets

2. **Searching** <br>
   array method: indexOf

3. **Inserting** <br>
   array method: push (add to the last sequence), splice (add in the middle of sequence)

4. **Deleting** <br>
   array method: shift (delete the first index), pop (delete the last index), splice (delete the middle index)

### Function

IIFE function (Immediately Invoked Function Expression), expression function, declaration function, arrow function.

properti umum dalam function:

- parameter
- function name
- return

### Object

1. object value: to get values of an object as an array
2. object keys: return array string of object
3. object entries: get the keys and values in an array, return array of array
4. object freeze: menetapkan object tidak bisa diubah/immutable
5. object assign: menetapkan suatu value or copy an object without modifying the original object

### Map

Merupakan sebuah object yang menyimpan id/key dan value.

### Set

Digunakan untuk mengubah atau menambahkan value yang tidak memiliki duplikat, dan memiliki return boolean. Kekurangannya yaitu harus melalui proses searching terlebih dahulu untuk memastikan value yang akan ditambahkan tidak sama dengan value yang sudah ada. Dengan begitu, `Set` lebih cocok digunakan jika kita tidak ingin ada kesamaan dalam array set meskipun memiliki steps yang lebih banyak.

---

# Latihan

## Soal Prioritas 1

Memasukkan setiap data yang telah berhasil di validasi ke dalam tabel

> Mengisi seluruh data form

![form-to-table](./screenshots/Form%20to%20Table.png)

> Data form masuk ke tabel

![add-to-table](./screenshots/Add%20to%20Table.png)

## Soal Prioritas 2

Jumlah dari data akan selalu bertambah jika user terus mengisi form tersebut.

> List table dari form yang diisi berulang kali

![table-list](./screenshots/List%20Table.png)

## Soal Eksplorasi

Membuat tombol `Delete` yang selalu menghapus nilai terakhir yang di masukkan oleh user.

> Tombol `Delete` akan menghapus row terakhir atau input yang baru dimasukkan oleh user.

![delete-last-row](./screenshots/Delete%20Last%20Row.png)

> Tombol `Delete All` akan menghapus seluruh data dalam tabel

![delete-all](./screenshots/Delete%20All.png)

Membuat tombol search mencari data product berdasarkan Product Name

![search-product](./screenshots/Search%20Product.png)
