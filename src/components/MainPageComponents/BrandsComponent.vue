<script setup>

import {ref} from "vue";
import {brands} from "../data/drinksData.js";
import BackButton from "./backButton.vue";
import NextButton from "./nextButton.vue";
import {back, next} from "./navFunctions.js";

const brand = ref(null);
</script>

<template>
  <section class="brands_section">
    <div class="brands_title">
      <span class="small_desc">Branduri</span>
      <h2 class="big_desc">Brandurile care producem</h2>
      <p>Cele mai bune ingrediente, procesul de fabricație de ultimă generație și controlul special al calității
        vizează
        atingerea gustului de neegalat al mărcilor noastre.</p>
    </div>
    <div class="brands_gallery" id="brands" ref="brand">
      <img v-for="brand in brands" :src="brand.src" :alt="brand.id"/>
    </div>
    <BackButton @click="back(brand)"/>
    <NextButton @click="next(brand)"/>
  </section>
</template>

<style scoped>

</style>