<script setup>

import {markets, newsArray} from "./data/data.js";
</script>

<template>
  <div class="container">
    <div class="markets_wrapper">
      <h1 class="big_desc">Unde cumparam</h1>
      <div class="markets">
        <div class="market" v-for="market of markets" :key="market.id">
          <img :src="market.logo" :alt="market.title">
          <h3>{{ market.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;
  .markets{
    padding-top: 24px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, min-content));
    gap: 48px;
  }
  h1{
    text-align: center;
  }
  img {
    width: 200px;
    height: 100px;
    object-fit: contain;
  }
}
</style>