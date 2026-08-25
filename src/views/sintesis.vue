<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/img01.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-0(data-aos="fade-right") El componente formativo Estrategia comercial digital ofrece al aprendiz fundamentos relacionados con clientes digitales, información personal, negociación y estrategias comerciales aplicadas a entornos digitales contemporáneos. Su desarrollo permite comprender dinámicas relacionadas con segmentación, comportamiento del consumidor y construcción de experiencias digitales orientadas al fortalecimiento de ventas en <em>social media</em>. Asimismo, integra herramientas estratégicas relacionadas con matrices de mercadeo y procesos de interacción comercial utilizados dentro de plataformas digitales y ecosistemas empresariales altamente competitivos.
    
    p.mb-5 El componente también desarrolla conocimientos relacionados con comercio electrónico, redes sociales, campañas digitales y <em>customer journey</em> aplicados a procesos comerciales contemporáneos. A través de ejemplos empresariales, casos aplicados y herramientas estratégicas, el aprendiz fortalece capacidades relacionadas con posicionamiento, fidelización y análisis del comportamiento digital. Este enfoque contribuye al desarrollo de competencias orientadas a planificación, interacción y optimización de experiencias comerciales dentro de mercados digitales dinámicos y entornos relacionados con ventas digitales contemporáneas.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Estrategia comercial digital”, el cual se organiza en ocho unidades. Inicia con clientes digitales, en donde se aborda su concepto, tipo, perfiles, arquetipos y buyer persona. El capítulo dos está destinado para información personal, desarrollando concepto, tipología, usos, componentes y normativa. El capítulo tres corresponde a Negociación, en donde se ve concepto, tipologías y aplicación. El capítulo cuatro aborda matriz de estrategia de mercadeo, en donde se ve concepto, tipología y elaboración. El capítulo cinco desarrolla comercio electrónico, abordando su concepto, ventajas, tipos y elementos. El capítulo seis desarrolla la temática de redes sociales, abordando concepto, tipos, usos y escucha social. El capítulo siete corresponde a campañas en donde se ve concepto, tipos y usos. Culmina con el capítulo ocho para customer journey, en donde se aprecia su concepto y aplicación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
