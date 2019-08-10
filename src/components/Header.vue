<template>
  <header>
    <div id="hamburger-menu">
      <Bubble>
        <a href="#" v-scroll-to="'#home'">
          <span>Home</span>
        </a>

        <a href="#" v-scroll-to="'#about'">
          <span>About</span>
        </a>

        <a href="#" v-scroll-to="'#portfolio'">
          <span>Portfolio</span>
        </a>

        <a href="#" v-scroll-to="'#contact'">
          <span>Contact</span>
        </a>
      </Bubble>
    </div>

    <a href="/">
      <img src="@/assets/img/logo.png" alt class="logo" />
    </a>

    <nav class="main-menu">
      <ul class="nav-links">
        <li>
          <a href="/"  v-scroll-to="'#home'">Home</a>
        </li>

        <li>
          <a href="#" v-scroll-to="'#about'">About</a>
        </li>

        <li>
          <a href="#" v-scroll-to="'#portfolio'">Portfolio</a>
        </li>

        <li>
          <a href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="social-menu">
      <ul class="nav-links">
        <li>
          <a href="https://www.instagram.com/adityaputral/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/aditya-putra-leksono/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li>
          <a href="mailto:adityaputra.official@gmail.com" target="_blank">
            <i class="far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { Bubble } from "vue-burger-menu";

export default {
  name: "Header",
  components: {
    Bubble
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #383c4a;
  padding: 30px 10%;
  position: fixed;
  width:100%;
  z-index: 999;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  display: inline-block;
  padding: 0 20px;
}

.nav-links li a {
  transition: all 0.3s ease 0s;
  font-size: 20px;
  font-weight: 400;
}

.nav-links li a:hover {
  color: #5294e2;
}

#hamburger-menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  #hamburger-menu {
    display: inline-block;
  }

  .bm-burger-bars {
    background-color: white;
  }

  .main-menu {
    display: none;
  }

  .social-menu {
    display: none;
  }
}
</style>
