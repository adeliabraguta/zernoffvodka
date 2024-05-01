<script setup>

import {markets} from "../data/data.js";
import {onMounted, ref} from "vue";
import {navigation} from "./navFunctions.js";
import BackButton from "./backButton.vue";
import NextButton from "./nextButton.vue";

const marketsRef = ref(null)
let slider, slideWidth, sliderWidth

onMounted(() => {
  slider = marketsRef.value
  slideWidth = slider.children[0].offsetWidth
  sliderWidth = slider.scrollWidth - slider.offsetWidth
})

</script>

<template>
  <section class="brands_section">
    <div class="brands_title">
      <span class="small_desc">Markets</span>
      <h2 class="big_desc">Unde cumparam</h2>
    </div>
    <div class="slider_container">
      <div>
        <div class="slider_gallery" ref="marketsRef">
          <img v-for="market in markets" :src="market.logo" :alt="market.title" class="slide"/>
        </div>
      </div>
    </div>
    <BackButton #id="backBtn" @click="navigation('backBtn',slider,sliderWidth, slideWidth)"/>
    <NextButton #id="nextBtn" @click="navigation('nextBtn',slider,sliderWidth, slideWidth)"/>
  </section>
</template>

<style scoped>
</style>
