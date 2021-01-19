<template>
    <section id="skills">
        <h2>Skills</h2>
        <div class="skill-list">

          <div class="skill">
            <img src="../assets/html5.png" alt="">
            <h4>HTML5</h4>
          </div>
  
          <div class="skill ">
            <img src="../assets/css3.png" alt="">
            <h4>CSS3</h4>
          </div>
  
          <div class="skill ">
            <img src="../assets/bootstrap.png" alt="">
            <h4>BOOTSTRAP</h4>
          </div>

          <div class="skill ">
            <img src="../assets/java-script.png" alt="">
            <h4>JAVA SCRIPT</h4>
          </div>

          <div class="skill ">
            <img src="../assets/vue.png" alt="">
            <h4>VUE JS</h4>
          </div>
  
          <div class="skill ">
            <img src="../assets/python.png" alt="">
            <h4>PYTHON</h4>
          </div>
  
          <div class="skill ">
            <img src="../assets/django.png" alt="">
            <h4>DJANGO</h4>
          </div>
  
          <div class="skill ">
            <img src="../assets/api.png" alt="">
            <h4>API / REST</h4>
          </div>

          <div class="skill ">
            <img src="../assets/sql.png" alt="">
            <h4>Database</h4>
          </div>

          <div class="skill ">
            <img src="../assets/git.png" alt="">
            <h4>GIT</h4>
          </div>

        </div>
    </section>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style scoped>
#skills {
  background: #e2e1e1;
  padding: 50px 0;
  overflow: hidden;
}
#skills h2 {
  color: #1c47e2;
}
#skills .skill-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  max-width: 90%;
  justify-items: center;
  margin: auto;
} 

#skills .skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  background-color: #ffffff;
  border: #ebeeee solid 3px;
}

#skills .skill:hover {
  animation-duration: .3s;
  animation: skill .6s infinite;
  animation-delay: 0s;
}

@keyframes skill {
  0% {
    background-color: #fff;
  }
  25%{
    background-color: #9eb2f8;
  }
  50%{
    background-color: #416aff;
  }
  75%{
    background-color: #9eb2f8;
  }
  100% {
    background-color: #fff;
  }
}
#skills .skill img {
  width: 50px;
  height: 50px;
}
#skills .skill h4 {
  color: rgb(0, 0, 0);
  cursor: default;
  margin-top: 7%;
  font: 15px/1.5rem 'opensans-semibold', sans-serif;
}
@media screen and (min-width: 700px) and (max-width: 1200px) {

#skills .skill-list {
    grid-template-columns: repeat(3, 1fr);
    max-width: 70%;
  }
}
@media only screen and (max-width: 780px) {
  #skills .skill-list {
    grid-template-columns: repeat(2, 1fr);
    max-width: 90%;
    gap: 20px;
    justify-content: center;
  }
  #skills .skill{
    width: 140px;
    height: 140px;
  }
  
}

</style>
