// Menampilkan pop-up ketika tombol "Book Now" di hero section diklik
document.querySelector(".hero button").addEventListener("click", function () {
  alert("Terima kasih! Silakan pilih paket yang Anda inginkan.");
});

// Menambahkan fungsi dinamis pada tombol "View Details" di setiap paket
const buttons = document.querySelectorAll(".package button");
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    alert(`Anda memilih paket ke-${index + 1}. Informasi lebih lanjut akan segera ditampilkan.`);
  });
});

// Menampilkan nama di bagian "About Us" setelah pengisian form di bagian kontak
document.querySelector("#contact form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman setelah submit

  const name = document.querySelector("#name").value;
  if (name) {
    alert(`Terima kasih, ${name}, kami akan segera menghubungi Anda!`);
  } else {
    alert("Silakan isi nama Anda.");
  }
});

// Menambahkan jam waktu nyata di footer
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  document.querySelector("footer").innerHTML = `&copy; 2025 ExploreWorld. All rights reserved. | Jam: ${time}`;
}
setInterval(updateClock, 1000);

// Highlight menu navigasi aktif saat di klik
const navLinks = document.querySelectorAll("header nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});