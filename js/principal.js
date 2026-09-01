/* ═══════════════════════════════════════════
   CAMENA — Interacciones
   ═══════════════════════════════════════════ */

/* ⚠️⚠️⚠️  NÚMERO DE WHATSAPP  ⚠️⚠️⚠️
   Confirmado por el dueño. SOLO dígitos, sin espacios ni +.   */
const WHATSAPP_NUMERO = "524435794642";

const TEXTO_DIRECTO =
  "Hola CAMENA 👋 Vi su sitio web y me interesa un diagnóstico gratuito para mi negocio.";

(function () {
  "use strict";

  /* Marcar que JS está activo (activa animaciones del hero) */
  document.documentElement.classList.add("js");

  /* ── Encabezado con sombra al hacer scroll ── */
  const cabecera = document.getElementById("cabecera");
  window.addEventListener("scroll", function () {
    cabecera.classList.toggle("cabecera--sombra", window.scrollY > 10);
  }, { passive: true });

  /* ── Menú móvil ── */
  const menuBoton = document.getElementById("menuBoton");
  const nav = document.getElementById("nav");

  menuBoton.addEventListener("click", function () {
    const abierto = nav.classList.toggle("nav--abierto");
    menuBoton.classList.toggle("menu-boton--activo", abierto);
    menuBoton.setAttribute("aria-expanded", String(abierto));
  });

  nav.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      nav.classList.remove("nav--abierto");
      menuBoton.classList.remove("menu-boton--activo");
      menuBoton.setAttribute("aria-expanded", "false");
    });
  });

  /* ── Enlaces de WhatsApp (flotante y directo) ── */
  const enlaceDirecto = document.getElementById("waDirecto");
  const enlaceFlotante = document.getElementById("waFlotante");
  const urlBase = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(TEXTO_DIRECTO);
  if (enlaceDirecto) enlaceDirecto.href = urlBase;
  if (enlaceFlotante) enlaceFlotante.href = urlBase;

  /* ── Formulario → mensaje de WhatsApp ── */
  const formulario = document.getElementById("formContacto");
  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const nombre = document.getElementById("campoNombre").value.trim();
      const negocio = document.getElementById("campoNegocio").value.trim();
      const servicio = document.getElementById("campoServicio").value;
      const mensaje = document.getElementById("campoMensaje").value.trim();

      let texto = "Hola CAMENA 👋 Soy " + (nombre || "—");
      if (negocio) texto += ", del negocio " + negocio;
      texto += ".\n\nQuiero: " + servicio + ".";
      if (mensaje) texto += "\n\n" + mensaje;
      texto += "\n\n(vengo de su sitio web)";

      window.open("https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });
  }

  /* ── Aparición al hacer scroll (reveal) ── */
  const selectores = [
    ".seccion__encabezado",
    ".problema__caja",
    ".servicio",
    ".servicios__nota",
    ".paso",
    ".confianza__item",
    ".faq__item",
    ".contacto__formulario",
    ".contacto__directo"
  ];
  const elementos = [];
  selectores.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { elementos.push(el); });
  });

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("reveal--visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elementos.forEach(function (el) { el.classList.add("reveal"); observador.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add("reveal--visible"); });
  }

  /* ── Año dinámico ── */
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
