<script setup>
import DrinkComponent from "../DrinkComponent.vue";
import {zernoffDrinks} from "../data/drinksData.js";
import {ref} from "vue";

const isShow = ref({})
const toggle = (id) => {
  const currentState = isShow.value[id]
  Object.keys(isShow.value).forEach((key) => {
    isShow.value[key] = false
  });
  isShow.value[id] = !currentState
}
</script>

<template>
  <div class="container">
    <div class="catalog">
      <span class="small_desc ">Catalog</span>
      <div>
        <h2 id="zernoff" class="big_desc">Zernoff</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[0]" :key="drink.id" @click="()=> toggle(drink.id)"
               :class="{[`show`]: isShow[drink.id]}">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="petrovskaia" class="big_desc">Petrovskaia</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[1]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="mendeleev" class="big_desc">Mendeleev</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[2]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="spicul de aur" class="big_desc">Spicul de Aur</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[3]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="gospodar" class="big_desc">Gospodar</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[4]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="psenicinaia" class="big_desc">Psenicinaia</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[5]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="russkaia" class="big_desc">Russkaia</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[6]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="secarica" class="big_desc">Secarica</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[7]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
      <div>
        <h2 id="persona" class="big_desc">Persona</h2>
        <div class="drinks_catalog">
          <div class="drink_catalog" v-for="drink of zernoffDrinks[8]" :key="drink.id">
            <DrinkComponent :drink="drink"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  padding-top: 24px;
}

.brands{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  img{
    cursor: pointer;
  }
}

.drinks_catalog {
  padding: 48px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  .drink_catalog {
    cursor: pointer;
    padding: 32px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 32px;
    border: 1px solid #999;
    grid-template-rows: min-content;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

}

@media screen and (max-width: 800px) {
  .catalog {
    padding-top: 48px;
  }

  .drinks_catalog {
    grid-template-columns: 1fr;
    gap: 32px;

    .drink_catalog {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
}

</style>
