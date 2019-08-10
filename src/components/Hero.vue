<template>
  <div>
    <div class="hero">
      <div id="title">
        <h1>
          <span class="name">I'm {{name}}</span>
        </h1>
        <span id="typed-element"></span>
      </div>

      <div class="profile-image">
        <img src="http://via.placeholder.com/230x271" alt="Profile Picture" class="profile-pict" />
      </div>
    </div>

    <div class="discover">
      <a href="#" v-scroll-to="'#about'">
        Discover
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      name: "Aditya Putra Leksono"
    };
  },
  mounted() {
    var options = {
      strings: ["Front End Developer", "Digital Artist"],
      typeSpeed: 40,
      loop: true,
      smartBackspace: true,
      backDelay: 1200
    };
    new Typed("#typed-element", options);
  }
};
</script>

<style>
.hero {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to bottom, #383c4a, #585c68);
  height: 100vh;
  top: 0;
}

.hero .name {
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
}

#typed-element {
  color: #5294e2;
  font-size: 2rem;
}

.typed-cursor {
  color: #7c818c;
  font-size: 2rem;
}

.discover {
  position: absolute;
  right: 5%;
  bottom: 5%;
}

.discover a {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 19px;
}

.discover i {
  /* transform: rotate(90deg); */
  animation: discover 1s ease infinite alternate;
}

@keyframes discover {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(10px);
  }
}

@media screen and (max-width: 425px) {
  .hero {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }

  .hero #title {
    text-align: center;
    order: 2;
  }

  .hero .name {
    color: white;
    font-size: 2rem;
  }

  .hero .profile-image {
    order: 1;
  }

  #typed-element {
    color: #5294e2;
    font-size: 2rem;
  }

  .typed-cursor {
    color: #7c818c;
    font-size: 2rem;
  }

  .profile-pict {
    height: 180px;
  }

  .discover {
    position: absolute;
    right: 48%;
    bottom: 3%;
  }

  .discover a {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 10px;
    color:white;
  }
}
</style>
