<script setup>

import {images, imagesDark} from "../data/data.js";
import {onMounted, ref} from "vue";
import {userTheme} from "../userTheme.js";

const currentSlide = ref(1)
const getSlideCount = ref(null)
const autoPlayEnable = ref(true)
const timeDuration = ref(5000)

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
}
const autoPlay = () => {
  setInterval(() => {
    nextSlide()
  }, timeDuration.value)
};
if (autoPlayEnable.value) {
  autoPlay();
}
onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.carousel_slide').length;
});

</script>

<template>
  <section class="main_section">
    <div v-if="userTheme === 'light-mode'" v-for="(img, index) in images" :key="img.id">
      <transition name="slide">
        <div class="carousel_slide" v-show="currentSlide === index + 1">
          <img :src="img.src" :alt="img.id"/>
        </div>
      </transition>
    </div>
    <div v-else v-for="(img, index) in imagesDark" :key="img.id">
      <transition name="slide">
        <div class="carousel_slide" v-show="currentSlide === index + 1">
          <img :src="img.src" :alt="img.id"/>
        </div>
      </transition>
    </div>
    <h2>Art of the drink</h2>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.main_section {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;

  .carousel_slide {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100vh;
    width: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  h2 {
    font-size: 96px;
    color: #fff;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    padding: 90px 48px 48px 48px;
    .carousel_slide {
    }
  }
}
</style>
