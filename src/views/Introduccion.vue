<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
            figure
              img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p.mb-0(data-aos="fade-right") Este componente formativo aborda fundamentos estratégicos relacionados con clientes digitales, comercio electrónico, campañas y redes sociales orientados a los procesos de ventas en <em>social media</em>. Su desarrollo permite comprender cómo las organizaciones identifican perfiles de clientes, estructuran estrategias comerciales y utilizan entornos digitales para fortalecer la interacción, el posicionamiento y la conversión comercial en mercados altamente dinámicos.
           
        .bg-fondo-01.br-15.mb-0.p-4
            p.mb-0 El componente fortalece competencias analíticas y aplicadas mediante el estudio de conceptos, casos empresariales y herramientas utilizadas en estrategias digitales contemporáneas. 
    
    .row.mb-2.justify-content-center.align-items-center
      .col-lg-12  
        .cajon.bg-color-01.p-4
          p.mb-0 Los contenidos serán abordados desde una perspectiva técnica y estratégica, integrando ejemplos empresariales, análisis contextual, construcción de matrices comerciales y aplicación de metodologías orientadas a la toma de decisiones en procesos de ventas digitales y relacionamiento con clientes.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
