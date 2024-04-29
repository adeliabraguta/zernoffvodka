<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Popup from "./components/Popup.vue";
import {ref} from "vue";

const agreed = ref(sessionStorage.getItem('agreed') || false)

</script>

<template>
  <Header/>
  <Popup v-if="!agreed" @close="agreed = true"/>
  <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path" ref="history"/>
    </transition>
  </router-view>
  <Footer/>
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
</style>
