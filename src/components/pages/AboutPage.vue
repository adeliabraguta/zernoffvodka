<script setup>

</script>

<template>
  <div class="container">
    <div class="info_wrapper">
      <div class="info_about">
        <h2 class="big_desc">Despre noi</h2>
        <p><b>ZERNOFF VODKA</b> este un complex industrial de producție cu ciclu complet, incluzând prelucrarea
          cerealelor
          selectate, producerea alcoolului de înaltă calitate și îmbutelierea produselor finite.
        </p>
        <p> Calitatea înaltă a vodcăi este rezultatul utilizării echipamentelor moderne și tehnologiilor inovatoare.
          Una
          dintre aceste inovații a fost crearea unei rețete unice din 5 elemente organice - ovăz, orz, orez, grâu și
          secară, care combină efectele tonifierii și întăririi imunității.
        </p>
        <p> Compania acordă o atenție deosebită calității produselor sale. În compoziția vodcăi <b>ZERNOFF</b> sunt
          incluse
          numai
          spirturi de producere proprie. Absolut toate produsele sunt făcute cu respectarea tuturor standardelor de
          stat
          și internaționale, inclusiv ISO9001 și sunt supuse celui mai strict control al calității, în toate etapele
          de
          producție. În complexul industrial "<b>ZERNOFF</b>" se află laboratorul de testare acreditat.
        </p>
      </div>
      <div class="info_advantages">
        <h1 class="big_desc">Avantajele noastre</h1>
        <div class="advantages">
          <p>Calitate fără compromisuri și tehnologie clasică</p>
          <p>Ciclul de producție închis: de la grâul propriu pâna la produsul finit</p>
          <p>Control strict al calității și ingrediente naturale</p>
          <p>Tehnolog șef cu peste 40 de ani de experiență</p>
          <p>Echipă experimentată de manageri de export</p>
          <p>O gamă largă de Mărci Comerciale</p>
        </div>
      </div>
    </div>
    <div class="gallery_wrapper">
      <div class="gallery" ref="ada">
        <img src="../../assets/history-gallery-1.jpg"/>
        <div class="img-pair">
          <img src="../../assets/history-gallery-2.jpg"/>
          <img src="../../assets/history-gallery-3.jpg"/>
        </div>
        <img src="../../assets/history-gallery-4.jpg"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 32px;

  .gallery_wrapper {
    height: 650px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;


    &::-webkit-scrollbar {
      display: none;
    }

    .gallery {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 32px;

      .img-pair {
        display: flex;
        gap: 24px;
      }

      img {
        object-fit: cover;
        height: 600px;
        width: auto;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-columns: 1fr;
.info_wrapper{
  display: flex;
  flex-direction: column;
  gap: 24px;
}
    .gallery_wrapper {
      height: 450px;
      .gallery {
        align-items: center;
        img {
          height: 400px;
          width: 300px;
        }

        .img-pair {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
