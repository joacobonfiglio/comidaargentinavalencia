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
import { renderLaVendetta } from "../content/la-vendetta-valencia.js";
import { renderEmpanadasValenciaGuide } from "../content/empanadas-argentinas-valencia.js";
import { renderPapanato } from "../content/papanato-valencia.js";
import { renderChimichurriArticle } from "../content/chimichurri-argentino.js";
import { renderEntreCortes } from "../content/entrecortes-valencia.js";
import { renderTarjetaSipGuide } from "../content/tarjeta-sip-valencia.js";
import { renderSanTelmo } from "../content/san-telmo-valencia.js";
import { renderDiaLectorArticle } from "../content/dia-del-lector-argentina.js";
import { renderNativoOrigen } from "../content/nativo-origen-valencia.js";
import { renderNieTieGuide } from "../content/nie-tie-valencia.js";
import { renderCruzPampa } from "../content/cruz-pampa-valencia.js";
import { renderAlfajoresArticle } from "../content/alfajores-argentinos-tipos.js";
import { renderUnionCarnes } from "../content/union-carnes-y-vinos-valencia.js";
import { renderCertificadoClaveGuide } from "../content/certificado-digital-clave-valencia.js";
import { renderDonaPetrona } from "../content/dona-petrona-valencia.js";
import { renderDulceLecheArticle } from "../content/dulce-de-leche-argentino.js";

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
  "/restaurantes/la-vendetta-valencia": { title: "La Vendetta Valencia: carta, precio y reservas", description: "Ficha de La Vendetta en Ruzafa: pizza, milanesas, empanadas, precio, dirección, reservas, terraza y datos comprobados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-vendetta-valencia.jpg", type: "restaurant", date: "2026-08-20", restaurant: { name: "La Vendetta", telephone: "+34 615 27 67 77", streetAddress: "Carrer del Literat Azorín, 20", postalCode: "46006", sameAs: ["https://www.instagram.com/lavendettavalencia/", "https://www.thefork.es/restaurante/la-vendetta-r817316"] } },
  "/guias/empanadas-argentinas-valencia": { title: "Dónde comer empanadas argentinas en Valencia", description: "Guía de empanadas argentinas en Valencia: restaurantes verificados, sabores, precios orientativos, zonas y consejos para elegir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/empanadas-argentinas-valencia.jpg", type: "article", date: "2026-08-20" },
  "/restaurantes/papanato-valencia": { title: "Papanato Valencia: carta, precio y reservas", description: "Ficha de Papanato junto al Mercado Central: carta, precios, patatas, milanesas, lomito, reservas y datos comprobados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/papanato-valencia.jpg", type: "restaurant", date: "2026-08-21", restaurant: { name: "Papanato Plaza del Mercat", streetAddress: "Plaça del Mercat, 40", postalCode: "46001", sameAs: ["https://papanato.es/", "https://www.instagram.com/papanato.es/"] } },
  "/blog/chimichurri-argentino": { title: "Chimichurri argentino: qué lleva y cómo se usa", description: "Qué lleva el chimichurri argentino, cómo prepararlo, ajustar el picante y usarlo con asado, verduras, choripán o empanadas.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/chimichurri-argentino.jpg", type: "article", date: "2026-08-21" },
  "/restaurantes/entrecortes-valencia": { title: "Entre Cortes L'Eliana: carta y reservas", description: "Ficha de Entre Cortes en L'Eliana: carta, precios orientativos, parrilla argentina, dirección, teléfono, reservas y datos verificados.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/entrecortes-valencia.jpg", type: "restaurant", date: "2026-08-22", restaurant: { name: "Entre Cortes", telephone: "+34 624 46 33 16", streetAddress: "Carrer de Benissanó, 13", postalCode: "46183", sameAs: ["https://entrecortesvalencia.es/", "https://www.instagram.com/entrecortesvalencia/"] } },
  "/guias/tarjeta-sip-valencia": { title: "Tarjeta SIP en Valencia: cómo solicitarla", description: "Guía para solicitar la tarjeta SIP en Valencia: requisitos, documentos, centro de salud, casos habituales y fuentes oficiales actualizadas.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/tarjeta-sip-valencia.jpg", type: "article", date: "2026-08-22" },
  "/blog/dia-del-lector-argentina": { title: "Día del Lector en Argentina: por qué se celebra", description: "Por qué el 24 de agosto es el Día del Lector en Argentina, su vínculo con Borges y cómo celebrarlo leyendo o usando bibliotecas de Valencia.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dia-del-lector-argentina.jpg", type: "article", date: "2026-08-23" },
  "/restaurantes/mila": { title: "Mila Restaurante Valencia: carta, precio y reservas", description: "Ficha de Mila Restaurante en Valencia: ubicación, precio orientativo, qué pedir, contacto y enlace oficial para reservar mesa.", image: defaultImage },
  "/restaurantes/el-porteno": { title: "El Porteño Valencia: carta, precio y reservas", description: "Ficha de El Porteño en Valencia: parrilla argentina, carta, precios orientativos, dirección, contacto y reserva oficial.", image: defaultImage },
  "/restaurantes/cruz-pampa": { title: "Cruz Pampa Valencia: carta, precio y reservas", description: "Ficha de Cruz Pampa en Cánovas: carta 2026, carnes Black Angus, precio orientativo, dirección, teléfono, reservas y datos verificados.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/cruz-pampa-valencia.jpg", type: "restaurant", date: "2026-08-25", restaurant: { name: "Cruz Pampa", telephone: "+34 664 68 95 98", streetAddress: "Carrer del Comte d'Altea, 29", postalCode: "46005", sameAs: ["https://asadorargentinovalencia.es/", "https://www.instagram.com/cruzpampa_asador/"] } },
  "/restaurantes/union-carnes-y-vinos": { title: "Unión Carnes y Vinos: carta y reservas", description: "Ficha de Unión Carnes y Vinos en Ruzafa: carta, precio orientativo, dirección, horario, teléfono, reservas y datos verificados.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/union-carnes-y-vinos-valencia.jpg", type: "restaurant", date: "2026-08-26", restaurant: { name: "Unión Carnes y Vinos", telephone: "+34 619 24 04 02", streetAddress: "Carrer de Puerto Rico, 38", postalCode: "46006", sameAs: ["https://unioncarnesyvinos.com/", "https://www.instagram.com/union_carnesyvinos/"] } },
  "/restaurantes/dona-petrona": { title: "Doña Petrona Valencia: carta y reservas", description: "Ficha de Doña Petrona en Ruzafa: carta, precios, dirección, horarios, reservas y datos verificados antes de ir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dona-petrona-valencia.jpg", type: "restaurant", date: "2026-08-27", restaurant: { name: "Doña Petrona", telephone: "+34 963 364 983", streetAddress: "C/ Padre Perera, 5", postalCode: "46006", sameAs: ["https://www.xn--doapetrona-u9a.es/", "https://www.instagram.com/d_petrona/"] } },
  "/restaurantes/viejo-barrio": { title: "Viejo Barrio Valencia: parrilla argentina y precio", description: "Ficha de Viejo Barrio en Benimaclet: parrillada argentina, dirección, precio orientativo, platos recomendados y contacto.", image: defaultImage },
  "/restaurantes/cayena-restobar": { title: "Cayena Restobar Valencia: carta, precio y ubicación", description: "Ficha de Cayena Restobar cerca de Mestalla: comida argentina, precio orientativo, recomendaciones, ubicación y contacto.", image: defaultImage },
  "/restaurantes/san-telmo": { title: "Asador San Telmo Valencia: carta y reservas", description: "Ficha de Asador San Telmo en Ruzafa: parrilla argentina, carta, precio orientativo, horarios, dirección, reservas y datos verificados.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/san-telmo-valencia.jpg", type: "restaurant", date: "2026-08-23", restaurant: { name: "Asador San Telmo", telephone: "+34 638 611 863", streetAddress: "Calle Puerto Rico, 14", postalCode: "46006", sameAs: ["https://asadorsantelmo.com/", "https://www.instagram.com/asador_santelmo/"] } },
  "/restaurantes/nativo-origen-valencia": { title: "Nativo Origen Valencia: carta y reservas", description: "Ficha de Nativo Origen en Ruzafa: carta, carnes a la brasa, precios orientativos, dirección, reservas y datos verificados.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/nativo-origen-valencia.jpg", type: "restaurant", date: "2026-08-24", restaurant: { name: "Nativo Origen", telephone: "+34 677 57 58 95", streetAddress: "C/ de Pere III el Gran, 40", postalCode: "46005", sameAs: ["https://www.instagram.com/nativo.origen/", "https://www.facebook.com/p/Nativo-Origen-61565873302649/"] } },
  "/guias/nie-tie-valencia": { title: "NIE y TIE en Valencia: diferencias y trámites", description: "Qué diferencia hay entre NIE y TIE, quién necesita cada uno y cómo gestionar cita, documentación y recogida en Valencia con fuentes oficiales.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/nie-tie-valencia.jpg", type: "article", date: "2026-08-24" },
  "/blog/alfajores-argentinos-tipos": { title: "Alfajores argentinos: tipos y diferencias", description: "Qué es un alfajor argentino y cómo se diferencian los de maicena, chocolate, Córdoba, Santa Fe y Mar del Plata, con una guía para elegir.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/alfajores-argentinos-tipos.jpg", type: "article", date: "2026-08-25" },
  "/guias/certificado-digital-clave-valencia": { title: "Certificado digital y Cl@ve en Valencia", description: "Guía para obtener Cl@ve o certificado digital en Valencia: diferencias, requisitos, registro, acreditación y consejos para personas con NIE.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/certificado-digital-clave-valencia.jpg", type: "article", date: "2026-08-26" },
  "/blog/dulce-de-leche-argentino": { title: "Dulce de leche argentino: tipos y usos", description: "Qué es el dulce de leche argentino, cómo se diferencian el tradicional, repostero y heladero, y cuál conviene para cada receta.", image: "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dulce-de-leche-argentino.jpg", type: "article", date: "2026-08-27" },
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
  ["/restaurantes/la-vendetta-valencia", "monthly", "0.8"],
  ["/restaurantes/papanato-valencia", "monthly", "0.8"],
  ["/restaurantes/entrecortes-valencia", "monthly", "0.8"],
  ["/restaurantes/nativo-origen-valencia", "monthly", "0.8"],
  ...["historia-del-mate", "bandera-argentina-color-cielo", "valencianos-y-argentinos-historia", "truc-o-truco", "cortes-carne-argentina", "pedir-en-parrilla-argentina"].map((slug) => [`/blog/${slug}`, "monthly", "0.7"]),
  ["/blog/eclipse-solar-valencia-2026", "weekly", "0.8"],
  ["/blog/que-es-horchata-valenciana", "monthly", "0.8"],
  ["/blog/fernet-con-coca", "monthly", "0.8"],
  ["/blog/17-agosto-san-martin", "monthly", "0.8"],
  ["/blog/milanesa-napolitana-origen", "monthly", "0.8"],
  ["/blog/chimichurri-argentino", "monthly", "0.8"],
  ["/blog/dia-del-lector-argentina", "monthly", "0.8"],
  ["/blog/alfajores-argentinos-tipos", "monthly", "0.8"],
  ["/blog/dulce-de-leche-argentino", "monthly", "0.8"],
  ["/guias/valencia-recien-llegados", "monthly", "0.7"],
  ["/guias/tomatina-bunol-2026", "weekly", "0.7"]
  ,["/guias/empadronamiento-valencia", "monthly", "0.8"]
  ,["/guias/transporte-publico-valencia", "monthly", "0.8"]
  ,["/guias/productos-argentinos-valencia", "monthly", "0.8"]
  ,["/guias/canje-carnet-argentino-espana", "monthly", "0.8"]
  ,["/guias/empanadas-argentinas-valencia", "monthly", "0.8"]
  ,["/guias/tarjeta-sip-valencia", "monthly", "0.8"]
  ,["/guias/nie-tie-valencia", "monthly", "0.8"]
  ,["/guias/certificado-digital-clave-valencia", "monthly", "0.8"]
];

