
<template>
  <div id="app">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
</template> 
<script>

import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    About,
    Projects,
    Skills,
    Footer,
  }
}
</script>

<style scoped>

</style>
