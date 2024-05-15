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
      <div class="drink_desc">
        <h1>{{ post.title }}</h1>
        <p>{{ post.desc }}</p>
      </div>
      <div class="images">
        <img v-for="img in post.imgs" :src="img" :alt="post.title"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.drink {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  h1 {
    letter-spacing: 1px;
    text-align: center;
    max-width: 1000px;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;

    img {
      object-fit: cover;
      width: auto;
      height: 500px;
    }
  }

  .drink_desc {
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      line-height: 28px;
      text-align: center;
      max-width: 1000px;
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    height: initial;
  }

  .drink {
    grid-template-columns: 1fr;

    .images {
      img {
        object-fit: cover;
        width: auto;
        height: 250px;
      }
    }
  }
}

</style>
