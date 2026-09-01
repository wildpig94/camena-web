# 🚀 CAMENA — Sitio web (rediseño híbrido)

Sitio de una página para **CAMENA**, marca de tecnología y consultoría en
Apatzingán. Bilingüe (ES/EN), publicado en GitHub Pages.

**"IA con propósito. Lógica que conecta."**

## 🌐 En línea
**https://wildpig94.github.io/camena-web/** · GitHub Pages (repo público
`wildpig94/camena-web`, rama `main`).

## 🎯 Enfoque del rediseño (híbrido)
El sitio **vende primero el servicio validado** (sitios web + Google Business +
WhatsApp Business para negocios locales — modelo 3/3) y **presenta a Camena como
marca de tecnología/consultoría** con su roadmap: **web (entrada) → diagnóstico
→ IA y datos → todos los servicios**.

Dos líneas de producto (sección "Camena"):
- **Came Diagnostics** 🥋 — diagnóstico operativo gratuito para gimnasios/academias.
- **Camena Dynamics** 🃏 — motor de decisiones para calificar cartas TCG (en desarrollo).

## 📁 Estructura
```
camena-web/
├── index.html          → Página (hero, problema, servicios, método, Camena, FAQ, contacto)
├── css/estilos.css     → Diseño azul marino + dorado (contrastes corregidos)
├── js/idiomas.js       → Diccionario ES/EN (botón en el header)
├── js/principal.js     → Menú, formulario→WhatsApp, botón flotante, animaciones
├── imagenes/           → logo-faro.svg (C con faro) + muse-fondo-oscura.jpg
├── .gitignore          → bloquea publicar PDFs/zips/xlsx/… y carpetas de entorno
└── .nojekyll           → sirve los archivos tal cual en GitHub Pages (sin Jekyll)
```

## ✅ Decisiones (honestidad ante todo)
- **Sin precios públicos.** Se quitó la sección "Planes": cada negocio es
  distinto, así que el visitante cotiza gratis y recibe una propuesta a la medida
  (sin cifras inventadas). El CTA es "Cotizar gratis".
- **Cifras veraces.** Sin "años de experiencia" inventados ni testimonios falsos.
  El hero usa datos honestos: diseño responsive, diagnóstico gratuito, entrega en días.
- **Came Diagnostics** se presenta como disponible y gratis (lead magnet real).
- **Camena Dynamics** se marca honestamente como "en desarrollo".
- **Contacto directo visible:** 📞 +52 443 579 4642, ✉️ camenalabs@proton.me y
  botón de **WhatsApp con link real** (wa.me).
- **Prueba social genérica:** banda de **compromisos verificables** (sin datos
  inventados). El método se describe como "validado con negocios reales".
- **FAQ** (6 preguntas) para manejar objeciones de compra + explicar las dos líneas.

## 🔒 Seguridad / publicación limpia
- Se sacaron de esta carpeta `proton-recovery-phrase.pdf` (→ `Empresa/Legal/`) y
  `perfil-whatsapp-business.md` (→ `Empresa/Marketing/`). **Nunca** vuelvas a dejar
  PDFs, zips o documentos con precios/datos internos dentro de `camena-web/`.
- `.gitignore` impide commitear `*.pdf`, `*.zip`, `*.xlsx`, `*.docx`, etc.
- Si el sitio llegó a estar público con el PDF dentro, **rota la recovery phrase
  de Proton** por precaución.

## 🌍 GitHub Pages
El sitio se sirve desde la rama `main` (raíz del repo). Para publicar cambios
haz `git push` a `main` y GitHub Pages reconstruye solo (1-2 min). Si más adelante
quieres un dominio propio, configúralo en *Settings → Pages → Custom domain*.

## ✏️ Para actualizar
- Servicios: sección `id="servicios"` en `index.html`
- Productos Camena: sección `id="camena"` (Came Diagnostics / Camena Dynamics)
- FAQ: sección `id="faq"`
- Teléfono: `+52 443 579 4642` en `index.html` y `js/idiomas.js`
- Email: `camenalabs@proton.me` en `index.html`
- Textos ES/EN: `js/idiomas.js`
