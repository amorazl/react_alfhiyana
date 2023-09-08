# Summary

### Definisi Clean Code

Clean code mengacu pada kode yang terstruktur dengan baik, mudah dibaca, dan di maintain serta mudah dipahami oleh developer.Kita perlu menerapkan clean code karena beberapa aspek, di antaranya: untuk memudahkan kerja sama dalam tim, untuk mengembangkan feature, dan faster development.

### Penerapan Clean Code

Berikut adalah hal yang dapat dilakukan untuk menerapkan clean code:

1. Buat variable mudah dieja agar mudah dipahami
2. Membuat variable singkat namun mendekripsikan konteks dengan baik
3. Konsisten dalam penamaan variable
4. Hindari penambahan konteks yang tidak perlu
5. KISS (Keep It So Simple) & DRY (Don’t Repeat Yourself), buat code sesimple mungkin dan hindari duplikasi code.

### Ekstensi Pendukung

1. **Refactoring**

   Proses mengubah struktur code agar lebih mudah melakukan maintenance dengan prinsip KISS maupun DRY.

2. **Eslint (code static analyze)**

   Merupakan sebuah tools untuk membantu menemukan dan memperbaiki problems/error pada code javascript.

3. **Prettier (formatter)**

   Merupakan sebuah formatter untuk merapikan bentuk code sehingga lebih terstruktur. Contohnya memiliki aturan `print width` untuk mengatur lebar baris code, memberikan spasi pada tiap tanda kurung, dll.

---

# Latihan

### Soal Prioritas 1

1. Kemudahan baca: Kode harus mudah dibaca, dipahami, dan dipelihara, dengan menggunakan nama variabel yang bermakna dan komentar di tempat yang diperlukan.

2. Konsistensi: Kode harus mengikuti konvensi nama yang konsisten dan gaya pengkodean sepanjang proyek.

Penamaan variable dan id yang konsisten

```
const productName = document.getElementById("productName");
const productNameCount = document.getElementById("productNameCount");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productImage = document.getElementById("productImage");
const productFreshness = document.getElementsByName("productFreshness");
const productDesc = document.getElementById("productDesc");
const submitButton = document.getElementById("submitButton");
```

### Soal Prioritas 2

1. Simpel: Kode harus sesederhana mungkin, menghindari logika kompleks dan kode yang tidak perlu.

2. Efisiensi: Kode harus dioptimalkan untuk performa dan menghindari perhitungan atau operasi yang tidak perlu.

### Soal eksplorasi

1. Kemudahan uji: Kode harus mudah diuji dan harus meliputi tes otomatis untuk memvalidasi fungsinya.

2. Penanganan error: Kode harus memiliki mekanisme penanganan error yang tepat untuk menangani pengecualian dan masukan yang tidak terduga.

3. Dokumentasi: Kode harus mencakup dokumentasi dan komentar yang relevan untuk membantu memahami tujuan dan fungsionalitas kode.

Contoh penerapan komentar pada code

```
// calculate the char remaining must not exceed 25
const charactersRemaining = 25 - productNameValue.length;
productNameCount.textContent = `Characters remaining: ${charactersRemaining}`;
if (productNameValue.length === 10) {
    alert("Last Name must not exceed 25 characters.");
}
if (productNameValue.length > 25) {
    productName.value = productNameValue.slice(0, 25);
}
```
