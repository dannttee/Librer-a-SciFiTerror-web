document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('loginForm');
  const correoInput = form.correo;
  const contrasenaInput = form.contrasena;
  const correoError = document.getElementById('correoError');
  const contrasenaError = document.getElementById('contrasenaError');

  // Cargar datos guardados si "recordarme" está activo
  if (localStorage.getItem("rememberMe") === "true") {
    correoInput.value = localStorage.getItem("correo") || "";
    contrasenaInput.value = localStorage.getItem("contrasena") || "";
    document.getElementById("rememberMe").checked = true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    correoInput.classList.remove('is-invalid');
    contrasenaInput.classList.remove('is-invalid');
    correoError.style.display = 'none';
    contrasenaError.style.display = 'none';

    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value;

    const emailPattern = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    if (!correo || correo.length > 100 || !emailPattern.test(correo)) {
      correoInput.classList.add('is-invalid');
      correoError.style.display = 'block';
      valid = false;
    }

    if (!contrasena || contrasena.length < 4 || contrasena.length > 10) {
      contrasenaInput.classList.add('is-invalid');
      contrasenaError.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      return;
    }

    // Obtener usuarios guardados en registro
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario válido
    const usuarioValido = usuarios.find(u => u.correo1 === correo && u.password1 === contrasena);

    if (usuarioValido) {
      // Guardar datos si "recordarme" está activo
      const remember = document.getElementById("rememberMe").checked;
      if (remember) {
        localStorage.setItem("correo", correo);
        localStorage.setItem("contrasena", contrasena);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("correo");
        localStorage.removeItem("contrasena");
        localStorage.setItem("rememberMe", "false");
      }

      // Guardar el nombre completo para mostrar luego
      localStorage.setItem("usuarioNombre", usuarioValido.nombre);

      alert("Inicio de sesión exitoso.");
      window.location.href = "index.html"; // Cambia a tu página principal
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
});
