export default {
  global: {
    Name: 'Estrategia comercial digital',
    Description:
      'El componente desarrolla fundamentos estratégicos relacionados con clientes digitales, comercio electrónico, campañas y <em>customer journey</em> aplicados a ventas en <em>social media</em>. Su enfoque fortalece capacidades relacionadas con segmentación, interacción digital, posicionamiento y planificación comercial mediante herramientas y estrategias orientadas al comportamiento del consumidor contemporáneo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Clientes digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Perfiles',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Arquetipos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: '<em>Buyer</em> persona',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Información personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipología',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Usos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Componentes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Normativa',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipologías',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Aplicación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Matriz de estrategia de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipología',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elaboración',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ventajas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Elementos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Usos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Escucha social',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Campañas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Usos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: '<em>Customer journey</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Aplicación',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63110200_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<em>Buyer</em> persona',
      significado:
        'Representación del cliente ideal construida mediante análisis de intereses, hábitos y comportamientos digitales específicos identificados previamente.',
    },
    {
      termino: 'Campaña digital',
      significado:
        'Estrategia comercial organizada para fortalecer posicionamiento, interacción y conversión mediante plataformas digitales y redes sociales.',
    },
    {
      termino: 'Comercio electrónico',
      significado:
        'Modelo comercial desarrollado mediante plataformas digitales orientadas a procesos de compra y venta <em>online</em> contemporáneos actuales.',
    },
    {
      termino: 'Conversión',
      significado:
        'Acción realizada por el consumidor relacionada con compra, registro o interacción comercial dentro de plataformas digitales actuales.',
    },
    {
      termino: '<em>Customer journey</em>',
      significado:
        'Recorrido desarrollado por el consumidor durante diferentes etapas de interacción con una marca digital contemporánea actual.',
    },
    {
      termino: 'Escucha social',
      significado:
        'Proceso de monitoreo y análisis relacionado con conversaciones digitales desarrolladas en redes sociales y plataformas contemporáneas.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia orientada a fortalecer relaciones sostenibles mediante experiencias comerciales positivas y personalizadas digitales actuales contemporáneas.',
    },
    {
      termino: 'Matriz estratégica',
      significado:
        'Herramienta utilizada para organizar objetivos, acciones y procesos comerciales relacionados con estrategias digitales contemporáneas actuales.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'Plataformas digitales utilizadas para interacción, comunicación y fortalecimiento de estrategias comerciales contemporáneas relacionadas con consumidores.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Clasificación de consumidores según características, intereses y comportamientos utilizados para fortalecer estrategias comerciales digitales actuales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <em>Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales</em>.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Rock Content. (2023). <em>Qué son los arquetipos de marca y cómo utilizarlos</em>.',
      link: 'https://rockcontent.com/es/blog/arquetipos-de-marca/',
    },
    {
      referencia:
        'Sprout Social. (2024). <em>Guía de social listening para empresas</em>.',
      link: 'https://sproutsocial.com/insights/social-media-listening/',
    },
    {
      referencia:
        'Universidad Internacional de La Rioja [UNIR]. (2022). <em>Buyer persona: qué es, cómo crearlo y ejemplos</em>. Revista UNIR.',
      link: 'https://www.unir.net/revista/marketing-comunicacion/buyer-persona/?utm_source=chatgpt.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
