<script setup>
import {newsArray} from "../data/data.js";
</script>

<template>
  <div class="container">
    <div class="news_container">
      <h1 class="big_desc">NEWS</h1>
      <div class="news">
        <RouterLink class="post" v-for="post of newsArray" :key="post.id" :to="{name:'post', params:{id: post.id}}">
          <img :src="post.img" :alt="post.title">
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
      height: auto;
      width: 100%;
      object-fit: cover;
    }

    h3 {
      padding: 12px;
    }

    &:first-of-type {
      padding: 0;
      position: relative;
      max-width: 550px;


      h3 {
        color: var(--color);
        position: absolute;
        bottom: 40px;
        left: 40px;
        font-size: 32px;
      }

      img {
        height: 100%;
        width: 100%;
        transition: all 0.3s ease;
      }

      &:hover {
        box-shadow: none;

        img {
          opacity: 0.8;
        }
      }
    }
  }

}

</style>
