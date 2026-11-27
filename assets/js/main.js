// Paluan · comportamento da página
// Borda do topo ao rolar e barra fixa do WhatsApp no celular.
(function () {
  var topo = document.getElementById('topo');
  var barra = document.getElementById('barra-movel');
  var abertura = document.getElementById('acoes-abertura');
  var contato = document.getElementById('contato');
  function aoRolar() {
    topo.classList.toggle('rolou', window.scrollY > 8);
    var a = abertura.getBoundingClientRect();
    var c = contato.getBoundingClientRect();
    var mostrar = a.bottom < 0 && c.top > window.innerHeight * 0.6;
    barra.classList.toggle('visivel', mostrar);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();
})();
