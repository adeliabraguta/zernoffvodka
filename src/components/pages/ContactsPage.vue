<script setup>

</script>

<template>
  <div class="container">
    <div>
    <h1 class="big_desc">CONTACTE</h1>
    <div class="location">
      <div class="info">
        <div>
          <span class="small_desc">Oficiul central</span>
          <h2>RM, MD-2019, mun. Chişinău, str. Grenoble, 161A</h2>
          <span class="small_desc">Programul de lucru</span>
          <p>Luni – Vineri.: de la 9:00 pana la 18:00</p>
          <a href="tel:+ (373) 22 727-707">+ (373) 22 727-707</a>
          <a href="mailto:alexei.gritiuc@zernoff.md">alexei.gritiuc@zernoff.md</a>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;"><a
          href="https://yandex.com/maps/10313/kishinev/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;">Kishinev</a><a
          href="https://yandex.com/maps/10313/kishinev/house/ZkEYfgRkQUUAQFpsfXV5dnhgZw==/?ll=28.834806%2C46.987433&origin=jsapi&utm_medium=mapframe&utm_source=maps&z=16.81"
          style="color:#eee;font-size:12px;position:absolute;top:14px;">Strada Grenoble, 161А — Yandex Maps</a>
        <iframe
            class="iframe"
            src="https://yandex.com/map-widget/v1/?ll=28.834806%2C46.987433&mode=search&ol=geo&origin=jsapi&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTE0ODAxNzAzEitNb2xkb3ZhLCBDaGnImWluxIN1LCBzdHJhZGEgR3Jlbm9ibGUsIDE2MdCQIgoNr63mQRUh8ztC&z=16.81"
            width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
      </div>
    </div>
    <div class="location">
      <div class="info">
        <div>
          <span class="small_desc">Oficiul export</span>
          <h2>RM, MD-2060, mun. Chișinău, bul. Dacia, 23</h2>
          <a href="mailto:aexport@zernoff.md">export@zernoff.md</a>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;"><a
          href="https://yandex.com/maps/10313/kishinev/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;">Kishinev</a><a
          href="https://yandex.com/maps/10313/kishinev/house/ZkEYfgJnQE0EQFpsfXV5d3RrZA==/?ll=28.857984%2C46.986880&origin=jsapi&utm_medium=mapframe&utm_source=maps&z=16.81"
          style="color:#eee;font-size:12px;position:absolute;top:14px;">Dacia Boulevard, 23 — Yandex Maps</a>
        <iframe
            class="iframe"
            src="https://yandex.com/map-widget/v1/?ll=28.857984%2C46.986880&mode=search&ol=geo&origin=jsapi&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjE3ODg0OTA5EilNb2xkb3ZhLCBDaGnImWluxIN1LCBidWxldmFyZHVsIERhY2lhLCAyMyIKDSbd5kEVkPI7Qg%2C%2C&z=16.81"
             frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 128px;
  h1{
    text-align: center;
  }
  .location {
    padding-top: 24px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 48px;

    .iframe{
      width: 100%;
      height: 400px;
    }
  }

  .info {
    padding: 48px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  @media screen and (max-width: 800px) {
    .location{
      grid-template-columns: 1fr;
    }
    .info {
      width: initial;
    }
  }
}
</style>
