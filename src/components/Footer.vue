<script setup>

</script>

<template>
  <footer>
    <nav>
      <div class="nav">
        <RouterLink to="/zernoffvodka/companie">DESPRE NOI</RouterLink>
        <RouterLink to="/zernoffvodka/news">NOUTATI</RouterLink>
        <RouterLink to="/zernoffvodka/catalog">CATALOG</RouterLink>
        <RouterLink to="/zernoffvodka/markets">UNDE CUMPARAM</RouterLink>
        <RouterLink to="/zernoffvodka/contacts">CONTACTE</RouterLink>
      </div>
      <div class="nav_social">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-facebook icon">
            <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-instagram icon">
            <rect x="2" y="2" width="20" height="20" rx="5"
                  ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-youtube icon">
            <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
      </div>
    </nav>
    <div class="logo">
      <a href="#"><img src="../assets/logo.png" alt="logo"></a>
      <span>© 2024 Zernoff</span>
    </div>
  </footer>
</template>

<style scoped>

footer {
  border-top: 2px solid #333;
  padding: 96px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  nav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  .nav_social {
    display: flex;
    gap: 24px;

    .icon {
      width: 32px;
      height: 32px;
      stroke: #333;

      &:hover {
        stroke: #111;
      }
    }
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: auto;
      height: 80px;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 48px;
    .nav{
      justify-content: center;
    }
  .nav_social{
    justify-content: center;
    padding: 24px 0;
  }
  }
}
</style>