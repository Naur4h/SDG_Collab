exports.calculate_data = function(request,respon,next){
            const hargaBensin = request.body.hargabensin;
            const konsumsiBensin = request.body.konsumsiBensin;
            const jarakHarian = request.body.jarakHarian;
            const jenisPengisianDaya = request.body.jenisPengisianDaya;
            const tarifListrik = 2467; // Tetap sesuai dengan catatan
            const konsumsiListrik = request.body.konsumsiListrik;
            const kapasitasBaterai = request.body.kapasitasBaterai;
        
            const biayaHarianBensin = (hargaBensin * jarakHarian) / konsumsiBensin;
            const biayaHarianListrik = (tarifListrik * jarakHarian) / konsumsiListrik;
            const biayaPengisianPerHari = (jarakHarian / (konsumsiListrik * kapasitasBaterai)) * jenisPengisianDaya;
            const totalBiayaHarianListrik = biayaHarianListrik + biayaPengisianPerHari;
            const penghematan = biayaHarianBensin - totalBiayaHarianListrik;
            const lebihHematListrik = totalBiayaHarianListrik < biayaHarianBensin;
    respon.json(request.body)}
