<template>
  <div>
    <div class="hero">
      <div id="title">
        <span class="name">I'm {{name}}</span>
        <br />
        <span id="typed-element"></span>
      </div>

      <div class="profile-pict">
        <img src="http://via.placeholder.com/230x271" alt />
      </div>
    </div>

    <div class="discover">
      <a href>
        Discover<i class="fas fa-chevron-down"></i>
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
  background: linear-gradient(to bottom, #383c4a, #484d5a);
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

.discover {
  position: absolute;
  right: 5%;
  bottom: 5%;
}

.discover a {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 30px;
}

.discover i{
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
</style>
