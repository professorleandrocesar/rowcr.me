<template>
  <div>
    
    <div class='profile'>
      <img src='/MyLogoBold.svg' alt=''>

      <div>
        <h1>Deep Acupuntura</h1>
        <h4>| Clinica de Medicina Chinesa | </h4>
      </div>
    
    </div>
<br>
    <div class='main-tree'>
      <div class='homeTwo'>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarAcu }'>
          <a>Acupuntura Sistêmica</a>
        </div>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>
          <a>Craniopuntura</a>
        </div>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>
          <a>Auriculoterapia</a>
        </div>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>
          <a>Ventosaterapia</a>
        </div>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>
          <a>Gua Sha</a>
        </div>
        <div class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>
          <a>Fórmulas Magistrias Chinesas</a>
        </div>
        <!--
              // <div @click='acupuntura()' class='homeTwoDot' :class='{ selectTitle: aplicarAcu }'>Acupuntura Sistêmica</div>
              // <div @click='craniopuntura()' class='homeTwoDot' :class='{ selectTitle: aplicarCran }'>Craniopuntura</div>
              // <div @click='auriculo()' class='homeTwoDot' :class='{ selectTitle: aplicarAur }'>Auriculoterapia</div>
              // <div @click='ventosa()' class='homeTwoDot' :class='{ selectTitle: aplicarVen }'>Ventosaterapia</div>
              -->
      </div>

    <div class='hr'></div>
      <br>
      <div class='main-l-trat'>
        <a href='https://black.deepacupuntura.com' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-solid fa-fire fire-color"></i> Black Descontos <i class="fa-solid fa-fire fire-color"></i>
        </a>
        <a href='https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1,%20fiquei%20interessado(a)%20nos%20seus%20servi%C3%A7os,%20me%20chamo%20' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-brands fa-square-whatsapp"></i> Whatsapp
        </a>
        <a href='https://agendamento.nextfit.com.br/74fb4384-512b-425d-9cc4-93d948554990' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-solid fa-calendar-day"></i> Agendamento
        </a>
        <a href='https://www.instagram.com/deepacupuntura' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-brands fa-square-instagram"></i> Instagram
        </a>
        <a href='https://deepacupuntura.com' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-solid fa-globe"></i> Site
        </a>
        <a href='https://deepacupuntura.com/blog' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-solid fa-blog"></i> Blog
        </a>
        <a href='https://www.google.com/maps/place/Deep+Acupuntura/@-22.894097,-43.120288,15z/data=!4m5!3m4!1s0x0:0xd5dcb4494da04cac!8m2!3d-22.8940969!4d-43.1202882?hl=pt-BR' class='dot-index' :class='{ selectTitleHover: aplicar }'> 
        <i class="fa-solid fa-map-location"></i> Localização
        </a>
    <div class='hr'></div>
      <p>&copy; 2022 - deepacupuntura.com</p>
      </div>
    </div>


    <br>
    <br>
    <br>
    <br>

  </div>
    
