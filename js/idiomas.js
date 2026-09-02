/* ═══════════════════════════════════════════
   CAMENA — Idioma ES/EN
   ═══════════════════════════════════════════ */

const IDIOMAS = {
  es: {
    _titulo: "CAMENA · Agencia digital en Apatzingán — Páginas web para negocios locales",
    nav_aria: "Menú principal",
    nav_inicio: "Inicio", nav_servicios: "Servicios", nav_metodo: "Método",
    nav_faq: "Preguntas", nav_cotizar: "Cotizar gratis",
    menu_boton_aria: "Abrir menú",

    hero_etiqueta: "Agencia de visibilidad digital · Apatzingán, Michoacán",
    hero_titulo: "Clientes de fuera,<br /><em>negocios de aquí</em>",
    hero_texto: "Ayudamos a los negocios de Apatzingán a que los encuentren quienes buscan desde fuera: paisanos en EE.&nbsp;UU., familiares de visita o clientes que rentan y compran a distancia.",
    hero_boton_1: "Quiero aparecer en internet", hero_boton_2: "Ver cómo trabajamos",
    hero_d1_num: "100%", hero_d1_txt: "diseño para celular y PC",
    hero_d2_num: "Gratis", hero_d2_txt: "diagnóstico sin compromiso",
    hero_d3_num: "En días", hero_d3_txt: "tu sitio publicado",

    prob_etiqueta: "El problema",
    prob_titulo: "Si no apareces en internet, <em>no existes para quien está lejos</em>",
    prob_texto_1: "Un hijo que vive en California quiere rentar un salón de fiestas para el bautizo de su sobrino. Una familia de visita quiere encontrar la cafetería que le recomendaron. Un cliente fuera de la ciudad quiere pedir por WhatsApp.",
    prob_texto_2: "Todos abren su celular y buscan. <strong>Si tu negocio no aparece con fotos, horarios y un botón para escribirte, ese cliente se va con quien sí apareció.</strong>",
    prob_caja1_h3: "Sin presencia digital", prob_caja1_p: "Solo te encuentran los que ya te conocen de vista.",
    prob_caja2_h3: "Con presencia digital", prob_caja2_p: "Te encuentran desde cualquier ciudad, te ven, te escriben y te pagan.",

    serv_etiqueta: "Servicios",
    serv_titulo: "Todo lo que tu negocio necesita para <em>ser encontrado</em>",
    serv_intro: "Tres servicios que se complementan. Empieza por uno o llévate el paquete completo.",
    sv1_titulo: "Sitio web profesional",
    sv1_texto: "Tu negocio en internet con tus fotos reales, horarios, menú o catálogo, ubicación y botones de WhatsApp. Diseñado para verse perfecto en el celular de tus clientes.",
    sv1_l1: "Diseño a la medida con tus fotos", sv1_l2: "Se ve en celular y computadora", sv1_l3: "Publicado en internet con tu dirección", sv1_l4: "Actualizaciones incluidas en tu renta",
    sv2_titulo: "Optimización de Google Business",
    sv2_texto: "Que tu negocio aparezca cuando buscan “cafetería en Apatzingán”, “salones de fiestas en Apatzingán” o tu tipo de negocio — con fotos, horarios, reseñas y botón de cómo llegar.",
    sv2_l1: "Alta o mejora de tu ficha en Google Maps", sv2_l2: "Fotos, horarios y categorías correctas", sv2_l3: "Estrategia para aparecer en las búsquedas", sv2_l4: "Seguimiento de reseñas de clientes",
    sv3_titulo: "Configuración de WhatsApp Business",
    sv3_texto: "Convierte tu WhatsApp en una herramienta de ventas profesional: catálogo de productos, respuesta automática y enlace directo para que los clientes te escriban desde tu sitio, Instagram o Facebook.",
    sv3_l1: "Perfil de negocio con horarios y ubicación", sv3_l2: "Catálogo de productos o servicios", sv3_l3: "Mensajes de bienvenida y respuesta rápida", sv3_l4: "Botón de WhatsApp en tu sitio y redes",
    serv_nota: "Cada negocio es distinto, por eso no publicamos un precio fijo. Cotiza gratis y te mandamos una propuesta clara, sin compromiso.",

    met_etiqueta: "Cómo trabajamos",
    met_titulo: "De “no aparezco” a <em>“me encuentran”</em> en 4 pasos",
    met_intro: "Un método claro y validado con negocios reales de Apatzingán.",
    p1_titulo: "Diagnóstico gratuito", p1_texto: "Nos cuentas tu negocio y revisamos cómo te encuentran hoy en internet.",
    p2_titulo: "Propuesta clara", p2_texto: "Te mandamos qué incluye y cuánto cuesta, sin compromiso y sin letras chiquitas.",
    p3_titulo: "Desarrollo", p3_texto: "Creamos tu sitio con tus fotos y datos reales; te lo mostramos antes de publicar.",
    p4_titulo: "Entrega y seguimiento", p4_texto: "Publicamos tu sitio y lo mantenemos actualizado con tu renta mensual.",

    conf_1: "Diagnóstico 100% gratuito y sin compromiso",
    conf_2: "Publicamos tu sitio en internet en días",
    conf_3: "El sitio y tu dominio son tuyos",
    conf_4: "Propuesta clara antes de pagar, sin letras chiquitas",

    faq_etiqueta: "Preguntas frecuentes",
    faq_titulo: "¿Te quedan dudas? <em>Aquí las resolvemos</em>",
    faq_q1: "¿Cuánto cuesta?",
    faq_a1: "Cada negocio es distinto, por eso no publicamos un precio fijo. Te hacemos un diagnóstico gratuito y te mandamos una propuesta clara y a la medida, sin compromiso.",
    faq_q2: "¿Qué pasa si no me gusta el diseño?",
    faq_a2: "Hacemos los ajustes necesarios hasta que estés conforme. Tu plan incluye rondas de cambios, así que no te quedas con algo que no te gusta.",
    faq_q3: "¿Puedo cancelar el mantenimiento mensual?",
    faq_a3: "Sí. El mantenimiento cubre actualizaciones y soporte; puedes cancelarlo cuando quieras y el sitio ya publicado sigue en línea.",
    faq_q4: "¿Cuánto tarda en estar listo?",
    faq_a4: "Normalmente en días: lo diseñamos con tus fotos y datos y lo publicamos esa misma semana.",

    cont_etiqueta: "Contacto",
    cont_titulo: "Cuéntanos de tu negocio, <em>te respondemos hoy</em>",
    cont_intro: "Diagnóstico gratuito. Sin compromiso.",
    campo_nombre_label: "Tu nombre", campo_nombre_ph: "Ej. María López",
    campo_negocio_label: "Nombre de tu negocio", campo_negocio_ph: "Ej. Salón Xcaret",
    campo_servicio_label: "¿Qué necesitas?", campo_mensaje_label: "Cuéntanos más (opcional)", campo_mensaje_ph: "¿Qué vende tu negocio? ¿Dónde está?",
    opt_web: "Sitio web profesional", opt_google: "Optimización de Google Business", opt_whatsapp: "Configuración de WhatsApp Business", opt_otro: "Otro / No sé, necesito diagnóstico",
    form_boton: "Enviar por WhatsApp", form_ayuda: "El mensaje se abre en tu WhatsApp listo para enviar.",
    directo_titulo: "¿Más fácil? Escríbenos directo", directo_boton: "WhatsApp directo",
    contacto_telefono: "+52 443 579 4642", contacto_telefono_lbl: "(llámanos o escribe)",
    horario: "Respondemos de lunes a sábado, de 9 am a 8 pm.",
    ubicacion: "Apatzingán, Michoacán · Trabajamos a distancia con todo México y EE. UU.",

    pie_lema: "Clientes de fuera, negocios de aquí.",
    pie_tel: "+52 443 579 4642",
    pie_texto: "Agencia de visibilidad digital · Apatzingán, Michoacán",
    wa_aria: "Escríbenos por WhatsApp"
  },

  en: {
    _titulo: "CAMENA · Digital Agency in Apatzingán — Websites for Local Businesses",
    nav_aria: "Main menu",
    nav_inicio: "Home", nav_servicios: "Services", nav_metodo: "Method",
    nav_faq: "FAQ", nav_cotizar: "Free quote",
    menu_boton_aria: "Open menu",

    hero_etiqueta: "Digital visibility agency · Apatzingán, Michoacán",
    hero_titulo: "Clients from far away,<br /><em>businesses from here</em>",
    hero_texto: "We help Apatzingán businesses get found by people searching from elsewhere: relatives in the U.S., families visiting, or customers who rent and buy from a distance.",
    hero_boton_1: "I want to be found online", hero_boton_2: "See how we work",
    hero_d1_num: "100%", hero_d1_txt: "mobile & desktop design",
    hero_d2_num: "Free", hero_d2_txt: "no-obligation diagnosis",
    hero_d3_num: "In days", hero_d3_txt: "your site published",

    prob_etiqueta: "The problem",
    prob_titulo: "If you're not online, <em>you don't exist for those far away</em>",
    prob_texto_1: "A son living in California wants to rent an event hall for his nephew's baptism. A family visiting wants to find the café someone recommended. A customer outside the city wants to order on WhatsApp.",
    prob_texto_2: "They all reach for their phone and search. <strong>If your business doesn't show up with photos, hours and a button to message you, that customer goes to whoever did show up.</strong>",
    prob_caja1_h3: "Without digital presence", prob_caja1_p: "Only those who already know you in person can find you.",
    prob_caja2_h3: "With digital presence", prob_caja2_p: "They find you from any city, see you, message you and pay you.",

    serv_etiqueta: "Services",
    serv_titulo: "Everything your business needs to <em>be found</em>",
    serv_intro: "Three services that complement each other. Start with one or get the full package.",
    sv1_titulo: "Professional website",
    sv1_texto: "Your business online with your real photos, hours, menu or catalog, location and WhatsApp buttons. Designed to look perfect on your customers' phones.",
    sv1_l1: "Custom design with your photos", sv1_l2: "Looks great on mobile and desktop", sv1_l3: "Published online with your address", sv1_l4: "Updates included in your monthly fee",
    sv2_titulo: "Google Business optimization",
    sv2_texto: "Make your business appear when people search “café in Apatzingán”, “event halls in Apatzingán” or your type of business — with photos, hours, reviews and a directions button.",
    sv2_l1: "Create or improve your Google Maps listing", sv2_l2: "Correct photos, hours and categories", sv2_l3: "Strategy to rank in searches", sv2_l4: "Tracking customer reviews",
    sv3_titulo: "WhatsApp Business setup",
    sv3_texto: "Turn your WhatsApp into a professional sales tool: product catalog, automatic replies and a direct link so customers can message you from your site, Instagram or Facebook.",
    sv3_l1: "Business profile with hours and location", sv3_l2: "Product or service catalog", sv3_l3: "Welcome messages and quick replies", sv3_l4: "WhatsApp button on your site and social media",
    serv_nota: "Every business is different, so we don't publish a fixed price. Get a free quote and we'll send you a clear, no-obligation proposal.",

    met_etiqueta: "How we work",
    met_titulo: "From “I don't show up” to <em>“they find me”</em> in 4 steps",
    met_intro: "A clear method, validated with real Apatzingán businesses.",
    p1_titulo: "Free diagnosis", p1_texto: "You tell us about your business and we check how you're found online today.",
    p2_titulo: "Clear proposal", p2_texto: "We send you what's included and the price, no commitment and no fine print.",
    p3_titulo: "Development", p3_texto: "We build your site with your real photos and data; we show it to you before publishing.",
    p4_titulo: "Delivery and follow-up", p4_texto: "We publish your site and keep it updated with your monthly fee.",

    conf_1: "100% free diagnosis, no commitment",
    conf_2: "Your site published online in days",
    conf_3: "The site and your domain are yours",
    conf_4: "Clear proposal before paying, no fine print",

    faq_etiqueta: "FAQ",
    faq_titulo: "Any doubts? <em>We'll clear them up</em>",
    faq_q1: "How much does it cost?",
    faq_a1: "Every business is different, so we don't publish a fixed price. We run a free diagnosis and send you a clear, custom proposal with no commitment.",
    faq_q2: "What if I don't like the design?",
    faq_a2: "We make the changes you need until you're happy. Your plan includes revision rounds, so you never end up with something you don't like.",
    faq_q3: "Can I cancel the monthly maintenance?",
    faq_a3: "Yes. Maintenance covers updates and support; you can cancel anytime and your published site stays online.",
    faq_q4: "How long until it's ready?",
    faq_a4: "Usually within days: we design it with your photos and data and publish it that same week.",

    cont_etiqueta: "Contact",
    cont_titulo: "Tell us about your business, <em>we'll reply today</em>",
    cont_intro: "Free diagnosis. No commitment.",
    campo_nombre_label: "Your name", campo_nombre_ph: "e.g. Maria Lopez",
    campo_negocio_label: "Your business name", campo_negocio_ph: "e.g. Xcaret Hall",
    campo_servicio_label: "What do you need?", campo_mensaje_label: "Tell us more (optional)", campo_mensaje_ph: "What does your business sell? Where is it?",
    opt_web: "Professional website", opt_google: "Google Business optimization", opt_whatsapp: "WhatsApp Business setup", opt_otro: "Other / I don't know, I need a diagnosis",
    form_boton: "Send on WhatsApp", form_ayuda: "The message opens in your WhatsApp ready to send.",
    directo_titulo: "Easier? Message us directly", directo_boton: "WhatsApp direct",
    contacto_telefono: "+52 443 579 4642", contacto_telefono_lbl: "(call or message)",
    horario: "We reply Monday to Saturday, 9 am to 8 pm.",
    ubicacion: "Apatzingán, Michoacán · We work remotely with all of Mexico and the U.S.",

    pie_lema: "Clients from far away, businesses from here.",
    pie_tel: "+52 443 579 4642",
    pie_texto: "Digital visibility agency · Apatzingán, Michoacán",
    wa_aria: "Message us on WhatsApp"
  }
};

