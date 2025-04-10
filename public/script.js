document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      const usuarioValido = "admin";
      const passwordValida = "1234";

      if (user === usuarioValido && pass === passwordValida) {
        window.location.href = "./paginas/home.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  const welcomeBtn = document.getElementById("welcomeBtn");
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function () {
      alert("Bienvenido a la página principal");
    });
  }
});