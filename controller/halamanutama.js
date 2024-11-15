
var data = {
    "what is new energy": [
        "Energi terbarukan adalah energi yang berasal dari sumber daya alam yang dapat diperbarui, seperti sinar matahari, angin, dan air. Sumber energi ini ramah lingkungan dan dapat digunakan berulang kali.",
        "Energi terbarukan ini merupakan sumber energi yang berasal dari alam yang mampu dibuat kembali secara bebas, serta mampu diperbarui terus-menerus dan tak terbatas. Energi terbarukan mampu diciptakan dengan memanfaatkan perkembangan teknologi yang semakin canggih, sehingga mampu menjadi sumber energi alternatif."
    ],
    "advantages png": "gambar/icon panel.png",
    "the important of new energy": [
        "1. Mengurangi emisi karbon dan perubahan iklim",
        "2. Sumber daya yang tidak habis",
        "3. Mengurangi polusi",
        "4. Menjamin energi berkelanjutan"
    ],
    "the examples of new energy": [
        {
            "gambar": "gambar/angin.jpg",
            "title": "Tenaga Angin",
            "paragraf": "Energi ini memanfaatkan kekuatan angin untuk menghasilkan listrik"
        },
        {
            "gambar": "gambar/panas bumi.jpg",
            "title": "Panas Bumi",
            "paragraf": "Energi panas bumi berasal dari panas dalam bumi dan digunakan untuk pembangkit listrik"
        },
        {
            "gambar": "gambar/panel surya.jpeg",
            "title": "Sinar Matahari",
            "paragraf": "Energi matahari dapat digunakan dengan panel surya untuk menghasilkan listrik"
        }
    ]
}
exports.get_all = function(request,respon,next){
    respon.json(data)
}