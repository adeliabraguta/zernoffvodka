<script setup>

import {zernoffDrinks} from "./data/drinksData.js";
</script>

<template>
  <div class="container">
    <div class="catalog">
      <span class="small_desc ">Catalog</span>
      <h2 class="big_desc">Zernoff</h2>
      <div class="drinks">
        <div class="drink" v-for="drink of zernoffDrinks" :key="drink.id">
          <RouterLink :to="{name:'drink', params:{id: drink.id}}"
                      :key="drink.id">
            <figure><img v-bind:src="drink.img" :alt="drink.title"/></figure>
          </RouterLink>
          <span class="small_desc">{{ drink.type }}</span>
          <RouterLink :to="{name:'drink', params:{id: drink.id}}"
                      :key="drink.id"><p>{{ drink.title }}</p></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}

.drinks {
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 96px;

  .drink {
    padding: 0 64px 32px 64px;
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
    figure{
      height: 400px;
      width: 200px;
      padding-bottom: 12px;
    }
    img {
      object-fit: contain;
      width: 200px;
      height: 400px;
    }
  }
}
</style>