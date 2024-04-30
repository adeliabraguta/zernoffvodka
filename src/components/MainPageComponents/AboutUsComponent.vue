<script setup>

</script>

<template>
  <section class="about_section">
    <div>
      <span class="small_desc">Despre Noi</span>
      <h1 class="big_desc">ZERNOFF VODKA - 100% brand autohton.</h1>
      <p><b>ZERNOFF VODKA</b> este un complex industrial de producție cu ciclu complet, incluzând prelucrarea
        cerealelor
        selectate, producerea alcoolului de înaltă calitate și îmbutelierea produselor finite.
      </p>
      <p> Calitatea înaltă a vodcăi este rezultatul utilizării echipamentelor moderne și tehnologiilor inovatoare. Una
        dintre aceste inovații a fost crearea unei rețete unice din 5 elemente organice - ovăz, orz, orez, grâu și
        secară, care combină efectele tonifierii și întăririi imunității.
      </p>
      <p> Compania acordă o atenție deosebită calității produselor sale. În compoziția vodcăi <b>ZERNOFF</b> sunt
        incluse
        numai
        spirturi de producere proprie. Absolut toate produsele sunt făcute cu respectarea tuturor standardelor de stat
        și internaționale, inclusiv ISO9001 și sunt supuse celui mai strict control al calității, în toate etapele de
        producție. În complexul industrial "<b>ZERNOFF</b>" se află laboratorul de testare acreditat.
      </p>
      <p>
        <RouterLink to="/zernoffvodka/companie">Vezi mai mult ></RouterLink>
      </p>
    </div>
    <img src="../../assets/cocktails.jpg" alt="cocktails"/>
  </section>
</template>

<style scoped>
.about_section {
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    padding: 24px 96px;

    p {
      padding-top: 24px;

      &:first-of-type {
        padding-top: 0;
      }
    }
  }

  a {
    text-align: end;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr;
    div {
      padding: 48px;
    }
  }
}
</style>