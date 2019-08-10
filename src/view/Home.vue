<template>
  <div>
    <Hero id="home"></Hero>
    <About id="about"></About>
    <Portfolio id="portfolio"></Portfolio>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Portfolio,
    Contact
  }
};
</script>

<style>
</style>
