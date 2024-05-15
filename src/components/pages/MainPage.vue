<script setup>
import TopDrinksComponent from "../MainPageComponents/TopDrinksComponent.vue";
import AboutUsComponent from "../MainPageComponents/AboutUsComponent.vue";
import HistoryComponent from "../MainPageComponents/HistoryComponent.vue";
import BrandsComponent from "../MainPageComponents/BrandsComponent.vue";
import MarketsComponent from "../MainPageComponents/MarketsComponent.vue";
import MainComponent from "../MainPageComponents/MainComponent.vue";
import AwardsComponent from "../MainPageComponents/AwardsComponent.vue";
</script>

<template>
  <div>
    <MainComponent/>
    <AboutUsComponent/>
    <div class="container">
      <HistoryComponent/>
      <BrandsComponent/>
      <TopDrinksComponent/>
      <AwardsComponent/>
      <MarketsComponent/>
    </div>
  </div>
</template>

<style scoped>
</style>
