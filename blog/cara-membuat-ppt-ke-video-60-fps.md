# Cara Membuat Ppt Ke Video 60 Fps!

![image](https://i.imgur.com/Kqhy3t0.jpg)

Ubah presentasi ppt ke video dengan mudah!  
Tapi tunggu... bukan "[Export to Video](https://support.microsoft.com/en-gb/office/save-a-presentation-as-a-video%E2%80%8B-in-powerpoint-ba919059-523d-40a8-b99c-08d18996c09d)" yang biasa itu, itu hanya menyediakan 30 fps dan pengaturan biasa.  
PowerPoint memiliki fitur unik seperti Macros, yang ditulis dalam bahasa pemrograman Visual Basic for Applications (VBA).  
Contohnya, kita bisa membuat fitur Ekspor Video buatan kita sendiri dengan VBA! Begini caranya...

## 1. Pergi ke Tab View, dan tekan tombol Macros

![2024-03-30 15_28_24-](https://i.imgur.com/DHPHGgl.jpg)

## 2. Tulis Macro namenya "Video" dan tekan tombol Create

![2024-03-30 15_28_59-](https://i.imgur.com/MqClW3L.jpg)

## 3. Taruh kodenya, ini bagian paling penting...

![2024-03-30 15_29_43-](https://i.imgur.com/ubzsAWZ.jpg)

```vb
Sub Video()
If ActivePresentation.CreateVideoStatus <> ppMediaTaskStatusInProgress Then
For Each sld In ActivePresentation.Slides
    animationCount = sld.TimeLine.MainSequence.Count
    sld.SlideShowTransition.AdvanceOnTime = msoTrue
    sld.SlideShowTransition.AdvanceTime = animationCount * 3 + 3
Next

ActivePresentation.CreateVideo FileName:=Environ("USERPROFILE") & "\Videos\Videoku.mp4", _
UseTimingsAndNarrations:=True, _
VertResolution:=1080, _
FramesPerSecond:=60, _
Quality:=100
Else: MsgBox "There is another conversion to video in progress"
End If
End Sub
```

### Pengaturan, atur sesuai keinginan!

1. `sld.SlideShowTransition.AdvanceTime = animationCount * 3 + 3`  
Ini digunakan untuk mengatur durasi tiap slide, seperti 3 detik, maka tulis "3 + 3".
Begitupula jika ingin **2 detik**, maka tulis "**2 + 2**".

2. `ActivePresentation.CreateVideo FileName:=Environ("USERPROFILE") & "\Videos\Videoku.mp4", _`  
Ganti **Videoku.mp4** dengan nama file yang diingikan, ini bisa juga disimpan sebagai **Videoku.wmv**. Videonya akan tersimpan di folder Videos di User.
  
4. `VertResolution:=1080, _`  
Ini digunakan untuk mengatur resolusi, misal jika ingin FHD, maka tulis "**1080**" seperti di contoh.
* 4K : 2160   
* FHD : 1080
* HD : 720
* SD : 480

4. `FramesPerSecond:=60, _`  
Ini duganakan untuk mengatur Frame Per Second, ini bisa diganti dengan 30, 40, 50, **60** (Rekomendasi), 120, 144

## 5. Ekspor Videonya!
Pergi ke Tab View, tekan tombol Macros dan pilih "Video" lalu Run!

![2024-03-30 15_30_03-](https://i.imgur.com/MWHSAW9.jpg)

## 6. Selesai!

Pengeksporan sudah diproses, tunggu dan lihat hasilnya di folder Videos atau path `C:\Users\User\Videos`.

![2024-03-30 15_30_26-](https://i.imgur.com/0mxjuXy.jpg)

Blog dibuat pada : 30 Maret 2024