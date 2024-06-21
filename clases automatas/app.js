
function validarFormulario() {
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;
  var errorEmail = document.getElementById('errorEmail');
  var errorContrasena = document.getElementById('errorContrasena');
  var valido = true;

  // Validación de email
  if (email === '') {
    errorEmail.textContent = 'Por favor, ingrese su email.';
    valido = false;
  } else {
    errorEmail.textContent = '';
  }

  // Validación de contraseña
  if (contrasena === '') {
    errorContrasena.textContent = 'Por favor, ingrese su contraseña.';
    valido = false;
  } else {
    errorContrasena.textContent = '';
  }

  return valido;
}


