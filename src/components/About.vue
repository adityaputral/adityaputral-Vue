<template>
  <div class="about">
    <h1 class="title">
      <span>About Me</span>
    </h1>

    <div class="about-detail">
      <div class="about-img">
        <img src="http://via.placeholder.com/230x271" alt />
      </div>

      <div class="about-desc">
        <h3 style="font-weight: bold; text-transform:uppercase">I'm Aditya Putra Leksono</h3>
        <br />
        <p style="line-height: 1.6">
          Hi! My name is Aditya Putra. I am a graphic designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
          <br />
          <br />I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do. Take a look at my work and if you'd like to discuss your project, please let me know. Through my years of experience as a professional web/graphic designer I have acquired the skills and knowledge necessary to make your project a success!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
.about {
  background: linear-gradient(to top, #383c4a, #585c68);
}

.title {
  text-align: center;
}

.about-detail {
  display: flex;
  justify-content: space-around;
  align-content: left;
  flex-flow: row wrap;
  padding: 30px 10%;
}

.about-detail .about-img {
  flex: 1 40%;
}

.about-detail .about-desc {
  flex: 1 60%;
  color: white;
}

.about-detail .about-desc p {
  flex: 1 60%;
  color: white;
}

@media screen and (max-width: 425px) {
    .about-detail .about-img{
       text-align: center;
       margin-bottom: 40px;
    }

    .about-detail .about-desc{
       text-align: center;
    }

    .about{
      padding:30% 30px;
    }
}
</style>
