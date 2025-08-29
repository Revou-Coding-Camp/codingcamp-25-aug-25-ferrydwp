// Greeting
document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.getElementById("welcome-text");
  let name = prompt("Masukkan nama kamu:");
  if (name) {
    welcomeText.textContent = `Hi ${name}, Welcome To Yorozuya`;
  }
});

// Form Handling
document.getElementById("message-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("user-message").value;

   const year = new Date(birthdate).getFullYear();
  if (year < 1900 || year > new Date().getFullYear()) {
    alert("Tahun lahir harus antara 1900 - " + new Date().getFullYear());
    return;
  }


  const currentTime = new Date().toString();

  document.getElementById("output-box").innerHTML = `
    <p><b>Current time:</b> ${currentTime}</p>
    <p><b>Nama:</b> ${name}</p>
    <p><b>Tanggal Lahir:</b> ${birthdate}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${message}</p>
  `;
});


