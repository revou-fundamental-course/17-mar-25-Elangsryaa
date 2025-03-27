//Ini Javascript External
function showSection(sectionId) {
    // Sembunyikan semua section
    document.getElementById('persegi').style.display = 'none';
    document.getElementById('persegi-panjang').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';

    // Hapus class active dari semua button
    document.querySelectorAll(".nav-fitur button").forEach(button => {
        button.classList.remove("active");
    });
    // Tambahkan class active pada button yang diklik
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add("active");
}

window.onload = function() {
    showSection('persegi');
};

document.addEventListener("DOMContentLoaded", function () {
    // fungsi menghitung luas persegi
    function hitungLuasPersegi() {
        let sisi = parseFloat(document.getElementById("luas-sisi-persegi").value.trim());
        let hasilElement = document.getElementById("hasil-luas-persegi");
        
        if (isNaN(sisi) || sisi <= 0) {
            hasilElement.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
            hasilElement.style.display = "block";
            return;
        }

        let luas = sisi * sisi;
        hasilElement.innerHTML = `<strong>Hasil:</strong><br> L = S × S <br>L = ${sisi} × ${sisi} <br>L = <b>${luas}</b>`;
        hasilElement.style.display = "block";
    }
    // fungsi menghitung keliling persegi
    function hitungKelilingPersegi() {
        let sisi = parseFloat(document.getElementById("keliling-sisi-persegi").value.trim());
        let hasilElement = document.getElementById("hasil-keliling-persegi");

        if (isNaN(sisi) || sisi <= 0) {
            hasilElement.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
            hasilElement.style.display = "block";
            return;
        }

        let hasil = 4 * sisi;
        hasilElement.innerHTML = `<strong>Hasil:</strong><br> K = 4 × S <br>K = 4 × ${sisi} <br>K = <b>${hasil}</b>`;
        hasilElement.style.display = "block";
    }
    // fungsi menghitung luas persegi panjang
    function hitungLuasPersegiPanjang() {
        let panjang = parseFloat(document.getElementById("luas-panjang-persegi-panjang").value.trim());
        let lebar = parseFloat(document.getElementById("luas-lebar-persegi-panjang").value.trim());
        let hasilElement = document.getElementById("hasil-luas-persegi-panjang");

        if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
            hasilElement.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
            hasilElement.style.display = "block";
            return;
        }

        let hasil = panjang * lebar;
        hasilElement.innerHTML = `<strong>Hasil:</strong><br> L = P × L <br>L = ${panjang} × ${lebar} <br>L = <b>${hasil}</b>`;
        hasilElement.style.display = "block";
    }
    // fungsi menghitung keliling persegi panjang
    function hitungKelilingPersegiPanjang() {
        let panjang = parseFloat(document.getElementById("keliling-panjang-persegi-panjang").value.trim());
        let lebar = parseFloat(document.getElementById("keliling-lebar-persegi-panjang").value.trim());
        let hasilElement = document.getElementById("hasil-keliling-persegi-panjang");

        if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
            hasilElement.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
            hasilElement.style.display = "block";
            return;
        }

        let hasil = 2 * (panjang + lebar);
        hasilElement.innerHTML = `<strong>Hasil:</strong><br> K = 2 × (P + L) <br>K = 2 × (${panjang} + ${lebar}) <br>K = <b>${hasil}</b>`;
        hasilElement.style.display = "block";
    }
    // button hitung luas dan keliling persegi dan persegi panjang
    document.getElementById("hitung-luas-persegi").addEventListener("submit", function (event) {
        event.preventDefault();
        hitungLuasPersegi();
    });
    document.getElementById("hitung-keliling-persegi").addEventListener("submit", function (event) {
        event.preventDefault();
        hitungKelilingPersegi();
    });
    document.getElementById("hitung-luas-persegi-panjang").addEventListener("submit", function (event) {
        event.preventDefault();
        hitungLuasPersegiPanjang();
    });
    document.getElementById("hitung-keliling-persegi-panjang").addEventListener("submit", function (event) {
        event.preventDefault();
        hitungKelilingPersegiPanjang();
    });
});

// button reset
document.querySelectorAll("button[type='reset']").forEach(button => {
    button.addEventListener("click", function () {
        let form = this.closest("form");
        let hasil = form.querySelector(".hasil");

        if (hasil) {
            hasil.innerHTML = "";
            hasil.style.display = "none";
        }

        form.reset();
    });
});
