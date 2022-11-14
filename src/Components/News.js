import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  article = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Exclusive: Russian software disguised as American finds its way into U.S. Army, CDC apps - Reuters",
      description:
        "Thousands of smartphone applications in Apple online stores contain computer code de…",
      url: "https://www.reuters.com/technology/exclusive-russian-software-disguised-american-finds-its-way-into-us-army-cdc-2022-11-14/",
      urlToImage:
        "https://www.reuters.com/resizer/5O8xyUA9uViWpkAHhQc0l7LukFc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HRE4R5QXJ5PDVA7FTUXZJRMFGE.jpg",
      publishedAt: "2022-11-14T11:16:00Z",
      content:
        "LONDON/WASHINGTON, Nov 14 (Reuters) - Thousands of smartphone applications in Apple (AAPL.O) and Google's (GOOGL.O) online stores contain computer code developed by a technology company, Pushwoosh, t… [+9719 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Samuel Gibbs Consumer technology editor",
      title: "iPhone 14 Plus: Apple’s big-screen battery champ",
      description:
        "Supersized smartphone offers regular iPhone performance with extended battery life, but costs extraApple’s new plus-sized iPhone 14 adds a larger screen and longer-lasting battery to a familiar formula, but with a bigger price tag too.The 14 Plus is a brand n…",
      url: "https://www.theguardian.com/technology/2022/nov/14/iphone-14-plus-apples-big-screen-battery-champ",
      urlToImage:
        "https://i.guim.co.uk/img/media/a00b6cbc6374d0259c67baa01f72fa46826ea306/0_235_5456_3273/master/5456.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=c742a4b3ce0a254dd293823b74528e7b",
      publishedAt: "2022-11-14T07:00:34Z",
      content:
        "Apples new plus-sized iPhone 14 adds a larger screen and longer-lasting battery to a familiar formula, but with a bigger price tag too.\r\nThe 14 Plus is a brand new iPhone model for this year, costing… [+4322 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Rachel Roddy",
      title:
        "Rachel Roddy’s recipe for November stew or soup with beans, pumpkin, potato and greens | A kitchen in Rome",
      description:
        "A classic recipe book inspires this autumnal vegetable soup/stew that’s another ‘fast, good and infallible’ seasonal meal when made in a pressure cookerElena Spagnol published more than 20 cookbooks, among them: Presto e Bene (Quickly and Well); Allora, Si Ma…",
      url: "https://www.theguardian.com/food/2022/nov/14/autumn-minestrone-recipe-pumpkin-potato-beans-greens-rachel-roddy",
      urlToImage:
        "https://i.guim.co.uk/img/media/a66ceebedc81413ce1afe2ec683cc071e203672a/0_475_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9e633c0d924d0e3fd111f5ed936d95aa",
      publishedAt: "2022-11-14T11:00:37Z",
      content:
        "Elena Spagnol published more than 20 cookbooks, among them: Presto e Bene (Quickly and Well); Allora, Si Mangia (And So, We Eat);La Gioia in Cucina (Joy in the Kitchen); Cucina Intantanea (Instant Co… [+4097 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Meta Cancels Development of Health and Messaging-Focused Smartwatch",
      description:
        "Meta has scrapped the development of its health and messaging-focused smartwatch, in an abrupt end to the company's plans to directly compete with the Apple Watch.\n\n\n\n\n\nEmployees were reportedly told on Friday that work on its smartwatch project would be halt…",
      url: "https://www.macrumors.com/2022/11/14/meta-cancels-development-of-health-and-messaging-focused-smartwatch/",
      urlToImage:
        "https://images.macrumors.com/t/K3ej4bhZlb103paVHwwIhhb3jhY=/2500x/article-new/2021/06/Facebook-Watch-Feature.jpg",
      publishedAt: "2022-11-14T10:32:23Z",
      content:
        "Meta has scrapped the development of its health and messaging-focused smartwatch, in an abrupt end to the company's plans to directly compete with the Apple Watch.\r\nEmployees were reportedly told on … [+1904 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "José María López",
      title:
        "Los 10 coches eléctricos más baratos que puedes comprar en España",
      description:
        "Los vehículos eléctricos ya no son una excentricidad. Hace tiempo que se han convertido en una seria alternativa a los automóviles de gasolina o diésel, en especial cuando el precio de los combustibles están tan disparados. Y hablando de precios, cada vez es …",
      url: "https://hipertextual.com/2022/11/coches-electricos-baratos",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/KIA-e-Niro-Varios.jpg?fit=1920%2C1280&quality=60&strip=all&ssl=1",
      publishedAt: "2022-11-14T04:20:00Z",
      content:
        "Los vehículos eléctricos ya no son una excentricidad. Hace tiempo que se han convertido en una seria alternativa a los automóviles de gasolina o diésel, en especial cuando el precio de los combustibl… [+8990 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Jose García",
      title:
        'Conociendo a los finalistas de los Premios Xataka Orange 2022: repasamos la categoría "Mejores auriculares" en directo en Twitch',
      description:
        "Quedan, literalmente, un par de días para la gala de los Premios Xataka Orange 2022. El próximo 16 de noviembre, este mismo miércoles, tendrá lugar la gala presentada por Joaquín Reyes en los Cines Capitol de Madrid pero, mientras llega, vamos a ir calentando…",
      url: "https://www.xataka.com/xataka/conociendo-a-finalistas-premios-xataka-orange-2022-repasamos-categoria-mejores-auriculares-directo-twitch",
      urlToImage: "https://i.blogs.es/362381/1366_2000-16-/840_560.jpg",
      publishedAt: "2022-11-14T11:01:58Z",
      content:
        "Quedan, literalmente, un par de días para la gala de los Premios Xataka Orange 2022. El próximo 16 de noviembre, este mismo miércoles, tendrá lugar la gala presentada por Joaquín Reyes en los Cines C… [+2229 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title:
        "iPhone: Nutzer kaufen Geräte mit mehr Speicher – und Apple verdient",
      description:
        "Nach wie vor grenzt Apple seine Smartphones über die Speichergröße voneinander ab. In den USA steigt die Nachfrage nach Speicher – und bei Apple der Umsatz.",
      url: "https://www.heise.de/news/iPhone-Nutzer-kaufen-Geraete-mit-mehr-Speicher-und-Apple-verdient-7339136.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/4/2/6/9/3/iphone-14-pro_overview__e2a7u9jy63ma_og-2-ea7c83550aa5f0f1.png",
      publishedAt: "2022-11-14T09:35:00Z",
      content:
        "Apples iPhone wird zunehmend mit mehr Speicherkapazität verkauft zumindest im Heimatmarkt USA. Das ist das Ergebnis einer neuen Analyse des Marktforschungsunternehmens Consumer Intelligence Research … [+2062 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Sebastian Trepesch",
      title:
        "heise+ | Tipps für Siri, Alexa und Google Assistant: Sprachassistenten im Griff",
      description:
        "Drei Sprachassistenzsysteme, drei unterschiedliche Bedienweisen: Wer wissen will, wie man Siri, Alexa und Google Assistant richtig nutzt, liest unsere Tipps.",
      url: "https://www.heise.de/ratgeber/Tipps-fuer-Siri-Alexa-und-Google-Assistant-Sprachassistenten-im-Griff-7335191.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/4/0/6/0/4/mi_22_05_tre_siritipps_aufmacher_digital-e530584b58fec0c2.png",
      publishedAt: "2022-11-14T11:50:00Z",
      content:
        "Inhaltsverzeichnis\r\nMittlerweile gibt es zahlreiche Sprachassistenzsysteme, die auch Apple-Nutzer problemlos einsetzen können. Neben Apples hauseigener Siri sind Amazon Alexa und Google Assistant bes… [+1597 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple TV+ nominated for nine Royal Television Society awards",
      description:
        '"Slow Horses" and "Bad Sisters" lead the Apple TV+ nominations for the UK Royal Television Society\'s Craft and Design Awards 2022."Bad Sisters" Mermen and ABC Signature for Apple TV+This year\'s RTS Craft and Design Awards have been sponsored by Apple TV+, whi…',
      url: "https://appleinsider.com/articles/22/11/14/apple-tv-nominated-for-nine-royal-television-society-awards",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51359-101529-000-lead-Bad-Sisters-xl.jpg",
      publishedAt: "2022-11-14T12:06:51Z",
      content:
        '"Bad Sisters" Mermen and ABC Signature for Apple TV+\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\n"Slow Horses" and "Bad Sisters" lead the Apple TV+ no… [+1758 chars]',
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "iPhone 14 will remain hard to get through the holidays, says JP Morgan",
      description:
        "Apple's Chinese iPhone factory misfortunes will certainly impact shipments, says JP Morgan, but the full impact won't be known until the facility returns to normal output.A Foxconn facilityFoxconn's assembly plant in Zhengzhou, China is dealing with the impac…",
      url: "https://appleinsider.com/articles/22/11/14/iphone-14-will-remain-hard-to-get-through-the-holidays-says-jp-morgan",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/51358-101528-51247-101262-51055-100832-foxconn-xl-xl-xl.jpg",
      publishedAt: "2022-11-14T11:50:43Z",
      content:
        "A Foxconn facility\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple's Chinese iPhone factory misfortunes will certainly impact shipments, says JP Mor… [+2493 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Adrián Raya",
      title:
        "Los móviles Realme ahora tienen protección contra daños y robos en España, al estilo AppleCare",
      description:
        "Realme ha lanzado realme Care+ en España, una nueva suscripción que nos permite proteger nuestro dispositivo recién comprado.",
      url: "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20221114/moviles-realme-ahora-proteccion-espana-estilo-applecare/718428214_0.html",
      urlToImage:
        "https://s1.eestatic.com/2022/10/26/elandroidelibre/moviles-android/analisis/713688658_228678001_600x315.jpg",
      publishedAt: "2022-11-14T09:48:54Z",
      content:
        "Por fin lo has conseguido. Te has comprado el móvil que querías, y te ha costado lo suyo. Lo peor que te podría pasar ahora mismo es que se rompiese o que te lo robasen. Ahora, Realme tiene la soluci… [+3291 chars]",
    },
    {
      source: {
        id: null,
        name: "Microsiervos.com",
      },
      author: "wicho@microsiervos.com (Wicho)",
      title:
        "Probamos el Anker 737, un cargador para hasta tres dispositivos USB que va sobrado de potencia",
      description:
        "He estado probando un cargador Anker 737, que de los nuevos modelos de la gama GaNPrime de la marca es el que me parece que ofrece mejor combinación de tamaño, peso y potencia como para usarlo de cargador de viaje. Y es que da hasta 120 vatios a repartir entr…",
      url: "https://www.microsiervos.com/archivo/gadgets/probamos-cargador-anker-737.html",
      urlToImage: "https://img.microsiervos.com/images2022/Anker737.jpg",
      publishedAt: "2022-11-14T10:30:00Z",
      content:
        "Por @Wicho 14 de Noviembre de 2022\r\nHe estado probando un cargador Anker 737, que de los nuevos modelos de la gama GaNPrime de la marca es el que me parece que ofrece mejor combinación de tamaño, pes… [+4308 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Thomas Estimbre",
      title: "Pas besoin d’un Mac, vos photos iPhone arrivent sur Windows 11",
      description:
        "Comme prévu, Microsoft prend mieux en charge les photos iCloud dans Windows 11. Elles ont désormais leur place dans l'application Photos.\nPas besoin d’un Mac, vos photos iPhone arrivent sur Windows 11",
      url: "https://www.journaldugeek.com/2022/11/14/pas-besoin-dun-mac-vos-photos-iphone-arrivent-sur-windows-11/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/11/prendre-photo-iphone-smartphone.jpg",
      publishedAt: "2022-11-14T09:30:10Z",
      content:
        "Comme prévu, Microsoft prend mieux en charge les photos iCloud dans Windows 11. Elles ont désormais leur place dans l'application Photos.Lors de la présentation des nouveaux produits Surface, Microso… [+2398 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Apple está trabajando en una alternativa al buscador de Google. Aún le quedan algunos años para estar lista, según The Information",
      description:
        "La tecnología de búsqueda es cada vez más importante en Apple. Buscamos canciones en la app Música, documentos en la app Archivos, conversiones de divisas, datos y mucho más en Spotlight y preguntamos a Siri casi cualquier cosa. Poder encontrar la información…",
      url: "https://www.applesfera.com/rumores/apple-esta-trabajando-alternativa-al-buscador-google-le-quedan-algunos-anos-para-estar-lista-the-information",
      urlToImage: "https://i.blogs.es/c675a6/hero/840_560.jpeg",
      publishedAt: "2022-11-14T09:26:54Z",
      content:
        "La tecnología de búsqueda es cada vez más importante en Apple. Buscamos canciones en la app Música, documentos en la app Archivos, conversiones de divisas, datos y mucho más en Spotlight y preguntamo… [+2949 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "El sistema operativo de las gafas de realidad aumentada de Apple ya está casi terminado. El lanzamiento se acerca, según Gurman",
      description:
        "Hace ya años que oímos hablar de un nuevo sistema operativo que se uniría a iOS o macOS. Nos referimos a rOS o realityOS, el sistema operativo que utilizarán los cascos de realidad aumentada de Apple y que está ya cerca de ser presentado oficialmente. Cerca, …",
      url: "https://www.applesfera.com/rumores/sistema-operativo-gafas-realidad-aumentada-apple-esta-casi-terminado-lanzamiento-se-acerca-gurman",
      urlToImage: "https://i.blogs.es/5b2eea/hero/840_560.jpeg",
      publishedAt: "2022-11-14T07:50:18Z",
      content:
        "Hace ya años que oímos hablar de un nuevo sistema operativo que se uniría a iOS o macOS. Nos referimos a rOS o realityOS, el sistema operativo que utilizarán los cascos de realidad aumentada de Apple… [+3811 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "El nuevo Apple TV 4K ya puede ser una consola de videojuegos, o eso dicen las pruebas de rendimiento",
      description:
        "El objetivo de Apple en el salón sigue siendo el mismo que hace unos años: convertir el Apple TV 4K en el centro de contenidos para nuestro televisor. Esto genera un debate acerca de si tvOS cubre bien o no las necesidades de ese salón, pero hay quien sigue i…",
      url: "https://www.applesfera.com/apple-tv/nuevo-apple-tv-4k-puede-ser-consola-videojuegos-eso-dicen-pruebas-rendimiento",
      urlToImage: "https://i.blogs.es/6623c5/1366_2000/840_560.jpeg",
      publishedAt: "2022-11-14T09:12:39Z",
      content:
        "El objetivo de Apple en el salón sigue siendo el mismo que hace unos años: convertir el Apple TV 4K en el centro de contenidos para nuestro televisor. Esto genera un debate acerca de si tvOS cubre bi… [+2182 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-5">
        <h2>Top Headlines</h2>

        <div className="row my-4">
          {this.state.articles.map((news) => (
            <div key={news.url} className="col-md-4">
              <NewsItem
                title={news.title}
                description={news.description}
                imageURL={news.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
