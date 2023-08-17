# Summary

### Version Control System (Git)

Version Control System adalah sebuah tool untuk mengatur perubahan dan konfigurasi dari suatu source code. Github merupakan git repository yang memiliki berbagai fitur kompleks untuk mendukung proses pengembangan project. Git dapat melacak seluruh perubahan dan menyimpan history perubahan tersebut. Dengan demikian developer dapat dengan mudah menemukan error apabila terjadi kesalahan.

Terdapat 3 tahapan dalam staging area, yaitu:

- Working directory
- Staging area
- Repository

### Git Command & Conflict

mempelajari command git, diantaranya:

- git stash
- git reset
- git checkout
- git merge
- git diff

### Github branch

Mempelajari cara menggunakan branch untuk pengembangan proyek bersama. Branch yang baik memiliki 3 fitur utama yaitu main > development > features.

***

# Latihan

>**1. Membuat branch baru dengan command:**
```
git checkout -b feat/02-git
```
maka git akan membuat new branch dan langsung switch ke branch baru tersebut.

![git-checkout](https://github.com/amorazl/react_alfhiyana/assets/107467634/56ef8532-8f91-49a4-b9cf-5f018613afee)


>**2. Modifikasi file dan push changes**

setelah masuk ke branch baru, buat modifikasi dan push perubahan tersebut dengan command di bawah ini.

![Screen Shot 2023-08-17 at 21 18 18](https://github.com/amorazl/react_alfhiyana/assets/107467634/fa1e9e36-c4a5-461e-8f9b-92bba96d7d34)


>**3. Membuat pull request**

selanjutnya yaitu membuat pull request ke branch main dan masukkan deskripsi lebih detail.

![Screen Shot 2023-08-17 at 21 19 18](https://github.com/amorazl/react_alfhiyana/assets/107467634/1c979064-413d-4e48-9189-5a4186253546)


>**4. Merge pull request**

setelah pull request dibuka, kita dapat merge dari branch ```feat/02-git``` dengan ```main``` jika tidak ada conflict dengan menekan tombol **merge pull request**

![Screen Shot 2023-08-17 at 21 20 12](https://github.com/amorazl/react_alfhiyana/assets/107467634/2bf79e69-c06b-4213-a74a-4dc4e8daad80)


>**5. Pull request berhasil dilakukan**

jika merge pull request telah selesai dilakukan, maka pull request tersebut akan langsung ditutup. 

![Screen Shot 2023-08-17 at 21 20 23](https://github.com/amorazl/react_alfhiyana/assets/107467634/e0bb6988-e6c9-40b6-8c0c-4ea22d9cdd1d)
