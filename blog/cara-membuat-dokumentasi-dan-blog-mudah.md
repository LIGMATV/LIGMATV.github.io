# Cara Membuat Dokumentasi dan Blog Mudah!

![img](../img/04-20-2024-(1).png)

[VitePress](https://vitepress.dev/)? [VuePress](https://vuepress.vuejs.org/)? [Docusaurus](https://docusaurus.io/)? [Jekyll](https://jekyllrb.com/)?  
Mereka semua adalah generator dokumentasi terbaik di GitHub, apa lagi kebanyakan dari mereka dalah gratis dan open source.  
Tapi jika kita membicarkan [GitBook](https://www.gitbook.com/), [Blogger](https://www.blogger.com/), dan [Wordpress](https://wordpress.com/), sepertinya mereka terlihat payah jika dibandingkan dengan generator dokumentasi diatas.

### Docsify, generator dokumentasi yang sempurna

Saya dulu menggunakan [Blogger](https://www.blogger.com/), [Jekyll](https://jekyllrb.com/), dan [VitePress](https://vitepress.dev/).  
Namun, saya baru saja menemukan **"Alternatif sempurna"** bernama Docsify.  
Saya hanya perlu untuk menambahkan ``<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">`` di head dan ``<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>``, lalu Docsify dengan mudahnya menambahkan dirinya ke seluruh file dalam folder.   
Simpelnya seperti ini kode di ``index.html`` :

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
</html>
```

Lalu buat file "README.md", Kita bisa menulis teks markdown mengguanakan [Stackedit](https://stackedit.io/app)!

![](../img/04-20-2024-(2).png)

Lalu kode markdown yang ada di sebelah kiri, pindahkan ke file README.md dan ini hasilnya di Docsify

# ![](../img/04-20-2024-(3).png) :id=preview-1 <!-- {docsify-ignore} -->

Tapi tutorial belum dimulai! Begini caranya

# 1. Download dan install Nodejs

- [Link Download Nodejs ↗️](https://nodejs.org/en/download)
- [Link Cara Menginstal Nodejs ↗️](https://palcomtech.ac.id/node-js-memahami-dasar-dasar-dan-proses-instalasi/) ~~Untuk noob~~

# 2. Install Docsify CLI

- Buka CMD (Command prompt) *atau di Terminal*
- Paste kode ini ke CMD, dan tunggu proses penginstalan :
```cmd
npm i docsify-cli -g
```

# 3. ``docsify serve``
- Klik kanan pada folder yang berisi file index.html dan README.md yang kita buat tadi
![](../img/04-20-2024-(4).jpg)
dan tekan Buka di Terminal! *atau Command prompt*
- Paste kode ini ke CMD
```cmd
docsify serve
```
- Jika CMD bilang sperti ini :
```cmd
Serving Path:\ke\foldermu now.
Listening at http://localhost:3000
```
artinya berhasil, lalu buka http://localhost:3000!  
*Url yang diberikan CMD bisa bermacam-macam, seperti http://localhost:56297/.*
- Dan itu! Docsify dengan mudah hanya membutuhkan 2 garis kode untuk menjalankan seluruh Docsify.

# 4. Kustomisasi gaya

1. Font  
Font bawaan Docsify adalah Source Sans Pro, tapi kita bisa mengubahnya! Seperti dari [Google Fonts](https://fonts.google.com/).
Misalnya saya ingin menggunakan font [Figtree](https://fonts.google.com/specimen/Figtree) *(Seperti yang digunakan website ini)*  
Beginilah kodenya **(Lihat ``<style>``)** :

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

body {
    font-family: "Figtree", sans-serif;
}
</style>
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
</html>
```
Dan ini tampilan barunya! *Kembali ke [preview awal](#preview-1)*
![](../img/04-20-2024-(5).png)

2. Warna tema  
Ubah warna docsify sesuai dengan temamu, contohnya #![](https://badge.eu.org/static/ff0000/ff0000) **(Lihat ``:root``)**

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  --theme-color: #ff0000;
}

body {
    font-family: "Figtree", sans-serif;
}
</style>
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
</html>
```

Dan tombol toggle sidebar yang ada di bawah kiri, berubah warna dari hijau ke merah!

![](../img/04-20-2024-(8).png)

Tapi bukan hanya itu, warna teks link, dan button di coverpage juga bisa berubah megikuti warna ``--theme-color``!

# 5. Lapisi coverpage
Tambahkan coverpage atau landing page untuk halaman awal.  
Beginilah kodenya **(Lihat ``<script>``)**

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

body {
    font-family: "Figtree", sans-serif;
}
</style>
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
<script>
  window.$docsify = {
    coverpage: true
  }
</script>
</html>
```
Dan coverpagenya masih kosong (Biasanya isinya gradasi)  
Cara mengedit coverpage-nya :  
1. Buat file baru bernama ``_coverpage.md``
2. Ini contoh kode di ``_coverpage.md`` :

```_coverpage.md
<!-- _coverpage.md -->

![logo](https://ligmatv.vercel.app/img/logo.svg ':size=200')

# LIGMATV <small>2024</small>

> A magical documentation site generator.

Cool  
*Cool*  
**Cool**   

[GitHub](https://github.com/LIGMATV/Experiment/tree/main/tutorial-docsify)
[Get Started](#main)
```

Dan ini tampilannya :

![](../img/04-20-2024-(6).png)

Gradasi backgroundnya berubah-ubah setiap reload, bukankah itu menarik?! **Tidak?** Begini cara agar backgroundnya tidak berubah-ubah :  
*(Tambahkan kode ini ke ``_coverpage.md``)*

```_coverpage.md
<!-- background color -->

![color](#07bbbc)
```

![](../img/04-20-2024-(7).png)

atau mungkin background gambar:

```_coverpage.md
<!-- background image -->

![](img/background.jpg)
```

# 6. Sidebar untuk kemudahan
Dengan sidebar, kita bisa menambahkan fitur seperti table of content, link dan search.  
Beginilah kodenya **(Lihat ``<script>``)**

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  --theme-color: #ff0000;
}

body {
    font-family: "Figtree", sans-serif;
}
</style>
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
<script>
  window.$docsify = {
    coverpage: true,
    loadSidebar: true,
      subMaxLevel: 3,
      name: 'Blogkuu',
  }
</script>
</html>
```

``subMaxLevel`` adalah maksimal tingkatan heading yang boleh ditampilkan ke sidebar. Jika maksimalnya adalah 3,
maka yang boleh masuk ke sidebar adalah Heading 1 - 3 (`#`, `##`, `###`)  
*(``subMaxLevel`` adalah fitur table of content untuk setiap file markdown, ini tidak berpengaruh ke link yang ada di sidebar)*  
Dan juga ``name`` untuk menaruh nama blogmu di sidebar

Cara mengedit sidebarnya : 
1. Buat file baru bernama ``_sidebar.md``
2. Ini contoh kode di ``_sidebar.md`` :

```_sidebar.md
- This
  - [Is](https://example.com/)
  - [Cool](https://example.com/)
```

Dan ini tampilan sidebarnya sekarang! *(Di sebelah kiri)*

![](../img/04-20-2024-(9).png)

...dan itu semua hanyalah beberapa penyesuaian di Docsify, untuk lebih lanjut silahkan pelajari lebih bayak di [website Docsify](https://docsify.js.org/#/)!

Dan untuk saat ini, kita sudah mempunyai 4 file. Terima kasih sudah membaca!  
**atau lihat [source code dari website ini](https://github.com/LIGMATV/LIGMATV) 😎*

![](../img/04-20-2024-(10).jpg)

- [Source Code ↗️](#source-code)
- [Preview ↗️](https://ligmatv-tutorial-docsify.vercel.app/)

# Source Code

<!-- tabs:start -->

#### **index.html**

```index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  --theme-color: #ff0000;
}

body {
    font-family: "Figtree", sans-serif;
}
</style>
</head>
<body>
  <div id="app"></div>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
<script>
  window.$docsify = {
    coverpage: true,
    loadSidebar: true,
      subMaxLevel: 3,
      name: 'Blogkuu',
  }
</script>
</html>
```

#### **README.md**

````README.md
# LIGMATV
Hello **bro** ~~*Cool*~~

## Demo

```README.md
# LIGMATV
Hello **bro** ~~*Cool*~~
```

> Sample quote

?> Sample hint

!> Sample warning 

````

#### **_coverpage.md**

```_coverpage.md
<!-- _coverpage.md -->

![logo](https://ligmatv.vercel.app/img/logo.svg ':size=200')

# LIGMATV <small>2024</small>

> A magical documentation site generator.

Cool  
*Cool*  
**Cool**   

[GitHub](https://github.com/LIGMATV/Experiment/tree/main/tutorial-docsify)
[Get Started](#main)

<!-- background color -->

![color](#07bbbc)
```

#### **_sidebar.md**

```_sidebar.md
- This
  - [Is](https://example.com/)
  - [Cool](https://example.com/)
```

<!-- tabs:end -->


Blog dibuat pada : 20 April 2024