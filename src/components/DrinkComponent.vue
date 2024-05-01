<script setup>
defineProps({
  drink: Object,
  required: true
})
</script>

<template>
  <div>
    <div>
      <figure><img v-bind:src="drink.img" :alt="drink.title"/></figure>
    </div>
  </div>
  <div class="drink_details-1">
    <div class="drink_desc">
      <div>
        <span class="small_desc">{{ drink.type }}</span>
        <h2>{{ drink.title }}</h2>
      </div>
      <p>{{ drink.desc }}</p>
    </div>
    <div class="drink_specif">
      <div>
        <b>Specificatii</b>
        <p><span class="small_desc">Volum -</span>{{ drink.volume }}</p>
        <p><span class="small_desc">Alcool -</span>{{ drink.specifications[0].alco }}</p>
        <p><span class="small_desc">Cantitate in cutie -</span>{{ drink.specifications[0].cant }}</p>
      </div>
      <div class="slide">
        <img :src="drink.brand" :alt="drink.title"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
figure {
  height: 400px;
  width: 200px;
  overflow: hidden;
  cursor: pointer;
}

figure img {
  transition: .3s ease-in-out;
  object-fit: contain;
  width: 200px;
  height: 400px;
}

figure:hover img {
  transform: scale(1.1);
}

.drink_details-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-auto-rows: min-content;
  gap: 48px;

  .drink_desc {
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      line-height: 28px;
    }

  }

  .drink_specif {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    align-items: center;
    gap: 24px;
  }

  .slide {
    height: 100%;
    border-left: 1px solid #999;
    width: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      padding-left: 24px;
      height: 50px;
      width: 100px;
    }
  }
}


</style>
