<template>
  <div >
    <section id="header">
    
    <nav id="nav-wrap">

        <a class="mobile-btn" href="#nav-wrap" onclick="toggleNav()"><i class="fas fa-bars"></i></a>

        <ul id="nav" class="nav d-none">
            <li :key="item.id" v-for="item in nav"><a :href='item.href'>{{item.name}}</a></li>
        </ul> 

    </nav> 
    <div class="banner " >
        <div class="banner-text">
            <h1>Leandro Coca</h1>
            <span>Developer Full Stack </span>
            <hr />

            <ul class="social">
                <li :key="item.id" v-for="item in social"><a :href="item.href" target="_blank"><i :class="item.icon"></i></a></li>
            </ul> 
           
        </div>
    </div>
    
    </section>
   
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return{
        nav:[
            {href:"#header", name:"Home"},
            {href:"#about", name:"Sobre mi"},
            {href:"#skills", name:"Skill"},
            {href:"#projects", name:"Proyectos"},
        ],
        social:[
            {href:"https://wa.me/541139150410",icon:"fa fa-whatsapp"},
            {href:"https://www.linkedin.com/in/leandro-coca/",icon:"fa fa-linkedin"},
            {href:"https://github.com/LeanC100",icon:"fa fa-github"},
        ]
    }
  }
}
</script>

<style scoped>

#header {
    position: relative;
    height: 100vh;
    min-height: 500px;
    width: 100%;
    background-size: cover !important;
    background: url(../assets/fondo-main.jpg) no-repeat bottom center;
    text-align: center;
    overflow: hidden;
}

#header .banner {
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    margin-top: 25vh;
    width: 85%;
    text-align: center;
}

#header .banner-text h1 {
    font: 6em 'opensans-bold', sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
}
#header .banner-text span {
    font: 1.7em 'librebaskerville-regular', serif;
    color: #A8A8A8;
    margin: 0 auto;
    width: 70%;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
}

#header .banner-text hr {
    width: 60%;
    margin: 18px auto 24px auto;
    border-color: rgba(150, 150, 150, .1);
}

#header .social {
    margin: 24px 0;
    font-size: 30px;
}
#header .social li {
    display: inline-block;
    margin: 0 15px;
}
#header .social li a { 
    color: #fff; 
    }
#header .social li a:hover {
     color: #000000; 
     }
#header #nav-wrap {
    display: block;
    font: 12px 'opensans-bold', sans-serif;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin: auto;
    z-index: 100;
    position: fixed;
    background-color: #2c2c2c;
}
#header #nav-wrap  a{
    margin: 0;
	padding: 0;
	border: none;
	outline: none;
}
#header #nav-wrap #nav li a:hover{
    color: #416aff;
}
#header #nav-wrap > a.mobile-btn {
     display: none; 
}
#header #nav {
    min-height: 48px;
    width: auto;
}
#header #nav li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
}
#header #nav li a {
    display: inline-block;
    padding: 0.5rem 0.81rem;
    line-height: 32px;
    text-decoration: none;
    color: #fff;
	transition: color .2s ease-in-out;
}

#header #nav li a:active {
    background-color: transparent !important; 
}

@media only screen and (max-width: 780px) {
#header{
    font-size: 10px;
}
#header #nav-wrap{
    background-color: transparent;
    position: fixed;
    width: 0px;
    height: 0px;
    float: right;
    top: 10px;
    right: 10px;
}
#header #nav-wrap > a.mobile-btn {
    width: 45px;
    height: 45px;
    background-color:  #1c1c1e;
    text-align: center;
    position: relative;
    border: none;
    float: right;
    color: #fff;
    text-shadow: none;
    display: block;
    position: relative;
    top: 10px;
    right: 30px;     
}
#header #nav-wrap a i {
    margin: 2.5px;
    width: 100%;
    font-size: 40px;
}
#header #nav-wrap #nav {
    clear: both;
    float: right;     
    position: relative;
    top: 20px;
    right: 3em;
    background: #1f2024;
    padding: 25px 0px;
}
#header #nav-wrap #nav.d-none{
    display: none;
}
#header #nav li{
    display: block;
    background: #1f2024;
    margin: 0 20px;
    text-align: left;
}

}
</style>
