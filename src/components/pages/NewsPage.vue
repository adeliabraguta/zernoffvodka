<script setup>
import {newsArray} from "../data/data.js";
</script>

<template>
  <div class="container">
    <div class="news_container">
      <h1 class="big_desc">NEWS</h1>
      <div class="news">
        <RouterLink class="post" v-for="post of newsArray.reverse()" :key="post.id" :to="{name:'post', params:{id: post.id}}">
          <img :src="post.imgs[0]" :alt="post.title">
          <h3>{{ post.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;

  h1 {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    h1 {
      text-align: start;
    }
  }

  .news {
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 48px;
    row-gap: 24px;
    justify-content: center;
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, min-content));
    }
  }

  .post {
    box-sizing: border-box;
    padding-bottom: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    max-width: 400px;


    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    img {
      height: 250px;
      width: 100%;
      object-fit: cover;
    }

    h3 {
      padding: 12px;
    }
  }

}

</style>
