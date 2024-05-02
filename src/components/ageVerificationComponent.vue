<script setup>
document.body.style.overflow = "hidden";
const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
  document.body.style.overflow = "initial";
  sessionStorage.setItem('agreed', JSON.stringify(true))
};
const redirectToGoogle = () => {
  window.location.href = 'https://www.google.com';
}
</script>

<template>
  <div class="popup_wrapper">
    <div class="popup">
      <img src="../assets/18+.png" alt="18+"/>
      <h1>Atentie!</h1>
      <p>Acest site conține informații care nu sunt destinate vizionarii de către persoane sub 18 ani.</p>
      <button @click="closePopup">Am 18 ani</button>
      <button class="close" @click="redirectToGoogle">Nu, nu am 18 ani</button>
    </div>
  </div>
</template>

<style scoped>
.popup_wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;

  .popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 300px;
    height: 300px;
    background-color: var(--background-color);
    padding: 48px;

    p {
      text-align: center;
    }

    button {
      background-color: transparent;
      padding: 12px;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: green;
        color: green;
      }
    }

    img {
      width: 70px;
      height: 70px;
    }

    .close {
      padding: 0;
      border: none;
      font-size: 16px;
      color: var(--color-2);

      &:hover {
        color: var(--color-1);
      }
    }
  }
}
</style>