</template>
<script>
export default {
  scrollToTop: true,
  transition: {
    name: 'page', 
    mode: 'ease-in'
  },
  head: {
    title: 'Deep Acupuntura',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'description', content: 'Acupuntura' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#860d0d' },
      { name: 'theme-color', content: '#860d0d' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/MyLogoBoldFundo.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/MyLogoBoldFundo.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/MyLogoBoldFundo.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#860d0d' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#860d0d' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Philosopher&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/da2962ce7f.js' },
      { src: '/index.js' }
    ]
  },
  data() {
      return {
          aplicar : '',
          output: '',
          aplicarAcu: '',
          aplicarAur: '',
          aplicarVen: '',
          aplicarCran: '',
          aplicarAcu: '',
          aplicarAur: '',
          aplicarVen: '',
          aplicar: '',
          aplicarTwo: '',
          aplicarTree: '',
          aplicarFour: '',
          aplicarFive: '',
          aplicarSix: '',
          aplicarSeven: '',
          aplicarEight: '',
          aplicarNine: '',
          aplicarTen: '',
          aplicarEleven: '',
          aplicarTwelve: '',
          aplicarThirteen:'' ,
          aplicarFourteen: '',
          rAnsiedade:'Whatsapp',
          rDepressao:'Depressão',
          rEstresse:'Estresse',
          rCervicalgia:'Cervicalgia',
          rLombalgia: 'Lombalgia',
          rEnxaqueca: 'Enxaqueca',
          rCefaleia:'Cefaleia',
          rBaixaImunidade:'Baixa Imunidade',
          rBurnout:'Burnout',
          rLaringite:'Laringite',
          rInsonia:'Insônia',
          rZumbido:'Zumbido',
          rLabirintite:'Labirintite',
          rSinusite:'Sinusite',
      }
  },
  methods: {
    acupuntura() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = false,
          this.aplicar = true,
          this.aplicarTwo = true,
          this.aplicarTree = true,
          this.aplicarFour = true,
          this.aplicarFive = true,
          this.aplicarSix = true,
          this.aplicarSeven = true,
          this.aplicarEight = true,
          this.aplicarNine = true,
          this.aplicarTen = true,
          this.aplicarEleven = true,
          this.aplicarTwelve = true,
          this.aplicarThirteen = true,
          this.aplicarFourteen = true,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
    },
    craniopuntura() {
          this.aplicarAcu = false,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = true,
          this.aplicarTwo = true,
          this.aplicarTree = true,
          this.aplicarFour = true,
          this.aplicarFive = true,
          this.aplicarSix = true,
          this.aplicarSeven = true,
          this.aplicarCran = true,
          this.aplicarEight = true,
          this.aplicarNine = true,
          this.aplicarTen = true,
          this.aplicarEleven = true,
          this.aplicarCran = true,
          this.aplicarTwelve = true,
          this.aplicarThirteen = true,
          this.aplicarFourteen = true,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
    },
    auriculo() {
          this.aplicarAur = true,
          this.aplicarAcu = false,
          this.aplicarVen = false,
          this.aplicar = true,
          this.aplicarCran = false,
          this.aplicarTwo = true,
          this.aplicarTree = true,
          this.aplicarFour = true,
          this.aplicarFive = true,
          this.aplicarSix = true,
          this.aplicarSeven = true,
          this.aplicarEight = true,
          this.aplicarNine = true,
          this.aplicarTen = true,
          this.aplicarEleven = true,
          this.aplicarTwelve = true,
          this.aplicarThirteen = true,
          this.aplicarFourteen = true,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
    },
    ventosa() {
          this.aplicarVen = true,
          this.aplicarCran = true,
          this.aplicarAcu = false,
          this.aplicarAur = false,
          this.aplicar = false,
          this.aplicarCran = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = true,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
    },
      ansiedade() {
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarCran = false,
          this.aplicarVen = false,
          this.aplicar = true,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rDepressao = 'depressão',
          this.rAnsiedade = `<span><h4>Ansiedade</h4></span>
          <br>
          <span class='white'>é um sentimento de inquietação e preocupação, geralmente generalizado e sem foco, 
          como uma reação exagerada a uma situação que é apenas subjetivamente vista como ameaçadora.</span>`,
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      depressao(){
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = true,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = `<span><h4>Depressão</h4></span>
          <br>
          <span class='white'>é um transtorno mental caracterizado por tristeza profunda persistente 
          e aversão a atividades. Pode afetar os pensamentos, comportamentos, sentimentos e o bem-estar de uma pessoa.</span>`,
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      estresse() {
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarVen = false,
          this.aplicarTwo = false,
          this.aplicarCran = false,
          this.aplicar = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = true,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse=`<span><h4>Estresse</h4></span>
          <br>
          <span class='white'>É causado pela ansiedade e pela depressão devido à mudança brusca no 
          estilo de vida e a exposição a um determinado ambiente, que leva a pessoa a sentir um determinado tipo de angústia. </span>`,
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      cervicalgia(){
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarVen = true,
          this.aplicar = false,
          this.aplicarCran = false,
          this.aplicarTwo = false,
          this.aplicarTree = true,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia=`<span><h4>Cervicalgia</h4></span>
          <br>
          <span class='white'>Dor no pescoço e ombro que varia em intensidade, podendo ser incômoda ou 
          como um choque elétrico desde o pescoço até o braço.</span>`,
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      lombalgia(){
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarVen = true,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = true,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= `<span><h4>Lombalgia</h4></span>
          <br>
          <span class='white'>Uma condição dolorosa comum que afeta a parte inferior da coluna.
A dor lombar é causada por uma lesão em um músculo (tensão) ou ligamento (entorse). As causas comuns incluem 
levantamento impróprio, má postura, falta de exercícios físicos regulares, fratura, disco rompido ou artrite.</span>`,
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      enxaqueca() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = true,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= `<span><h4>Enxaqueca</h4></span>
          <br>
          <span class='white'>Dor de cabeça de intensidade variável, muitas vezes acompanhada de náuseas e sensibilidade à luz e ao som.
Às vezes, as enxaquecas são precedidas por sintomas de alerta. Os gatilhos incluem alterações hormonais, certos alimentos e bebidas, estresse 
e exercícios físicos.</span>`,
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      cefaleia () {
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarVen = false,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = true,
          this.aplicarCran = true,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia=`<span><h4>Cefaléia</h4></span>
          <br>
          <span class='white'>Uma sensação dolorosa em qualquer parte da cabeça, 
          desde aguda até incômoda, podendo ocorrer junto com outros sintomas.</span>`,
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      baixaImunidade () {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = false,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = true,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade=`<span><h4>Baixa Imunidade</h4></span>
          <br>
          <span class='white'>pode ser percebida quando o organismo dá alguns sinais, indicando que as defesas do organismo estão baixas e que o sistema imunológico não está sendo capaz de combater 
          os agentes infecciosos, como vírus e bactérias, o que pode fazer com que a pessoa fique doente com mais frequência.</span>`,
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      burnOut() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = true,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout=`<span><h4>Burnout</h4></span>
          <br>
          <span class='white'>A síndrome de burnout é um distúrbio psíquico causado pela exaustão extrema, sempre relacionada ao trabalho de um indivíduo. Essa condição 
          também é chamada de “síndrome do esgotamento profissional” e afeta quase todas as facetas da vida de um indivíduo.</span>`,
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      laringite() {
          this.aplicarAcu = true,
          this.aplicarAur = true,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = true,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite=`<span><h4>Laringite</h4></span>
          <br>
          <span class='white'>é a inflamação da laringe (região das vias aéreas onde ficam localizadas as cordas vocais), que conecta a faringe à traqueia e faz parte do sistema respiratório. A inflamação 
          dessa região pode ser causada por vírus (mais prevalente), bactérias, inalação de agentes alérgicos ou esforço excessivo da voz.</span>`,
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      insonia() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = true,
          this.aplicarCran = true,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia=`<span><h4>Insônia</h4></span>
          <br>
          <span class='white'>é caracterizada pela dificuldade de dormir ou conseguir manter um sono contínuo sem ser interrompido durante a noite. Cerca de 30% a 50% dos brasileiros sofrem com a insônia, 
          que pode se manifestar por diversas razões, como estresse, ansiedade, depressão, dor crônica e uso de certos medicamentos.</span>`,
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      zumbido() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = true,
          this.aplicarThirteen = false,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido=`<span><h4>Zumbido</h4></span>
          <br>
          <span class='white'>Também chamado de Sibilo ou Tinido, pode ser definido como uma ilusão auditiva, ou seja, uma sensação sonora não relacionada com uma fonte externa de estimulação.</span>`,
          this.rLabirintite='Labirintite',
          this.rSinusite='Sinusite'
      },
      labirintite() {
          this.aplicarAcu = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicarCran = true,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = true,
          this.aplicarFourteen = false,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite=`<span><h4>Labirintite</h4></span>
          <br>
          <span class='white'>Labirintite é o nome popular que se dá a todos os transtornos do labirinto, uma estrutura interna do ouvido composta pela cóclea (imprescindível para a 
          nossa audição), pelo vestíbulo e pelos canais semicirculares (que têm papel na manutenção do nosso equilíbrio).</span>`,
          this.rSinusite='Sinusite'
      },
      sinusite() {
          this.aplicarAcu = true,
          this.aplicarCran = true,
          this.aplicarAur = false,
          this.aplicarVen = false,
          this.aplicar = false,
          this.aplicarTwo = false,
          this.aplicarTree = false,
          this.aplicarFour = false,
          this.aplicarFive = false,
          this.aplicarSix = false,
          this.aplicarSeven = false,
          this.aplicarEight = false,
          this.aplicarNine = false,
          this.aplicarTen = false,
          this.aplicarEleven = false,
          this.aplicarTwelve = false,
          this.aplicarThirteen = false,
          this.aplicarFourteen = true,
          this.rAnsiedade = 'ansiedade',
          this.rDepressao = 'Depressão',
          this.rEstresse='Estresse',
          this.rCervicalgia='Cervicalgia',
          this.rLombalgia= 'Lombalgia',
          this.rEnxaqueca= 'Enxaqueca',
          this.rCefaleia='Cefaleia',
          this.rBaixaImunidade='Baixa Imunidade',
          this.rBurnout='Burnout',
          this.rLaringite='Laringite',
          this.rInsonia='Insônia',
          this.rZumbido='Zumbido',
          this.rLabirintite='Labirintite',
          this.rSinusite=`<span><h4>Sinusite</h4></span>
          <br>
          <span class='white'>é a inflamação das mucosas dos seios da face, região do crânio formada por cavidades ósseas ao redor do nariz, maçãs do rosto e olhos. Os 
          seios da face dão ressonância à voz, aquecem o ar inspirado e diminuem o peso do crânio, o que facilita sua sustentação.</span>`
      }
  } 
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}

i {
  color: #fff;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  padding-left: 10px;
  margin-left: 15px;
  margin-right: 60px;
  border-left: solid 5px #e23a28;
  color: #ddd;
}

.divider {
  height: 15px;
  background-color: #e23a2840;
}

.divider-ultimate {
  height: 30px;
  background-color: #fff;
}

.profile {
  background: #860d0d;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
}

.profile a {
  text-decoration: none;
  color: #fff;
  font-size: .9em;
}

.profile img {
  height: 70px;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 13px 0 -5px -10px;
  font-size: 1.5em;
  color: #fff;
 text-shadow: -2px 2px 5px #ffffff70,
  -2px -2px 5px #ffffff70,
  2px 2px 5px #ffffff70,
  2px -2px 5px #ffffff70;
}

.profile h1:hover {
  color: #fff;
  cursor:pointer;
 text-shadow: -2px 2px 5px #e23a28,
  -2px -2px 5px #e23a28,
  2px 2px 5px #e23a28,
  2px -2px 5px #e23a28;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #e23a28;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  box-shadow: 0px 10px 15px #ffffff10;
  background: #860d0d;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
  padding-right: 3px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(2) i {
  padding-right: 4px;
  margin: 0 0 0 4px;
}

.main-one a:nth-child(3) i {
  margin: 0 0 0 3px;
  padding-right: 2px;
}

.main-one a:nth-child(4) i {
  margin: 0 0 0 5px;
  padding-right: 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #ddd;
}

.main-two {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15px 0 18px 0;
  color: black;
  box-shadow: 0 5px 20px #ffffff90;
  background: #860d0d;
  color: #fff;
}

.main-two a {
  margin: 20px 0 0 0px;
  color: #fff;
  font-weight: 600;
}

.main-two i {
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 0 0;
  color: #fff;
  background: #860d0d;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #fff;
}

.main-tree h5 {
  margin-left: 10px;
}

.hCincoOne {
  margin: 10px 0px 22px 10px;
}

.hCincoTwo {
  margin: -10px 0px 22px 10px;

}

#main-white {
  position: static;
  color: #fff;
  background-color: #d8d8d840;
  width: 100%;
  margin: 30px auto 0px;
  text-align: center;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
  overflow-x: auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5 {
  margin: 0 auto 20px auto;
}

.main-four-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card a {
  border: solid .1px #dddddd54;
  padding: 2px 6px;
  margin: 10px 4px;
  border-radius: 0% 10% 10% 10%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 15px;
  background: #92929240;
  padding: 0px 10px 0px 10px;
  border-radius: 12% 12% 12% 0%;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .9em;
}

.body-map {
  width: 375px;
  height: 270px;
  margin: 10px auto 30px auto;
}

.main-five {
  background: #860d0d;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
  box-shadow: 0px 10px 10px#bbb;
  overflow-x: auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5 {
  margin-left: 10px;
}

.main-five-card {
  height: 370px;
  margin: 0 10px;
  border: solid .5px #e23a2890;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.main-five-card a {
  border: solid .1px #dddddd54;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .9em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

a.nuxt-link-exact-active {
  background-color: #e23a2890;
  color: #fff;
  border-radius: 0% 10% 10% 10%;
}

.main-l-trat {
  width: 95%;
  text-align: left;
  margin: -10px auto 20px auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
}

.dot-index {
cursor: pointer;
transition: all .3s ease-in;
  background-color: #d8d8d840;
  margin: 10px 16px;
  padding: 10px;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5% 4% 15%;
  border: solid .5px;
}

.dot-index:Hover {
  color: #fff;
  border: solid .5px #e23a28;
  text-shadow: -1px 1px 10px #fff;
}
.dot-index:nth-child(1):hover {
  color: rgb(71, 22, 22);
  border: solid .5px #e23a28;
  text-shadow: -1px 1px 10px #fff;
  text-align: center;
  color: black;
  text-shadow: -2px 2px 5px #e23a28, -2px -2px 5px #e23a28, 2px 2px 5px #e23a28, 2px -2px 5px #e23a28;
  line-height: 1;
}
.dot-index:nth-child(1) {
  background-color: black ;
  color: rgb(71, 22, 22);
  border: solid .5px #498f49;
  text-shadow: -1px 1px 10px #fff;
  text-align: center;
    color: #0f0;
    text-shadow: -2px 2px 5px #498f49, -2px -2px 5px #498f49, 2px 2px 5px #498f49, 2px -2px 5px #498f49;
    line-height: 1;
}
.dot-index:nth-child(1) i {
  background-color: black ;
  color: rgb(71, 22, 22);
  text-shadow: -1px 1px 10px #fff;
  text-align: center;
    color: #e23a28;
    text-shadow: -2px 2px 5px #000, -2px -2px 5px #000, 2px 2px 5px #000, 2px -2px 5px #000;
    line-height: 1;
}

.dot-index {
  margin: 5px 10px;
  font-size: .8em;
  width:160px;
  text-align: left;
  padding-left: 20px;
  padding-right: 15px;
}

.dotHover {
  background-color: #d8d8d840;
  color: #ddd;
  border: solid .5px #e23a28;
}

.dot:hover {
  background-color: #d8d8d840;
}

.dot:active {
  color: dbd1d1;
  background-color: #d8d8d8;
}

.selectTitle {
  text-shadow: -2px 2px 5px #e23a28,
  -2px -2px 5px #e23a28,
  2px 2px 5px #e23a28,
  2px -2px 5px #e23a28;
  color: #fff;  
}

.selectTitleHover {
  color: #fff;
  border: solid .5px #e23a28;
  opacity: 1s;
}

.selectTitleHover span {
  font-size: 1.2em;
}

.white {
    color: #ffffff;
    margin: 0;
}

.homeTwo {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content:space-evenly;
  align-self:center;
  font-size: .9em;
  width: 95%;
  margin:auto;
  font-weight: bold;
  color: #dbd1d1;
}

.homeTwo div {
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;

}

.homeTwo a {
font-size: 1em;
margin: auto;
font-weight: bold;
color: #dbd1d1;
}

.homeTwoDot:hover {
  text-shadow: -1px 1px 10px #fff;
  cursor: pointer;
}

.hr {
  width: 95%;
  border: solid .3px #e23a2840;
  margin: 30px auto 0px auto;
}


@media only screen and (max-width: 369px) {}
</style>