function renderSitemap() {
  const lastModified = "2026-08-27";
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
    data.type === "restaurant" ? { "@context": "https://schema.org", "@type": "Restaurant", name: data.restaurant?.name || "Asador El Argentino", url, image: data.image, ...(data.restaurant?.telephone ? { telephone: data.restaurant.telephone } : {}), servesCuisine: "Argentina", priceRange: "€€", address: { "@type": "PostalAddress", streetAddress: data.restaurant?.streetAddress || "Carrer de l’Escultor Josep Capuz, 12", postalCode: data.restaurant?.postalCode || "46004", addressLocality: "València", addressCountry: "ES" }, sameAs: data.restaurant?.sameAs || ["https://www.instagram.com/asador_el_argentino/", "https://www.facebook.com/asadorargentinovalencia/"] } : null,
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
    return new Response(applySeo(renderEmpadronamientoGuide().replace('<a href="/guias">Todas las guías prácticas →</a>', '<a href="/guias/certificado-digital-clave-valencia">Certificado digital y Cl@ve →</a><a href="/guias/nie-tie-valencia">NIE y TIE en Valencia →</a><a href="/guias/tarjeta-sip-valencia">Cómo solicitar la tarjeta SIP →</a><a href="/guias/canje-carnet-argentino-espana">Canje del carnet argentino →</a><a href="/guias">Todas las guías prácticas →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/transporte-publico-valencia") {
    return new Response(applySeo(renderTransporteGuide().replace('<a href="/guias/empadronamiento-valencia">Cómo empadronarte en Valencia →</a>', '<a href="/guias/canje-carnet-argentino-espana">Canje del carnet argentino →</a><a href="/guias/empadronamiento-valencia">Cómo empadronarte en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/productos-argentinos-valencia") {
    return new Response(applySeo(renderProductosArgentinosGuide().replace('<a href="/blog/historia-del-mate">Historia del mate →</a>', '<a href="/blog/dulce-de-leche-argentino">Tipos de dulce de leche argentino →</a><a href="/blog/alfajores-argentinos-tipos">Tipos de alfajores argentinos →</a><a href="/blog/historia-del-mate">Historia del mate →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
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
    return new Response(applySeo(renderBatarazaBodegon().replace('Fernet con Coca.', '<a href="/blog/fernet-con-coca">Fernet con Coca</a>.').replace('<a href="/restaurantes/el-porteno">El Porteño en Valencia →</a>', '<a href="/guias/empanadas-argentinas-valencia">Empanadas argentinas en Valencia →</a><a href="/restaurantes/el-porteno">El Porteño en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/la-diez-milanesas") {
    return new Response(applySeo(renderLaDiez().replace("Ternera, cerdo ibérico, pollo o berenjena", "Ternera, cerdo ibérico o berenjena").replace('<a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón →</a>', '<a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a><a href="/restaurantes/bataraza-bodegon">Bataraza Bodegón →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/culture-ruzafa") {
    return new Response(applySeo(renderCulture(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/che-tango-valencia") {
    return new Response(applySeo(renderCheTango().replace('<a href="/blog/cortes-carne-argentina">Guía de cortes argentinos →</a>', '<a href="/guias/empanadas-argentinas-valencia">Empanadas argentinas en Valencia →</a><a href="/blog/cortes-carne-argentina">Guía de cortes argentinos →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/bar-veni-valencia") {
    return new Response(applySeo(renderBarVeni().replace('<a href="/blog/fernet-con-coca">Qué es el fernet con coca →</a>', '<a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a><a href="/blog/fernet-con-coca">Qué es el fernet con coca →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/moby-dick-valencia") {
    return new Response(applySeo(renderMobyDick().replace('<a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a>', '<a href="/guias/empanadas-argentinas-valencia">Empanadas argentinas en Valencia →</a><a href="/blog/milanesa-napolitana-origen">Historia de la milanesa napolitana →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/la-vendetta-valencia") {
    return new Response(applySeo(renderLaVendetta(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/papanato-valencia") {
    return new Response(applySeo(renderPapanato(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/entrecortes-valencia") {
    return new Response(applySeo(renderEntreCortes(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/san-telmo") {
    return new Response(applySeo(renderSanTelmo(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/nativo-origen-valencia") {
    return new Response(applySeo(renderNativoOrigen(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/cruz-pampa") {
    return new Response(applySeo(renderCruzPampa(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/union-carnes-y-vinos") {
    return new Response(applySeo(renderUnionCarnes(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/restaurantes/dona-petrona") {
    return new Response(applySeo(renderDonaPetrona(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/canje-carnet-argentino-espana") {
    return new Response(applySeo(renderCanjeCarnetGuide(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/empanadas-argentinas-valencia") {
    return new Response(applySeo(renderEmpanadasValenciaGuide(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/tarjeta-sip-valencia") {
    return new Response(applySeo(renderTarjetaSipGuide().replace('<a href="/guias/empadronamiento-valencia">Empadronamiento en Valencia →</a>', '<a href="/guias/certificado-digital-clave-valencia">Certificado digital y Cl@ve →</a><a href="/guias/nie-tie-valencia">NIE y TIE en Valencia →</a><a href="/guias/empadronamiento-valencia">Empadronamiento en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/nie-tie-valencia") {
    return new Response(applySeo(renderNieTieGuide().replace('<a href="/guias/empadronamiento-valencia">Empadronamiento en Valencia →</a>', '<a href="/guias/certificado-digital-clave-valencia">Certificado digital y Cl@ve →</a><a href="/guias/empadronamiento-valencia">Empadronamiento en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/guias/certificado-digital-clave-valencia") {
    return new Response(applySeo(renderCertificadoClaveGuide(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
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
    return new Response(applySeo(renderMilanesaNapolitanaArticle().replace('<a href="/restaurantes/la-diez-milanesas">La Diez →</a>', '<a href="/restaurantes/dona-petrona">Doña Petrona en Ruzafa →</a><a href="/restaurantes/la-diez-milanesas">La Diez →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/chimichurri-argentino") {
    return new Response(applySeo(renderChimichurriArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/dia-del-lector-argentina") {
    return new Response(applySeo(renderDiaLectorArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/alfajores-argentinos-tipos") {
    return new Response(applySeo(renderAlfajoresArticle().replace('<a href="/guias/productos-argentinos-valencia">Dónde comprarlos en Valencia →</a>', '<a href="/blog/dulce-de-leche-argentino">Tipos de dulce de leche argentino →</a><a href="/guias/productos-argentinos-valencia">Dónde comprarlos en Valencia →</a>'), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  if (path === "/blog/dulce-de-leche-argentino") {
    return new Response(applySeo(renderDulceLecheArticle(), path), { headers: { "content-type": "text/html;charset=utf-8" } });
  }
  const response = await site.fetch(request, {}, context);
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  const html = await response.text();
  const articleLinks = {
    "/blog/historia-del-mate": [["/blog/alfajores-argentinos-tipos", "Tipos de alfajores argentinos"], ["/guias/productos-argentinos-valencia", "Dónde comprar yerba y productos argentinos"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/guias/valencia-recien-llegados", "Guía Valencia para recién llegados"]],
    "/blog/bandera-argentina-color-cielo": [["/blog/dia-del-lector-argentina", "Día del Lector y Borges"], ["/blog/17-agosto-san-martin", "Qué se conmemora el 17 de agosto"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"], ["/blog/historia-del-mate", "La historia del mate"]],
    "/blog/valencianos-y-argentinos-historia": [["/blog/dia-del-lector-argentina", "Por qué se celebra el Día del Lector"], ["/blog/17-agosto-san-martin", "San Martín y el 17 de agosto"], ["/guias/valencia-recien-llegados", "Valencia para recién llegados"], ["/blog/historia-del-mate", "La historia del mate"], ["/blog/que-es-horchata-valenciana", "Qué es la horchata valenciana"]],
    "/blog/truc-o-truco": [["/blog/historia-del-mate", "La historia del mate"], ["/blog/valencianos-y-argentinos-historia", "Valencianos y argentinos: una relación histórica"]],
    "/blog/cortes-carne-argentina": [["/restaurantes/union-carnes-y-vinos", "Unión Carnes y Vinos en Ruzafa"], ["/restaurantes/cruz-pampa", "Cruz Pampa en Cánovas"], ["/restaurantes/nativo-origen-valencia", "Nativo Origen en Ruzafa"], ["/restaurantes/san-telmo", "Asador San Telmo en Ruzafa"], ["/restaurantes/entrecortes-valencia", "Entre Cortes en L'Eliana"], ["/blog/chimichurri-argentino", "Qué lleva el chimichurri argentino"], ["/restaurantes/che-tango-valencia", "Che Tango en Avenida de Francia"], ["/blog/pedir-en-parrilla-argentina", "Cómo pedir en una parrilla argentina"]],
    "/blog/pedir-en-parrilla-argentina": [["/restaurantes/union-carnes-y-vinos", "Unión Carnes y Vinos en Ruzafa"], ["/restaurantes/cruz-pampa", "Cruz Pampa en Cánovas"], ["/restaurantes/nativo-origen-valencia", "Nativo Origen en Ruzafa"], ["/restaurantes/san-telmo", "Asador San Telmo en Ruzafa"], ["/restaurantes/entrecortes-valencia", "Entre Cortes en L'Eliana"], ["/blog/chimichurri-argentino", "Chimichurri argentino: ingredientes y usos"], ["/blog/milanesa-napolitana-origen", "Origen de la milanesa napolitana"], ["/blog/cortes-carne-argentina", "Ver la guía visual de cortes"]]
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
    .replaceAll("https://asadorargentinovalencia.es/wp-content/uploads/2025/12/Asador-argentino-Valencia-1024x578.jpg", "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/cruz-pampa-valencia.jpg")
    .replaceAll("https://unioncarnesyvinos.com/_next/image?q=75&url=%2Ffotos%2Fhero-entrana.jpg&w=3840", "https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/union-carnes-y-vinos-valencia.jpg")
    .replaceAll("RUZAFA · 20 €", "RUZAFA · 40–50 €")
    .replaceAll("Parrilla, vinos argentinos y platos de recetario porteño", "Parrilla de carta breve, empanadas cortadas a cuchillo y vinos argentinos")
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
  const laVendettaDirectoryCard = '<a class="r-card" href="/restaurantes/la-vendetta-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-vendetta-valencia.jpg" alt="Pizza de La Vendetta Valencia" loading="lazy"><div><p class="eyebrow">RUZAFA · 23 €</p><h2>La Vendetta</h2><p>Restaurante italo-argentino con pizza a la parrilla, milanesas, empanadas y pasta</p><span>Ver ficha →</span></div></a>';
  const papanatoDirectoryCard = '<a class="r-card" href="/restaurantes/papanato-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/papanato-valencia.jpg" alt="Fachada de Papanato Plaza del Mercat" loading="lazy"><div><p class="eyebrow">EL MERCAT · 23 €</p><h2>Papanato</h2><p>Bar de patatas argentino con milanesas, lomitos, empanadas y parrillada</p><span>Ver ficha →</span></div></a>';
  const entrecortesDirectoryCard = '<a class="r-card" href="/restaurantes/entrecortes-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/entrecortes-valencia.jpg" alt="Carnes argentinas en la brasa de Entre Cortes" loading="lazy"><div><p class="eyebrow">L\'ELIANA · 25–45 €</p><h2>Entre Cortes</h2><p>Asador con fuego argentino, horno Josper, cortes y producto mediterráneo</p><span>Ver ficha →</span></div></a>';
  const sanTelmoDirectoryCard = '<a class="r-card" href="/restaurantes/san-telmo"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/san-telmo-valencia.jpg" alt="Fachada de Asador San Telmo en Ruzafa" loading="lazy"><div><p class="eyebrow">RUZAFA · 31–50 €</p><h2>Asador San Telmo</h2><p>Parrilla argentina de barrio con carnes, empanadas y una carta de vinos amplia</p><span>Ver ficha →</span></div></a>';
  const nativoOrigenDirectoryCard = '<a class="r-card" href="/restaurantes/nativo-origen-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/nativo-origen-valencia.jpg" alt="Plato a la brasa de Nativo Origen" loading="lazy"><div><p class="eyebrow">RUZAFA · 30–45 €</p><h2>Nativo Origen</h2><p>Angus argentino a la brasa con una carta contemporánea de raíz mediterránea</p><span>Ver ficha →</span></div></a>';
  const donaPetronaDirectoryCard = '<a class="r-card" href="/restaurantes/dona-petrona"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dona-petrona-valencia.jpg" alt="Platos de la carta de Doña Petrona" loading="lazy"><div><p class="eyebrow">RUZAFA · 20–35 €</p><h2>Doña Petrona</h2><p>Cocina argentina y mediterránea con milanesas, empanadas y platos de abuela</p><span>Ver ficha →</span></div></a>';
  const newRestaurantHomeCard = '<a class="hn-rest-card" href="/restaurantes/asador-el-argentino"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/asador-el-argentino.jpg" alt="Carnes del Asador El Argentino en Valencia" loading="lazy"><div><p>MONTEOLIVETE · 16–28 €</p><h3>Asador El Argentino</h3><b>Ver ficha →</b></div></a>';
  const gordonHomeCard = '<a class="hn-rest-card" href="/restaurantes/gordon-10"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/gordon-10.jpg" alt="Interior del restaurante Gordon 10 en Cánovas" loading="lazy"><div><p>CÁNOVAS · 43–60 €</p><h3>Gordon 10</h3><b>Ver ficha →</b></div></a>';
  const parrilletaHomeCard = '<a class="hn-rest-card" href="/restaurantes/la-parrilleta"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-parrilleta.jpg" alt="Salón de La Parrilleta en Cánovas" loading="lazy"><div><p>CÁNOVAS · 18–37 €</p><h3>La Parrilleta</h3><b>Ver ficha →</b></div></a>';
  const batarazaHomeCard = '<a class="hn-rest-card" href="/restaurantes/bataraza-bodegon"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bataraza-bodegon.jpg" alt="Mesa con platos argentinos en Bataraza Bodegón" loading="lazy"><div><p>EL PILAR · HASTA 30 €</p><h3>Bataraza Bodegón</h3><b>Ver ficha →</b></div></a>';
  const laDiezHomeCard = '<a class="hn-rest-card" href="/restaurantes/la-diez-milanesas"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-diez-milanesas.jpg" alt="Milanesa napolitana con jamón de La Diez" loading="lazy"><div><p>EXPOSICIÓ · 20 €</p><h3>La Diez</h3><b>Ver ficha →</b></div></a>';
  const cultureHomeCard = '<a class="hn-rest-card" href="/restaurantes/culture-ruzafa"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/culture-ruzafa.jpg" alt="Cocina y emplatado en Culture Ruzafa" loading="lazy"><div><p>RUZAFA · 10–20 €</p><h3>Culture</h3><b>Ver ficha →</b></div></a>';
  const cheTangoHomeCard = '<a class="hn-rest-card" href="/restaurantes/che-tango-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/che-tango-valencia.jpg" alt="Parrillada servida por Che Tango en Valencia" loading="lazy"><div><p>CAMINS AL GRAU · 25 €</p><h3>Che Tango</h3><b>Ver ficha →</b></div></a>';
  const barVeniHomeCard = '<a class="hn-rest-card" href="/restaurantes/bar-veni-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/bar-veni-valencia.jpg" alt="Plato servido por Bar Veni en Valencia" loading="lazy"><div><p>CÁNOVAS · 18 €</p><h3>Bar Veni</h3><b>Ver ficha →</b></div></a>';
  const mobyDickHomeCard = '<a class="hn-rest-card" href="/restaurantes/moby-dick-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/moby-dick-valencia.jpg" alt="Barra y equipo de Moby Dick Valencia" loading="lazy"><div><p>RUZAFA · 24 €</p><h3>Moby Dick Valencia</h3><b>Ver ficha →</b></div></a>';
  const laVendettaHomeCard = '<a class="hn-rest-card" href="/restaurantes/la-vendetta-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/la-vendetta-valencia.jpg" alt="Pizza de La Vendetta Valencia" loading="lazy"><div><p>RUZAFA · 23 €</p><h3>La Vendetta</h3><b>Ver ficha →</b></div></a>';
  const papanatoHomeCard = '<a class="hn-rest-card" href="/restaurantes/papanato-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/papanato-valencia.jpg" alt="Fachada de Papanato Plaza del Mercat" loading="lazy"><div><p>EL MERCAT · 23 €</p><h3>Papanato</h3><b>Ver ficha →</b></div></a>';
  const entrecortesHomeCard = '<a class="hn-rest-card" href="/restaurantes/entrecortes-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/entrecortes-valencia.jpg" alt="Carnes argentinas en la brasa de Entre Cortes" loading="lazy"><div><p>L\'ELIANA · 25–45 €</p><h3>Entre Cortes</h3><b>Ver ficha →</b></div></a>';
  const sanTelmoHomeCard = '<a class="hn-rest-card" href="/restaurantes/san-telmo"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/san-telmo-valencia.jpg" alt="Fachada de Asador San Telmo en Ruzafa" loading="lazy"><div><p>RUZAFA · 31–50 €</p><h3>Asador San Telmo</h3><b>Ver ficha →</b></div></a>';
  const nativoOrigenHomeCard = '<a class="hn-rest-card" href="/restaurantes/nativo-origen-valencia"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/nativo-origen-valencia.jpg" alt="Plato a la brasa de Nativo Origen" loading="lazy"><div><p>RUZAFA · 30–45 €</p><h3>Nativo Origen</h3><b>Ver ficha →</b></div></a>';
  const donaPetronaHomeCard = '<a class="hn-rest-card" href="/restaurantes/dona-petrona"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dona-petrona-valencia.jpg" alt="Platos de la carta de Doña Petrona" loading="lazy"><div><p>RUZAFA · 20–35 €</p><h3>Doña Petrona</h3><b>Ver ficha →</b></div></a>';
  const newArticleCard = '<a class="article-card" href="/blog/eclipse-solar-valencia-2026"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/eclipse-solar-valencia-2026.jpg" alt="Eclipse solar total sobre la playa de València" loading="lazy"><span>ACTUALIDAD LOCAL</span></div><div class="article-card-copy"><p>5 MIN DE LECTURA</p><h2>Eclipse solar en Valencia 2026: hora, lugar y seguridad</h2><span>Cómo organizar la observación del 12 de agosto con fuentes oficiales y sin arriesgar la vista</span><b>Leer artículo <i>→</i></b></div></a>';
  const horchataArticleCard = '<a class="article-card" href="/blog/que-es-horchata-valenciana"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/horchata-valenciana.jpg" alt="Vaso de horchata valenciana con fartons" loading="lazy"><span>GASTRONOMÍA VALENCIANA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>Qué es la horchata valenciana y cómo se toma</h2><span>Chufa, fartons, tipos y claves para elegir un vaso con origen reconocido</span><b>Leer artículo <i>→</i></b></div></a>';
  const fernetArticleCard = '<a class="article-card" href="/blog/fernet-con-coca"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/fernet-con-coca.jpg" alt="Vaso alto de fernet con cola y hielo" loading="lazy"><span>CULTURA ARGENTINA</span></div><div class="article-card-copy"><p>6 MIN DE LECTURA</p><h2>Fernet con coca: qué es y cómo se prepara</h2><span>Origen, vínculo con Córdoba, preparación flexible y dónde encontrarlo en Valencia</span><b>Leer artículo <i>→</i></b></div></a>';
  const sanMartinArticleCard = '<a class="article-card" href="/blog/17-agosto-san-martin"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/17-agosto-san-martin.jpg" alt="Ilustración editorial de San Martín y el cruce de los Andes" loading="lazy"><span>HISTORIA ARGENTINA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>17 de agosto: qué se conmemora en Argentina</h2><span>Por qué se recuerda a San Martín, una cronología breve y cómo funciona el feriado en 2026</span><b>Leer artículo <i>→</i></b></div></a>';
  const milanesaArticleCard = '<a class="article-card" href="/blog/milanesa-napolitana-origen"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/milanesa-napolitana-origen.jpg" alt="Milanesa napolitana con jamón, queso y papas fritas" loading="lazy"><span>GASTRONOMÍA ARGENTINA</span></div><div class="article-card-copy"><p>8 MIN DE LECTURA</p><h2>Milanesa napolitana: origen y qué lleva</h2><span>La historia porteña, los ingredientes clásicos, variantes y dónde probarla en Valencia</span><b>Leer artículo <i>→</i></b></div></a>';
  const chimichurriArticleCard = '<a class="article-card" href="/blog/chimichurri-argentino"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/chimichurri-argentino.jpg" alt="Cuenco de chimichurri argentino junto a una parrilla" loading="lazy"><span>GASTRONOMÍA ARGENTINA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>Chimichurri argentino: qué lleva y cómo se usa</h2><span>Ingredientes, preparación, usos y una precaución importante para conservarlo</span><b>Leer artículo <i>→</i></b></div></a>';
  const diaLectorArticleCard = '<a class="article-card" href="/blog/dia-del-lector-argentina"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dia-del-lector-argentina.jpg" alt="Libro abierto, anteojos y sombra de un laberinto" loading="lazy"><span>CULTURA ARGENTINA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>Día del Lector en Argentina: por qué se celebra</h2><span>El vínculo con Borges, cinco lecturas posibles y cómo usar las bibliotecas de Valencia</span><b>Leer artículo <i>→</i></b></div></a>';
  const alfajoresArticleCard = '<a class="article-card" href="/blog/alfajores-argentinos-tipos"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/alfajores-argentinos-tipos.jpg" alt="Selección de alfajores argentinos de maicena, chocolate y glaseado" loading="lazy"><span>GASTRONOMÍA ARGENTINA</span></div><div class="article-card-copy"><p>8 MIN DE LECTURA</p><h2>Alfajores argentinos: tipos y diferencias</h2><span>Maicena, chocolate y tradiciones de Córdoba, Santa Fe y Mar del Plata</span><b>Leer artículo <i>→</i></b></div></a>';
  const dulceLecheArticleCard = '<a class="article-card" href="/blog/dulce-de-leche-argentino"><div class="article-cover"><img src="https://raw.githubusercontent.com/joacobonfiglio/comidaargentinavalencia/main/assets/dulce-de-leche-argentino.jpg" alt="Tres texturas de dulce de leche argentino" loading="lazy"><span>GASTRONOMÍA ARGENTINA</span></div><div class="article-card-copy"><p>7 MIN DE LECTURA</p><h2>Dulce de leche argentino: tipos y usos</h2><span>Cómo elegir entre tradicional, repostero y heladero según la receta</span><b>Leer artículo <i>→</i></b></div></a>';
  if (path === "/restaurantes") {
    enriched = enriched
      .replace(/<a class="r-card" href="\/restaurantes\/dona-petrona">[\s\S]*?<\/a>/, "")
      .replace('<div class="r-grid">', `<div class="r-grid">${donaPetronaDirectoryCard}${nativoOrigenDirectoryCard}${sanTelmoDirectoryCard}${entrecortesDirectoryCard}${papanatoDirectoryCard}${laVendettaDirectoryCard}${mobyDickDirectoryCard}${barVeniDirectoryCard}${cheTangoDirectoryCard}${cultureDirectoryCard}${laDiezDirectoryCard}${batarazaDirectoryCard}${parrilletaDirectoryCard}${gordonDirectoryCard}${newRestaurantDirectoryCard}`);
  }
  if (path === "/blog") {
    enriched = enriched.replace('<div class="article-grid">', `<div class="article-grid">${dulceLecheArticleCard}${alfajoresArticleCard}${diaLectorArticleCard}${chimichurriArticleCard}${milanesaArticleCard}${sanMartinArticleCard}${fernetArticleCard}${horchataArticleCard}${newArticleCard}`);
  }
  if (path === "/") {
    enriched = enriched
      .replace(/<a class="hn-rest-card" href="\/restaurantes\/dona-petrona">[\s\S]*?<\/a>/, "")
      .replace('<div class="hn-rest-grid">', `<div class="hn-rest-grid">${donaPetronaHomeCard}${nativoOrigenHomeCard}${sanTelmoHomeCard}${entrecortesHomeCard}${papanatoHomeCard}${laVendettaHomeCard}${mobyDickHomeCard}${barVeniHomeCard}${cheTangoHomeCard}${cultureHomeCard}${laDiezHomeCard}${batarazaHomeCard}${parrilletaHomeCard}${gordonHomeCard}${newRestaurantHomeCard}`)
      .replace('<div class="hn-articles">', `<div class="hn-articles">${dulceLecheArticleCard}${alfajoresArticleCard}${diaLectorArticleCard}${chimichurriArticleCard}${milanesaArticleCard}${sanMartinArticleCard}${fernetArticleCard}${horchataArticleCard}${newArticleCard}`)
      .replace("Valencia para recién llegados", "NIE y TIE en Valencia")
      .replace("Los primeros barrios, recorridos y lugares para empezar a orientarte en la ciudad sin querer conocerlo todo de golpe", "Qué es cada documento, quién necesita tarjeta y cómo ordenar la cita y las huellas")
      .replace("NIE y TIE en Valencia", "Certificado digital y Cl@ve")
      .replace("Qué es cada documento, quién necesita tarjeta y cómo ordenar la cita y las huellas", "Cómo elegir, registrarte con NIE y acreditar identidad para hacer trámites online")
      .replace('href="/guias">Leer la guía →', 'href="/guias/certificado-digital-clave-valencia">Leer la guía →');
  }
  enriched = enriched.replace("</head>", `${imageConsistency}<style>.article-context{margin:34px 0;border-top:3px solid #ffc449;padding-top:18px;display:grid;gap:9px}.article-context p{grid-column:1/-1;margin:0;color:#87300c;font-size:11px;font-weight:900;letter-spacing:.1em}.article-context a{display:flex;justify-content:space-between;gap:12px;padding:14px 16px;background:#e8f4fb;color:#402914;text-decoration:none;font-weight:800}.article-context a span{color:#3f86b5}.article-inline-link{background:#fff7e5!important;border-left-color:#ffc449!important}.article-inline-link a{color:#87300c;font-weight:800}.cut-infographic{display:none!important}.cuts-figure{margin:24px 0;border:1px solid #e7c067;background:#fffdf8}.cuts-figure img{display:block;width:100%;height:auto}.cuts-figure figcaption{padding:10px 14px;color:#6b5a48;font-size:13px;line-height:1.4}@media(max-width:560px){.article-context a{font-size:14px}}</style></head>`);
  return new Response(applySeo(enriched, path), response);
}
