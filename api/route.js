import site from "../worker/index.js";
import { renderTomatinaGuide } from "../content/tomatina-2026.js";
import { renderGuidesIndex } from "../content/guides-index.js";
import { renderAsadorElArgentino } from "../content/asador-el-argentino.js";
import { renderEclipseArticle } from "../content/eclipse-solar-valencia-2026.js";

export const config = { runtime: "edge" };

const canonicalSite = "https://www.comidaargentinavalencia.com";
const defaultImage = "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/el-porteno-bife.jpg";
const seoPages = {
  "/": { title: "Restaurantes argentinos en Valencia | Guía local", description: "Encuentra restaurantes argentinos en Valencia, con fichas verificadas, precios orientativos, reservas, guías locales y cultura argentina.", image: defaultImage },
  "/restaurantes": { title: "Restaurantes argentinos en Valencia: guía y reservas", description: "Directorio de restaurantes argentinos en Valencia con ubicación, precio orientativo, qué pedir y enlaces oficiales para reservar.", image: defaultImage },
  "/blog": { title: "Blog de comida argentina en Valencia | Guías y cultura", description: "Artículos sobre gastronomía, cultura argentina y Valencia: cortes de carne, mate, costumbres y consejos prácticos.", image: defaultImage },
  "/guias": { title: "Guías de Valencia para argentinos | Comida Argentina", description: "Guías prácticas para argentinos en Valencia: planes, barrios, transporte y consejos para disfrutar la ciudad y sus alrededores.", image: defaultImage },
  "/guias/valencia-recien-llegados": { title: "Guía de Valencia para argentinos recién llegados", description: "Primeros pasos para argentinos que llegan a Valencia: barrios, recorridos, costumbres y lugares útiles para orientarse mejor.", image: defaultImage, type: "article" },
  "/guias/tomatina-bunol-2026": { title: "La Tomatina 2026 desde Valencia: entradas y transporte", description: "Guía para ir a La Tomatina de Buñol 2026 desde Valencia: fecha, entradas, transporte, qué llevar y consejos para organizar el día.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/tomatina-bunol-2026.jpg", type: "article" },
  "/restaurantes/asador-el-argentino": { title: "Asador El Argentino Valencia: carta y precio", description: "Ficha del Asador El Argentino en Monteolivete: dirección, precio orientativo, qué pedir, contacto, fuentes y consejos antes de ir", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg", type: "restaurant", date: "2026-08-11" },
  "/blog/eclipse-solar-valencia-2026": { title: "Eclipse solar en Valencia 2026: cómo verlo", description: "Hora, seguridad y lugar oficial para ver el eclipse solar del 12 de agosto de 2026 en València sin dañar la vista ni improvisar", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/eclipse-solar-valencia-2026.jpg", type: "article", date: "2026-08-11" },
  "/restaurantes/mila": { title: "Mila Restaurante Valencia: carta, precio y reservas", description: "Ficha de Mila Restaurante en Valencia: ubicación, precio orientativo, qué pedir, contacto y enlace oficial para reservar mesa.", image: defaultImage },
  "/restaurantes/el-porteno": { title: "El Porteño Valencia: carta, precio y reservas", description: "Ficha de El Porteño en Valencia: parrilla argentina, carta, precios orientativos, dirección, contacto y reserva oficial.", image: defaultImage },
  "/restaurantes/cruz-pampa": { title: "Cruz Pampa Valencia: parrilla argentina y carta", description: "Ficha de Cruz Pampa en Valencia: parrilla argentina, ubicación, precio orientativo, platos recomendados y web oficial.", image: defaultImage },
  "/restaurantes/union-carnes-y-vinos": { title: "Unión Carnes y Vinos Valencia: carta y reservas", description: "Ficha de Unión Carnes y Vinos en Ruzafa: parrilla argentina, precio orientativo, platos recomendados y enlace de reserva.", image: defaultImage },
  "/restaurantes/dona-petrona": { title: "Doña Petrona Valencia: cocina argentina y carta", description: "Ficha de Doña Petrona en Valencia: cocina argentina contemporánea, ubicación, precio orientativo y datos para planificar tu visita.", image: defaultImage },
  "/restaurantes/viejo-barrio": { title: "Viejo Barrio Valencia: parrilla argentina y precio", description: "Ficha de Viejo Barrio en Benimaclet: parrillada argentina, dirección, precio orientativo, platos recomendados y contacto.", image: defaultImage },
  "/restaurantes/cayena-restobar": { title: "Cayena Restobar Valencia: carta, precio y ubicación", description: "Ficha de Cayena Restobar cerca de Mestalla: comida argentina, precio orientativo, recomendaciones, ubicación y contacto.", image: defaultImage },
  "/restaurantes/san-telmo": { title: "Asador San Telmo Valencia: parrilla argentina en Ruzafa", description: "Ficha de Asador San Telmo en Ruzafa: carnes a la parrilla, empanadas, ubicación, contacto y web oficial.", image: defaultImage },
  "/blog/historia-del-mate": { title: "Historia del mate: origen y ritual argentino | Guía", description: "Conoce la historia del mate, desde la yerba guaraní hasta el ritual argentino de compartir una ronda, también en Valencia.", image: defaultImage, type: "article" },
  "/blog/bandera-argentina-color-cielo": { title: "Por qué la bandera argentina es celeste y blanca", description: "La historia y los significados detrás de los colores de la bandera argentina, la escarapela y el Sol de Mayo.", image: defaultImage, type: "article" },
  "/blog/valencianos-y-argentinos-historia": { title: "Valencianos y argentinos: historia y vínculos culturales", description: "La relación histórica entre Valencia y Argentina: migraciones, cultura compartida y los vínculos que siguen vivos hoy.", image: defaultImage, type: "article" },
  "/blog/truc-o-truco": { title: "Truc valenciano y Truco argentino: diferencias y reglas", description: "Qué comparten y en qué se diferencian el Truc valenciano y el Truco argentino, dos juegos de cartas con mucha picardía.", image: defaultImage, type: "article" },
  "/blog/cortes-carne-argentina": { title: "Cortes de carne argentinos: guía visual y equivalencias", description: "Guía visual de cortes de carne argentinos: vacío, bife, entraña, asado y sus equivalencias para pedir mejor en una parrilla.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/cortes-argentinos-vaca.jpg", type: "article" },
  "/blog/pedir-en-parrilla-argentina": { title: "Qué pedir en una parrilla argentina: guía para elegir", description: "Qué pedir en una parrilla argentina según tus gustos: cortes, entradas, puntos de cocción y consejos para disfrutar mejor la experiencia.", image: defaultImage, type: "article" }
};
const sitemapEntries = [
  ["/", "daily", "1.0"],
  ["/restaurantes", "daily", "0.9"],
  ["/blog", "weekly", "0.8"],
  ["/guias", "weekly", "0.8"],
  ["/restaurantes/mila", "monthly", "0.8"],
  ...["el-porteno", "cruz-pampa", "union-carnes-y-vinos", "dona-petrona", "viejo-barrio", "cayena-restobar", "san-telmo"].map((slug) => [`/restaurantes/${slug}`, "monthly", "0.8"]),
  ["/restaurantes/asador-el-argentino", "monthly", "0.8"],
  ...["historia-del-mate", "bandera-argentina-color-cielo", "valencianos-y-argentinos-historia", "truc-o-truco", "cortes-carne-argentina", "pedir-en-parrilla-argentina"].map((slug) => [`/blog/${slug}`, "monthly", "0.7"]),
  ["/blog/eclipse-solar-valencia-2026", "weekly", "0.8"],
  ["/guias/valencia-recien-llegados", "monthly", "0.7"],
  ["/guias/tomatina-bunol-2026", "weekly", "0.7"]
];

function renderSitemap() {
  const lastModified = "2026-08-11";
  const urls = sitemapEntries.map(([path, changefreq, priority]) => `\n  <url><loc>${canonicalSite}${path}</loc><lastmod>${lastModified}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function seoHead(path, data) {
  const url = `${canonicalSite}${path}`;
  const title = escapeHtml(data.title);
  const description = escapeHtml(data.description);
  const image = escapeHtml(data.image || defaultImage);
  const breadcrumbs = path === "/" ? null : [{ name: "Inicio", item: canonicalSite }, ...path.split("/").filter(Boolean).map((part, index, all) => ({
    name: index === 0 ? (part === "restaurantes" ? "Restaurantes" : part === "blog" ? "Blog" : "Guías") : data.title,
    item: `${canonicalSite}/${all.slice(0, index + 1).join("/")}`
  }))];
  const schemas = [
    data.type === "article" ? { "@context": "https://schema.org", "@type": "Article", headline: data.title, description: data.description, image: data.image || defaultImage, mainEntityOfPage: url, datePublished: data.date || "2026-08-10", dateModified: data.date || "2026-08-10", author: { "@type": "Organization", name: "Comida Argentina en Valencia" }, publisher: { "@type": "Organization", name: "Comida Argentina en Valencia", url: canonicalSite } } : null,
    data.type === "restaurant" ? { "@context": "https://schema.org", "@type": "Restaurant", name: "Asador El Argentino", url, image: data.image, telephone: "+34 657 77 80 04", servesCuisine: "Argentina", priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: "Carrer de l’Escultor Josep Capuz, 12", postalCode: "46004", addressLocality: "València", addressCountry: "ES" }, sameAs: ["https://www.instagram.com/asador_el_argentino/", "https://www.facebook.com/asadorargentinovalencia/"] } : null,
    breadcrumbs ? { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, name: crumb.name, item: crumb.item })) } : null
  ].filter(Boolean);
  return `<link rel="canonical" href="${url}"><meta property="og:locale" content="es_ES"><meta property="og:type" content="${data.type === "article" ? "article" : "website"}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}"><meta property="og:site_name" content="Comida Argentina en Valencia"><meta property="og:image" content="${image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${image}">${schemas.map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("")}`;
}

const unifiedHeader = `<header class="top wrap site-header"><a class="brand" href="/" aria-label="Comida Argentina en Valencia, inicio"><span class="brand-mark" aria-hidden="true"><i>☀</i></span><span><strong>COMIDA ARGENTINA</strong><small>EN VALENCIA</small></span></a><nav aria-label="Navegación principal"><a href="/restaurantes">Restaurantes</a><a href="/guias">Guías</a><a href="/blog">Blog</a></nav></header>`;
const unifiedHeaderStyles = `<style>.site-header{min-height:72px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e7c067}.site-header .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:#402914;line-height:1}.site-header .brand-mark{display:inline-grid;place-items:center;width:42px;height:42px;background:linear-gradient(180deg,#75aad5 0 32%,#fff 32% 68%,#75aad5 68%);border-radius:50%;border:1px solid #4d93c3;box-shadow:0 2px 0 #e7c067}.site-header .brand-mark i{font-style:normal;font-size:18px;color:#ffc449;text-shadow:0 1px 0 #87300c}.site-header .brand strong{display:block;font-size:13px;letter-spacing:.08em}.site-header .brand small{display:block;font-size:9px;letter-spacing:.18em;color:#87300c;margin-top:4px;font-weight:800}.site-header nav{display:flex;gap:24px}.site-header nav a{text-decoration:none;font-size:13px;color:#402914;font-weight:700;padding:8px 0;border-bottom:2px solid transparent}.site-header nav a:hover{color:#87300c;border-color:#87300c}@media(max-width:650px){.site-header{min-height:66px}.site-header .brand-mark{width:36px;height:36px}.site-header .brand strong{font-size:11px}.site-header .brand small{font-size:8px}.site-header nav{gap:11px}.site-header nav a{font-size:12px}}</style>`;

function normalizeHeader(html) {
  return html.replace(/<header class="top wrap">[\s\S]*?<\/header>/, unifiedHeader);
}

function applySeo(html, path) {
  const data = seoPages[path];
  if (!data) return html;
  const title = escapeHtml(data.title);
  const description = escapeHtml(data.description);
  return normalizeHeader(html)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace("</head>", `${unifiedHeaderStyles}<meta name="google-site-verification" content="uuaS-FeyVtmn-TCrF_cpRjCUVSyru9w-4tD5D5zJmWg" />${seoHead(path, data)}</head>`);
}

export default async function handler(request, context) {
  const source = new URL(request.url);
  const path = source.pathname;
  if (source.hostname === "comida-argentina-valencia.vercel.app") {
    source.protocol = "https:";
    source.hostname = "www.comidaargentinavalencia.com";
    return Response.redirect(source, 308);
  }
  if (path === "/sitemap.xml") {
    return new Response(renderSitemap(), { headers: { "content-type": "application/xml; charset=utf-8" } });
  }
  if (path === "/robots.txt") {
    return new Response(`User-agent: *\nAllow: /\nSitemap: ${canonicalSite}/sitemap.xml\n`, { headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  if (path === "/guias") {
    return new Response(applySeo(renderGuidesIndex(), path), {
      headers: { "content-type": "text/html;charset=utf-8" }
    });
  }
  if (path === "/guias/valencia-recien-llegados") {
    const source = new URL(request.url);
    source.pathname = "/guias";
    return site.fetch(new Request(source, request), {}, context);
  }
  if (path === "/guias/tomatina-bunol-2026") {
    return new Response(applySeo(renderTomatinaGuide().replace('href="/guias">Valencia para recién llegados →', 'href="/guias/valencia-recien-llegados">Valencia para recién llegados →').replace('<a href="/restaurantes/el-porteno">El Porteño en Valencia →</a>', '<a href="/blog/eclipse-solar-valencia-2026">Eclipse solar en Valencia 2026 →</a><a href="/restaurantes/el-porteno">El Porteño en Valencia →</a>'), path), {
      headers: { "content-type": "text/html;charset=utf-8" }
    });
  }
  if (path === "/restaurantes/asador-el-argentino") {
    return new Response(applySeo(renderAsadorElArgentino(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/eclipse-solar-valencia-2026") {
    return new Response(applySeo(renderEclipseArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  const response = await site.fetch(request, {}, context);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const articleLinks = {
    "/blog/historia-del-mate": [["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/guias/valencia-recien-llegados", "Guía Valencia para recién llegados"]],
    "/blog/bandera-argentina-color-cielo": [["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/blog/historia-del-mate", "La historia del mate"]],
    "/blog/valencianos-y-argentinos-historia": [["/guias/valencia-recien-llegados", "Valencia para recién llegados"], ["/blog/historia-del-mate", "La historia del mate"], ["/blog/eclipse-solar-valencia-2026", "Eclipse solar en Valencia 2026"]],
    "/blog/truc-o-truco": [["/blog/historia-del-mate", "La historia del mate"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"]],
    "/blog/cortes-carne-argentina": [["/blog/pedir-en-parrilla-argentina", "Cómo pedir en una parrilla argentina"], ["/restaurantes", "Restaurantes argentinos en Valencia"]],
    "/blog/pedir-en-parrilla-argentina": [["/blog/cortes-carne-argentina", "Ver la guía visual de cortes"], ["/restaurantes/asador-el-argentino", "Asador El Argentino en Monteolivete"], ["/guias/tomatina-bunol-2026", "Organizá La Tomatina 2026 desde Valencia"]]
  };
  const fallbackImages = {
    "/blog/pedir-en-parrilla-argentina": "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=85"
  };
  const cutsInfographic = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="690" viewBox="0 0 1200 690"><rect width="1200" height="690" fill="#fff7e5"/><text x="70" y="88" fill="#402914" font-family="Georgia,serif" font-size="48" font-weight="700">Guía visual de cortes argentinos</text><text x="70" y="128" fill="#6b5a48" font-family="Arial,sans-serif" font-size="22">Elegí según textura, intensidad y tipo de cocción</text><path d="M145 330 C175 242 286 213 417 242 L717 252 C818 222 947 272 972 347 L944 451 C911 509 796 522 692 500 L397 517 C266 546 165 502 145 421 Z" fill="#f2d9bb" stroke="#402914" stroke-width="8"/><path d="M252 267 L355 265 L386 493 L277 505 Z" fill="#ffc449" stroke="#402914" stroke-width="5"/><path d="M390 258 L513 258 L535 491 L392 495 Z" fill="#d97245" stroke="#402914" stroke-width="5"/><path d="M519 258 L636 261 L648 491 L540 491 Z" fill="#4d93c3" stroke="#402914" stroke-width="5"/><path d="M642 261 L755 271 L742 489 L650 491 Z" fill="#87300c" stroke="#402914" stroke-width="5"/><path d="M760 273 L875 291 L848 470 L746 486 Z" fill="#e7c067" stroke="#402914" stroke-width="5"/><path d="M879 298 L949 332 L920 438 L856 467 Z" fill="#c77c67" stroke="#402914" stroke-width="5"/><g font-family="Arial,sans-serif" font-size="20" fill="#402914" font-weight="700"><text x="225" y="573">VACÍO</text><text x="337" y="573">BIFE</text><text x="485" y="573">OJO DE BIFE</text><text x="625" y="573">ENTRAÑA</text><text x="760" y="573">TIRA DE ASADO</text><text x="940" y="573">LOMO</text></g><g font-family="Arial,sans-serif" font-size="17" fill="#6b5a48"><text x="210" y="604">fibra marcada</text><text x="335" y="604">jugoso</text><text x="480" y="604">marmoleado</text><text x="638" y="604">intensa</text><text x="778" y="604">con hueso</text><text x="940" y="604">tierno</text></g><text x="70" y="652" fill="#87300c" font-family="Arial,sans-serif" font-size="17" font-weight="700">Orientativo: el despiece y el nombre pueden variar según la parrilla</text></svg>`)}`;
  const links = articleLinks[path];
  const internalLinks = links ? `<section class="article-context"><p>SEGUÍ LEYENDO</p>${links.map(([href,label])=>`<a href="${href}">${label} <span>→</span></a>`).join("")}</section>` : "";
  const imageConsistency = `<style>
    /* Portada: todas las tarjetas usan una altura de imagen coherente */
    .home-new .hn-rest-card img,
    .home-new .hn-articles .article-cover { height: 220px !important; }
    .home-new .hn-rest-card img,
    .home-new .hn-articles .article-cover img { width: 100%; object-fit: cover; display: block; }
    @media (max-width: 720px) {
      .home-new .hn-rest-card img,
      .home-new .hn-articles .article-cover { height: 180px !important; }
      .home-new .hn-articles .article-card { grid-template-columns: 150px 1fr !important; }
      .guide > .wrap:last-child article { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 430px) {
      .home-new .hn-rest-card { grid-template-columns: 150px 1fr !important; }
    }
  </style>`;
  let enriched = (fallbackImages[path] ? html.replace('src="undefined"', `src="${fallbackImages[path]}"`) : html)
    .replace("<h2>Una infografía rápida para elegir</h2>", `<h2>Una infografía rápida para elegir</h2><figure class="cuts-figure"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/cortes-argentinos-vaca.jpg" alt="Mapa visual de los cortes argentinos de la vaca, con la ubicación de cogote, aguja, asado, bife ancho, bife angosto, lomo, cuadril, nalga, peceto, vacío, falda y matambre"><figcaption>Ubicación aproximada de cada corte: puede variar ligeramente según el desposte.</figcaption></figure>`)
    .replace("</article><section class=\"related-articles\"", `${internalLinks}</article><section class="related-articles"`);
  if (path === "/restaurantes/el-porteno") {
    enriched = enriched
      .replace("<title>El Porteño en Valencia | Comida Argentina en Valencia</title>", "<title>El Porteño Valencia: carta, precio y reserva</title>")
      .replace('content="Restaurantes argentinos en Valencia, cultura y guías."', 'content="Ficha de El Porteño en Valencia: dirección, carta 2026, precios orientativos, qué pedir, reservas y datos comprobados antes de ir"')
      .replace("<figcaption>FICHA EDITORIAL</figcaption>", '<figcaption>Foto oficial de El Porteño</figcaption>')
      .replace("<div><b></b><span>TheFork</span></div>", "")
      .replace("<b>30–45 €</b><span>Precio medio</span>", "<b>30–45 €</b><span>Rango orientativo según carta 2026</span>")
      .replace("<p>El precio medio es orientativo y puede variar según lo que se pida. Para tener disponibilidad, especialmente en fin de semana, conviene revisar la reserva oficial antes de ir</p>", "<p>El rango de 30–45 € por persona es una orientación calculada con la carta oficial 2026 y depende de la bebida, los entrantes y el corte elegido</p><p><strong>Antes de ir</strong><br>La web oficial muestra horarios diferentes en distintos bloques. Confirmá el horario y la reserva con el restaurante antes de desplazarte</p>")
      .replace("<p>La referencia disponible es de 30–45 € por persona</p>", "<p>La carta oficial permite estimar un rango de 30–45 € por persona, pero el total cambia según el corte y lo que se comparta</p>")
      .replace("<p>Podés consultar la disponibilidad desde la web oficial del restaurante</p>", '<p>Usá el sistema de reserva enlazado desde la web oficial o llamá al +34 655 91 68 97</p>')
      .replace("<p class=\"detail-source\">Precio, valoración y carta consultados en agosto de 2026. Las condiciones y disponibilidad pueden cambiar</p>", '<p class="detail-source"><strong>Última verificación: 10 de agosto de 2026</strong><br>Fuentes: <a href="https://elporteno.es/" target="_blank" rel="noopener">web oficial</a>, <a href="https://elporteno.es/wp-content/uploads/2026/02/Carta-El-Porteno-2026.pdf" target="_blank" rel="noopener">carta 2026</a>, <a href="https://www.instagram.com/elportenoasador/" target="_blank" rel="noopener">Instagram oficial</a>, <a href="https://www.visitvalencia.com/en/what-to-do-valencia/gastronomy/where-to-eat-restaurant-valencia/porteno" target="_blank" rel="noopener">Visit València</a> y <a href="https://elporteno.es/wp-content/uploads/2021/05/BIFE-A-LA-PARRILLA-WEB-EL-PORTEN%CC%83O.jpg" target="_blank" rel="noopener">fuente de la imagen</a></p>')
      .replace("<a href=\"/guias\">Guías de Valencia</a>", '<a href="/guias/tomatina-bunol-2026">Guía de La Tomatina 2026</a>');
  }
  const newRestaurantDirectoryCard = '<a class="r-card" href="/restaurantes/asador-el-argentino"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg" alt="Carnes del Asador El Argentino en Valencia" loading="lazy"><div><p class="eyebrow">MONTEOLIVETE · 16–28 €</p><h2>Asador El Argentino</h2><p>Parrilla argentina informal con carnes, empanadas y eventos anunciados por el local</p><span>Ver ficha →</span></div></a>';
  const newRestaurantHomeCard = '<a class="hn-rest-card" href="/restaurantes/asador-el-argentino"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg" alt="Carnes del Asador El Argentino en Valencia" loading="lazy"><div><p>MONTEOLIVETE · 16–28 €</p><h3>Asador El Argentino</h3><b>Ver ficha →</b></div></a>';
  const newArticleCard = '<a class="article-card" href="/blog/eclipse-solar-valencia-2026"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/eclipse-solar-valencia-2026.jpg" alt="Eclipse solar total sobre la playa de València" loading="lazy"><span>ACTUALIDAD LOCAL</span></div><div class="article-card-copy"><p>5 MIN DE LECTURA</p><h2>Eclipse solar en Valencia 2026: hora, lugar y seguridad</h2><span>Cómo organizar la observación del 12 de agosto con fuentes oficiales y sin arriesgar la vista</span><b>Leer artículo <i>→</i></b></div></a>';
  if (path === "/restaurantes") {
    enriched = enriched.replace('<div class="r-grid">', `<div class="r-grid">${newRestaurantDirectoryCard}`);
  }
  if (path === "/blog") {
    enriched = enriched.replace('<div class="article-grid">', `<div class="article-grid">${newArticleCard}`);
  }
  if (path === "/") {
    enriched = enriched
      .replace('<div class="hn-rest-grid">', `<div class="hn-rest-grid">${newRestaurantHomeCard}`)
      .replace('<div class="hn-articles">', `<div class="hn-articles">${newArticleCard}`)
      .replace("Valencia para recién llegados", "La Tomatina 2026 desde Valencia")
      .replace("Los primeros barrios, recorridos y lugares para empezar a orientarte en la ciudad sin querer conocerlo todo de golpe", "Fecha, entrada, transporte y equipo para vivir la fiesta de Buñol con un plan claro")
      .replace('href="/guias">Leer la guía →', 'href="/guias/tomatina-bunol-2026">Leer la guía →');
  }
  enriched = enriched.replace("</head>", `${imageConsistency}<style>.article-context{margin:34px 0;border-top:3px solid #ffc449;padding-top:18px;display:grid;gap:9px}.article-context p{grid-column:1/-1;margin:0;color:#87300c;font-size:11px;font-weight:900;letter-spacing:.1em}.article-context a{display:flex;justify-content:space-between;gap:12px;padding:14px 16px;background:#e8f4fb;color:#402914;text-decoration:none;font-weight:800}.article-context a span{color:#3f86b5}.article-inline-link{background:#fff7e5!important;border-left-color:#ffc449!important}.article-inline-link a{color:#87300c;font-weight:800}.cut-infographic{display:none!important}.cuts-figure{margin:24px 0;border:1px solid #e7c067;background:#fffdf8}.cuts-figure img{display:block;width:100%;height:auto}.cuts-figure figcaption{padding:10px 14px;color:#6b5a48;font-size:13px;line-height:1.4}@media(max-width:560px){.article-context a{font-size:14px}}</style></head>`);
  return new Response(applySeo(enriched, path), response);
}
