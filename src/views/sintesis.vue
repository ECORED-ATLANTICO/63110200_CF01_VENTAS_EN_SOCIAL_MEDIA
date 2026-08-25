<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/img01.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-0(data-aos="fade-right") El componente formativo Estrategia comercial digital ofrece al aprendiz fundamentos relacionados con clientes digitales, información personal, negociación y estrategias comerciales aplicadas a entornos digitales contemporáneos. Su desarrollo permite comprender dinámicas relacionadas con segmentación, comportamiento del consumidor y construcción de experiencias digitales orientadas al fortalecimiento de ventas en social media. Asimismo, integra herramientas estratégicas relacionadas con matrices de mercadeo y procesos de interacción comercial utilizados dentro de plataformas digitales y ecosistemas empresariales altamente competitivos.
    
    p.mb-5 El componente también desarrolla conocimientos relacionados con comercio electrónico, redes sociales, campañas digitales y customer journey aplicados a procesos comerciales contemporáneos. A través de ejemplos empresariales, casos aplicados y herramientas estratégicas, el aprendiz fortalece capacidades relacionadas con posicionamiento, fidelización y análisis del comportamiento digital. Este enfoque contribuye al desarrollo de competencias orientadas a planificación, interacción y optimización de experiencias comerciales dentro de mercados digitales dinámicos y entornos relacionados con ventas digitales contemporáneas.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Diagrama jerárquico que representa la relación entre los principales conceptos del componente formativo Sensores, medición y adquisición. En la parte superior se ubica el proceso industrial, del cual se deriva la variable física. Esta conduce a la medición, relacionada con rango, exactitud y resolución. Posteriormente se presenta la captación, mediante sensores y transductores, que genera una señal análoga o digital. La información pasa a la adquisición, donde se realiza la conversión y el procesamiento, para finalmente llegar al sistema electrónico y al control, que comprende comparación, lógica y acción.")
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
