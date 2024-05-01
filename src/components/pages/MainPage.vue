<script setup>
import TopDrinksComponent from "../MainPageComponents/TopDrinksComponent.vue";
import AboutUsComponent from "../MainPageComponents/AboutUsComponent.vue";
import HistoryComponent from "../MainPageComponents/HistoryComponent.vue";
import BrandsComponent from "../MainPageComponents/BrandsComponent.vue";
import MarketsComponent from "../MainPageComponents/MarketsComponent.vue";
import MainComponent from "../MainPageComponents/MainComponent.vue";
</script>

<template>
  <div>
    <MainComponent/>
    <AboutUsComponent/>
    <div class="container">
      <TopDrinksComponent/>
      <BrandsComponent/>
      <HistoryComponent/>
      <MarketsComponent/>
    </div>
  </div>
</template>

<style scoped>
</style>
