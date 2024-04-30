<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {newsArray} from "../data/data.js";

const postId = computed(() => parseInt(useRoute().params.id))
const post = computed(() => newsArray.find(post => post.id === postId.value))
</script>

<template>
  <div class="container">
    <div class="drink">
      <figure><img :src="post.img" :alt="post.title"/></figure>
      <div class="drink_desc">
        <h1>{{ post.title }}</h1>
        <p>{{ post.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
}

.drink {
  padding-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h1 {
    letter-spacing: 1px;
  }

  figure {
    justify-self: center;
    width: 600px;
    height: 75%;
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    border: 1px solid #999;
  }

  figure img {
    width: auto;
    height: 500px;
  }

  .drink_desc {
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      line-height: 28px;
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    height: initial;
  }

  .drink {
    grid-template-columns: 1fr;

    figure {
      justify-self: center;
      width: 300px;
      height: 200px;
      padding: 12px 24px;
      display: flex;
      flex-direction: column;
      border: none;
    }

    figure img {
      object-fit: cover;
      width: 300px;
      height: 250px;
    }
  }
}

</style>