document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');

  const nombreInput = form.nombre;
  const correoInput = form.correo;
  const mensajeInput = form.mensaje;

  const nombreError = document.getElementById('nombreError');
  const correoError = document.getElementById('correoError');
  const mensajeError = document.getElementById('mensajeError');

  nombreInput.setAttribute('maxlength', '100');
  correoInput.setAttribute('maxlength', '100');
  mensajeInput.setAttribute('maxlength', '500');

  form.addEventListener('submit', e => {
    let valid = true;

    [nombreInput, correoInput, mensajeInput].forEach(el => el.classList.remove('is-invalid'));
    [nombreError, correoError, mensajeError].forEach(el => el.style.display = 'none');

    if (!nombreInput.value.trim()) {
      nombreInput.classList.add('is-invalid');
      nombreError.textContent = 'El nombre es obligatorio.';
      nombreError.style.display = 'block';
      valid = false;
    } else if (nombreInput.value.trim().length > 100) {
      nombreInput.classList.add('is-invalid');
      nombreError.textContent = 'El nombre no puede exceder 100 caracteres.';
      nombreError.style.display = 'block';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    if (!correoInput.value) {
      correoInput.classList.add('is-invalid');
      correoError.textContent = 'El correo es obligatorio.';
      correoError.style.display = 'block';
      valid = false;
    } else if (correoInput.value.length > 100) {
      correoInput.classList.add('is-invalid');
      correoError.textContent = 'El correo no puede exceder 100 caracteres.';
      correoError.style.display = 'block';
      valid = false;
    } else if (!emailPattern.test(correoInput.value)) {
      correoInput.classList.add('is-invalid');
      correoError.textContent = 'Solo se permiten correos con dominios @duoc.cl, @profesor.duoc.cl y @gmail.com.';
      correoError.style.display = 'block';
      valid = false;
    }

    if (!mensajeInput.value.trim()) {
      mensajeInput.classList.add('is-invalid');
      mensajeError.textContent = 'El mensaje es obligatorio.';
      mensajeError.style.display = 'block';
      valid = false;
    } else if (mensajeInput.value.trim().length > 500) {
      mensajeInput.classList.add('is-invalid');
      mensajeError.textContent = 'El mensaje no puede exceder 500 caracteres.';
      mensajeError.style.display = 'block';
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });
});
