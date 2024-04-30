<script setup>
import TopDrinksComponent from "../MainPageComponents/TopDrinksComponent.vue";
import AboutUsComponent from "../MainPageComponents/AboutUsComponent.vue";
import HistoryComponent from "../MainPageComponents/HistoryComponent.vue";
import BrandsComponent from "../MainPageComponents/BrandsComponent.vue";
import MarketsComponent from "../MainPageComponents/MarketsComponent.vue";

</script>

<template>
  <div>
    <section class="main_section">
      <h2>Art of the drink</h2>
    </section>
    <AboutUsComponent/>
    <div class="container">
      <TopDrinksComponent/>
      <HistoryComponent/>
      <BrandsComponent/>
      <MarketsComponent/>
    </div>
  </div>
</template>

<style scoped>
.main_section {
  height: 100vh;
  background-image: url("../../assets/cover.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;

  h2 {
    font-size: 96px;
    color: #fff;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    padding: 90px 48px 48px 48px;
    height: 70vh;
  }
}



</style>