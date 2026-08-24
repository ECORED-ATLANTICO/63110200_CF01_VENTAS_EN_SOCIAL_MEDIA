<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estrategia comercial digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar conocimientos relacionados con clientes digitales, comercio electrónico, campañas y <em>customer journey</em> aplicados a ventas en <em>social media</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de las redes sociales dentro de estrategias comerciales digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limitar totalmente la interacción entre consumidores y organizaciones comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer comunicación, posicionamiento y relación comercial con consumidores digitales contemporáneos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente plataformas tecnológicas relacionadas con comercio electrónico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos relacionados con segmentación y campañas comerciales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué representa el <em>buyer</em> persona dentro de estrategias comerciales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estrategia relacionada únicamente con campañas publicitarias impresas tradicionales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modelo utilizado exclusivamente para controlar procesos financieros empresariales digitales contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sistema utilizado para reemplazar procesos relacionados con atención comercial digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Representación del cliente ideal basada en comportamientos, intereses y necesidades digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los principales beneficios del comercio electrónico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir procesos relacionados con segmentación de consumidores digitales contemporáneos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir completamente interacción entre consumidores y plataformas comerciales digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar procesos relacionados con campañas y posicionamiento comercial digital estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ampliar alcance comercial mediante plataformas digitales orientadas a ventas <em>online</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite identificar la escucha social dentro de plataformas digitales y redes sociales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comentarios, tendencias y percepciones relacionadas con consumidores digitales contemporáneos actuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Restricción completa de contenidos relacionados con posicionamiento comercial empresarial digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Procesos exclusivamente financieros relacionados con ventas empresariales digitales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación total de campañas desarrolladas mediante redes sociales comerciales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito principal de una campaña digital orientada hacia posicionamiento comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir totalmente herramientas relacionadas con comercio electrónico y ventas <em>online</em> empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringir procesos relacionados con comunicación comercial dentro de redes sociales digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer reconocimiento y visibilidad de marca mediante contenidos digitales estratégicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar completamente interacción entre consumidores y organizaciones empresariales digitales contemporáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué característica diferencia principalmente las redes sociales audiovisuales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminan procesos relacionados con campañas comerciales dentro de plataformas empresariales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Priorizan contenidos visuales relacionados con interacción rápida y posicionamiento digital estratégico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituyen completamente herramientas relacionadas con atención comercial y ventas digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringen interacción entre consumidores digitales y organizaciones comerciales contemporáneas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la función estratégica de segmentar consumidores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar consumidores según intereses, necesidades y comportamientos digitales específicos contemporáneos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Limitar completamente procesos relacionados con campañas comerciales empresariales digitales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir herramientas utilizadas para interacción comercial mediante redes sociales digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos relacionados con contenidos comerciales y posicionamiento digital empresarial contemporáneo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué permite fortalecer el análisis del <em>customer journey</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir procesos relacionados con segmentación y atención comercial empresarial digital estratégica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringir experiencias digitales relacionadas con consumidores y redes sociales comerciales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Optimizar experiencias relacionadas con interacción y conversión del consumidor digital contemporáneo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar completamente plataformas relacionadas con campañas y posicionamiento empresarial digital contemporáneo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento resulta fundamental dentro de una matriz estratégica de mercadeo digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Restricción total de plataformas relacionadas con interacción y ventas digitales empresariales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustitución completa de procesos relacionados con análisis del consumidor digital contemporáneo actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminación de objetivos relacionados con campañas y posicionamiento comercial estratégico empresarial digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Objetivos comerciales orientados a interacción, posicionamiento y fortalecimiento de ventas digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la principal finalidad de proteger información personal dentro de entornos digitales comerciales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer privacidad, confianza y tratamiento responsable de datos relacionados con consumidores digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir plataformas tecnológicas utilizadas para interacción comercial empresarial contemporánea actual digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar procesos relacionados con segmentación y campañas digitales empresariales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringir completamente estrategias relacionadas con comercio electrónico y ventas digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué ventaja ofrece la negociación digital dentro de procesos comerciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente campañas desarrolladas mediante plataformas digitales comerciales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringir procesos relacionados con fidelización y posicionamiento empresarial digital estratégico actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalecer acuerdos comerciales mediante comunicación estratégica y atención personalizada digital contemporánea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos relacionados con interacción entre consumidores y organizaciones digitales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es uno de los principales usos estratégicos de las campañas digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir herramientas relacionadas con comercio electrónico y posicionamiento empresarial digital contemporáneo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringir completamente procesos relacionados con interacción comercial y ventas digitales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar procesos relacionados con segmentación y análisis comercial del consumidor digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer posicionamiento, interacción y conversión mediante contenidos digitales estratégicos empresariales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de comercio electrónico relaciona directamente empresas con consumidores finales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modelo <em>C2B</em> utilizado exclusivamente para procesos financieros empresariales digitales contemporáneos actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modelo <em>B2B</em> enfocado únicamente hacia negociaciones organizacionales comerciales estratégicas contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modelo <em>B2C</em> orientado a ventas digitales entre empresas y consumidores finales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Modelo <em>C2C</em> relacionado exclusivamente con interacción entre consumidores digitales empresariales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué permite fortalecer la fidelización dentro de estrategias comerciales desarrolladas mediante redes sociales digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustitución total de campañas relacionadas con consumidores digitales empresariales contemporáneos actuales estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Construcción de relaciones sostenibles mediante experiencias digitales positivas y personalizadas contemporáneas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Restricción completa de contenidos relacionados con estrategias comerciales y ventas digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación completa de procesos relacionados con interacción y posicionamiento comercial empresarial digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué herramienta facilita monitorear comentarios y tendencias relacionadas con consumidores digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustitución de herramientas relacionadas con atención comercial dentro de redes sociales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación total de estrategias relacionadas con segmentación comercial y consumidores digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Escucha social aplicada mediante análisis estratégico de interacciones digitales comerciales contemporáneas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Restricción completa de campañas relacionadas con posicionamiento y ventas digitales empresariales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad principal de utilizar métricas dentro de campañas comerciales digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar resultados y optimizar estrategias relacionadas con campañas digitales comerciales contemporáneas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Restringir procesos relacionados con consumidores digitales y estrategias de fidelización empresarial actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir herramientas utilizadas para interacción y comunicación empresarial mediante plataformas digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar procesos relacionados con análisis y posicionamiento comercial estratégico empresarial digital actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué beneficio ofrece personalizar contenidos dentro de estrategias comerciales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente herramientas relacionadas con posicionamiento empresarial y ventas digitales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer interacción y experiencias relacionadas con necesidades específicas del consumidor digital contemporáneo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Restringir experiencias comerciales relacionadas con consumidores y plataformas digitales empresariales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir procesos relacionados con segmentación y campañas comerciales digitales empresariales estratégicas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué proceso permite identificar oportunidades comerciales mediante análisis estratégico del consumidor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustitución total de herramientas relacionadas con atención comercial y posicionamiento empresarial actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación de contenidos relacionados con interacción y experiencias comerciales digitales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Segmentación comercial basada en intereses y comportamientos digitales específicos contemporáneos actuales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Restricción de campañas desarrolladas mediante redes sociales empresariales digitales contemporáneas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué característica poseen principalmente las campañas digitales orientadas hacia reconocimiento de marca empresarial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituyen herramientas utilizadas para campañas comerciales y ventas digitales empresariales actuales contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restringen contenidos relacionados con posicionamiento y experiencia del consumidor digital actual contemporáneo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminan procesos relacionados con interacción entre consumidores y plataformas comerciales digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Buscan fortalecer visibilidad y recordación comercial mediante contenidos digitales estratégicos empresariales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué permite optimizar el <em>customer journey</em> dentro de experiencias comerciales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejorar experiencias del consumidor durante diferentes etapas de interacción comercial digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar herramientas relacionadas con segmentación y análisis comercial estratégico empresarial digital actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir campañas desarrolladas mediante plataformas digitales orientadas a consumidores empresariales actuales contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringir procesos relacionados con interacción y posicionamiento comercial empresarial estratégico digital contemporáneo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
