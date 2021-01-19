<template>
   <section id="about">
      <div class="row move-about">

         <div class="col-3">
            <img class="img-profile"  src="../assets/photo-profile.jpg" alt="" />
         </div>
         
         <div class="col-9">
            <div class="description">
               <h3>SOBRE MI</h3>
               <p>Hola, que tal? Soy Leandro Coca un desarrollador Full Stack Jr y actualmente estoy aprendiendo por mi cuenta con material que encuentro navegando por internet. </p> <br>
               <p>Antes de ponerme a estudiar para convertirme en desarrollador estuve un tiempo inventigando y aprendiendo sobre a que area de la tecnologia de la informacion me podia dedicar ¡¡¡el mundo IT es enorme!!! </p> <br>
            </div>
            <div class="data row2">
               <div class="col-4">
                  <h3 >Datos</h3>
                  <p >
                     <span>Leandro Coca</span><br>
                     <span>San Justo - Buenos Aires </span><br>
                     <span>11 3915-0410</span><br>
                     <span>Leandrococa1999@gmail.com</span><br><br>
                  </p>
               </div>
               <div class="col-4">
                  <h3>Habilidades</h3>
                  <p >
                     <span>Creativo</span><br>
                     <span>Optimista</span><br>
                     <span>Perseverante</span><br>
                     <span>Organizado</span><br><br>
                  </p>
               </div>
               <div class="col-4">
                  <h3>Intereses</h3>
                  <p >
                     <span>Correr</span><br>
                     <span>Ajedrez</span><br>
                     <span>Lluvia</span><br>
                     <span>Agua</span><br><br>
                  </p>
               </div>
           </div>

         </div> 
      </div>
   </section>
</template>

<script>

export default {
  name: 'About',
}
</script>

<style>
#about {
   background: #000;
   padding-top:5em;
   padding-bottom: 3.75em;
   overflow: hidden;
}
#about h3 {
   border-width: auto;
   font: 30px 'opensans-bold', sans-serif;
   color: #fff;
   margin-bottom: 12px;
   border-bottom: 3px solid #335fff;
}

#about p {
   line-height: 30px;
   font: 20px 'Times New Roman', Times, serif;
   color: #ffffff;
}

#about .img-profile {
   position: relative;
   width: 150px;
   height: 150px;
   border-radius: 100%;
}
#about div .description{ margin-bottom: 1.5em;}

#about .row {
   display: flex;
   width: 80%;
   margin: 0 auto;
}
#about .row2 {
   display: flex;
   width: 100%;
   margin: 0 auto;
}
#about .row .col-3{ width: 25%; }
#about .row .col-9{ width: 75%; }
#about .row .col-4{ width: 100%; text-align: center; }

@media only screen and (max-width: 900px) {
   #about {
      font-size: 10px;
   }
   #about .row .col-3{
      display: none;
   }
   #about .row .col-9{
      text-align: center;
      width: 90%;
      margin: auto;
   }
   #about .row2 {
      display: inline-block;
      width: 100%;
      margin: 0 auto;
}
}
</style>
