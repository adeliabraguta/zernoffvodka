<script setup>
import {topDrinks} from "../data/drinksData.js";
import {ref} from "vue";

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
          <div>
            <figure><img v-bind:src="drink.img" :alt="drink.title"/></figure>
          </div>
          <span class="small_desc">{{ drink.type }}</span>
          <div><p>{{ drink.title }}</p></div>
        </div>
      </div>
    </div>
    <p class="link">
      <RouterLink to="/zernoffvodka/catalog">Vezi tot ></RouterLink>
    </p>
  </section>
</template>

<style scoped>
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

.drinks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: 200ms;
  gap: 32px;


  .drink {
    height: 460px;
    cursor: pointer;
    padding: 0 48px 32px 48px;
    display: grid;
    border: 1px solid #999;
    grid-template-rows: min-content;
    transition: all 0.3s ease;

    figure {
      height: 400px;
      width: 200px;
      padding-bottom: 12px;
    }

    figure img {
      object-fit: contain;
      width: 200px;
      height: 400px;
    }

    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  .drink_details {
    visibility: hidden;
    display: grid;
    grid-auto-rows: min-content;
    padding-top: 32px;
    gap: 12px;
    opacity: 0;
    height: 0;
    width: 0;
    p {
      line-height: 28px;
    }
  }

  .brand {
    padding-top: 12px;
    border-top: 1px solid #999;
    width: min-content;
    height: min-content;
  }
}

.drinks:has(.drink.show:nth-of-type(3n+1)) {
  grid-template-columns: 1fr 0.4fr 0.4fr;


  .drink.show:nth-of-type(3n+1) {
    grid-template-columns: 0.5fr 1fr;
    grid-row: 1 / span 2;

    .drink_details {
      visibility: visible;
      width: initial;
      height: initial;
      opacity: 1;
      transition: 200ms;
      transition-delay: 300ms;
    }
  }
}

.drinks:has(.drink.show:nth-of-type(3n+2)) {
  grid-template-columns: 0.5fr 1fr 0.5fr;

  .drink.show:nth-of-type(3n+2) {
    grid-template-columns: 0.5fr 1fr;
    /*grid-column: 2 / span 3;*/

    .drink_details {
      visibility: visible;
      width: initial;
      height: initial;
      opacity: 1;
      transition: 200ms;
      transition-delay: 300ms;
    }
  }
}

.drinks:has(.drink.show:nth-of-type(3n+3)) {
  grid-template-columns: 0.5fr 0.5fr 1fr;

  .drink.show:nth-of-type(3n+3) {
    grid-template-columns: 0.5fr 1fr;
    /*grid-column: 2 / span 3;*/

    .drink_details {
      visibility: visible;
      width: initial;
      height: initial;
      opacity: 1;
      transition: 200ms;
      transition-delay: 300ms;
    }
  }
}

.drinks-mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .drinks{
    display: none;
  }
  .drinks-mobile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;


    .drink {
      cursor: pointer;
      padding: 0 48px 32px 48px;
      display: grid;
      border: 1px solid #999;
      grid-template-rows: min-content;
      transition: all 0.3s ease;

      figure {
        padding: 12px;
        height: 300px;
        width: 200px;
      }

      figure img {
        object-fit: contain;
        width: 200px;
        height: 300px;
      }

      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
  }
}
</style>