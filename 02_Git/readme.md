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

![git-checkout](/02_Git/screenshots/git-checkout.png)


>**2. Modifikasi file dan push changes**

setelah masuk ke branch baru, buat modifikasi dan push perubahan tersebut dengan command di bawah ini.

![git-push](/02_Git/screenshots/git-push.png)


>**3. Membuat pull request**

selanjutnya yaitu membuat pull request ke branch main dan masukkan deskripsi lebih detail.

![pull-request](/02_Git/screenshots/pull-request.png)


>**4. Merge pull request**

setelah pull request dibuka, kita dapat merge dari branch ```feat/02-git``` dengan ```main``` jika tidak ada conflict dengan menekan tombol **merge pull request**

![merge-pr](/02_Git/screenshots/merge-pr.png)


>**5. Pull request berhasil dilakukan**

jika merge pull request telah selesai dilakukan, maka pull request tersebut akan langsung ditutup. 

![merge-done](/02_Git/screenshots/merge-done.png)
