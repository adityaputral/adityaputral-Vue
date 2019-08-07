<template>
  <header>
    <a href="/">
      <img src="@/assets/img/logo.png" alt class="logo" />
    </a>
    <nav>
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

    <div>
      <ul class="nav-links">
        <li>
          <a href="https://www.instagram.com/adityaputral/" target="_blank"> <i class="fab fa-instagram"></i></a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/aditya-putra-leksono/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </li>

        <li>
          <a href="mailto:adityaputra.official@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
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
</style>
