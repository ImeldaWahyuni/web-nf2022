function validasi() {
    var nama = document.getElementById("Nama").value;
    var email = document.getElementById("Email").value;
    var jam = document.getElementById("Jam").value;
    var tujuan = document.getElementById("Tujuan").value;
    var tujuan = document.getElementById("Jumlah").value;
    if(nama =="" && email =="" && jam == "" && tujuan == "") {
        alert("Isi Data Anda Dengan Benar!!");
    }   else {
        alert("Terimakasih Data Anda Sudah Benar");
    }
}