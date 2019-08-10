<template>
  <header>
    <div id="hamburger-menu">
      <Bubble>
        <a id="home" href="#">
          <span>Home</span>
        </a>

        <a id="home" href="#">
          <span>About</span>
        </a>

        <a id="home" href="#">
          <span>Portfolio</span>
        </a>

        <a id="home" href="#">
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
          <a href="/">Home</a>
        </li>

        <li>
          <a href>About</a>
        </li>

        <li>
          <a href>Portfolio</a>
        </li>

        <li>
          <a href>Contact</a>
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
