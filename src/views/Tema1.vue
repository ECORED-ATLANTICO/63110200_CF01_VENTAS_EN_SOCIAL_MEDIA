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
              img(src="@/assets/curso/tema1/img07.png")
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
              img(src="@/assets/curso/tema1/img10.png", style="max-width: 150px;").mx-auto
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
              img(src="@/assets/curso/tema1/img07.png")
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
              img(src="@/assets/curso/tema1/img19.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión 
              p.mb-0 “La construcción de relaciones comerciales sostenibles inicia comprendiendo al cliente con honestidad, respeto y responsabilidad comunicativa”. 


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
