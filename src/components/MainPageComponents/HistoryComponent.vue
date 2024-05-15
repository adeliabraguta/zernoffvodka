<script setup>

</script>

<template>
  <section class="history_section">
    <h2 class="big_desc">ISTORIA</h2>
    <p>În 1995, un grup de specialiști cu o viziune îndrăzneață și pasiune pentru calitate s-au unit pentru a da viață
      unei idei ambițioase: să creeze cea mai mare fabrică de producție a vodcii în Moldova.</p>
    <p>Pornind de la ideea de a revoluționa industria și de a oferi un produs complet nou, bazat pe ingrediente
      naturale, ei au pus bazele companiei Zernoff.</p>
    <p>Astăzi, visul lor s-a transformat în realitate. Zernoff s-a impus ca un lider în industria băuturilor alcoolice,
      stabilind noi standarde de excelență în producție. Cu o capacitate zilnică de peste 100 de tone de vodcă și unele
      dintre cele mai apreciate mărci din Moldova, Zernoff Beverages continuă să ofere consumatorilor din întreaga lume
      o experiență autentică și rafinată.</p>
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
