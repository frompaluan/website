# website

Site institucional da Paluan, publicado em https://www.frompaluan.com.br (deploy automático pela Vercel a cada push na `main`).

## Estrutura

```
index.html            página única
assets/css/style.css  estilos
assets/js/main.js     comportamento (topo ao rolar, barra fixa no celular)
assets/js/tema.js     tema claro/escuro (segue o sistema; o botão do topo salva a escolha)
assets/img/           logo, favicons e imagem de compartilhamento
site.webmanifest      ícones para celular
robots.txt, sitemap.xml
```

Site estático, sem build. Para ver localmente, abra o `index.html` ou rode `npx serve .`.

## Cores e tema

As cores ficam em variáveis no topo do `style.css`, por papel (`--fundo`, `--texto`, `--titulo`, `--acento`...). O tema escuro troca só essas variáveis, e todo texto passa de 4,5:1 de contraste (WCAG AA) nos dois temas.

## Contato

Enquanto a linha de WhatsApp não existe, os botões de contato abrem o Direct do Instagram (`https://ig.me/m/frompaluan`).
Para trocar pelo WhatsApp, substitua esses links por `https://wa.me/55DDDNUMERO` (só dígitos) e o texto "Chamar no Instagram" por "Conversar no WhatsApp".
