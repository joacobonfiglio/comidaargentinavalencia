import site from "../worker/index.js";
import { renderTomatinaGuide } from "../content/tomatina-2026.js";
import { renderGuidesIndex } from "../content/guides-index.js";
import { renderAsadorElArgentino } from "../content/asador-el-argentino.js";
import { renderEclipseArticle } from "../content/eclipse-solar-valencia-2026.js";
import { renderGordon10 } from "../content/gordon-10.js";
import { renderEmpadronamientoGuide } from "../content/empadronamiento-valencia.js";
import { renderLaParrilleta } from "../content/la-parrilleta.js";
import { renderHorchataArticle } from "../content/horchata-valenciana.js";
import { renderBatarazaBodegon } from "../content/bataraza-bodegon.js";
import { renderTransporteGuide } from "../content/transporte-publico-valencia.js";
import { renderLaDiez } from "../content/la-diez-milanesas.js";
import { renderFernetArticle } from "../content/fernet-con-coca.js";
import { renderCulture } from "../content/culture-ruzafa.js";
import { renderProductosArgentinosGuide } from "../content/productos-argentinos-valencia.js";
import { renderCheTango } from "../content/che-tango-valencia.js";
import { renderSanMartinArticle } from "../content/17-agosto-san-martin.js";
import { renderBarVeni } from "../content/bar-veni-valencia.js";
import { renderCanjeCarnetGuide } from "../content/canje-carnet-argentino-espana.js";
import { renderMobyDick } from "../content/moby-dick-valencia.js";
import { renderMilanesaNapolitanaArticle } from "../content/milanesa-napolitana-origen.js";

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
  "/restaurantes/gordon-10": { title: "Gordon 10 Valencia: carta, precio y reservas", description: "Ficha de Gordon 10 en Cánovas: carta oficial, menús, precio orientativo, dirección, horario, reserva y qué conviene saber antes de ir", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/gordon-10.jpg", type: "restaurant", date: "2026-08-12", restaurant: { name: "Gordon 10", telephone: "+34 963 74 07 87", streetAddress: "Calle Conde de Altea, 49", postalCode: "46005", sameAs: ["https://www.gordon10.com/", "https://www.instagram.com/restaurantegordon10valencia/"] } },
  "/restaurantes/la-parrilleta": { title: "La Parrilleta Valencia: carta, precio y reserva", description: "Ficha de La Parrilleta en Cánovas: carta, precio orientativo, horarios, qué pedir, opciones confirmadas y reserva.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-parrilleta.jpg", type: "restaurant", date: "2026-08-13", restaurant: { name: "La Parrilleta", telephone: "+34 962 35 30 07", streetAddress: "Carrer de Salamanca, 14", postalCode: "46005", sameAs: ["https://laparrilleta.es/", "https://www.instagram.com/laparrilleta/"] } },
  "/restaurantes/bataraza-bodegon": { title: "Bataraza Bodegón Valencia: carta y reserva", description: "Ficha de Bataraza Bodegón: carta argentina, precio orientativo, dirección, vinos, qué pedir y qué confirmar antes de reservar.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bataraza-bodegon.jpg", type: "restaurant", date: "2026-08-14", restaurant: { name: "Bataraza Bodegón", telephone: "+34 625 31 30 14", streetAddress: "C. del Hospital, 18", postalCode: "46001", sameAs: ["https://bataraza.com/", "https://www.instagram.com/batarazabodegon/"] } },
  "/restaurantes/la-diez-milanesas": { title: "La Diez Valencia: milanesas, carta y reserva", description: "Ficha de La Diez en Valencia: milanesas, carta y precios, dirección, reservas, qué pedir y datos comprobados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-diez-milanesas.jpg", type: "restaurant", date: "2026-08-15", restaurant: { name: "La Diez", telephone: "+34 609 83 03 31", streetAddress: "Carrer d’Armando Palacio Valdés, 1", postalCode: "46010", sameAs: ["https://www.ladiezmilanesas.es/", "https://www.instagram.com/ladiezmilanesas/"] } },
  "/restaurantes/culture-ruzafa": { title: "Culture Ruzafa: carta, precio y reservas", description: "Ficha de Culture en Ruzafa: propuesta italiano-argentina, carta, precio orientativo, dirección, terraza y qué confirmar antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/culture-ruzafa.jpg", type: "restaurant", date: "2026-08-16", restaurant: { name: "Culture", telephone: "+34 960 833 481", streetAddress: "Calle Puerto Rico, 16", postalCode: "46006", sameAs: ["https://culturestation.es/", "https://www.instagram.com/culture.ruzafa/"] } },
  "/blog/eclipse-solar-valencia-2026": { title: "Eclipse solar en Valencia 2026: cómo verlo", description: "Hora, seguridad y lugar oficial para ver el eclipse solar del 12 de agosto de 2026 en València sin dañar la vista ni improvisar", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/eclipse-solar-valencia-2026.jpg", type: "article", date: "2026-08-11" },
  "/guias/empadronamiento-valencia": { title: "Empadronamiento en Valencia: guía paso a paso", description: "Documentos, cita, oficinas y pasos para empadronarte en Valencia, con información oficial y casos de alquiler o vivienda ajena", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/empadronamiento-valencia.jpg", type: "article", date: "2026-08-12" },
  "/guias/transporte-publico-valencia": { title: "Transporte público en Valencia: guía práctica", description: "Metro, autobús, tranvía y títulos SUMA: cómo moverte por Valencia, llegar desde el aeropuerto y elegir billete sin pagar de más.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/transporte-publico-valencia.jpg", type: "article", date: "2026-08-14" },
  "/blog/que-es-horchata-valenciana": { title: "Qué es la horchata valenciana y cómo se toma", description: "Qué lleva la horchata valenciana, por qué se hace con chufa, cómo se toma con fartons y qué mirar para elegir una auténtica.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/horchata-valenciana.jpg", type: "article", date: "2026-08-13" },
  "/blog/fernet-con-coca": { title: "Fernet con coca: qué es y cómo se prepara", description: "Qué es el fernet con coca, por qué es un clásico argentino, cómo ajustar la proporción y dónde encontrarlo en Valencia.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/fernet-con-coca.jpg", type: "article", date: "2026-08-15" },
  "/guias/productos-argentinos-valencia": { title: "Dónde comprar productos argentinos en Valencia", description: "Tiendas de productos argentinos en Valencia: yerba, mates, alfajores, dulce de leche y opciones online, con direcciones verificadas.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/productos-argentinos-valencia.jpg", type: "article", date: "2026-08-16" },
  "/restaurantes/che-tango-valencia": { title: "Che Tango Valencia: carta, precio y reservas", description: "Ficha de Che Tango en Valencia: parrilla argentina, carta, precios, dirección, horarios, reserva y qué conviene confirmar antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/che-tango-valencia.jpg", type: "restaurant", date: "2026-08-17", restaurant: { name: "Che Tango", telephone: "+34 960 04 84 93", streetAddress: "Av. de França, 65", postalCode: "46023", sameAs: ["https://chetango.es/", "https://www.instagram.com/restaurante_asador_chetango/"] } },
  "/blog/17-agosto-san-martin": { title: "17 de agosto: qué se conmemora en Argentina", description: "Qué se conmemora el 17 de agosto en Argentina, por qué se recuerda a San Martín y cómo funciona el feriado nacional en 2026.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/17-agosto-san-martin.jpg", type: "article", date: "2026-08-17" },
  "/restaurantes/bar-veni-valencia": { title: "Bar Veni Valencia: carta, precio y reservas", description: "Ficha de Bar Veni en Valencia: milanesas, hamburguesas, precio, dirección, reservas, ambiente y datos comprobados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bar-veni-valencia.jpg", type: "restaurant", date: "2026-08-18", restaurant: { name: "Bar Veni", telephone: "+34 682 89 48 09", streetAddress: "Gran Via del Marqués del Túria, 65", postalCode: "46005", sameAs: ["https://gluckvalencia.eatbu.com/", "https://www.instagram.com/barveni.valencia/"] } },
  "/guias/canje-carnet-argentino-espana": { title: "Canjear el carnet argentino en España: guía 2026", description: "Requisitos, documentos, tasas y pasos para canjear una licencia argentina en España desde Valencia, con fuentes oficiales actualizadas.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/canje-carnet-argentino-espana.jpg", type: "article", date: "2026-08-18" },
  "/restaurantes/moby-dick-valencia": { title: "Moby Dick Valencia: carta, precio y reservas", description: "Ficha de Moby Dick Valencia: milanesas, carta, precio, dirección, reservas, terraza, ambiente y datos comprobados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/moby-dick-valencia.jpg", type: "restaurant", date: "2026-08-19", restaurant: { name: "Moby Dick Valencia", telephone: "+34 686 05 94 11", streetAddress: "Carrer de Sueca, 16", postalCode: "46004", sameAs: ["https://www.instagram.com/mobydickvlc/", "https://www.facebook.com/Mobydickvalencia/"] } },
  "/blog/milanesa-napolitana-origen": { title: "Milanesa napolitana: origen y qué lleva", description: "La historia porteña de la milanesa napolitana, sus ingredientes, variantes y dónde probarla en restaurantes argentinos de Valencia.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/milanesa-napolitana-origen.jpg", type: "article", date: "2026-08-19" },
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
  ["/restaurantes/gordon-10", "monthly", "0.8"],
  ["/restaurantes/la-parrilleta", "monthly", "0.8"],
  ["/restaurantes/bataraza-bodegon", "monthly", "0.8"],
  ["/restaurantes/la-diez-milanesas", "monthly", "0.8"],
  ["/restaurantes/culture-ruzafa", "monthly", "0.8"],
  ["/restaurantes/che-tango-valencia", "monthly", "0.8"],
  ["/restaurantes/bar-veni-valencia", "monthly", "0.8"],
  ["/restaurantes/moby-dick-valencia", "monthly", "0.8"],
  ...["historia-del-mate", "bandera-argentina-color-cielo", "valencianos-y-argentinos-historia", "truc-o-truco", "cortes-carne-argentina", "pedir-en-parrilla-argentina"].map((slug) => [`/blog/${slug}`, "monthly", "0.7"]),
  ["/blog/eclipse-solar-valencia-2026", "weekly", "0.8"],
  ["/blog/que-es-horchata-valenciana", "monthly", "0.8"],
  ["/blog/fernet-con-coca", "monthly", "0.8"],
  ["/blog/17-agosto-san-martin", "monthly", "0.8"],
  ["/blog/milanesa-napolitana-origen", "monthly", "0.8"],
  ["/guias/valencia-recien-llegados", "monthly", "0.7"],
  ["/guias/tomatina-bunol-2026", "weekly", "0.7"]
  ,["/guias/empadronamiento-valencia", "monthly", "0.8"]
  ,["/guias/transporte-publico-valencia", "monthly", "0.8"]
  ,["/guias/productos-argentinos-valencia", "monthly", "0.8"]
  ,["/guias/canje-carnet-argentino-espana", "monthly", "0.8"]
];

function renderSitemap() {
  const lastModified = "2026-08-19";
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
    data.type === "restaurant" ? { "@context": "https://schema.org", "@type": "Restaurant", name: data.restaurant?.name || "Asador El Argentino", url, image: data.image, telephone: data.restaurant?.telephone || "+34 657 77 80 04", servesCuisine: "Argentina", priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: data.restaurant?.streetAddress || "Carrer de l’Escultor Josep Capuz, 12", postalCode: data.restaurant?.postalCode || "46004", addressLocality: "València", addressCountry: "ES" }, sameAs: data.restaurant?.sameAs || ["https://www.instagram.com/asador_el_argentino/", "https://www.facebook.com/asadorargentinovalencia/"] } : null,
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
  if (path === "/guias/empadronamiento-valencia") {
    return new Response(applySeo(renderEmpadronamientoGuide().replace('<a href="/guias">Todas las guías prácticas →</a>', '<a href="/guias/canje-carnet-argentino-espana">Canje del carnet argentino →</a><a href="/guias">Todas las guías prácticas →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/transporte-publico-valencia") {
    return new Response(applySeo(renderTransporteGuide().replace('<a href="/guias/empadronamiento-valencia">Cómo empadronarte en Valencia →</a>', '<a href="/guias/canje-carnet-argentino-espana">Canje del carnet argentino →</a><a href="/guias/empadronamiento-valencia">Cómo empadronarte en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/productos-argentinos-valencia") {
    return new Response(applySeo(renderProductosArgentinosGuide(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/asador-el-argentino") {
    return new Response(applySeo(renderAsadorElArgentino(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/gordon-10") {
    return new Response(applySeo(renderGordon10().replace('<a href="/restaurantes/union-carnes-y-vinos">Unión Carnes y Vinos →</a>', '<a href="/restaurantes/la-parrilleta">La Parrilleta en Cánovas →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/la-parrilleta") {
    return new Response(applySeo(renderLaParrilleta(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/bataraza-bodegon") {
    return new Response(applySeo(renderBatarazaBodegon().replace('Fernet con Coca.', '<a href="/blog/fernet-con-coca">Fernet con Coca</a>.'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/la-diez-milanesas") {
    return new Response(applySeo(renderLaDiez().replace("Ternera, cerdo ibérico, pollo o berenjena", "Ternera, cerdo ibérico o berenjena").replace('<a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón →</a>', '<a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a><a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/culture-ruzafa") {
    return new Response(applySeo(renderCulture(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/che-tango-valencia") {
    return new Response(applySeo(renderCheTango(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/bar-veni-valencia") {
    return new Response(applySeo(renderBarVeni().replace('<a href="/blog/fernet-con-coca">Qué es el fernet con coca →</a>', '<a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a><a href="/blog/fernet-con-coca">Qué es el fernet con coca →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/moby-dick-valencia") {
    return new Response(applySeo(renderMobyDick(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/canje-carnet-argentino-espana") {
    return new Response(applySeo(renderCanjeCarnetGuide(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/eclipse-solar-valencia-2026") {
    return new Response(applySeo(renderEclipseArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/que-es-horchata-valenciana") {
    return new Response(applySeo(renderHorchataArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/fernet-con-coca") {
    return new Response(applySeo(renderFernetArticle().replace('<a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón en el centro →</a>', '<a href="/restaurantes/bar-veni-valencia">Bar Veni en Cánovas →</a><a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón en el centro →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/17-agosto-san-martin") {
    return new Response(applySeo(renderSanMartinArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/milanesa-napolitana-origen") {
    return new Response(applySeo(renderMilanesaNapolitanaArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  const response = await site.fetch(request, {}, context);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const articleLinks = {
    "/blog/historia-del-mate": [["/guias/productos-argentinos-valencia", "Dónde comprar yerba y productos argentinos"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/guias/valencia-recien-llegados", "Guía Valencia para recién llegados"]],
    "/blog/bandera-argentina-color-cielo": [["/blog/17-agosto-san-martin", "Qué se conmemora el 17 de agosto"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/blog/historia-del-mate", "La historia del mate"]],
    "/blog/valencianos-y-argentinos-historia": [["/blog/17-agosto-san-martin", "San Martín y el 17 de agosto"], ["/guias/valencia-recien-llegados", "Valencia para recién llegados"], ["/blog/historia-del-mate", "La historia del mate"], ["/blog/que-es-horchata-valenciana", "Qué es la horchata valenciana"]],
    "/blog/truc-o-truco": [["/blog/historia-del-mate", "La historia del mate"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"]],
    "/blog/cortes-carne-argentina": [["/restaurantes/che-tango-valencia", "Che Tango en Avenida de Francia"], ["/blog/pedir-en-parrilla-argentina", "Cómo pedir en una parrilla argentina"], ["/restaurantes/gordon-10", "Gordon 10 en Cánovas"], ["/restaurantes/la-parrilleta", "La Parrilleta en Cánovas"]],
    "/blog/pedir-en-parrilla-argentina": [["/blog/milanesa-napolitana-origen", "Origen de la milanesa napolitana"], ["/blog/cortes-carne-argentina", "Ver la guía visual de cortes"], ["/restaurantes/la-diez-milanesas", "La Diez: casa de milanesas"], ["/restaurantes/la-parrilleta", "La Parrilleta en Cánovas"]]
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
      .replace("<a href=\"/guias\">Guías de Valencia</a>", '<a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón en el centro</a><a href="/guias/transporte-publico-valencia">Cómo moverte por Valencia</a>');
  }
  const newRestaurantDirectoryCard = '<a class="r-card" href="/restaurantes/asador-el-argentino"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg" alt="Carnes del Asador El Argentino en Valencia" loading="lazy"><div><p class="eyebrow">MONTEOLIVETE · 16–28 €</p><h2>Asador El Argentino</h2><p>Parrilla argentina informal con carnes, empanadas y eventos anunciados por el local</p><span>Ver ficha →</span></div></a>';
  const gordonDirectoryCard = '<a class="r-card" href="/restaurantes/gordon-10"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/gordon-10.jpg" alt="Interior del restaurante Gordon 10 en Cánovas" loading="lazy"><div><p class="eyebrow">CÁNOVAS · 43–60 €</p><h2>Gordon 10</h2><p>Parrilla veterana con cortes, menús cerrados y vinos argentinos</p><span>Ver ficha →</span></div></a>';
  const parrilletaDirectoryCard = '<a class="r-card" href="/restaurantes/la-parrilleta"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-parrilleta.jpg" alt="Salón de La Parrilleta en Cánovas" loading="lazy"><div><p class="eyebrow">CÁNOVAS · 18–37 €</p><h2>La Parrilleta</h2><p>Asador con carne, pulpo, menús para compartir y alternativa vegana publicada</p><span>Ver ficha →</span></div></a>';
  const batarazaDirectoryCard = '<a class="r-card" href="/restaurantes/bataraza-bodegon"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bataraza-bodegon.jpg" alt="Mesa con platos argentinos en Bataraza Bodegón" loading="lazy"><div><p class="eyebrow">EL PILAR · HASTA 30 €</p><h2>Bataraza Bodegón</h2><p>Bodegón argentino con picoteo, platos de fondo, vinos y coctelería en Ciutat Vella</p><span>Ver ficha →</span></div></a>';
  const laDiezDirectoryCard = '<a class="r-card" href="/restaurantes/la-diez-milanesas"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-diez-milanesas.jpg" alt="Milanesa napolitana con jamón de La Diez" loading="lazy"><div><p class="eyebrow">EXPOSICIÓ · 20 €</p><h2>La Diez</h2><p>Casa de milanesas argentinas con versiones clásicas, napolitana, fugazzeta y postres</p><span>Ver ficha →</span></div></a>';
  const cultureDirectoryCard = '<a class="r-card" href="/restaurantes/culture-ruzafa"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/culture-ruzafa.jpg" alt="Cocina y emplatado en Culture Ruzafa" loading="lazy"><div><p class="eyebrow">RUZAFA · 10–20 €</p><h2>Culture</h2><p>Restaurante italiano-argentino con empanadas, focaccia, pasta, pizzas y postres caseros</p><span>Ver ficha →</span></div></a>';
  const cheTangoDirectoryCard = '<a class="r-card" href="/restaurantes/che-tango-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/che-tango-valencia.jpg" alt="Parrillada servida por Che Tango en Valencia" loading="lazy"><div><p class="eyebrow">CAMINS AL GRAU · 25 €</p><h2>Che Tango</h2><p>Parrilla argentina con empanadas, cortes a la brasa, Malbec y postres caseros</p><span>Ver ficha →</span></div></a>';
  const barVeniDirectoryCard = '<a class="r-card" href="/restaurantes/bar-veni-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bar-veni-valencia.jpg" alt="Plato servido por Bar Veni en Valencia" loading="lazy"><div><p class="eyebrow">CÁNOVAS · 18 €</p><h2>Bar Veni</h2><p>Milanesas, hamburguesas de entraña y pantallas para seguir partidos</p><span>Ver ficha →</span></div></a>';
  const mobyDickDirectoryCard = '<a class="r-card" href="/restaurantes/moby-dick-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/moby-dick-valencia.jpg" alt="Barra y equipo de Moby Dick Valencia" loading="lazy"><div><p class="eyebrow">RUZAFA · 24 €</p><h2>Moby Dick Valencia</h2><p>Pub & grill con milanesas XXL, empanadas, carnes, copas y música</p><span>Ver ficha →</span></div></a>';
  const newRestaurantHomeCard = '<a class="hn-rest-card" href="/restaurantes/asador-el-argentino"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg" alt="Carnes del Asador El Argentino en Valencia" loading="lazy"><div><p>MONTEOLIVETE · 16–28 €</p><h3>Asador El Argentino</h3><b>Ver ficha →</b></div></a>';
  const gordonHomeCard = '<a class="hn-rest-card" href="/restaurantes/gordon-10"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/gordon-10.jpg" alt="Interior del restaurante Gordon 10 en Cánovas" loading="lazy"><div><p>CÁNOVAS · 43–60 €</p><h3>Gordon 10</h3><b>Ver ficha →</b></div></a>';
  const parrilletaHomeCard = '<a class="hn-rest-card" href="/restaurantes/la-parrilleta"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-parrilleta.jpg" alt="Salón de La Parrilleta en Cánovas" loading="lazy"><div><p>CÁNOVAS · 18–37 €</p><h3>La Parrilleta</h3><b>Ver ficha →</b></div></a>';
  const batarazaHomeCard = '<a class="hn-rest-card" href="/restaurantes/bataraza-bodegon"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bataraza-bodegon.jpg" alt="Mesa con platos argentinos en Bataraza Bodegón" loading="lazy"><div><p>EL PILAR · HASTA 30 €</p><h3>Bataraza Bodegón</h3><b>Ver ficha →</b></div></a>';
  const laDiezHomeCard = '<a class="hn-rest-card" href="/restaurantes/la-diez-milanesas"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-diez-milanesas.jpg" alt="Milanesa napolitana con jamón de La Diez" loading="lazy"><div><p>EXPOSICIÓ · 20 €</p><h3>La Diez</h3><b>Ver ficha →</b></div></a>';
  const cultureHomeCard = '<a class="hn-rest-card" href="/restaurantes/culture-ruzafa"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/culture-ruzafa.jpg" alt="Cocina y emplatado en Culture Ruzafa" loading="lazy"><div><p>RUZAFA · 10–20 €</p><h3>Culture</h3><b>Ver ficha →</b></div></a>';
  const cheTangoHomeCard = '<a class="hn-rest-card" href="/restaurantes/che-tango-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/che-tango-valencia.jpg" alt="Parrillada servida por Che Tango en Valencia" loading="lazy"><div><p>CAMINS AL GRAU · 25 €</p><h3>Che Tango</h3><b>Ver ficha →</b></div></a>';
  const barVeniHomeCard = '<a class="hn-rest-card" href="/restaurantes/bar-veni-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bar-veni-valencia.jpg" alt="Plato servido por Bar Veni en Valencia" loading="lazy"><div><p>CÁNOVAS · 18 €</p><h3>Bar Veni</h3><b>Ver ficha →</b></div></a>';
  const mobyDickHomeCard = '<a class="hn-rest-card" href="/restaurantes/moby-dick-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/moby-dick-valencia.jpg" alt="Barra y equipo de Moby Dick Valencia" loading="lazy"><div><p>RUZAFA · 24 €</p><h3>Moby Dick Valencia</h3><b>Ver ficha →</b></div></a>';
  const newArticleCard = '<a class="article-card" href="/blog/eclipse-solar-valencia-2026"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/eclipse-solar-valencia-2026.jpg" alt="Eclipse solar total sobre la playa de València" loading="lazy"><span>ACTUALIDAD LOCAL</span></div><div class="article-card-copy"><p>5 MIN DE LECTURA</p><h2>Eclipse solar en Valencia 2026: hora, lugar y seguridad</h2><span>Cómo organizar la observación del 12 de agosto con fuentes oficiales y sin arriesgar la vista</span><b>Leer artículo <i>→</i></b></div></a>';
  const horchataArticleCard = '<a class="article-card" href="/blog/que-es-horchata-valenciana"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/horchata-valenciana.jpg" alt="Vaso de horchata valenciana con fartons" loading="lazy"><span>GASTRONOMÍA VALENCIANA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>Qué es la horchata valenciana y cómo se toma</h2><span>Chufa, fartons, tipos y claves para elegir un vaso con origen reconocido</span><b>Leer artículo <i>→</i></b></div></a>';
  const fernetArticleCard = '<a class="article-card" href="/blog/fernet-con-coca"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/fernet-con-coca.jpg" alt="Vaso alto de fernet con cola y hielo" loading="lazy"><span>CULTURA ARGENTINA</span></div><div class="article-card-copy"><p>6 MIN DE LECTURA</p><h2>Fernet con coca: qué es y cómo se prepara</h2><span>Origen, vínculo con Córdoba, preparación flexible y dónde encontrarlo en Valencia</span><b>Leer artículo <i>→</i></b></div></a>';
  const sanMartinArticleCard = '<a class="article-card" href="/blog/17-agosto-san-martin"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/17-agosto-san-martin.jpg" alt="Ilustración editorial de San Martín y el cruce de los Andes" loading="lazy"><span>HISTORIA ARGENTINA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>17 de agosto: qué se conmemora en Argentina</h2><span>Por qué se recuerda a San Martín, una cronología breve y cómo funciona el feriado en 2026</span><b>Leer artículo <i>→</i></b></div></a>';
  const milanesaArticleCard = '<a class="article-card" href="/blog/milanesa-napolitana-origen"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/milanesa-napolitana-origen.jpg" alt="Milanesa napolitana con jamón, queso y papas fritas" loading="lazy"><span>GASTRONOMÍA ARGENTINA</span></div><div class="article-card-copy"><p>8 MIN DE LECTURA</p><h2>Milanesa napolitana: origen y qué lleva</h2><span>La historia porteña, los ingredientes clásicos, variantes y dónde probarla en Valencia</span><b>Leer artículo <i>→</i></b></div></a>';
  if (path === "/restaurantes") {
    enriched = enriched.replace('<div class="r-grid">', `<div class="r-grid">${mobyDickDirectoryCard}${barVeniDirectoryCard}${cheTangoDirectoryCard}${cultureDirectoryCard}${laDiezDirectoryCard}${batarazaDirectoryCard}${parrilletaDirectoryCard}${gordonDirectoryCard}${newRestaurantDirectoryCard}`);
  }
  if (path === "/blog") {
    enriched = enriched.replace('<div class="article-grid">', `<div class="article-grid">${milanesaArticleCard}${sanMartinArticleCard}${fernetArticleCard}${horchataArticleCard}${newArticleCard}`);
  }
  if (path === "/") {
    enriched = enriched
      .replace('<div class="hn-rest-grid">', `<div class="hn-rest-grid">${mobyDickHomeCard}${barVeniHomeCard}${cheTangoHomeCard}${cultureHomeCard}${laDiezHomeCard}${batarazaHomeCard}${parrilletaHomeCard}${gordonHomeCard}${newRestaurantHomeCard}`)
      .replace('<div class="hn-articles">', `<div class="hn-articles">${milanesaArticleCard}${sanMartinArticleCard}${fernetArticleCard}${horchataArticleCard}${newArticleCard}`)
      .replace("Valencia para recién llegados", "Canjear el carnet argentino en España")
      .replace("Los primeros barrios, recorridos y lugares para empezar a orientarte en la ciudad sin querer conocerlo todo de golpe", "Requisitos, certificado, tasas y pasos para gestionar el canje desde Valencia")
      .replace('href="/guias">Leer la guía →', 'href="/guias/canje-carnet-argentino-espana">Leer la guía →');
  }
  enriched = enriched.replace("</head>", `${imageConsistency}<style>.article-context{margin:34px 0;border-top:3px solid #ffc449;padding-top:18px;display:grid;gap:9px}.article-context p{grid-column:1/-1;margin:0;color:#87300c;font-size:11px;font-weight:900;letter-spacing:.1em}.article-context a{display:flex;justify-content:space-between;gap:12px;padding:14px 16px;background:#e8f4fb;color:#402914;text-decoration:none;font-weight:800}.article-context a span{color:#3f86b5}.article-inline-link{background:#fff7e5!important;border-left-color:#ffc449!important}.article-inline-link a{color:#87300c;font-weight:800}.cut-infographic{display:none!important}.cuts-figure{margin:24px 0;border:1px solid #e7c067;background:#fffdf8}.cuts-figure img{display:block;width:100%;height:auto}.cuts-figure figcaption{padding:10px 14px;color:#6b5a48;font-size:13px;line-height:1.4}@media(max-width:560px){.article-context a{font-size:14px}}</style></head>`);
  return new Response(applySeo(enriched, path), response);
}
