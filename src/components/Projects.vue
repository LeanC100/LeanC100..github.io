<template>
  <div >
    <section id="projects">
         <h2>Proyectos</h2>
         <div class="row">
            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/Api rest.png"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Api Rest</h5>
                        <p>Creacion de usuarios y super usuarios con la Api Rest Framework de Django y Postman</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="https://github.com/LeanC100/Api-rest-django" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div> 

            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/cambiador-de-moneda.png"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Cambiador de moneda</h5>
                        <p> el valor de cada moneda se extrajo a atraves de una API y la UI fue creada con bootstrap y Vue js</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="http://leanc100-change-money.netlify.app" target="_blank">En Linea</a></button>
                        <button><a href="https://github.com/LeanC100/change-money" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div> 

            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/Rick-and-Morty.png"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Rick and Morty personajes</h5>
                        <p> los personajes fueron sacados a atraves de una API y la UI fue creada con bootstrap y Vue js</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="https://leanc100-rick-and-morty.netlify.app/" target="_blank">En Linea</a></button>
                        <button><a href="https://github.com/LeanC100/Api-rick-and-morty" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div> 
            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/monumentos.jpg"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Monumentos</h5>
                        <p>Base de datos creada con PostgrSQL y Django</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="https://github.com/LeanC100/Momumentos" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div> 
            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/lista-de-productos.png"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Lista de productos</h5>
                        <p>Añade productos a la tabla de productos. La UI fue creada con bootstrap y Vue js</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="https://leanc100-lista-de-productos.netlify.app" target="_blank">En Linea</a></button>
                        <button><a href="https://github.com/LeanC100/Lista-de-productor" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div> 
            <div class=" projects-item">
               <div class="item-wrap">
                  <img alt="" src="../assets/projects-img/bienes-raices.png"  width="350px" height="300px">
                  <div class="overlay">
                     <div class="projects-item-meta">
                        <h5>Bienes Raices</h5>
                        <p>Simple page de bienes raices creada con vue y sin framework de diseño</p>
                     </div>
                     <div class="link-icon"> 
                        <button><a href="https://leanc100.github.io/Bienes-Raices/" target="_blank">En Linea</a></button>
                        <button><a href="https://github.com/LeanC100/Bienes-Raices" target="_blank">Git Hub</a></button>
                     </div>
                  </div>
               </div>
            </div>            
         </div> 
    </section>
  </div>
</template>

<script>
export default {
  name: 'proyects',
   data(){
      return{
         proyect:[]
      }
   }
}
</script>

<style scoped>
#projects {
   background: #fff;
   padding: 50px 0;
}
#projects .row {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   width: 60%;
   margin: 0 auto;
   gap: 10px;
}
#projects h2 {
   color: #2554ff;
}
#projects .item-wrap > div button {
   position: relative;
   border: white solid 1px;
   background-color: transparent;
   display: block;
   border-radius: 3rem;
   width: 120px;
   margin: 10px 0;
   left: 35%;
}
#projects .item-wrap button a {
   color:#ffffff;
   font-size: 1.2em;
   text-decoration: none;
   transition-duration: 0.3s;
   padding: .8em .6em;

}
#projects .item-wrap > div button:hover {
  background-color:#3153ee;
  border-color: #000;
}
#projects .projects-item .item-wrap {
   flex-wrap: wrap;
   width: 100%;
   overflow: hidden;
   position: relative;
}
#projects .projects-item .item-wrap a {
   display: block;
   cursor: pointer;
}
#projects .projects-item .item-wrap .overlay {
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}
#projects .projects-item .item-wrap img {
   vertical-align: bottom;
}
#projects .projects-item .projects-item-meta { padding: 18px }

#projects .projects-item .projects-item-meta h5 {
   font: 14px/21px 'opensans-bold', sans-serif;
   color: #fff;
}
#projects .projects-item .projects-item-meta p {
   font: 12px/18px 'opensans-light', sans-serif;
   color: #c6c7c7;
   margin-bottom: 0;
}

#projects .projects-item:hover .overlay {
	opacity: 1;
   background-color: #000000e7;
}
#projects .projects-item:hover .link-icon {
   opacity: 1;
}
#projects .projects-item:hover img{
   transition-duration: 0.4s;
   transform: scale(1.4);
}
@media screen and (min-width: 700px) and (max-width: 1200px) {
   #projects .row{
         width: 80%;
   }
}
</style>
