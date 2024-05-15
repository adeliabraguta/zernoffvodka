<script setup>

</script>

<template>
  <div class="awards_container">
    <h2 class="big_desc">Premii și aprecieri</h2>
    <div class="awards">
      <div class="award">
        <div class="description">
          <h3>Best Vodka 2022 și 2 medalii de aur pentru Zernoff la Hong Kong International Wine & Spirit
            Competition</h3>
          <p>Zernoff Vodka din Moldova a fost desemnată cu <b>2 medalii de aur</b> și titlul <b>„Best Vodka 2022”</b> la
            Cathay
            Hong
            Kong International Wine & Spirit Competition.</p>
          <p>În această toamnă, în Hong Kong s-a desfășurat cel mai mare concurs de vin și băuturi spirtoase din Asia.
            Alături de medaliștii celor mai buni producători de vin din Australia, Noua Zeelandă, Franța, Chile, Italia
            și Spania, în categoria „vodcă” a fost desemnată vodca produsă în Moldova – cu <b>2 medalii de aur</b>,
            <b>2 medalii
              de argint</b>, <b>1 medalie de bronz</b> și distincția BEST VODKA 2022. Astfel, Zernoff Silver s-a ales
            cu o medalie de
            aur și trofeul Best Vodka 2022, iar vodca Petrovskaia – cu o medalie de aur și punctajul total de 96 puncte
            acumulate din partea juriului. . .
            <RouterLink to="/zernoffvodka/awards">vezi mai mult</RouterLink>
          </p>
        </div>
        <img src="../../assets/award.jpg" alt="awards"/>
      </div>
      <div class="navigation">
        <RouterLink to="/zernoffvodka/awards">Vezi toate premiile ></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.awards_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding-bottom: 48px;
  }

  .awards {
    .award {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 48px;
      flex-wrap: wrap;

      .description {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          padding-bottom: 24px;
        }
      }

      img {
        width: 100%;
      }
    }
  }

  .navigation {
    padding-top: 48px;
    text-align: center;
  }
}

@media screen and (max-width: 800px) {
  .awards_container {
    .awards {

      .award {
        grid-template-columns: 1fr;
      }
    }
  }
}

</style>
