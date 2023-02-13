// Fungsi untuk memulai waktu
function startTime() {
  // Membuat objek Date untuk mengambil waktu saat ini
  var today = new Date();

  // Mengambil jam, menit, dan detik dari objek Date
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // Memastikan bahwa bagian menit dan detik memiliki 2 digit
  m = checkTime(m);
  s = checkTime(s);

  // Menampilkan waktu sekarang di dalam elemen HTML dengan ID "clock"
  document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;

  var currentTime = new Date();
  // Membuat objek Date untuk tanggal 1 Januari 2024
  var targetTime = new Date('January 1, 2024');

  // Menghitung selisih waktu antara waktu saat ini dan tanggal 1 Januari 2024 (dalam milisecond)
  var timeDifference = targetTime - currentTime;

  // Mengonversi selisih waktu menjadi detik
  var seconds = Math.floor(timeDifference / 1000);

  // Mengonversi detik menjadi menit
  var minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  // Mengonversi menit menjadi jam
  var hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  // Mengonversi jam menjadi hari
  var days = Math.floor(hours / 24);
  hours = hours % 24;

  // Memastikan bahwa bagian menit, detik, dan jam memiliki 2 digit
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  hours = checkTime(hours);

  // Menampilkan waktu tersisa di dalam elemen HTML dengan ID "clock"
  document.getElementById('countdown').innerHTML = days + ' hari ' + hours + ' Jam :' + minutes + ' Menit:' + seconds + 'detik';

  // Menjalankan fungsi startTime setiap 1 detik (1000 milisecond)
  var t = setTimeout(startTime, 1000);
  // Menjalankan fungsi startTime setiap 0.5 detik (500 milisecond)
  var time = setTimeout(startTime, 500);
}

// Fungsi untuk memastikan bahwa bagian menit dan detik memiliki 2 digit
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
