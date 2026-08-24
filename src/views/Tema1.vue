<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Clientes digitales

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema1/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La transformación digital modificó la manera en que las organizaciones comprenden, segmentan e interactúan con los consumidores. Actualmente, los clientes digitales participan activamente en procesos de búsqueda, comparación y validación de productos mediante plataformas digitales y redes sociales. Comprender sus comportamientos, necesidades y expectativas resulta fundamental para estructurar estrategias comerciales efectivas. Este capítulo desarrolla conceptos relacionados con clientes digitales, tipologías, perfiles, arquetipos y <em>buyer</em> persona, integrando aplicaciones estratégicas orientadas al fortalecimiento de procesos comerciales y ventas en <em>social media</em>.

      separador
      
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Concepto

      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los clientes digitales corresponden a usuarios que interactúan con organizaciones mediante plataformas tecnológicas, redes sociales, aplicaciones y canales digitales durante procesos de búsqueda, comparación y compra; su comportamiento se caracteriza por la inmediatez, la conectividad y el acceso permanente a información comercial. Las organizaciones deben comprender sus dinámicas para construir estrategias comerciales alineadas con las expectativas digitales. Este enfoque transforma los procesos tradicionales de ventas y fortalece la personalización de experiencias comerciales digitales.
      
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          h4  Ejemplo aplicado. Transformación digital de “Urban Style”
          p.mb-0(data-aos="fade-right") El negocio local “Urban Style”, dedicado a la venta de prendas casuales, identificó disminución en ventas físicas debido al incremento de competidores digitales. Inicialmente, el negocio utilizaba redes sociales únicamente como vitrina visual, sin comprender el comportamiento del cliente digital ni sus necesidades de interacción inmediata. Después de analizar comentarios, métricas e intereses de usuarios, el negocio implementó respuestas automatizadas, publicaciones segmentadas y contenidos dinámicos orientados a públicos juveniles. La estrategia permitió identificar preferencias relacionadas con promociones rápidas, recomendaciones personalizadas y formatos audiovisuales cortos. Como resultado, “Urban Style” incrementó la interacción digital, fortaleció el posicionamiento de marca y mejoró oportunidades de conversión mediante plataformas sociales.


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-0(data-aos="fade-right") Los clientes digitales pueden clasificarse según la relación comercial establecida con las organizaciones y las dinámicas de compra desarrolladas en entornos digitales. Dentro de las tipologías más relevantes se encuentran los modelos <em>B2B</em> y <em>B2C</em>, ampliamente utilizados en estrategias comerciales digitales actuales. Estas clasificaciones permiten comprender procesos de negociación, necesidades de comunicación y características del comportamiento comercial. La identificación correcta del tipo de cliente facilita la toma de decisiones estratégicas relacionadas con contenidos, campañas y posicionamiento digital.



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.col-md-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 1.
          span Tipos de clientes digitales según relación comercial
        img.mb-3(data-aos="fade-up", src="@/assets/curso/tema1/img05.png", alt="Infografía que presenta los modelos B2B, business to business, y B2C, business to consumer. El modelo B2B representa relaciones comerciales entre organizaciones, caracterizadas por procesos de compra, negociación y decisiones basadas en criterios empresariales. El modelo B2C representa relaciones comerciales entre empresas y consumidores finales, orientadas a experiencias de compra, interacción y comunicación mediante contenidos digitales.").mx-auto.d-none.d-lg-block
        img.mb-3(data-aos="fade-up", src="@/assets/curso/tema1/img06.png", alt="Infografía que presenta los modelos B2B, business to business, y B2C, business to consumer. El modelo B2B representa relaciones comerciales entre organizaciones, caracterizadas por procesos de compra, negociación y decisiones basadas en criterios empresariales. El modelo B2C representa relaciones comerciales entre empresas y consumidores finales, orientadas a experiencias de compra, interacción y comunicación mediante contenidos digitales.").mx-auto.d-lg-none
        figcaption Nota. SENA, (2026).


    .row.align-items-center(data-aos="fade-right")
      .col-lg-12.mx-auto
        .tarjeta.bg-fondo-03.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img07.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.bg-color-04.p-2.max-cont-md.mx-auto.mx-lg-0.text-center.text-lg-start Tipos de clientes
              p.mb-0 Lo invitamos a consultar el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video del Ecosistema de Recursos Educativos Digitales SENA el cual explica diferentes tipos de clientes y sus comportamientos durante procesos comerciales y de microcrédito, destacando características, necesidades y niveles de relación con la entidad financiera.   
            .col-12.col-lg-auto.text-center
              a.boton.bg-color-04(:href="'https://www.youtube.com/watch?v=1dIqszM7mZA'" target="_blank")
                span Ir al recurso
                i.fas.fa-link


    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-07.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img08.png").mx-auto
            .col-lg-7.order-lg-2.p-4
              .bg-color-06.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Pregunta de aplicación
              p.mb-0 ¿Qué diferencias deberían existir entre una campaña digital orientada a empresas y otra dirigida a consumidores finales?


    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Perfiles

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-3(data-aos="fade-right") Los perfiles de clientes digitales permiten clasificar usuarios según comportamientos, intereses, hábitos de consumo y formas de interacción en entornos digitales. Su identificación facilita la segmentación estratégica y la construcción de experiencias comerciales personalizadas. Actualmente, las organizaciones utilizan datos provenientes de redes sociales, plataformas digitales y herramientas analíticas para comprender patrones de comportamiento. Este análisis fortalece decisiones relacionadas con campañas, contenidos y procesos comerciales orientados a mejorar la interacción y conversión digital.

        .cajon.bg-color-01.p-4
          p.mb-0 Los perfiles digitales pueden construirse mediante variables demográficas, geográficas, psicográficas y conductuales. Las variables demográficas incluyen edad, género y ocupación; las geográficas consideran ubicación y contexto territorial; las psicográficas analizan estilos de vida y valores; mientras las conductuales estudian hábitos de interacción y compra. Empresas como Spotify utilizan análisis conductual para recomendar contenido personalizado y fortalecer la experiencia del usuario. Esta segmentación permite optimizar estrategias comerciales y mejorar procesos de fidelización digital.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.mb-4.mb-lg-4.mb-xl-0  
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Variables para construcción de perfiles digitales
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table(style="min-width:440px")
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th(width="30%") Variable
                th(width="70%") Aplicación estratégica
            tbody
              tr
                td Demográfica
                td Permite segmentar clientes según edad, género, ocupación y características poblacionales relevantes para estrategias digitales.
              tr
                td Geográfica
                td Facilita adaptar campañas y contenidos según ubicación territorial y contexto comercial del consumidor digital identificado.
              tr
                td Psicográfica
                td Analiza estilos de vida, intereses, valores y motivaciones que influyen en decisiones comerciales digitales actuales.
              tr
                td Conductual
                td Evalúa hábitos de navegación, interacción y compra para fortalecer segmentación y estrategias comerciales personalizadas digitales.


    
    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-09.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img10.svg").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-08.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Clave estratégica
              p.mb-0 La correcta identificación de perfiles digitales permite personalizar contenidos y optimizar procesos de interacción y conversión comercial.



    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Arquetipos


    img(src="@/assets/curso/tema1/img11.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Los arquetipos representan modelos simbólicos utilizados para comprender comportamientos, motivaciones y características comunes de determinados grupos de consumidores. En <em>marketing</em> digital, permiten construir estrategias comunicativas coherentes con emociones, expectativas y formas de interacción de los clientes. Su aplicación facilita la creación de mensajes consistentes y fortalece la identidad de marca. Las organizaciones utilizan arquetipos para conectar emocionalmente con audiencias específicas y desarrollar experiencias comerciales diferenciadas en entornos digitales competitivos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-0(data-aos="fade-right") Los arquetipos comerciales suelen construirse mediante patrones psicológicos y emocionales relacionados con necesidades humanas universales. Algunos de los más utilizados son el explorador, el creador, el héroe y el cuidador. Por ejemplo, Nike utiliza elementos asociados al arquetipo del héroe mediante mensajes orientados a superación personal, disciplina y rendimiento. Esta construcción simbólica fortalece el posicionamiento de marca y facilita conexiones emocionales duraderas con consumidores digitales contemporáneos.


    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img13.png", alt="Héroe")
          .crd_hover_txt--body
            h4.mb-3.text-center Héroe
            p.mb-0 Representa superación, esfuerzo y disciplina mediante mensajes motivacionales orientados al logro personal y competitivo.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img14.png", alt="Explorador")
          .crd_hover_txt--body
            h4.mb-3.text-center Explorador
            p.mb-0 Se relaciona con libertad, autenticidad y experiencias nuevas enfocadas en independencia y descubrimiento personal constante.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img15.png", alt="Creador")
          .crd_hover_txt--body
            h4.mb-3.text-center Creador
            p.mb-0 Proyecta innovación, creatividad y diferenciación mediante contenidos originales y propuestas comerciales altamente expresivas digitales.

      .col-xl-3.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img16.png", alt="Cuidador")
          .crd_hover_txt--body
            h4.mb-3.text-center Cuidador
            p.mb-0 Prioriza protección, bienestar y acompañamiento mediante estrategias orientadas a confianza y apoyo emocional permanente.

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 <em>Buyer</em> persona

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") El <em>buyer</em> persona corresponde a una representación semificticia del cliente ideal construida mediante información demográfica, conductual, psicográfica y comercial obtenida a partir del análisis de datos reales. Su propósito consiste en comprender necesidades, motivaciones, intereses y comportamientos de los consumidores digitales para diseñar estrategias comerciales más efectivas. Actualmente, las organizaciones utilizan <em>buyer</em> personas para fortalecer campañas, personalizar contenidos y optimizar procesos de interacción digital orientados a mejorar la conversión y la fidelización comercial.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-12.mx-auto
        .tarjeta.bg-fondo-03.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img07.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.bg-color-04.p-2.max-cont-md.mx-auto.mx-lg-0.text-center.text-lg-start ¿Qué es un <em>buyer</em> persona y qué tipos hay?
              p.mb-0 Lo invitamos a visitar el siguiente enlace en donde podrá apreciar una página que explica el concepto de <em>buyer</em> persona, destacando su importancia para diseñar estrategias de <em>marketing</em> más precisas, personalizadas y orientadas a mejorar la conexión con los consumidores.
            .col-12.col-lg-auto.text-center
              a.boton.bg-color-04(:href="'https://www.unir.net/revista/marketing-comunicacion/buyer-persona/'" target="_blank")
                span Ir al recurso
                i.fas.fa-link


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
        h4 Ejemplo aplicado. Construcción del <em>buyer</em> persona en “Urban Style”
        p.mb-3(data-aos="fade-right") Después de analizar interacciones digitales y hábitos de consumo, “Urban Style” identificó que gran parte de sus seguidores correspondían a jóvenes universitarios interesados en moda urbana, promociones digitales y contenido audiovisual dinámico. A partir de esta información, la empresa construyó un <em>buyer</em> persona denominado “Camila”, estudiante de 22 años, usuaria activa de Instagram y TikTok, interesada en tendencias de moda accesibles y compras rápidas mediante plataformas digitales. 

        .cajon.bg-color-01.p-4
          p.mb-0 Con base en este perfil, el negocio ajustó sus publicaciones, implementó promociones limitadas y fortaleció estrategias de contenido visual orientadas a experiencias dinámicas. Como resultado, incrementó la interacción digital, mejoró el alcance comercial y fortaleció procesos de conversión mediante contenidos alineados con intereses específicos del cliente identificado.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-8.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img19.svg").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión 
              p.mb-0 “La construcción de relaciones comerciales sostenibles inicia comprendiendo al cliente con honestidad, respeto y responsabilidad comunicativa”. 


              






      
    
    //- .row.align-items-center.mb-3
    //-   .col-lg-auto.d-none.d-lg-block
    //-     img(src="@/assets/curso/tema1/img04.svg").mx-auto
    //-   .col-lg
    //-     p.mb-0 En los procesos industriales es necesario conocer el comportamiento de diferentes variables para realizar seguimiento y control de las operaciones.
    //-     p.mb-0 La medición permite obtener información sobre una variable mediante la comparación con una unidad o patrón determinado. Para realizarla se utilizan instrumentos diseñados según las características del proceso.

    //- .bg-full-width.bg-fondo-1
      
    //-   separador
      
    //-   #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-     h2 1.1 Medida y medición

    //-   p.mb-5 Para comprender los sistemas de medición es necesario diferenciar estos dos conceptos.

    //-   .row.align-items-center.mb-5
    //-     .col-lg-6.mb-4.mb-lg-0
    //-       .container
    //-         .row.align-items-center.bg-color-01.p-4.mb-0.br-15
    //-           .col-lg-auto.d-none.d-lg-block
    //-             img(src="@/assets/curso/tema1/img05.svg", style="max-width: 90px").mx-auto
    //-           .col-lg
    //-             p.mb-0 <b>Medida</b>: valor que representa la relación entre una cantidad y una unidad utilizada como patrón.

    //-     .col-lg-6
    //-       .container
    //-         .row.align-items-center.bg-color-02.p-4.mb-0.br-15
    //-           .col-lg-auto.d-none.d-lg-block
    //-             img(src="@/assets/curso/tema1/img06.svg", style="max-width: 90px").mx-auto
    //-           .col-lg
    //-             p.mb-0 <b>Medición</b>: determinación de una medida mediante un procedimiento y, generalmente, con apoyo de un instrumento.
      
    //-   .row.align-items-center(data-aos="fade-right")
    //-     .col-lg-10.mx-auto
    //-       .bg-fondo-01.br-15.mb-5
    //-         .row.align-items-center.justify-content-center(data-aos="fade-right")
    //-           .col-lg-auto.d-none.d-lg-flex.order-lg-2
    //-             img(src="@/assets/curso/tema1/img08.svg").mx-auto
    //-           .col-lg-8.order-1.order-lg-1.p-4
    //-             p.mb-0 <b>Ejemplo:</b> una báscula registra 25 kg con una aproximación de 2 g. En este caso, el resultado debe interpretarse considerando la capacidad de medición del instrumento.
      
    //-   separador

    //- //- .container
    //- //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //- //-     .titulo-con-imagen__fondo
    //- //-       img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //- //-       h3.titulo-con-imagen__texto Intrumentos de medida

      
    //- #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.2 Instrumentos de medida


    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in")
    //-   .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
    //-     p.mb-2(data-aos="fade-right") Los instrumentos permiten determinar el valor de una variable. Para interpretar sus resultados es necesario conocer algunas características, entre ellas:

    //-     .bg-color-05-degrade.p-4.br-15.mb-0
    //-       ul.lista-ul--color.mb-0
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span <b>Rango</b>: conjunto de valores dentro del cual puede encontrarse la variable medida.
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span <b>SPAN</b>: diferencia entre el límite superior y el límite inferior del rango.
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span <b>Valor medido</b>: valor registrado por el instrumento.
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span <b>Valor real</b>: valor correspondiente a la variable que se pretende determinar.
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span <b>Exactitud</b>: característica relacionada con la proximidad entre el valor medido y el valor real.


    
    //- .row.align-items-center.mb-4(data-aos="fade-right")
    //-   .col-lg-10.mx-auto
    //-     .bg-fondo-02.br-15.mb-4.p-4
    //-       .col-lg-9.col-12
    //-         p.mb-2.fw-bold Ejemplo de aplicación:
    //-         p.mb-2 Un instrumento utilizado para medir temperatura presenta un límite inferior de 100 °C y un límite superior de 300 °C.
    //-         p.mb-1 <b>Rango:</b> 100 °C – 300 °C
    //-         p.mb-0 <b>SPAN:</b> 300 °C – 100 °C = 200 °C


    //-     p.mb-0 Si el instrumento presenta una exactitud de ±0,5 % del SPAN, la exactitud corresponde a ±1 °C. Para una lectura de 250 °C, el valor real podría encontrarse entre 249 °C y 251 °C.

    //- separador

    //- //- .container
    //- //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //- //-     .titulo-con-imagen__fondo
    //- //-       img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //- //-       h3.titulo-con-imagen__texto Intrumentación industrial

    //- #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.3 Instrumentación industrial


    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in")
    //-   .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
    //-     p.mb-3 La instrumentación industrial reúne elementos destinados a medir y obtener información sobre las variables de un proceso.

    //-     p.mb-3 En estos sistemas participan instrumentos, sensores y otros dispositivos que permiten captar información y ponerla a disposición de sistemas electrónicos.

    //-     p.mb-3 De esta manera, la medición constituye un punto de partida para comprender cómo una variable física puede convertirse posteriormente en una señal utilizada dentro de un sistema de adquisición y control.


    //-     .container
    //-       .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
    //-         .col-lg-auto.d-none.d-lg-block
    //-           img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
    //-         .col-lg
    //-           p.mb-0.text-bold Medición → captación → señal → procesamiento → control

    //- p.mb-3 La relación anterior permite introducir el estudio de los sensores y transductores, elementos fundamentales para la adquisición de señales.

    //- p.mb-5 En los procesos industriales es necesario conocer el comportamiento de diferentes variables para verificar las condiciones de operación, detectar cambios y tomar decisiones relacionadas con el funcionamiento de máquinas y procesos.

    //- .bloque-texto-g.bg-color-04.p-3.p-sm-3.p-md-3.p-lg-4.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img14.png')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-1 La medición constituye uno de los fundamentos de la instrumentación industrial. A través de ella se obtiene información sobre una magnitud mediante un procedimiento y una unidad de referencia. El material de formación anterior destaca que la medición de los parámetros de un proceso resulta fundamental para ejercer control sobre los productos y contribuir a su calidad y competitividad. 
    //-     p.mb-0 En este contexto, la instrumentación integra los elementos que permiten obtener información sobre las variables presentes en un proceso y utilizarla posteriormente en sistemas de supervisión o control.

    
    //- .bg-full-width.bg-fondo-1

    //-   //- separador
      
    //-   //- #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   //-   h2 1.2 Unidades de medida

    //-   .container
    //-     .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-       .titulo-con-imagen__fondo
    //-         img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //-         h3.titulo-con-imagen__texto Unidades de medida
      
    //-   p.mb-3 Toda medida requiere una unidad que permita expresar el valor obtenido. Las unidades funcionan como patrones de comparación y permiten comunicar los resultados de una medición.
    //-   p.mb-5 En los procesos industriales se utilizan diferentes magnitudes de acuerdo con las características de cada operación.

    //-   .row.mb-5.justify-content-center.align-items-center
    //-     .col-lg-12.col-xl-6.mb-4.mb-lg-4.mb-xl-0  
    //-       .titulo-sexto.color-acento-contenido.mb-3
    //-         h5 
    //-           b Tabla 1.
    //-         span Unidades de medida
    //-       .tabla-a.color-acento-contenido.tb-custom.mb-0
    //-         table(style="min-width:440px")
    //-           caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
    //-           thead
    //-             tr
    //-               th(width="50%") Magnitud
    //-               th(width="50%") Unidad de referencia
    //-           tbody
    //-             tr
    //-               td Longitud
    //-               td metro (m)
    //-             tr
    //-               td Masa
    //-               td kilogramo (kg)
    //-             tr
    //-               td Tiempo
    //-               td segundo (s)
    //-             tr
    //-               td Temperatura
    //-               td grado Celsius (°C)
    //-             tr
    //-               td Corriente eléctrica
    //-               td amperio (A)
    //-             tr
    //-               td Tensión eléctrica
    //-               td voltio (V)
    //-             tr
    //-               td Presión
    //-               td pascal (Pa)

    //-     .col-lg-12.col-xl-6
    //-       .row.align-items-center.mb-4
    //-         .col-lg-auto.col-12.mb-2
    //-           img.d-none.d-lg-flex(src="@/assets/curso/tema1/img15.svg", style="max-width: 90px").mx-auto
    //-         .col-lg
    //-           p.mb-0 El uso de unidades permite que los valores obtenidos mediante diferentes instrumentos puedan ser interpretados y comparados dentro de un mismo contexto.

    //-       .bg-fondo-01.br-15.mb-0
    //-         .row.align-items-center.justify-content-center(data-aos="fade-right")
    //-           .col-lg-auto.d-none.d-lg-flex.order-lg-2
    //-             img(src="@/assets/curso/tema1/img08.svg").mx-auto
    //-           .col-lg-7.order-1.order-lg-1.p-4
    //-             p.mb-0.ms-0.ms-lg-3 <b>Ejemplo:</b> una temperatura de 150 °C proporciona información diferente de una temperatura de 150 °F, aunque ambas expresen una magnitud de temperatura. Por esta razón, la unidad utilizada debe acompañar siempre el valor de la medida.
    

    //- //- subtitulo
    //- //- .container
    //- //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //- //-     .titulo-con-imagen__fondo
    //- //-       img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //- //-       h3.titulo-con-imagen__texto Instrumentos de medida

    //- separador
    
    //- #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.4 Instrumentos de medida

    //- p.mb-1 Un instrumento está constituido por uno o más elementos de medición conectados de una forma determinada y dispuestos para realizar una medición total. 
    //- p.mb-4 Los instrumentos se seleccionan de acuerdo con la magnitud que se desea medir, el intervalo de valores esperado y las condiciones propias del proceso.

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-6.mb-4.mb-lg-0
    //-     .bg-color-05-degrade.p-3.br-15.mb-0
    //-       p.mb-1(data-aos="fade-right") En una aplicación industrial pueden encontrarse instrumentos destinados a medir:
    //-       .row
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Temperatura
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Presión 
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Masa
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Longitud
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Velocidad
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Nivel
    //-         .col-lg-4.col-md-6
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex.mb-0 
    //-               i.fas.fa-solid.fa-square.me-2
    //-               span Posición.

    //-   .col-lg-6
    //-     p.mb-2 La selección adecuada del instrumento es importante porque no todos los dispositivos pueden utilizarse para cualquier condición de medición.
    //-     p.mb-0 Un instrumento diseñado para trabajar dentro de un determinado intervalo, por ejemplo, puede no resultar apropiado cuando la variable del proceso supera sus límites de operación.

    //- //- Características de los instrumentos de medida
    //- .container
    //-   .titulo-con-imagen.mb-4(data-aos="fade-right")
    //-     .titulo-con-imagen__fondo_2
    //-       h3.titulo-con-imagen__texto_2 Características de los instrumentos de medida
          
    //- p.mb-3 Para interpretar correctamente una medición no es suficiente con observar el valor indicado por el instrumento. Es necesario conocer algunas de sus características.

    //- p.mb-4 Entre los conceptos fundamentales se encuentran:


    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in")
    //-   .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
    //-     SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img19.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Rango
    //-         p.text-center Conjunto de valores en los que puede estar comprendida una variable medida.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img20.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Límite inferior (RI)
    //-         p.text-center Valor inferior que establece el rango del instrumento.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img21.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Límite superior (RS)
    //-         p.text-center Valor superior que establece el rango del instrumento.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img22.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 SPAN
    //-         p.text-center Alcance del instrumento, determinado mediante la diferencia entre el límite superior y el límite inferior.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img23.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Valor medido (VM)
    //-         p.text-center Valor registrado por el elemento de medida.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img24.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Valor real (VR)
    //-         p.text-center Valor real de la variable que se pretende determinar.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema1/img25.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
    //-         h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Error
    //-         p.text-center Diferencia entre el valor medido y el valor real.
  
    //- p.mb-4 Estos conceptos permiten analizar con mayor precisión la información proporcionada por un instrumento.

    //- //- Rango y SPAN
    //- .container
    //-   .titulo-con-imagen.mb-4(data-aos="fade-right")
    //-     .titulo-con-imagen__fondo_2
    //-       h3.titulo-con-imagen__texto_2 Rango y SPAN
          
    //- p.mb-2 El rango establece el conjunto de valores dentro del cual puede encontrarse la variable medida. Está definido por un límite inferior y un límite superior. 

    //- p.mb-4 Por ejemplo, un instrumento para medir temperatura presenta las siguientes características:

    //- .row.align-items-center.mb-5(data-aos="fade-right")
    //-   .col-lg-10
    //-     .bg-color-02.br-15.p-4
    //-       .row.align-items-stretch.justify-content-center.g-3
    //-         .col-lg-auto.d-flex.align-items-center.pe-lg-3
    //-           .p-2.text-center.text-lg-start
    //-             p.text-bold.mb-1 RI = 100 °C
    //-             p.text-bold.mb-0 RS = 300 °C

    //-         .col-lg.col-md-4
    //-           .br-01.h-100.p-3.align-content-center
    //-             p.mb-2 Por tanto, el rango corresponde a:
    //-             p.mb-0.text-bold 100 °C a 300 °C

    //-         .col-lg.col-md-4
    //-           .br-01.h-100.p-3.align-content-center
    //-             p.mb-2 El SPAN representa el alcance del instrumento y se calcula mediante:
    //-             p.mb-0.text-bold SPAN = RS - RI

    //-         .col-lg.col-md-4
    //-           .br-01.h-100.p-3.align-content-center
    //-             p.mb-1 En este caso:
    //-             p.mb-0.text-bold SPAN = 300 °C - 100 °C
    //-             p.mb-0.text-bold SPAN = 200 °C

    //- p.mb-4 La diferencia entre rango y SPAN es importante:

    //- .row.align-items-center.mb-4.justify-content-center
    //-   .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1
    //-     .bg-color-05-degrade.p-2.br-15.mb-4.mb-lg-3
    //-       ul.lista-ul--color.mb-0.p-2
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span El rango indica desde qué valor hasta qué valor puede realizarse la medición.

    //-     .bg-color-05-degrade.p-2.br-15.mb-4.mb-lg-3
    //-       ul.lista-ul--color.mb-0.p-2
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span El SPAN indica la diferencia entre esos dos límites.

    //-     figure.mb-0
    //-       img(src="@/assets/curso/tema1/img26.png", alt="Representación del rango").mx-auto

    //-   .col-lg-6.order-1.order-lg-2
    //-     .row.justify-content-center.mb-4
    //-       .titulo-sexto.color-acento-contenido.mb-4
    //-         h5.text-bold.mb-2 Figura 1.
    //-         span Representación del rango
    //-       img.mb-3(data-aos="fade-up", src="@/assets/curso/tema1/img42.png", alt="").mx-auto
    //-       figcaption Nota. SENA, (2026).
        
    //-     p.mb-0 Esta representación permite visualizar la relación entre los límites del instrumento y su SPAN.
          


    //- //- .container
    //- //-   .titulo-con-imagen.mb-4(data-aos="fade-right")
    //- //-     .titulo-con-imagen__fondo_2
    //- //-       h3.titulo-con-imagen__texto_2 Valor medido y valor real
          
    //- separador
    
    //- #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.5 Representación del rango


    //- .row.align-items-center.mb-5
    //-   .col-lg-6.mb-4.mb-lg-0
    //-     .container
    //-       .row.align-items-center.bg-color-01.p-4.mb-0.br-15
    //-         .col-lg-auto.d-none.d-lg-block
    //-           img(src="@/assets/curso/tema1/img27.svg", style="max-width: 90px").mx-auto
    //-         .col-lg
    //-           p.mb-0 El valor medido (VM) corresponde al valor registrado por el elemento de medida.

    //-   .col-lg-6
    //-     .container
    //-       .row.align-items-center.bg-color-02.p-4.mb-0.br-15
    //-         .col-lg-auto.d-none.d-lg-block
    //-           img(src="@/assets/curso/tema1/img28.svg", style="max-width: 90px").mx-auto
    //-         .col-lg
    //-           p.mb-0 El valor real (VR) corresponde al valor real de la variable que se pretende determinar. 


    
    //- .bg-full-width.bg-fondo-2
    //-   .row.align-items-center(data-aos="fade-right")
    //-     .col-lg-10.mx-auto
    //-       .bg-fondo-01.br-15.mb-5
    //-         .row.align-items-center.justify-content-center(data-aos="fade-right")
    //-           .col-lg-4.col-xl-auto.d-none.d-lg-flex.order-lg-2
    //-             img(src="@/assets/curso/tema1/img08.svg").mx-auto
    //-           .col-lg-11.col-xl-9.order-1.order-lg-1.p-4
    //-             p.mb-0 <b>Por ejemplo</b>, si un instrumento registra:
    //-             p.mb-0 <b>VM = 250 °C</b> este corresponde al valor indicado por el instrumento.
    //-             p.mb-0 Sin embargo, el valor real puede presentar una diferencia respecto de la lectura. Esta diferencia se encuentra relacionada con las características del instrumento y con el error asociado a la medición.
    //-             p.mb-0 La diferenciación entre estos valores resulta fundamental para interpretar adecuadamente los resultados.

    
    //-   //- Error del instrumento de medida
    //-   .container
    //-     .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-       .titulo-con-imagen__fondo_2
    //-         h3.titulo-con-imagen__texto_2 Error del instrumento de medida
            
    //-   .row.align-items-center.justify-content-center.mb-5
    //-     .col-lg-4.mb-4.mb-lg-0
    //-       p.mb-2 El material de formación presenta el error del instrumento de medida mediante la expresión:
    //-       .br-01.h-100.p-3.align-content-center
    //-         .row.align-items-center
    //-           .col-lg-6
    //-             p.mb-0.text-bold ERROR = VM − VR
    //-           .col-lg-6
    //-             p.mb-0 Donde:
    //-             p.mb-0.text-bold VM: valor medido.
    //-             p.mb-0.text-bold VR: valor real.

    //-     .col-lg-3.mb-4.mb-lg-0
    //-       figure
    //-         img(src='@/assets/curso/tema1/img29.png', alt='').mx-auto

    //-     .col-lg-5
    //-       p.mb-3.mb-lg-2 El error representa la diferencia entre el valor registrado por el instrumento y el valor real de la variable.
    //-       .bg-color-02.br-15.h-100.p-3.align-content-center

    //-         .row.align-items-center
    //-           .col-lg-6
    //-             p.mb-0 Por ejemplo, si:
    //-             p.mb-0.text-bold VM = 52 °C y VR = 50 °C

    //-           .col-lg-6
    //-             p.mb-0 Entonces:
    //-             p.mb-0.text-bold ERROR = 52 − 50           
    //-             p.mb-0.text-bold ERROR = 2 °C


    //-   .row.align-items-center.mb-5
    //-     .col-lg-10.mx-auto
    //-       .bg-color-05-degrade.px-2.py-3.br-10.mb-0
    //-         p.mb-0 La interpretación de este resultado permite reconocer que la lectura del instrumento presenta una diferencia de 2 °C respecto del valor real.


    //-   //- Exactitud
    //-   .container
    //-     .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-       .titulo-con-imagen__fondo_2
    //-         h3.titulo-con-imagen__texto_2 Exactitud

    //-   //- .container
    //-   //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-   //-     .titulo-con-imagen__fondo
    //-   //-       img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //-   //-       h3.titulo-con-imagen__texto Exactitud
      
    //-   .row.mb-5.justify-content-center.align-items-center
    //-     .col-lg-4.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1
    //-       p.mb-4 La exactitud constituye una característica fundamental de los instrumentos de medida y se relaciona con la proximidad entre el valor medido y el valor real.
    //-       p.mb-0 Para comprender su aplicación, se analiza el siguiente caso, tomado de la estructura del ejemplo práctico del material de formación.

    //-     .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
    //-       .bg-fondo-03.p-2
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-3.mx-auto
    //-             figure.mb-0
    //-               img(src="@/assets/curso/tema1/img30.png").mx-auto.w-md-50
    //-           .col-lg-9.p-3
    //-             .bg-white.br-10.p-0
    //-               SlyderF(columnas="col-lg-12 col-xl-12 col-md-12 col-sm-12 p-2")
    //-                 .tarjeta.tarjeta--blanca.p-4.h-100.mb-0
    //-                   p.mb-2 <b>a)</b> Un instrumento de temperatura presenta:
    //-                   p.mb-0.text-bold RI = 100 °C
    //-                   p.mb-0.text-bold RS = 300 °C
    //-                   p.mb-0.text-bold Exactitud = ±0,5 % del SPAN
    //-                   p.mb-0.text-bold VM = 250 °C

    //-                 .tarjeta.tarjeta--blanca.p-4.h-100.mb-0
    //-                   p.mb-2 <b>b)</b> Primero se determina el SPAN:
    //-                   p.mb-0.text-bold SPAN = 300 °C − 100 °C
    //-                   p.mb-0.text-bold SPAN = 200 °C

    //-                 .tarjeta.tarjeta--blanca.p-4.h-100.mb-0
    //-                   p.mb-2 <b>c)</b> Posteriormente se determina la exactitud:
    //-                   p.mb-0 0,5 % de 200 °C = 1 °C
    //-                   p.mb-0 Por tanto:
    //-                   p.mb-0.text-bold Exactitud = ±1 °C

    //-                 .tarjeta.tarjeta--blanca.p-4.h-100.mb-0
    //-                   p.mb-2 <b>d)</b> El valor real puede encontrarse entre:
    //-                   p.mb-0 250 °C − 1 °C = 249 °C y 250 °C + 1 °C = 251 °C
    //-                   p.mb-0 Por consiguiente:
    //-                   p.mb-0.text-bold 249 °C ≤ VR ≤ 251 °C
                  

                
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema1/img32.png", data-aos="zoom-in")
    //-   .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
    //-     p.mb-3 Este ejemplo permite observar cómo las características del instrumento intervienen directamente en la interpretación del resultado de una medición. 

    //-     .container
    //-       .row.align-items-center.bg-color-0.p-4.mb-0.br-15
    //-         .col-lg-auto.d-none.d-lg-block.order-lg-2
    //-           img(src="@/assets/curso/tema1/img33.svg", style="max-width: 90px").mx-auto
    //-         .col-lg.order-lg-1
    //-           p.mb-0 Para este punto funciona muy bien un recurso interactivo de revelado: primero se presentan los datos del instrumento, después el cálculo del SPAN, posteriormente el cálculo de la exactitud y finalmente el intervalo del valor real.


    //- //- Resolución

    //- .container
    //-   .titulo-con-imagen.mb-4(data-aos="fade-right")
    //-     .titulo-con-imagen__fondo_2
    //-       h3.titulo-con-imagen__texto_2 Resolución
          

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-6.mb-4.mb-lg-0
    //-     p.mb-3(data-aos="fade-right") En términos de medición, la resolución se relaciona con la capacidad de distinguir o representar variaciones de la magnitud que se está midiendo.
    //-     .bg-color-05-degrade.p-3.br-15.mb-0
    //-       p.mb-1 Por ejemplo, considérese la lectura de dos instrumentos:

    //-       ul.lista-ul--color.mb-0
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span Instrumento A: 25 °C
    //-         li.d-flex.mb-0 
    //-           i.fas.fa-solid.fa-square.me-2
    //-           span Instrumento B: 25,1 °C

    //-   .col-lg-6
    //-     .row.align-items-center.mb-0
    //-       .col-lg-auto.col-12.mb-2
    //-         img.d-none.d-lg-flex(src="@/assets/curso/tema1/img34.svg", style="max-width: 90px").mx-auto
    //-       .col-lg-12
    //-         p.mb-1 La segunda lectura permite representar una variación más pequeña de la magnitud.
    //-         p.mb-0 La resolución y la exactitud no deben confundirse. Un instrumento puede presentar una lectura con muchos decimales y esto no significa, por sí mismo, que el valor obtenido sea más próximo al valor real.

    //- .row.align-items-center(data-aos="fade-right")
    //-   .col-lg-10.mx-auto
    //-     .bg-fondo-04.br-15.mb-5
    //-       .row.align-items-center.justify-content-center(data-aos="fade-right")
    //-         .col-lg-4.col-xl-auto.d-none.d-lg-flex.order-lg-2
    //-           img(src="@/assets/curso/tema1/img36.png").mx-auto
    //-         .col-lg-11.col-xl-9.order-1.order-lg-1.p-4
    //-           p.mb-0 <b>Relación con la medición</b>
    //-           p.mb-0 <b>Exactitud</b>: relacionada con la proximidad entre el valor medido y el valor real.
    //-           p.mb-0 <b>Resolución</b>: relacionada con el nivel de detalle con el que puede distinguirse o representarse una variación.


    //- //- Magnitudes y prefijos 
    //- separador
    
    //- #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.6 Magnitudes y prefijos  

    
    //- //- .container
    //- //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //- //-     .titulo-con-imagen__fondo
    //- //-       img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
    //- //-       h3.titulo-con-imagen__texto Magnitudes y prefijos    
          

    //- .row.align-items-center.justify-content-center.mb-5
    //-   .col-lg-3.mb-4.mb-lg-0
    //-     p.mb-2 El material de formación incorpora como parte del estudio inicial las magnitudes y algunos prefijos relacionados con el Sistema Internacional. 
    //-     p.mb-2 Los prefijos permiten expresar cantidades de diferente orden de magnitud sin modificar la naturaleza de la unidad.
    //-     p.mb-0 Algunos ejemplos son:

    //-   .col-lg-6.mb-4.mb-lg-0
    //-     .titulo-sexto.color-acento-contenido.mb-3
    //-       h5 
    //-         b Tabla 2.
    //-       span Prefijos
    //-     .tabla-a.color-acento-contenido.tb-custom.mb-0
    //-       table(style="min-width:440px")
    //-         caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
    //-         thead
    //-           tr
    //-             th Prefijo
    //-             th Símbolo
    //-             th Factor
    //-         tbody
    //-           tr
    //-             td kilo
    //-             td k
    //-             td 10³
    //-           tr
    //-             td hecto
    //-             td h
    //-             td 10²
    //-           tr
    //-             td deca
    //-             td da
    //-             td 10¹
    //-           tr
    //-             td deci
    //-             td d
    //-             td 10⁻¹
    //-           tr
    //-             td centi
    //-             td c
    //-             td 10⁻²
    //-           tr
    //-             td mili
    //-             td m
    //-             td 10⁻³

    //-   .col-lg-3.col-md-8
    //-     figure.mb-0
    //-       img(src="@/assets/curso/tema1/img37.png", alt="").mx-auto



    //- .bg-full-width.bg-fondo-1
    //-   .row.align-items-center(data-aos="fade-right")
    //-     .col-lg-10.mx-auto
    //-       .bg-fondo-01.br-15.mb-5
    //-         .row.align-items-center.justify-content-center(data-aos="fade-right")
    //-           .col-lg-4.col-xl-auto.d-none.d-lg-flex.order-lg-2.order-xl-1
    //-             img(src="@/assets/curso/tema1/img08.svg").mx-auto
    //-           .col-lg-11.col-xl-9.order-1.order-lg-1.p-4.order-xl-2
    //-             p.mb-1 <b>Por ejemplo:</b>
    //-             p.mb-1 <b>1 m = 100 cm</b>
    //-             p.mb-1 <b>1 m = 1000 mm</b>
    //-             p.mb-0 La utilización adecuada de unidades y prefijos resulta importante en la interpretación de valores obtenidos durante las mediciones.
      
      

    //-   //- Captación de variables
    //-   .container
    //-     .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-       .titulo-con-imagen__fondo_2
    //-         h3.titulo-con-imagen__texto_2 Captación de variables


    //-   p.mb-4 La medición permite determinar el valor de una magnitud, mientras que la captación permite obtener información relacionada con una variable presente en el proceso.
    //-   p.mb-4 El concepto de captación se encuentra incluido dentro de los conocimientos de conceptos y principios del programa.


    //-   .row.mb-5.justify-content-center.align-items-center
    //-     .col-lg-6.mb-4.mb-lg-0
    //-       .bg-color-05-degrade.p-3.br-15.mb-0
    //-         p.mb-1 En una aplicación industrial pueden requerirse diferentes tipos de información:

    //-         .row
    //-           .col-lg-6
    //-             ul.lista-ul--color.mb-0
    //-               li.d-flex.mb-0 
    //-                 i.fas.fa-solid.fa-square.me-2
    //-                 span Presencia de una pieza; 
    //-           .col-lg-6
    //-             ul.lista-ul--color.mb-0
    //-               li.d-flex.mb-0 
    //-                 i.fas.fa-solid.fa-square.me-2
    //-                 span Posición de un elemento; 
    //-           .col-lg-6
    //-             ul.lista-ul--color.mb-0
    //-               li.d-flex.mb-0 
    //-                 i.fas.fa-solid.fa-square.me-2
    //-                 span Temperatura de un proceso; 
    //-           .col-lg-6
    //-             ul.lista-ul--color.mb-0
    //-               li.d-flex.mb-0 
    //-                 i.fas.fa-solid.fa-square.me-2
    //-                 span Presión de un fluido; 
    //-           .col-lg-6
    //-             ul.lista-ul--color.mb-0
    //-               li.d-flex.mb-0 
    //-                 i.fas.fa-solid.fa-square.me-2
    //-                 span Velocidad de un componente.

    //-     .col-lg-6
    //-       .row.align-items-center.mb-0
    //-         .col-lg-auto.mb-2
    //-           img.d-none.d-lg-flex(src="@/assets/curso/tema1/img38.svg", style="max-width: 90px").mx-auto
    //-         .col-lg
    //-           p.mb-1 Para cada situación será necesario disponer de un elemento capaz de responder a la variable de interés.
    //-           p.mb-0 La captación constituye así un punto de conexión entre la variable física y el sistema encargado de procesar la información.
      
    //-   //- Instrumentación industrial
    //-   .container
    //-     .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-       .titulo-con-imagen__fondo_2
    //-         h3.titulo-con-imagen__texto_2 Instrumentación industrial
            
            
    //-   .row.mb-4.justify-content-center.align-items-center
    //-     .col-lg-12
    //-       p.mb-3 La instrumentación industrial reúne los elementos relacionados con la medición y la captación de variables presentes en los procesos.
    //-       p.mb-0 En un sistema de instrumentación, la información puede seguir una secuencia general:
      
    //-   .row.mb-5.justify-content-center.align-items-stretch
    //-     .col-lg-6.mb-4.mb-lg-0
    //-       .bg-color-05-degrade.p-4.br-15.mb-0(style="height: 100%;")
    //-         ul.lista-ul--color.mb-0
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span La variable corresponde a la condición que se desea conocer.
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span La captación permite obtener información sobre dicha condición.
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span La señal representa la información obtenida y permite su transmisión o procesamiento.

    //-     .col-lg-6.mb-0.mb-lg-0.h-100
    //-       .bg-color-05-degrade.p-4.br-15.mb-0.h-100
    //-         ul.lista-ul--color.mb-0
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span El procesamiento permite interpretar la información de acuerdo con las necesidades del sistema.
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span Finalmente, la información puede utilizarse para generar una acción de control.
    //-           li.d-flex.mb-0 
    //-             i.fas.fa-solid.fa-square.me-2
    //-             span Esta secuencia será ampliada en los siguientes contenidos mediante el estudio de los sensores, transductores y sistemas de adquisición de señales.

    //- //- Aplicación de la medición en un proceso industrial
    //- .container
    //-   .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-     .titulo-con-imagen__fondo_2
    //-       h3.titulo-con-imagen__texto_2 Aplicación de la medición en un proceso industrial
          
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1
    //-     p.mb-3 Considérese un proceso en el que un equipo debe operar dentro de un intervalo determinado de temperatura.
    //-     p.mb-0 Antes de seleccionar un instrumento se deben establecer las condiciones de medición.

    //-   .col-lg-9.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
    //-     .bg-fondo-03.p-2
    //-       .row.align-items-center.justify-content-center
    //-         .col-lg-3.mx-auto.col-md-8
    //-           figure.mb-0
    //-             img(src="@/assets/curso/tema1/img40.png").mx-auto.w-md-50
    //-         .col-lg-9.p-3
    //-           .bg-white.br-10.p-0
    //-             SlyderF(columnas="col-lg-12 col-xl-12 col-md-12 col-sm-12 p-2")
    //-               .tarjeta.tarjeta--blanca.p-3.h-100.mb-0.align-content-center
    //-                 p.mb-0 <b>Variable:</b> temperatura.
    //-               .tarjeta.tarjeta--blanca.p-3.h-100.mb-0.align-content-center
    //-                 p.mb-0 <b>Intervalo esperado:</b> valores dentro de las condiciones de operación.
    //-               .tarjeta.tarjeta--blanca.p-3.h-100.mb-0.align-content-center
    //-                 p.mb-0 <b>Rango del instrumento:</b> debe cubrir los valores esperados.
    //-               .tarjeta.tarjeta--blanca.p-3.h-100.mb-0.align-content-center
    //-                 p.mb-0 <b>Exactitud:</b> debe ser adecuada para la aplicación.
    //-               .tarjeta.tarjeta--blanca.p-3.h-100.mb-0.align-content-center
    //-                 p.mb-1 <b>Resolución:</b> debe permitir distinguir las variaciones que sean relevantes para el proceso.
    //-                 p.mb-0 De esta manera, la selección del instrumento no depende únicamente de identificar la variable. También requiere analizar las características que debe cumplir el dispositivo para proporcionar información útil.

    //- .row.align-items-center(data-aos="fade-right")
    //-   .col-lg-10.mx-auto
    //-     .bg-fondo-05.br-15.mb-5.p-4
    //-       p.mb-2 Integración de conceptos
    //-       p.mb-3 Los conceptos desarrollados pueden relacionarse mediante la siguiente secuencia:

    //-       .bg-color-06.p-4.mb-2.br-15
    //-         p.mb-0.text-bold Magnitud → Medición → Medida → Interpretación del resultado → Captación de la variable → Señal → Procesamiento

    //-       p.mb-0 Esta secuencia permite comprender que la medición constituye uno de los primeros elementos de una cadena que posteriormente conduce hacia la adquisición y utilización de señales.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
