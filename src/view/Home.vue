<template>
  <div>
    <Hero id="home"></Hero>
    <About id="about"></About>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";

export default {
  name: "Home",
  components: {
    Hero,
    About
  }
};
</script>

<style>
</style>
