<script setup>

import {markets} from "../data/data.js";
import BackButton from "./backButton.vue";
import NextButton from "./nextButton.vue";
import {back, next} from "./navFunctions.js";
import {ref} from "vue";

const market = ref(null);

</script>

<template>
  <section class="brands_section">
    <div class="brands_title">
      <span class="small_desc">Markets</span>
      <h2 class="big_desc">Unde cumparam</h2>
    </div>
    <div class="brands_gallery" id="brands" ref="market">
      <img class="market" v-for="market in markets" :src="market.logo" :alt="market.title"/>
    </div>
    <BackButton @click="back(market)"/>
    <NextButton @click="next(market)"/>
  </section>
</template>

<style scoped>
</style>