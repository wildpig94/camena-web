# 🚀 CAMENA — Sitio web de la agencia

Sitio de una página para **CAMENA**, agencia de visibilidad digital en Apatzingán.
Bilingüe (ES/EN), publicado en GitHub Pages.

**"Clientes de fuera, negocios de aquí."**

## 🌐 En línea
**https://wildpig94.github.io/camena-web/** · GitHub Pages (repo público
`wildpig94/camena-web`, rama `main`).

## 📁 Estructura
```
camena-web/
├── index.html          → Página (hero, problema, servicios, método, FAQ, contacto)
├── css/estilos.css     → Diseño azul marino + dorado (contrastes corregidos)
├── js/idiomas.js       → Diccionario ES/EN (botón en el header)
├── js/principal.js     → Menú, formulario→WhatsApp, botón flotante, animaciones
├── imagenes/           → logo-faro.svg (C con faro) + muse-fondo-oscura.jpg
├── .gitignore          → bloquea publicar PDFs/zips/xlsx/… y carpetas de entorno
└── .nojekyll           → sirve los archivos tal cual en GitHub Pages (sin Jekyll)
```

## ✅ Decisiones (honestidad ante todo)
- **Sin precios públicos.** No hay sección de planes: cada negocio es distinto,
  así que el visitante cotiza gratis y recibe una propuesta a la medida.
- **Cifras veraces.** Sin "años de experiencia" inventados ni testimonios falsos.
- **Servicios:** sitio web profesional, Google Business y WhatsApp Business.
- **Contacto directo visible:** 📞 +52 443 579 4642, ✉️ camenalabs@proton.me y
  botón de WhatsApp con link real (wa.me).
- **FAQ** (4 preguntas) para manejar objeciones de compra.

## 🔒 Seguridad / publicación limpia
- Se sacaron de esta carpeta los documentos internos (`proton-recovery-phrase.pdf`
  y `perfil-whatsapp-business.md`). **Nunca** dejes PDFs, zips o archivos con
  precios/datos internos dentro de `camena-web/`.
- `.gitignore` impide commitear `*.pdf`, `*.zip`, `*.xlsx`, `*.docx`, etc.

## 🌍 GitHub Pages
El sitio se sirve desde la rama `main` (raíz del repo). Para publicar cambios
haz `git push` a `main` y GitHub Pages reconstruye solo (1-2 min).

## ✏️ Para actualizar
- Servicios: sección `id="servicios"` en `index.html`
- FAQ: sección `id="faq"`
- Teléfono: `+52 443 579 4642` en `index.html` y `js/idiomas.js`
- Email: `camenalabs@proton.me` en `index.html`
- Textos ES/EN: `js/idiomas.js`
