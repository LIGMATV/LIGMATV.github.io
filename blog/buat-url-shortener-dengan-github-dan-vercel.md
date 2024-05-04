# Buat Url Shortener Dengan Github Dan Vercel!

![](https://github.com/LIGMATV/LIGMATV/assets/143163098/3d8709b9-cd07-4a5f-87fc-77d11975586b)

Kita semua tau tentang penyingkat url, seperti [bit.ly](https://bitly.com/), [rebrand.ly](https://www.rebrandly.com/) dan [tinyurl.com](https://tinyurl.com/).

Tapi dari semua penyingkat url itu, pasti terdapat bagian layanan berbayar, jika kita hanya menggunakan bagian gratis, mungkin kita akan dibatasi url yang boleh disingkat. Tapi tidak untuk kebanyakan [url shortener gratis](https://github.com/LIGMATV/Awesome-URL-Shortener?tab=readme-ov-file#free-no-pricing) lainnya yang sama sekali tidak memiliki layanan berbayar/premium.

Tapi daripada menggunakan url shortner tersebut, mengapa tidak membuatnya senidri? Dengan GitHub dan Vercel, kita sudah bisa menciptakan url shortner untuk kita sendiri!

### 1. Akun GitHub dan Vercel

* Untuk membuat akun GitHub, lihat instruksi [di sini](https://gist.github.com/LIGMATV/47d622a58d6e99f860299a199765b182#file-tutorial-membuat-akun-github-md)
* Untuk membuat akun Vercel, lihat instruksi [di sini](https://gist.github.com/LIGMATV/4e1f78b21d8a57981998da2b7d97ccc9#file-tutorial-membuat-akun-vercel-md)

### 2. Deploy ke Vercel

* Pertama, tekan tombol ini: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkdensport%2Fvercel-shorturl&project-name=shorturl&repository-name=shorturl)
* Lalu, tekan tombol <img src="https://github.com/LIGMATV/LIGMATV/assets/143163098/558831ad-8a52-42d4-8f3f-56c6c414a6d7" alt="Girl in a jacket" width="80" height="36"> seperti di gambar
![](https://github.com/LIGMATV/LIGMATV/assets/143163098/5f308fb6-7963-45d3-b91a-b6bf834856eb)
* Lalu, akan muncul halaman ini yang artinya berhasil
![](https://github.com/LIGMATV/LIGMATV/assets/143163098/453ec5b0-de44-4b5b-a60d-698671d13934)

### 3. Singkat url dengan mengedit redirects.yml di GitHub

* Pergi ke [GitHub](https://github.com/dashboard) dan di tab sebelah kiri **Top Repositories**, pilih **Username/shorturl**, dan buka file **redirects.yml**
![Screenshot Capture - 2024-02-28 - 17-58-39](https://github.com/LIGMATV/LIGMATV/assets/143163098/24ea7054-8422-4155-a680-f028d0a3700b)
* Tekan tombol ![pencil-16](https://github.com/LIGMATV/LIGMATV/assets/143163098/f6acb8a8-5feb-4077-9693-68f85ac74aff) dan kita bisa lihat bahwa kita bisa langsung menyingkat url dengan mengubah kodenya. Cara yang paling mudah adalah menggunakan tools [redirects.yml Generator](https://2ools.vercel.app/redirects.yml)
![](https://github.com/LIGMATV/LIGMATV/assets/143163098/c6bca1a1-9d60-4174-8a70-11792b0f52b5)
* Salin dan tempel isi kode dari redirects.yml Generator ke redirects.yml tersebut

### 4. Dimana url versi singkatnya?

* Pegi ke [Vercel](https://vercel.com/) dan pilih project bernama **shorturl** dan lihat di bagian **Domains**
![Screenshot Capture - 2024-02-28 - 19-07-36](https://github.com/LIGMATV/LIGMATV/assets/143163098/ec349c4e-d0e4-4783-87e1-cae14aacf706)
* Sebagai contoh, jika domainnya adalah **ligmatv.vercel.app**, jika **Alias**nya adalah cool, maka urlnya menjadi **ligmatv.vercel.app/cool**, atau lebih singkat lagi, ganti vercel.app ke now.sh, jadi **ligmatv.now.sh/cool**

### Selesai!

Blog dibuat pada : 29 Februari 2024
