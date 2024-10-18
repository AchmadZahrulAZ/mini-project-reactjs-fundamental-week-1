// ###### Hamburger Menu ######

// Inisialisasi variabel
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Tambahkan event listener untuk mengubah kelas saat tombol diklik
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Tambahkan event listener untuk menutup menu saat item navigasi diklik
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ###### End Hamburger Menu ######

// ###### Scroll to Top ######

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah reload halaman saat form disubmit

  // Mengambil inputan dari form
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Menyusun data JSON yang akan dikirim ke API
  const data = {
    to: 'achmadzahrul01@gmail.com',
    name: name,
    subject: subject,
    text: message,
  };

  // Mengirim data ke API menggunakan fetch
  fetch('https://lumoshive-academy-email-api.vercel.app/send-email', {
    method: 'POST',
    headers: {
      'x-api-key': 'RJS1-202401',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data), // Mengkonversi object JavaScript ke JSON string
  })
    .then((response) => response.json()) // Parsing response dari JSON
    .then((data) => {
      // Menampilkan alert sukses dengan SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // Reset form setelah berhasil terkirim
      document.getElementById('contactForm').reset();
    })
    .catch((error) => {
      console.error('Error:', error);

      // Menampilkan alert error dengan SweetAlert2
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message!',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    });
});

//
