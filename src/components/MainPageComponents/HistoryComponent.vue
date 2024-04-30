<script setup>

</script>

<template>
  <section class="history_section">
    <h2 class="big_desc">ISTORIA</h2>
    <p>In perioada 95-96 un grup de specialisti si-au unit fortele pentru a forma ulterior una din cele mai mari
      fabrici de producere si imbutiliere a votcii.</p>
    <p>Ideea a venit pentru a aduce consumatorului un produs autohton numai din grau - Vodka. Sectorul de productie
      a
      inceput cu o mica unitate de imbuteliere, care in 2001 ajuns sa produca cel mai popular brand de vodka-
      GOSPODAR.</p>
    <p>Cresterea numarului vanzarilor a determinat necesitatea de a construi o noua fabrica cu o capacitate mai mare
      de productie. Astazi uzina produce in jur de 100 t pe zi.</p>
    <div>
      <figure><img src="../../assets/history-gallery-2.jpg" alt="fabrica zernoff"/></figure>
      <figure><img class="img_2" src="../../assets/history-gallery-1.jpg" alt="fabrica zernoff"/></figure>
      <figure><img src="../../assets/history-gallery-3.jpg" alt="fabrica zernoff"/></figure>
    </div>
  </section>
</template>

<style scoped>
.history_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }

  p {
    width: 60vw;
    padding-top: 24px;
    text-align: center;
  }

  div {
    padding-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    figure {
      overflow: hidden;
      cursor: pointer;

      &:nth-of-type(1n) {
        width: 300px;
        height: 400px;
      }

      &:nth-of-type(2) {
        width: 500px;
        height: 400px;
      }
    }

    figure:hover img {
      transform: scale(1.1);
    }

    img {
      object-fit: cover;
      transition: .3s ease-in-out;
      width: 300px;
      height: 400px;
    }

    .img_2 {
      width: 500px;
      height: 400px;
    }
  }

  @media screen and (max-width: 800px) {
    p {
      width: 100%;
    }

    div {
      figure {

        &:nth-of-type(2) {
          width: 300px;
          height: 400px;
        }
      }

      .img_2 {
        width: 300px;
        height: 400px;
      }
    }
  }
}
</style>