<template>
  <div >
      <section id="footer">
         <div class="footer-triangle"></div>
         <div class="footer ">
               <ul class="social-links">
                  <li><a href="https://wa.me/541139150410" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/leandro-coca/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/LeanC100" target="_blank"><i class="fa fa-github"></i></a></li>
               </ul>
               <div class="copyright">
                  <span>&copy; Copyright 2021 Leandro Coca</span>
               </div>
               <div id="go-top"> 
                  <a class="smoothscroll" href="#header"><i class="fas fa-chevron-up"></i></a>
               </div>
         </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}


</script>

<style scoped>

#footer .footer-triangle {
    clip-path: polygon(50% 28%, 0 100%, 100% 100%);
    width: 100%;
    background-color: #000000;
    height: 80px;
    margin-bottom: -.5px;
}
#footer .footer {
   background-color: #000000;
   padding: 20px;
   color: #ffffff;
   font-size: 14px;
   text-align: center;
   position: relative;
   margin: auto;
}
#footer .footer a, .footer a:visited { color: #fff; }

#footer .footer .copyright span {
    display: inline-block;
    color:  #d6a2a2;
    font-size: 1em;
}

#footer .footer .social-links {
   margin: 0 0 .6em 0;
   padding: 0;
   font-size: 2.2em;
}
#footer .footer .social-links li {
    display: inline-block;
    margin:  0 20px;
}
#footer #go-top {
	position: absolute;
	top: -90px;
   left: 50%;
   margin-left: -30px;
}
#footer #go-top a {
	text-decoration: none;
	display: block;
	width: 60px;
	height: 60px;
	background-color: #416aff;
   transition: all 0.2s ;
   color: #fff;
   font-size: 21px;
   line-height: 60px;
 	border-radius: 100%;
}
#footer #go-top a:hover { 
   animation-duration: .2s;
   transform: scale(1.1);
}

@media only screen and (max-width: 900px) {
   #footer{
      font-size: 13px;
   }
   #footer .footer-triangle {
      height: 60px;
   }
   #footer #go-top {
	   top: -70px;
   }
}
</style>
