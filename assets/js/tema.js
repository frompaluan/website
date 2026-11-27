// Paluan · tema claro/escuro
// Carregado no <head> sem defer para aplicar o tema antes da página aparecer (sem piscar).
// Sem escolha salva, segue o tema do sistema; o botão salva a escolha da pessoa.
(function () {
  var raiz = document.documentElement;
  var chave = 'paluan-tema';
  var sistema = window.matchMedia('(prefers-color-scheme: dark)');
  var cores = { light: '#ffffff', dark: '#0F1415' };

  function salvo() {
    try { return localStorage.getItem(chave); } catch (e) { return null; }
  }
  function salvar(tema) {
    try { localStorage.setItem(chave, tema); } catch (e) { /* navegação privada: só não lembra */ }
  }
  function atual() {
    var t = salvo();
    if (t === 'light' || t === 'dark') return t;
    return sistema.matches ? 'dark' : 'light';
  }
  function aplicar(tema) {
    raiz.setAttribute('data-theme', tema);
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('content', cores[tema]);
    }
    var botao = document.getElementById('botao-tema');
    if (botao) {
      botao.setAttribute('aria-label', tema === 'dark' ? 'Usar tema claro' : 'Usar tema escuro');
    }
  }

  aplicar(atual());

  sistema.addEventListener('change', function () {
    if (!salvo()) aplicar(atual());
  });

  document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('botao-tema');
    if (!botao) return;
    aplicar(atual());
    botao.addEventListener('click', function () {
      var novo = raiz.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      salvar(novo);
      aplicar(novo);
    });
  });
})();
