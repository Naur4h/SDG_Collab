var data = {
    "title":"ayo sayangi bumi kita",
    "berikut cara yang bisa kita": [
        {
            "gambar": "gambar/hemat energi.jpg",
            "title": "Hemat energi",
            "deskripsi": "Matikan peralatan listrik saat tidak digunakan untuk menghemat energi dan mengurangi tagihan listrik"
        },
        {
            "gambar": "gambar/fasilitas umum.jpg",
            "title": "Gunakan fasilitas umum",
            "deskripsi": "Untuk mengurangi polusi dan kemacetan, gunakan transportasi umum atau berbagi kendaraan dengan teman"
        },
        {
            "gambar": "gambar/terbarukan.jpeg",
            "title": "Mengurangi penggunaan energi fosil",
            "deskripsi": "Beralih ke energi terbarukan, seperti tenaga angin, surya, atau air",
        },
        {
            "gambar": "gambar/daur ulang.jpg",
            "title": "Daur ulang dan kurangi limbah",
            "deskripsi": "Mengurangi penggunaan barang sekali pakai dan mendaur ulang barang yang bisa dipakai kembali"
        },
        {
            "gambar": "gambar/tanaman.jpg",
            "title": "Menanam pohon",
            "deskripsi": "Menanam pohon membantu menyerap karbon dioksida dan menyediakan oksigen",
        },
        {
            "gambar": "gambar/produk lokal.jpeg",
            "title": "Mendukung produk lokal",
            "deskripsi": " Membeli produk lokal untuk mengurangi jejak karbon dan mendukung perekonomian lokal"
        }
    ]

}
exports.get_all = function(request,respon,next){
    respon.json(data)
}