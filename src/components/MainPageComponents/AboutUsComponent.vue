<script setup>

</script>

<template>
  <section class="about_section">
    <div>
      <span class="small_desc">Despre Noi</span>
      <h1 class="big_desc">ZERNOFF VODKA - 100% brand autohton.</h1>
      <p><b>ZERNOFF VODKA</b> este un simbol al excelenței și al tradiției locale, având o uzină proprie de producție a
        etanolului în Moldova, care asigură controlul total al calității de la materiile prime la produsul finit.
      </p>
      <p> Toată materia primă este cultivată și prelucrată local, garantând prospețime și autenticitate în fiecare
        sticlă de vodka Zernoff.
        Prin utilizarea echipamentelor moderne și a tehnologiilor inovatoare, <b>ZERNOFF VODKA</b> se distinge prin
        calitatea
        și gustul său inconfundabil.
      </p>
      <p> Rețeta unică a vodcăi, alcătuită din 5 elemente organice - ovăz, orz, orez, grâu și secară - este rezultatul
        cercetării și dezvoltării continue, oferind o experiență gustativă rafinată și autentică.
        Cu fiecare înghițitură, <b>ZERNOFF VODKA</b> aduce o bucată din inima Moldovei în casele și în inimile celor care
        apreciază adevărata valoare a produselor locale de înaltă calitate.
      </p>
      <p>
        <RouterLink to="/zernoffvodka/companie">Vezi mai mult ></RouterLink>
      </p>
    </div>
    <img src="../../assets/cover7.jpg" alt="cocktails"/>
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
