const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const direcciónEmail = document.getElementById('email');
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }
  if (apellido.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);
