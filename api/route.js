import site from "../worker/index.js";

export const config = { runtime: "edge" };

export default async function handler(request, context) {
  const response = await site.fetch(request, {}, context);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
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
  return new Response(html.replace("</head>", `${imageConsistency}</head>`), response);
}
