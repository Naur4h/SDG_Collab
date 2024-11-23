var data = {
    "the location of new energy": [
        {
            "name": "PLTS Kupang",
            "deskripsi": "Pembangkit Listrik Tenaga Surya di Kupang, NTT",
            "koordinat" : [-10.1788, 123.5977]
        },
        {
            "name": "PLTB Sidrap",
            "deskripsi": "Pembangkit Listrik Tenaga Bayu di Sidrap, Sulawesi Selatan",
            "koordinat": [-3.9509, 119.8777]
        },
        {
            "name": "PLTMG Sorong",
            "deskripsi": "Pembangkit Listrik Tenaga Mesin Gas dengan Energi Terbarukan di Sorong, Papua Barat",
            "koordinat": [-0.8762, 131.2558]
        },
        {
            "name": "PLTA Cirata",
            "deskripsi": "Pembangkit Listrik Tenaga Air di Cirata, Jawa Barat.",
            "koordinat": [-6.8086, 107.3266]
        }
    ]
}
exports.get_all = function(request,respon,next){
    respon.json(data)
}