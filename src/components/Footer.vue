<template>
  <footer>
    <div class="copyright">
      <p>© Copyright 2019. Created by Aditya Putra Leksono</p>
    </div>

    <div id="footer-social-menu">
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
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  background-color: #383c4a;
  padding: 68px 10%;
}
footer .copyright {
  box-sizing: border-box;
  text-align: center;
  color: white;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 19px;
}

.nav-links {
  list-style: none;
  text-align: center;
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

#footer-social-menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  footer .copyright {
    margin-bottom: 3%;
    font-size: 15px;
  }

  #footer-social-menu {
    display: block;
    text-align: center;
  }
}
</style>