(function () {
  "use strict";
  const clave = "camena-lang";
  let idioma = "es";
  try { idioma = localStorage.getItem(clave) || "es"; } catch (e) { /* almacenamiento no disponible */ }
  if (!IDIOMAS[idioma]) idioma = "es";

  function aplicar() {
    document.documentElement.lang = idioma;
    document.body.dataset.lang = idioma;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const k = el.getAttribute("data-i18n");
      if (IDIOMAS[idioma] && IDIOMAS[idioma][k]) el.innerHTML = IDIOMAS[idioma][k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-placeholder");
      if (IDIOMAS[idioma] && IDIOMAS[idioma][k]) el.setAttribute("placeholder", IDIOMAS[idioma][k]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const k = el.getAttribute("data-i18n-aria");
      if (IDIOMAS[idioma] && IDIOMAS[idioma][k]) el.setAttribute("aria-label", IDIOMAS[idioma][k]);
    });
    document.querySelectorAll(".idioma__btn").forEach(function (b) {
      b.classList.toggle("idioma__btn--activo", b.getAttribute("data-idioma") === idioma);
    });
    const t = document.getElementById("titulo");
    if (t && IDIOMAS[idioma]._titulo) t.textContent = IDIOMAS[idioma]._titulo;
  }

  document.querySelectorAll(".idioma__btn").forEach(function (b) {
    b.addEventListener("click", function () {
      idioma = b.getAttribute("data-idioma");
      try { localStorage.setItem(clave, idioma); } catch (e) { /* almacenamiento no disponible */ }
      aplicar();
    });
  });
  aplicar();
})();
