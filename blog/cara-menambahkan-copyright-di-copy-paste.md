# Cara Menambahkan Copyright Di Copy Paste

![image](https://github.com/LIGMATV/LIGMATV/assets/143163098/2203b1fa-380e-4586-8236-ebb31eaa2128)

Setiap orang pasti pernah `Ctrl + C` dan `Ctrl + V` teks di Website.  
Benarkan? Ya! itulah yang dinamakan Copy and Paste.  
Jika kamu adalah penulis blog ataupun artikel, mungkin saja kamu resah jika ada saja orang yang menyalin teksmu bukan?  
Kamu tentu mengakalinya dengan memberi disclaimer, copyright, atau bahkan menghapus fitur Copy dan Paste! Tapi penyalin pun tidak akan kalah.
Cara mudah untuk menyalin teks yang tidak bisa disalin, dengan

* Kunjungi alamat `chrome://settings/content/javascript`
* Pada bagian Blokir, klik Tambahkan
* Masukan alamat website yang tidak bisa copas, kemudian Tambahkan
* Refresh halaman website tersebut

Dan kamu bisa menyalin teks lagi. Kenapa bisa? Karena fitur untuk mengubah Copy and Paste ini hanya dapat mengandalkan Javascript, dan bisa diakali dengan memblokir fitur Javascript dengan setting yang tersedia di browser, di website yang tidak bisa copas.

# Apakah perlu?

Ya, kalau pembacanya gaptek dan malas mengotak atik hanya untuk menyalin teks.  
Tidak, kalau pembacanya mencari lagi caranya di Google.  
Sebenarnya hal ini benar-benar tidak berguna.  
Mengapa? Selain bisa diakali dengan memblokir fitur Javascript, ini juga merugikan orang-orang yang terdesak dan perlu untuk menyalin teksmu untuk dokumennya.  
Yang pada akhirnya, mengedit ataupun menghapus fitur Copy and Paste, tidak ada hasilnya. 
 
Seperti yang dikatakan oleh aloisdg pada [pertanyaan StackOverflow ini](https://stackoverflow.com/questions/2026335/how-to-add-extra-info-to-copied-web-text) : 
> Are you sure you want to do this? As a user, I hate it and I will port this anger into your product: [Don't touch my clipboard!](https://alexanderell.is/posts/taking-over-my-clipboard/)

Dan jelas saja, pengguna dan pembaca membencinya. Tapi jika kamu memang mau dan tidak peduli itu berguna atau tidak, mari kita coba!

# Mari kita coba!
Kita hanya perlu menggunakan kode Javascript ini, dan taruh di website kalian!

```js
const year = new Date();
const copyListener = (event) => {
  const range = window.getSelection().getRangeAt(0),
    rangeContents = range.cloneContents(),
    info = `© ${year.getFullYear()} LIGMATV`,
    helper = document.createElement("div");

  helper.appendChild(rangeContents);

  event.clipboardData.setData("text/plain", `${helper.innerText}\n${info}`);
  event.clipboardData.setData("text/html", `${helper.innerHTML}<br>${info}`);
  event.preventDefault();
};
document.addEventListener("copy", copyListener);
```
Kode ini disebut sebagai solusi yang lebih kompleks untuk menangani pemformatan rich text.
Jadi tidak hanya teks biasa, performatan teks juga bisa disupport. misalnya di Microsoft Word!
Jika kamu ingin mengetahui apa saja fungsi-fungsi tiap baris, lihatlah kode ini
```js
const year = new Date();                             // Untuk memberi tanggal
const copyListener = (event) => {                    // Untuk mendeteksi penyalian
  const range = window.getSelection().getRangeAt(0), // Untuk mendeteksi teks yang diselect pengguna
    rangeContents = range.cloneContents(),           // Untuk mengklon teks yang diselect ke Javascript
    info = `© ${year.getFullYear()} LIGMATV`,        // Info tambahan di Copy Pastenya
    helper = document.createElement("div");          // Untuk menambahkan elemen khusus Javascript

  helper.appendChild(rangeContents);                 // Untuk mengklon teks yang diselect ke Javascript

  event.clipboardData.setData("text/plain", `${helper.innerText}\n${info}`);    // Jika di paste sebagai teks biasa
  event.clipboardData.setData("text/html", `${helper.innerHTML}<br>${info}`);   // Jika di paste sebagai richtext format
  event.preventDefault();                            // Membatalkan kode jika tidak terjadi
};
document.addEventListener("copy", copyListener);     // Untuk mendeteksi penyalian
```

Dan contohnya jika isi teksnya adalah **Halo** maka ketika di Copy Paste akan menjadi  
**Halo**  
**© 2024 LIGMATV**  

Tidak percaya? Silahkan coba!  
[Coba langsung demonya](https://jsbin.com/kiyejahava/edit?output)

Blog dibuat pada : 20 Maret 2024
