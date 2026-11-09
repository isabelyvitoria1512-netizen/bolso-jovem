/* Preferências visuais do Bolso Jovem */
(() => {
  const tema = localStorage.getItem('bj_tema') || 'light';
  const tamanho = localStorage.getItem('bj_tamanho') || 'normal';
  document.documentElement.dataset.theme = tema;
  document.documentElement.dataset.text = tamanho;
})();