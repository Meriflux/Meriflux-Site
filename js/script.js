// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketike menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// Klik di luar side bar untuk menghilangkan nav 
const menu = document.querySelector ('#menu');

document.addEventListener('click', function(e) {
if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
}
});


document.getElementById("buy").addEventListener("click", function() {
    belanja();
});


// Sistem Alert Sengaja saya nonaktifkan supaya nanti bisa kita lihat
// function belanja() {
    // Di sini Anda dapat menambahkan logika untuk menangani belanjaan, seperti menambahkan produk ke keranjang belanja
  //  alert("Pembelian Telah Berhasil, dan Akan direkam di data base");}

