<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import {useRouter} from 'vue-router';
import {toggleTheme, userTheme} from "./userTheme.js";
import ThemeBtn from "./themeBtn.vue";

const isScrolled = ref(false);
const hasToBeChanged = ref(false)
const router = useRouter()
const isShow = ref(false)


const toggle = () => {
  isShow.value = !isShow.value
  isShow.value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial";
}
const handleScroll = () => {
  if (router.currentRoute.value.name === 'MainPage') {
    isScrolled.value = window.scrollY > 800;
    hasToBeChanged.value = false
  } else {
    hasToBeChanged.value = true
  }
};

watch(() => router.currentRoute.value, () => {
  handleScroll();
});
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <header class="header" :class="{ 'transparent': !isScrolled, 'white': isScrolled, 'always_white': hasToBeChanged}">
    <div class="navigation">
      <div class="logo">
        <div v-if="userTheme === 'light-mode'">
          <RouterLink to="/zernoffvodka/"><img src="../assets/logo.png" alt="logo"></RouterLink>
        </div>
        <div v-else>
          <RouterLink to="/zernoffvodka/"><img src="../assets/logo-white.png" alt="logo"></RouterLink>
        </div>
      </div>
      <nav>
        <RouterLink to="/zernoffvodka/companie">DESPRE NOI</RouterLink>
        <RouterLink to="/zernoffvodka/news">NOUTATI</RouterLink>
        <RouterLink to="/zernoffvodka/catalog">CATALOG</RouterLink>
        <RouterLink to="/zernoffvodka/contacts">CONTACTE</RouterLink>
      </nav>
      <ThemeBtn/>
    </div>
  </header>
  <header class="header-mobile" :class="{ 'transparent': !isScrolled, 'white': isScrolled, 'always_white':
  hasToBeChanged}">
    <div class="navigation">
      <div v-if="userTheme === 'light-mode'">
        <RouterLink to="/zernoffvodka/"><img src="../assets/logo.png" alt="logo"></RouterLink>
      </div>
      <div v-else>
        <RouterLink to="/zernoffvodka/"><img src="../assets/logo-white.png" alt="logo"></RouterLink>
      </div>
      <button @click="toggle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" class="feather feather-menu icon">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <Transition name="slide-fade">
        <nav class="nav-mobile" v-if="isShow">
          <div class="btn">
            <ThemeBtn/>
          </div>
          <button @click="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-x icon">
              <line x1="18" y1="6" x2="6"
                    y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <RouterLink to="/zernoffvodka/companie" @click="toggle">DESPRE NOI</RouterLink>
          <RouterLink to="/zernoffvodka/news" @click="toggle">NOUTATI</RouterLink>
          <RouterLink to="/zernoffvodka/catalog" @click="toggle">CATALOG</RouterLink>
          <RouterLink to="/zernoffvodka/contacts" @click="toggle">CONTACTE</RouterLink>
        </nav>
      </Transition>

    </div>
  </header>
</template>

<style scoped>

.header {
  position: fixed;
  width: 100vw;
  background-color: var(--background-color);
  z-index: 3;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .navigation {
    padding: 12px 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 96px;
    .logo{
      min-width: 170px;
    }
    img {
      width: auto;
      height: 80px;
    }

    nav {
      min-width: 400px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 36px;
      row-gap: 12px;
    }
  }
}

.header-mobile {
  display: none
}

@media screen and (max-width: 800px) {
  .header {
    display: none;
  }

  .header-mobile {
    display: initial;
    position: fixed;
    width: 100vw;
    background-color: var(--background-color);
    z-index: 3;

    .navigation {
      padding: 12px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 96px;

      img {
        width: auto;
        height: 60px;
      }

      button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 24px;
        right: 24px;

        .icon {
          width: 40px;
          height: 40px;
          stroke: var(--color);
          cursor: pointer;
        }
      }

      .btn {
        position: absolute;
        top: 24px;
        right: 84px;
      }

      .nav-mobile {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        position: fixed;
        flex-direction: column;
        align-items: end;
        font-size: 32px;
        padding: 48px 24px 96px 48px;
        top: 0;
        right: 0;
        background-color: var(--background-color);
        justify-content: end;
        gap: 36px;

        button {
          .icon {
            width: 40px;
            height: 40px;
            stroke: var(--color);
            cursor: pointer;
          }
        }
      }
    }
  }
}

.transparent {
  background-color: transparent;
}

.white {
  background-color: var(--color-header);
}

.always_white {
  background-color: var(--color-header);
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
