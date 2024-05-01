<script setup>

import {onMounted, ref} from "vue";
import {brandsArray} from "../data/drinksData.js";
import BackButton from "./backButton.vue";
import NextButton from "./nextButton.vue";
import {navigation} from "./navFunctions.js";

const brandsRef = ref(null)
let slider, slideWidth, sliderWidth

onMounted(() => {
  slider = brandsRef.value
  slideWidth = slider.children[0].offsetWidth
  sliderWidth = slider.scrollWidth - slider.offsetWidth
})


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
    <div class="slider_container">
      <div>
        <div class="slider_gallery" ref="brandsRef">
          <img v-for="brand in brandsArray" :src="brand.src" :alt="brand.id" class="slide"/>
        </div>
      </div>
    </div>
    <BackButton #id="backBtn" @click="navigation('backBtn',slider,sliderWidth, slideWidth)"/>
    <NextButton #id="nextBtn" @click="navigation('nextBtn',slider,sliderWidth, slideWidth)"/>
  </section>
</template>

<style scoped>

</style>
