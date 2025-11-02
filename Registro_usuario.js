document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('registroForm');
  const nombreInput = form.nombre;
  const correo1Input = form.correo1;
  const correo2Input = form.correo2;
  const password1Input = form.password1;
  const password2Input = form.password2;
  const regionSelect = form.region;
  const comunaSelect = form.comuna;

  const nombreError = document.getElementById('nombreError');
  const correo1Error = document.getElementById('correo1Error');
  const correo2Error = document.getElementById('correo2Error');
  const password1Error = document.getElementById('password1Error');
  const password2Error = document.getElementById('password2Error');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    [nombreInput, correo1Input, correo2Input, password1Input, password2Input].forEach(el => el.classList.remove('is-invalid'));
    [nombreError, correo1Error, correo2Error, password1Error, password2Error].forEach(el => el.style.display = 'none');

    if (!nombreInput.value.trim()) {
      nombreInput.classList.add('is-invalid');
      nombreError.style.display = 'block';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    if (!correo1Input.value || correo1Input.value.length > 100 || !emailPattern.test(correo1Input.value)) {
      correo1Input.classList.add('is-invalid');
      correo1Error.textContent = 'Correo inválido o no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com máximo 100 caracteres.';
      correo1Error.style.display = 'block';
      valid = false;
    }

    if (!correo2Input.value || correo1Input.value !== correo2Input.value) {
      correo2Input.classList.add('is-invalid');
      correo2Error.style.display = 'block';
      valid = false;
    }

    if (!password1Input.value || password1Input.value.length < 4 || password1Input.value.length > 10) {
      password1Input.classList.add('is-invalid');
      password1Error.textContent = 'La contraseña debe tener entre 4 y 10 caracteres.';
      password1Error.style.display = 'block';
      valid = false;
    }

    if (!password2Input.value || password1Input.value !== password2Input.value) {
      password2Input.classList.add('is-invalid');
      password2Error.style.display = 'block';
      valid = false;
    }

    if (!regionSelect.value) {
      alert('Por favor seleccione una región.');
      valid = false;
    }
    if (!comunaSelect.value) {
      alert('Por favor seleccione una comuna.');
      valid = false;
    }

    if (!valid) {
      return; // No continuar si no es válido
    }

    // Obtener usuarios guardados o array vacío
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar que no exista el correo ya
    if (usuarios.some(u => u.correo1 === correo1Input.value.trim())) {
      alert("El correo ya está registrado");
      return;
    }

    // Guardar nuevo usuario (puedes guardar más campos si quieres)
    usuarios.push({
      nombre: nombreInput.value.trim(),
      correo1: correo1Input.value.trim(),
      password1: password1Input.value,
      region: regionSelect.value,
      comuna: comunaSelect.value
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Guardar el nombre completo para mostrar en inicio de sesión
    localStorage.setItem("usuarioNombre", nombreInput.value.trim());

    alert("Registro exitoso. Serás redirigido a la página principal.");

    window.location.href = "index.html";
  });
});
