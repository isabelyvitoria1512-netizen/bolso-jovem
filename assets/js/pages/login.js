document.getElementById('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const senha = document.getElementById('senha').value;
  const erro = document.getElementById('login-erro');
  if (!nome || senha.length < 4) { erro.textContent = 'Informe seu nome e uma senha com pelo menos 4 caracteres.'; return; }
  BJ.login(nome);
  location.href = 'inicio.html';
});