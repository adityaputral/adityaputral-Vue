<template>
  <div class="portfolio">
      <h1 class="title">
          <span>Portfolio</span>
      </h1>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style>
.portfolio{
    background: linear-gradient(to bottom, #383c4a, #585c68);
}

@media screen and (max-width: 425px) {
  .portfolio {
    padding: 30% 30px;
  }
}
</style>
