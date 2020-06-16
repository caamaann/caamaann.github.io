window.setTimeout('waktu()', 0);
window.setTimeout('tanggal()', 0);
var gmt = 0;

function clock(i = 0) {
    gmt = i;
}

function waktu() {
    var waktu = new Date();
    waktu = waktu.addHours(gmt);
    var jam = waktu.getUTCHours();
    var menit = waktu.getUTCMinutes();
    var detik = waktu.getUTCSeconds();

    setTimeout('waktu()', 500);
    if (jam < 10) {
        document.getElementById("jam").innerHTML = "0" + jam;
    } else {
        document.getElementById("jam").innerHTML = jam;
    }

    if (menit < 10) {
        document.getElementById("menit").innerHTML = "0" + menit;
    } else {
        document.getElementById("menit").innerHTML = menit;
    }

    if (detik < 10) {
        document.getElementById("detik").innerHTML = "0" + detik;
    } else {
        document.getElementById("detik").innerHTML = detik;
    }
}

function tanggal() {
    var tanggal = new Date();
    tanggal = tanggal.addHours(gmt);
    var hari;
    var bulan;
    var tahun = tanggal.getUTCFullYear();

    setTimeout('tanggal()', 500);
    switch (tanggal.getUTCDay()) {
        case 0:
            hari = "Minggu";
            break;
        case 1:
            hari = "Senin";
            break;
        case 2:
            hari = "Selasa";
            break;
        case 3:
            hari = "Rabu";
            break;
        case 4:
            hari = "Kamis";
            break;
        case 5:
            hari = "Jumat";
            break;
        case 6:
            hari = "Sabtu";
    }

    switch (tanggal.getUTCMonth()) {
        case 0:
            bulan = "Januari";
            break;
        case 1:
            bulan = "Februari";
            break;
        case 2:
            bulan = "Maret";
            break;
        case 3:
            bulan = "April";
            break;
        case 4:
            bulan = "Mei";
            break;
        case 5:
            bulan = "Juni";
            break;
        case 6:
            bulan = "Juli";
            break;
        case 7:
            bulan = "Agustus";
            break;
        case 8:
            bulan = "September";
            break;
        case 9:
            bulan = "Oktober";
            break;
        case 10:
            bulan = "November";
            break;
        case 11:
            bulan = "Desember";
    }
    document.getElementById("tanggal").innerHTML = hari + ", " + tanggal.getUTCDate() + " " + bulan + " " + tahun;
}

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

/* ada bug dimana navbar hilang*/
// function navBar() {
//     var nav = document.getElementById("subNav");
//     if (nav.style.display === "inline") {
//         nav.style.display = "none";
//     } else {
//         nav.style.display = "inline";
//     }
// }