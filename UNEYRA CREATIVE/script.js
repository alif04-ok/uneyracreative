document.getElementById('whatsappButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;

    if (name && date && service) {
        const phoneNumber = '6288809768562'; // Ganti dengan nomor WhatsApp studio Anda (gunakan format internasional tanpa tanda +).
        const message = `Halo, saya ingin memesan studio dengan detail berikut:%0A
Nama: ${name}%0A
Tanggal: ${date}%0A
Layanan: ${service}%0A
Terima kasih!`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert('Harap isi semua data sebelum memesan.');
    }
});
