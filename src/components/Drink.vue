<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {zernoffDrinks} from "./data/drinksData.js";

const drinkId = computed(() => parseInt(useRoute().params.id))
const drink = computed(() => zernoffDrinks.find(drink => drink.id === drinkId.value))
</script>

<template>
  <div class="container">
    <div class="drink">
      <figure><img :src="drink.img" :alt="drink.title"/></figure>
      <div class="drink_desc">
        <h1>{{ drink.title }}</h1>
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
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.drink {
  padding-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  h1 {
    letter-spacing: 1px;
  }

  figure {
    justify-self: center;
    width: 300px;
    height: 500px;
    padding: 48px 64px;
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
  }

  figure img {
    width: 300px;
    height: 500px;
  }

  .drink_desc {
    display: flex;
    flex-direction: column;
    gap: 12px;

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
  @media screen and (max-width: 800px) {
   .drink{
     padding-top: 48px;
     grid-template-columns: 1fr;
     gap: 24px;
     figure {
       justify-self: center;
       width: 200px;
       height: 300px;
       display: flex;
       flex-direction: column;
       border: 1px solid #999;
     }

     figure img {
       object-fit: contain;
       width: 200px;
       height: 300px;
     }
   }
  }

</style>