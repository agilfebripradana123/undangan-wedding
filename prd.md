# PRD — Website Undangan Pernikahan

## Bambang Ceper & Imroatus Angel

## 1. Overview

Membuat website undangan pernikahan digital untuk pasangan:

**Bambang Ceper & Imroatus Angel**

Website dibuat menggunakan **React.js frontend-only**, tanpa backend dan database.

Undangan dapat dibuka melalui link khusus yang berisi nama tamu. Nama tamu akan otomatis ditampilkan pada halaman undangan berdasarkan parameter URL.

Contoh:

`https://domain-undangan.com/?to=Agil%20Febri%20Pradana`

Ketika link dibuka, website menampilkan:

> Kepada Yth.  
> **Agil Febri Pradana**

---

# 2. Informasi Pernikahan

### Mempelai Pria

**Nama:** Bambang Ceper

### Mempelai Wanita

**Nama:** Imroatus Angel

### Nama Pasangan

**Bambang Ceper & Imroatus Angel**

### Tanggal Pernikahan

**1 September 2026**

---

# 3. Data Acara

## Akad Nikah

**Hari:** Selasa  
**Tanggal:** 1 September 2026

**Waktu:** 08.00 WIB — selesai

**Lokasi:**

Gedung Graha Cempaka  
Jl. Melati Indah No. 27  
Cempaka Wangi, Yogyakarta

## Resepsi

**Hari:** Selasa  
**Tanggal:** 1 September 2026

**Waktu:** 11.00 WIB — 14.00 WIB

**Lokasi:**

Gedung Graha Cempaka  
Jl. Melati Indah No. 27  
Cempaka Wangi, Yogyakarta

> Catatan: seluruh lokasi di atas adalah data fiktif untuk kebutuhan demo/project.

---

# 4. Google Maps

Sediakan tombol:

**Lihat Lokasi**

Tombol mengarah ke Google Maps menggunakan lokasi fiktif.

Contoh URL:

`https://www.google.com/maps/search/?api=1&query=Gedung+Graha+Cempaka+Yogyakarta`

Lokasi hanya digunakan sebagai contoh/demo.

---

# 5. Data Orang Tua

## Mempelai Pria

Putra pertama dari:

**Bapak Hendra Ceper**  
dan  
**Ibu Rina Marlina**

## Mempelai Wanita

Putri kedua dari:

**Bapak Ahmad Wijaya**  
dan  
**Ibu Siti Aminah**

Seluruh data keluarga merupakan data fiktif.

---

# 6. Opening / Cover

Ketika website pertama kali dibuka, tampilkan informasi:

**The Wedding Of**

**Bambang & Imroatus**

**1 September 2026**

Kemudian terdapat tombol:

**Buka Undangan**

Setelah tombol ditekan, pengguna masuk ke halaman utama undangan.

---

# 7. Personalisasi Nama Tamu

Website harus mendukung nama tamu melalui URL query parameter.

Format:

`/?to=NAMA_TAMU`

Contoh:

`https://domain-undangan.com/?to=Agil%20Febri%20Pradana`

Nama harus dibaca menggunakan JavaScript/React.

Contoh implementasi:

```jsx
const params = new URLSearchParams(window.location.search);

const guestName = params.get("to") || "Tamu Undangan";
```
