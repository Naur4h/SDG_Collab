function hitungPerbandingan() {
            const hargaBensin = parseFloat(document.getElementById('jenisBahanBakar').value);
            const konsumsiBensin = parseFloat(document.getElementById('konsumsiBensin').value);
            const jarakHarian = parseFloat(document.getElementById('jarakHarian').value);
            const jenisPengisianDaya = parseFloat(document.getElementById('jenisPengisianDaya').value);
            const tarifListrik = 2467; // Tetap sesuai dengan catatan
            const konsumsiListrik = parseFloat(document.getElementById('konsumsiListrik').value);
            const kapasitasBaterai = parseFloat(document.getElementById('kapasitasBaterai').value);

            if (isNaN(hargaBensin) || isNaN(konsumsiBensin) || isNaN(jarakHarian) || isNaN(jenisPengisianDaya) || isNaN(tarifListrik) || isNaN(konsumsiListrik) || isNaN(kapasitasBaterai)) {
                alert('Harap masukkan angka yang valid di semua kolom.');
                return;
            }

            const biayaHarianBensin = (hargaBensin * jarakHarian) / konsumsiBensin;
            const biayaHarianListrik = (tarifListrik * jarakHarian) / konsumsiListrik;
            const biayaPengisianPerHari = (jarakHarian / (konsumsiListrik * kapasitasBaterai)) * jenisPengisianDaya;
            const totalBiayaHarianListrik = biayaHarianListrik + biayaPengisianPerHari;

            const penghematan = biayaHarianBensin - totalBiayaHarianListrik;
            const lebihHematListrik = totalBiayaHarianListrik < biayaHarianBensin;

            const hasilDiv = document.getElementById('hasil');
            hasilDiv.innerHTML = `
                <p>Biaya per Hari Kendaraan Bensin: Rp ${biayaHarianBensin.toFixed(2)}</p>
                <p>Biaya per Hari Kendaraan Listrik: Rp ${totalBiayaHarianListrik.toFixed(2)}</p>
                <p class="kesimpulan">${lebihHematListrik ? 'Kendaraan Listrik lebih hemat.' : 'Kendaraan Bensin lebih hemat.'}</p>
                <p class="kesimpulan">Anda bisa menghemat Rp ${Math.abs(penghematan).toFixed(2)} per hari.</p>
            `;
        }
