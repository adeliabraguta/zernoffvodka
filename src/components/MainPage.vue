<script setup>
import {computed, onMounted, ref} from "vue";
import {brands, topDrinks} from "./data/drinksData.js";
import {markets} from "./data/data.js";

const brand = ref(null);
const market = ref(null)

const next = (el) => {
  if (el.scrollLeft >= (el.scrollWidth - el.clientWidth)) {
    el.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  } else {
    el.scrollBy({
      left: 350,
      behavior: 'smooth'
    })
  }
}

const back = (el) => {
  if (el.scrollLeft <= 0) {
    el.scrollTo({
      left: el.scrollWidth - el.clientWidth,
      behavior: 'smooth'
    })
  } else {
    el.scrollBy({
      left: -350,
      behavior: 'smooth'
    })
  }
}

const isShow = ref({})
const toggle = (id) => {
  const currentState = isShow.value[id]
  Object.keys(isShow.value).forEach((key) => {
    isShow.value[key] = false
  });
  isShow.value[id] = !currentState
}

</script>

<template>
  <div>
    <section class="main_section">
      <h2>Art of the drink</h2>
    </section>
    <section class="about_section">
      <div>
        <span class="small_desc">Despre Noi</span>
        <h1 class="big_desc">ZERNOFF VODKA - 100% brand autohton.</h1>
        <p><b>ZERNOFF VODKA</b> este un complex industrial de producție cu ciclu complet, incluzând prelucrarea
          cerealelor
          selectate, producerea alcoolului de înaltă calitate și îmbutelierea produselor finite.
        </p>
        <p> Calitatea înaltă a vodcăi este rezultatul utilizării echipamentelor moderne și tehnologiilor inovatoare. Una
          dintre aceste inovații a fost crearea unei rețete unice din 5 elemente organice - ovăz, orz, orez, grâu și
          secară, care combină efectele tonifierii și întăririi imunității.
        </p>
        <p> Compania acordă o atenție deosebită calității produselor sale. În compoziția vodcăi <b>ZERNOFF</b> sunt
          incluse
          numai
          spirturi de producere proprie. Absolut toate produsele sunt făcute cu respectarea tuturor standardelor de stat
          și internaționale, inclusiv ISO9001 și sunt supuse celui mai strict control al calității, în toate etapele de
          producție. În complexul industrial "<b>ZERNOFF</b>" se află laboratorul de testare acreditat.
        </p>
        <p>
          <RouterLink to="/zernoffvodka/companie">Vezi mai mult ></RouterLink>
        </p>
      </div>
      <img src="../assets/cocktails.jpg" alt="cocktails"/>
    </section>
    <div class="container">
      <section class="top_drinks_section">
        <span class="small_desc">Băuturi</span>
        <h2 class="big_desc">Cele mai îndrăgite băuturi</h2>
        <div class="drinks">
          <div class="drink" v-for="drink of topDrinks" :key="drink.id" @click="()=> toggle(drink.id)"
               :class="{[`show`]: isShow[drink.id]}">
            <div>
              <div>
                <figure><img v-bind:src="drink.img" :alt="drink.title"/></figure>
              </div>
              <span class="small_desc">{{ drink.type }}</span>
              <p>{{ drink.title }}</p>
            </div>
            <div class="drink_details">
              <span class="small_desc">Volum: {{ drink.volume }}</span>
              <p>{{ drink.desc }}</p>
              <b>Specificatii</b>
              <div>
                <p><span class="small_desc">Alcool -</span>{{ drink.specifications[0].alco }}</p>
                <p><span class="small_desc">Cantitate in cutie -</span>{{ drink.specifications[0].cant }}</p>
              </div>
              <img class="brand" :src="drink.brand" :alt="drink.title"/>
            </div>
          </div>
        </div>
        <div class="drinks-mobile">
          <div class="drink" v-for="drink of topDrinks" :key="drink.id">
            <div>
              <RouterLink :to="{name:'drink', params:{id: drink.id}}"
                          :key="drink.id">
                <figure><img v-bind:src="drink.img" :alt="drink.title"/></figure>
              </RouterLink>
              <span class="small_desc">{{ drink.type }}</span>
              <RouterLink :to="{name:'drink', params:{id: drink.id}}"
                          :key="drink.id"><p>{{ drink.title }}</p></RouterLink>
            </div>
          </div>
        </div>
        <p class="link">
          <RouterLink to="/zernoffvodka/catalog">Vezi tot ></RouterLink>
        </p>
      </section>
      <section class="history_section">
        <h2 class="big_desc">ISTORIA</h2>
        <p>In perioada 95-96 un grup de specialisti si-au unit fortele pentru a forma ulterior una din cele mai mari
          fabrici de producere si imbutiliere a votcii.</p>
        <p>Ideea a venit pentru a aduce consumatorului un produs autohton numai din grau - Vodka. Sectorul de productie
          a
          inceput cu o mica unitate de imbuteliere, care in 2001 ajuns sa produca cel mai popular brand de vodka-
          GOSPODAR.</p>
        <p>Cresterea numarului vanzarilor a determinat necesitatea de a construi o noua fabrica cu o capacitate mai mare
          de productie. Astazi uzina produce in jur de 100 t pe zi.</p>
        <div>
          <figure><img src="../assets/history-gallery-2.jpg" alt="fabrica zernoff"/></figure>
          <figure><img class="img_2" src="../assets/history-gallery-1.jpg" alt="fabrica zernoff"/></figure>
          <figure><img src="../assets/history-gallery-3.jpg" alt="fabrica zernoff"/></figure>
        </div>
      </section>
      <section class="brands_section">
        <div class="brands_title">
          <span class="small_desc">Branduri</span>
          <h2 class="big_desc">Brandurile care producem</h2>
          <p>Cele mai bune ingrediente, procesul de fabricație de ultimă generație și controlul special al calității
            vizează
            atingerea gustului de neegalat al mărcilor noastre.</p>
        </div>
        <div class="brands_gallery" id="brands" ref="brand">
          <img src="../assets/brands/zernoff-logo.png" alt="brand-1"/>
          <img src="../assets/brands/mendeleev-logo.jpg" alt="brand-2"/>
          <img src="../assets/brands/petrovskaia-logo.jpg" alt="brand-3"/>
          <img src="../assets/brands/spicul-logo.jpg" alt="brand-4"/>
          <img src="../assets/brands/psenicinaia-logo.jpg" alt="brand-5"/>
          <img src="../assets/brands/gospodar-logo.jpg" alt="brand-6"/>
          <img src="../assets/brands/secarica-logo.jpg" alt="brand-7"/>
          <img src="../assets/brands/persona-logo.jpg" alt="brand-8"/>
          <img src="../assets/brands/russkaia-logo.jpg" alt="brand-9"/>
          <img src="../assets/brands/nucul-logo.jpg" alt="brand-10"/>
          <img src="../assets/brands/jackson-logo.jpg" alt="brand-11"/>
          <img src="../assets/brands/rihards-logo.jpg" alt="brand-12"/>
          <img src="../assets/brands/mambo-logo.jpg" alt="brand-13"/>
          <img src="../assets/brands/parrot-logo.png" alt="brand-14"/>
          <img src="../assets/brands/campoh-logo.png" alt="brand-15"/>
        </div>
        <button class="back" @click="back(brand)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="next" @click="next(brand)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </section>
      <section class="brands_section">
        <div class="brands_title">
          <span class="small_desc">Markets</span>
          <h2 class="big_desc">Unde cumparam</h2>
        </div>
        <div class="brands_gallery" id="brands" ref="market">
          <img class="market" v-for="market in markets" :src="market.logo" :alt="market.title"/>
        </div>
        <button class="back" @click="back(market)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="next" @click=" next(market)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </section>
    </div>
  </div>
