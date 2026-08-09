import site from "../worker/index.js";

export const config = { runtime: "edge" };

export default async function handler(request, context) {
  const response = await site.fetch(request, {}, context);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const path = new URL(request.url).pathname;
  const articleLinks = {
    "/blog/historia-del-mate": [["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/guias", "Guía Valencia para recién llegados"]],
    "/blog/bandera-argentina-color-cielo": [["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/blog/historia-del-mate", "La historia del mate"]],
    "/blog/valencianos-y-argentinos-historia": [["/guias", "Valencia para recién llegados"], ["/blog/historia-del-mate", "La historia del mate"]],
    "/blog/truc-o-truco": [["/blog/historia-del-mate", "La historia del mate"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"]],
    "/blog/cortes-carne-argentina": [["/blog/pedir-en-parrilla-argentina", "Cómo pedir en una parrilla argentina"], ["/restaurantes", "Restaurantes argentinos en Valencia"]],
    "/blog/pedir-en-parrilla-argentina": [["/blog/cortes-carne-argentina", "Ver la guía visual de cortes"], ["/restaurantes", "Encontrá dónde probarlos en Valencia"]]
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
    }
    @media (max-width: 430px) {
      .home-new .hn-rest-card { grid-template-columns: 150px 1fr !important; }
    }
  </style>`;
  const enriched = (fallbackImages[path] ? html.replace('src="undefined"', `src="${fallbackImages[path]}"`) : html)
    .replace("<h2>Una infografía rápida para elegir</h2>", `<h2>Una infografía rápida para elegir</h2><figure class="cuts-figure"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/cortes-argentinos-vaca.jpg" alt="Mapa visual de los cortes argentinos de la vaca, con la ubicación de cogote, aguja, asado, bife ancho, bife angosto, lomo, cuadril, nalga, peceto, vacío, falda y matambre"><figcaption>Ubicación aproximada de cada corte: puede variar ligeramente según el desposte.</figcaption></figure>`)
    .replace("</article><section class=\"related-articles\"", `${internalLinks}</article><section class="related-articles"`);
  return new Response(enriched.replace("</head>", `${imageConsistency}<style>.article-context{margin:34px 0;border-top:3px solid #ffc449;padding-top:18px;display:grid;gap:9px}.article-context p{grid-column:1/-1;margin:0;color:#87300c;font-size:11px;font-weight:900;letter-spacing:.1em}.article-context a{display:flex;justify-content:space-between;gap:12px;padding:14px 16px;background:#e8f4fb;color:#402914;text-decoration:none;font-weight:800}.article-context a span{color:#3f86b5}.article-inline-link{background:#fff7e5!important;border-left-color:#ffc449!important}.article-inline-link a{color:#87300c;font-weight:800}.cut-infographic{display:none!important}.cuts-figure{margin:24px 0;border:1px solid #e7c067;background:#fffdf8}.cuts-figure img{display:block;width:100%;height:auto}.cuts-figure figcaption{padding:10px 14px;color:#6b5a48;font-size:13px;line-height:1.4}@media(max-width:560px){.article-context a{font-size:14px}}</style></head>`), response);
}
