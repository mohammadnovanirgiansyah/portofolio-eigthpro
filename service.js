// Ambil semua elemen layanan
const serviceElements = document.querySelectorAll('.service');

// Tambahkan event listener 'mouseover' dan 'mouseout' untuk setiap elemen layanan
serviceElements.forEach(service => {
  service.addEventListener('mouseover', () => {
    // Tambahkan kelas 'highlight' saat mouse berada di atas layanan
    service.classList.add('highlight');
  });

  service.addEventListener('mouseout', () => {
    // Hapus kelas 'highlight' saat mouse keluar dari layanan
    service.classList.remove('highlight');
  });
});
