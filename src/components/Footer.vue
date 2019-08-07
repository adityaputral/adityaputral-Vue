<template>
  <footer>
      <div class="copyright">
          <p style=" z-index: 2;">© Copyright 2019. Created by Aditya Putra Leksono</p>
      </div>
      
      <div class="highlight-text">
          adityaputral
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer .copyright{
    position: absolute;
    box-sizing: border-box;
    text-align: center;
    background-color: #383c4a;
    color:white;
    padding: 68px 10%;
    bottom: 0;
    right:0;
    left:0;
    height:23vh;
    font-size: 19px;
}

footer .highlight-text{
	position: absolute;
	bottom: 0;
    left: -50%;
    width: 200%;
	text-align: center;
	font-family: 'Muli', sans-serif;
	font-size: 6vw;
	line-height: normal;
	color: rgba(200,200,200,.1);
	background: linear-gradient(#4b5162, rgba(75, 77, 100,0));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 900;
	z-index: 0;
}
</style>
