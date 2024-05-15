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
          <div>
            <h3>Diversitate</h3>
            <p>Peste 15 mărci comerciale precum Zernoff Vodka, Mendeleev, Petrovskaia, Zernoff Beverages oferă o gamă
              largă de opțiuni pentru consumatori, satisfăcând diverse preferințe și gusturi. De la vodcă premium la
              sortimente mai accesibile, compania oferă o varietate de produse pentru a satisface cerințele tuturor
              consumatorilor.</p>
          </div>
          <div>
            <h3>Calitate</h3>
            <p>Absolut toate produsele sunt făcute cu respectarea tuturor standardelor de stat și internaționale,
              inclusiv ISO9001 și sunt supuse celui mai strict control al calității în laboratorul de testare acreditat,
              în toate etapele de producție.</p>
          </div>
          <div>
            <h3>Sustenabilitate</h3>
            <p>Compania pune accent pe sustenabilitate, încurajând un ciclu de producție responsabil și respectuos cu
              mediul înconjurător. Prin utilizarea ingredientelor naturale și tehnologiei moderne, Zernoff Beverages se
              angajează să minimizeze impactul asupra mediului în timp ce oferă produse de calitate.</p>
          </div>
          <div>
            <h3>Experiență</h3>
            <p>Zernoff are experiența de peste 20 de ani în fabricarea băuturilor alcoolice și se mândrește cu un
              tehnolog șef cu peste 40 de ani de experiență în domeniu, asigurând astfel un proces de producție de
              încredere și rezultate de calitate superioară.</p>
          </div>
          <div>
            <h3>Distribuție</h3>
            <p>Distribuție proprie în Republica Moldova, puteți găsi produsele noastre în peste 6300 de puncte de
              vânzare din țară, unele dintre ele fiind magazinele Linella, Nr1, Kauffland, Local, Fourchette, Merci,
              Metro, Alco market, Mega Alina etc.</p>
          </div>
          <div>
            <h3>Produs în Moldova</h3>
            <p>Zernoff Beverages se mândrește că produsele sale sunt realizate acasă, în Moldova, folosind cereale
              cultivate local. Având propria uzină de producere a etanolului pe teritoriul țării, compania controlează
              întregul proces de fabricație, de la materie primă la produsul finit, garantând astfel autenticitate și
              calitate superioară.</p>
          </div>
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
        <div class="img-pair">
          <img src="../../assets/cover.jpg"/>
          <img src="../../assets/cover21.jpg"/>
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
        height: 500px;
        width: auto;
      }
    }
  }

  .advantages {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-columns: 1fr;

    .info_wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .gallery_wrapper {

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