</template>

<style scoped>
.main_section {
  height: 100vh;
  background-image: url("../assets/cover.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;

  h2 {
    font-size: 96px;
    color: #fff;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    padding: 48px;
    height: 70vh;
  }
}

.about_section {
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    padding: 24px 96px;

    p {
      padding-top: 24px;

      &:first-of-type {
        padding-top: 0;
      }
    }
  }

  a {
    text-align: end;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr;
    div {
      padding: 48px;
    }
  }
}

.top_drinks_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    padding-bottom: 32px;
  }

  .link {
    padding-top: 24px;
  }

  @media screen and (max-width: 800px) {
    align-items: start;
    .link {
      align-self: center;
    }
  }
}

.history_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }

  p {
    width: 60vw;
    padding-top: 24px;
    text-align: center;
  }

  div {
    padding-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    figure {
      overflow: hidden;
      cursor: pointer;

      &:nth-of-type(1n) {
        width: 300px;
        height: 400px;
      }

      &:nth-of-type(2) {
        width: 500px;
        height: 400px;
      }
    }

    figure:hover img {
      transform: scale(1.1);
    }

    img {
      object-fit: cover;
      transition: .3s ease-in-out;
      width: 300px;
      height: 400px;
    }

    .img_2 {
      width: 500px;
      height: 400px;
    }
  }

  @media screen and (max-width: 800px) {
    div {
      figure {

        &:nth-of-type(2) {
          width: 300px;
          height: 400px;
        }
      }

      .img_2 {
        width: 300px;
        height: 400px;
      }
    }
  }
}

.brands_section {
  position: relative;

  .brands_title {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      width: 60vw;
    }
  }

  .brands_gallery {
    padding-top: 48px;
    display: flex;
    gap: 70px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

  }

  .back, .next {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    .feather {
      stroke: #444;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
    }

    &:hover {
      .feather {
        stroke: #222;
      }
    }
  }

  .next {
    bottom: 40px;
    right: -30px;
  }

  .back {
    bottom: 40px;
    left: -45px;
  }

  .brands_gallery::-webkit-scrollbar {
    display: none;
  }

  .market {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }

  @media screen and (max-width: 800px) {

    .brands_title {
      align-items: start;

      p {
        text-align: start;
        width: initial;
      }
    }

    .brands_gallery {
      display: none;
    }
  }


}

</style>