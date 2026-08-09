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
    "/blog/pedir-en-parrilla-argentina": [["/blog/cortes-carne-argentina", "Guía de cortes de carne argentinos"], ["/restaurantes", "Restaurantes argentinos en Valencia"]]
  };
  const fallbackImages = {
    "/blog/pedir-en-parrilla-argentina": "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=85"
  };
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
    .replace("</article><section class=\"related-articles\"", `${internalLinks}</article><section class="related-articles"`);
  return new Response(enriched.replace("</head>", `${imageConsistency}<style>.article-context{margin:34px 0;border-top:3px solid #ffc449;padding-top:18px;display:grid;gap:9px}.article-context p{grid-column:1/-1;margin:0;color:#87300c;font-size:11px;font-weight:900;letter-spacing:.1em}.article-context a{display:flex;justify-content:space-between;gap:12px;padding:14px 16px;background:#e8f4fb;color:#402914;text-decoration:none;font-weight:800}.article-context a span{color:#3f86b5}.cut-infographic{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:24px 0}.cut-infographic div{min-height:92px;padding:13px;background:#402914;border-top:4px solid #ffc449;color:#fff}.cut-infographic b{display:block;font-size:13px;letter-spacing:.04em}.cut-infographic span{display:block;margin-top:8px;color:#f8e7c6;font-size:13px;line-height:1.3}@media(max-width:560px){.cut-infographic{grid-template-columns:1fr 1fr}.article-context a{font-size:14px}}</style></head>`), response);
}
