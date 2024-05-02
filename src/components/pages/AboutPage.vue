<script setup>

</script>

<template>
  <div class="container">
    <div class="about">
    <h2 class="big_desc">Despre noi</h2>
      <p><b>ZERNOFF VODKA</b> este un complex industrial de producție cu ciclu complet, incluzând prelucrarea cerealelor
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
    </div>
    <div class="advantages">
    <h1>Avantajele noastre</h1>
      <ul>
        <li>Calitate fără compromisuri și tehnologie clasică</li>
        <li>Ciclul de producție închis: de la grâul propriu pâna la produsul finit</li>
        <li>Control strict al calității și ingrediente naturale</li>
        <li>Tehnolog șef cu peste 40 de ani de experiență</li>
        <li>Echipă experimentată de manageri de export</li>
        <li>O gamă largă de Mărci Comerciale</li>
      </ul>
    </div>
    <div class="map">
      <h1>Țările de export</h1>
      <div style="position:relative;overflow:hidden;"><a
          href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;">Yandex Maps</a><a
          href="https://yandex.com/maps/profile?from=api-maps&ll=-15.311977%2C-40.904234&origin=jsapi_2_1_79&pt=133.45258679427%2C-24.476563271416~-5.4640598328445%2C8.6422395175207~7.8701237324313%2C9.4306555703464~-99.273614811355%2C36.996367472162~56.606210309141%2C20.038560770339~54.2828771068%2C23.58548025063~14.435515932757%2C35.888451551158~35.862817107088%2C33.997837431747~33.17955078125%2C34.911230095212~37.96958984375%2C34.599314221455&utm_medium=mapframe&utm_source=maps&z=2"
          style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps: search for places, transport, and
        routes</a>
        <iframe
             class="map-desktop"
            src="https://yandex.com/map-widget/v1/profile?from=api-maps&ll=-15.311977%2C-40.904234&origin=jsapi_2_1_79&pt=133.45258679427%2C-24.476563271416~-5.4640598328445%2C8.6422395175207~7.8701237324313%2C9.4306555703464~-99.273614811355%2C36.996367472162~56.606210309141%2C20.038560770339~54.2828771068%2C23.58548025063~14.435515932757%2C35.888451551158~35.862817107088%2C33.997837431747~33.17955078125%2C34.911230095212~37.96958984375%2C34.599314221455&z=2"
            width="1000" height="500" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        <iframe class="map-mobile"
            src="https://yandex.com/map-widget/v1/profile?from=api-maps&ll=-15.311977%2C-40.904234&origin=jsapi_2_1_79&pt=133.45258679427%2C-24.476563271416~-5.4640598328445%2C8.6422395175207~7.8701237324313%2C9.4306555703464~-99.273614811355%2C36.996367472162~56.606210309141%2C20.038560770339~54.2828771068%2C23.58548025063~14.435515932757%2C35.888451551158~35.862817107088%2C33.997837431747~33.17955078125%2C34.911230095212~37.96958984375%2C34.599314221455&z=2"
            width="300" height="500" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>

      </div>
      <ul class="countries">
        <li>Azerbaidjan</li>
        <li>Kazahstan</li>
        <li>Polonia</li>
        <li>Serbia</li>
        <li>Germania</li>
        <li>Cipru</li>
        <li>Liban</li>
        <li>Oman</li>
        <li>Nigeria</li>
        <li>SUA</li>
        <li>Armenia</li>
        <li>Georgia</li>
        <li>Letonia</li>
        <li>Romania</li>
        <li>Malta</li>
        <li>Marea Britanie</li>
        <li>Siria</li>
        <li>EAU</li>
        <li>China</li>
        <li>Coasta de Fildes</li>
        <li>Australia</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;
  display: grid;
  grid-template-columns: 1.5fr 0.7fr;
  column-gap: 96px;
  row-gap: 24px;

  .about, .advantages {
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      padding-bottom: 12px;
    }
  }

  .map {
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    .map-mobile{
      display: none;
    }

    h1 {
      padding-bottom: 24px;
      padding-top: 48px;
      align-self: initial;
    }

    .countries {
      display: grid;
      grid-template-columns: repeat(3, max-content);
      column-gap: 64px;
      row-gap: 12px;
      padding-top: 48px;

      li {
        list-style-type: circle;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .container {
    column-gap: 48px;
    display: flex;
    flex-direction: column;
    .map{
      .map-desktop{
        display: none;
      }
      .map-mobile{
        display: initial;
      }
      .countries{
        grid-template-columns: repeat(2, max-content);
      }
    }

  }

}
</style>
